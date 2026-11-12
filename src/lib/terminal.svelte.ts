/**
 * Whether the terminal is open. Shared so the button in the nav and the
 * terminal itself, which live in different components, stay in step.
 */
export const terminal = $state({ open: false });
