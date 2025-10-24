export function idFromUrl(url?: string) {
  const idStr = url ? new URL(url).pathname.split('/').at(-2) : '';
  return idStr;
}

export function artworkUrl(id: number) {
  return `${import.meta.env.VITE_PUBLIC_API_IMGS_URL}/${id}.png`;
}
