import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // TEST
    base: "banana".indexOf("github") > -1 ? "/UltimateFieldDay/" : "/",
});
