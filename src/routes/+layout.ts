// The whole site is static: prerender every route at build time so Netlify
// serves plain HTML (and so Netlify Forms can find the contact form).
export const prerender = true;
export const trailingSlash = 'always';
