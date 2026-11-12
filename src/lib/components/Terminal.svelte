<script lang="ts">
	import { tick } from 'svelte';
	import { achievements } from '$lib/data/achievements';
	import { experience } from '$lib/data/experience';
	import { projects } from '$lib/data/projects';
	import { site } from '$lib/data/site';
	import { skills } from '$lib/data/skills';
	import { terminal } from '$lib/terminal.svelte';

	/** One line of output. `key` is the highlighted lead-in, as in the help list. */
	type Row = { key?: string; text: string };
	/** One exchange: the command that was typed, if any, and what came back. */
	type Entry = { command?: string; rows: Row[] };

	const sections = ['skills', 'experience', 'projects', 'achievements', 'contact'];
	const shortcuts = ['help', 'projects', 'skills', 'experience', 'contact', 'clear'];

	const help: [string, string][] = [
		['whoami', 'who this is'],
		['projects', 'list the projects'],
		['open <number>', 'read one project'],
		['skills', 'list the skill groups'],
		['experience', 'where I have worked'],
		['achievements', 'publication, rank and degree'],
		['contact', 'how to reach me'],
		['cv', 'open the CV'],
		['goto <section>', 'jump to a section of the page'],
		['clear', 'empty this window']
	];

	const text = (...lines: string[]): Row[] => lines.map((line) => ({ text: line }));

	// Everything the terminal prints comes from the same data files as the page.
	const commands: Record<string, (arg?: string) => Row[]> = {
		help: () => help.map(([key, what]) => ({ key: key.padEnd(17), text: what })),
		whoami: () => text(`${site.name}. ${site.tagline}`),
		projects: () =>
			projects.map((project, i) => ({
				key: String(i + 1).padStart(2) + '  ',
				text: `${project.callNumber.padEnd(14)}${project.title}`
			})),
		open: (arg) => {
			const project = projects[Number(arg) - 1];
			if (!project) {
				return text(
					`Give a project number from 1 to ${projects.length}. Run projects to see the list.`
				);
			}
			const rows = text(project.title, project.kicker, '', project.body);
			if (project.repo) rows.push({ text: '' }, { text: project.repo });
			return rows;
		},
		skills: () => skills.map((group) => ({ key: `${group.label}: `, text: group.items.join(', ') })),
		experience: () =>
			experience.map((role) => ({
				key: role.period.padEnd(22),
				text: `${role.position}, ${role.org}`
			})),
		achievements: () => achievements.map((item) => ({ key: `${item.label}: `, text: item.title })),
		contact: () => text(site.email, site.links.github, site.links.linkedin),
		cv: () => {
			window.open(site.cv, '_blank', 'noopener');
			return text('Opening the CV in a new tab.');
		},
		goto: (arg) => {
			if (!arg || !sections.includes(arg)) return text(`Sections: ${sections.join(', ')}.`);
			const target = document.getElementById(arg);
			// The sections only exist on the home page; from anywhere else, go there.
			if (target) target.scrollIntoView();
			else window.location.href = `/#${arg}`;
			return text(`Moved to ${arg}.`);
		}
	};

	let entries = $state<Entry[]>([{ rows: text('Type a command, or pick one below.') }]);
	let value = $state('');
	let input = $state<HTMLInputElement>();
	let output = $state<HTMLDivElement>();

	// Up and down arrows walk back through what was typed.
	const history: string[] = [];
	let cursor = 0;

	async function run(raw: string) {
		const line = raw.trim();
		if (!line) return;
		history.push(line);
		cursor = history.length;

		const [name, arg] = line.split(/\s+/);
		if (name === 'clear') {
			entries = [];
			return;
		}
		const command = Object.hasOwn(commands, name) ? commands[name] : undefined;
		entries.push({
			command: line,
			rows: command ? command(arg) : text(`No command called ${name}. Type help.`)
		});

		await tick();
		output?.scrollTo({ top: output.scrollHeight });
	}

	function submit(event: SubmitEvent) {
		event.preventDefault();
		run(value);
		value = '';
	}

	function recall(event: KeyboardEvent) {
		if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;
		event.preventDefault();
		cursor = Math.max(0, Math.min(history.length, cursor + (event.key === 'ArrowUp' ? -1 : 1)));
		value = history[cursor] ?? '';
	}

	function shortcutKeys(event: KeyboardEvent) {
		if (event.key === 'Escape' && terminal.open) {
			terminal.open = false;
		} else if (event.key === '`' && !(event.target as Element).closest('input, textarea')) {
			event.preventDefault();
			terminal.open = !terminal.open;
		}
	}

	$effect(() => {
		if (terminal.open) input?.focus();
	});
