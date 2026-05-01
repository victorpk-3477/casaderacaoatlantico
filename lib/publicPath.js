/**
 * Prefix a public asset path with the Next.js basePath if configured.
 * @param {string} path - A public asset path.
 * @returns {string} Prefixed asset path.
 */
export function withPublicPath(path) {
  if (!path || typeof path !== 'string') return path;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/casaderacaoatlantico';
  const normalizedBasePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
  return path.startsWith('/') ? `${normalizedBasePath}${path}` : `${normalizedBasePath}/${path}`;
}
