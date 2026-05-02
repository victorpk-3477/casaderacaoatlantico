/**
 * Normalize a public asset path.
 * @param {string} path - A public asset path.
 * @returns {string} Normalized asset path.
 */
export function withPublicPath(path) {
  if (!path || typeof path !== 'string') return path;
  return path.startsWith('/') ? path : `/${path}`;
}
