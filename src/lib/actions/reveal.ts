import type { Action } from 'svelte/action';

/**
 * Fades and lifts an element in as it scrolls into view — the design export's
 * `data-reveal` behaviour.
 *
 * Falls back to showing the element immediately when the visitor prefers
 * reduced motion or IntersectionObserver is unavailable, and always reveals
 * after 2.5s so content can never be stranded invisible.
 */
export const reveal: Action = (node) => {
	const show = () => {
		node.style.opacity = '1';
		node.style.transform = 'none';
	};

	const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (reduced || !('IntersectionObserver' in window)) {
		show();
		return;
	}

	node.style.opacity = '0';
	node.style.transform = 'translateY(16px)';

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					show();
					observer.unobserve(entry.target);
				}
			}
		},
		{ rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
	);
	observer.observe(node);

	const failsafe = setTimeout(show, 2500);

	return {
		destroy() {
			clearTimeout(failsafe);
			observer.disconnect();
		}
	};
};
