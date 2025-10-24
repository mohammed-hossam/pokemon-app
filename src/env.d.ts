/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PUBLIC_API_URL: string;
  readonly VITE_PUBLIC_API_IMGS_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
