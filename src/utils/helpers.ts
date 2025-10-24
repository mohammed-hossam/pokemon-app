import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function idFromUrl(url?: string) {
  const idStr = url ? new URL(url).pathname.split('/').at(-2) : '';
  return idStr;
}

export function artworkUrl(id: number) {
  return `${import.meta.env.VITE_PUBLIC_API_IMGS_URL}/${id}.png`;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatId(id?: string | number) {
  if (!id) return '';
  return `#${id.toString().padStart(3, '0')}`;
}