</script>

<svelte:window onkeydown={shortcutKeys} />

{#if terminal.open}
	<div class="term" id="terminal" role="dialog" aria-label="Terminal">
		<div class="bar on-paper">
			<span>Terminal</span>
			<button type="button" aria-label="Close terminal" onclick={() => (terminal.open = false)}>
				×
			</button>
		</div>

		<div class="out" bind:this={output} aria-live="polite">
			{#each entries as entry, i (i)}
				<div class="entry">
					{#if entry.command}
						<div class="typed"><span class="prompt">$</span> {entry.command}</div>
					{/if}
					{#each entry.rows as row, j (j)}
						<div>{#if row.key}<span class="key">{row.key}</span>{/if}{row.text}</div>
					{/each}
				</div>
			{/each}
		</div>

		<div class="chips">
			{#each shortcuts as name (name)}
				<button
					type="button"
					onclick={() => {
						run(name);
						input?.focus();
					}}
				>
					{name}
				</button>
			{/each}
		</div>

		<form onsubmit={submit} autocomplete="off">
			<label for="term-in">$</label>
			<input
				id="term-in"
				bind:this={input}
				bind:value
				onkeydown={recall}
				spellcheck="false"
				autocapitalize="off"
				aria-label="Command"
				placeholder="type help"
			/>
		</form>
	</div>
{/if}

<style>
	/* The terminal uses the page's own colours: a darker cut of the desk green,
	   the manila of the section tabs for its title bar, and the card stock
	   colours for its text. */
	.term {
		position: fixed;
		z-index: 20;
		right: 16px;
		bottom: 16px;
		display: grid;
		grid-template-rows: auto minmax(0, 1fr) auto auto;
		width: min(540px, calc(100vw - 32px));
		max-height: min(66vh, 480px);
		overflow: hidden;
		border: 2px solid var(--tab);
		border-radius: 16px;
		background: var(--term-bg);
		color: var(--desk-fg);
		font-size: 0.95rem;
		box-shadow:
			0 26px 50px -12px rgba(0, 0, 0, 0.7),
			0 2px 4px var(--shadow);
	}

	.bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 7px 9px 6px 18px;
		background: var(--tab);
		color: var(--ink);
		font-family: var(--slab);
		font-size: 1.08rem;
		font-weight: 700;
	}

	.bar button {
		display: grid;
		place-items: center;
		width: 26px;
		height: 26px;
		padding: 0;
		border: 0;
		border-radius: 50%;
		background: var(--ink);
		color: var(--tab);
		font-family: var(--type);
		font-size: 1.1rem;
		font-weight: 700;
		line-height: 1;
	}

	.bar button:hover {
		background: var(--rule);
		color: var(--slip);
	}

	.out {
		min-height: 170px;
		padding: 14px 18px 6px;
		overflow-y: auto;
		overflow-wrap: anywhere;
		line-height: 1.45;
		scrollbar-color: var(--desk-hi) transparent;
		scrollbar-width: thin;
	}

	.entry {
		margin-bottom: 1.45em;
	}

	/* Rows keep their column padding, and an empty row stays a blank line. */
	.entry div {
		min-height: 1.45em;
		white-space: pre-wrap;
	}

	.typed {
		color: var(--manila);
		font-weight: 700;
	}

	.prompt {
		color: var(--salmon);
	}

	.key {
		color: var(--mint);
		font-weight: 700;
	}

	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		padding: 4px 18px 12px;
	}

	.chips button {
		padding: 1px 12px;
		border: 1px solid var(--desk-dim);
		border-radius: 999px;
		background: none;
		color: var(--desk-fg);
		font-size: 0.85rem;
	}

	.chips button:hover {
		border-color: var(--mint);
		background: var(--mint);
		color: var(--ink);
	}

	form {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 10px 18px;
		background: var(--term-in);
	}

	label {
		color: var(--salmon);
		font-weight: 700;
	}

	input {
		flex: 1;
		min-width: 0;
		border: 0;
		background: none;
		color: var(--desk-fg);
		caret-color: var(--manila);
		font: inherit;
		outline: none;
	}

	input::placeholder {
		color: var(--desk-dim);
		opacity: 0.7;
	}
</style>
