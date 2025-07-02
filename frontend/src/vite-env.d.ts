/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_FORM_URL: string;
    // add more
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
