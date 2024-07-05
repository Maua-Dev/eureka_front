import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            devTarget: "es2022"
        })
    ],
    resolve: {
        alias: {
            "@components": "/src/app/ui/components",
            "@adapters": "/src/app/adapters",
            "@context": "/src/app/context",
            "@models": "/src/app/models",
            "@pages": "/src/app/pages",
            "@assets": "/src/app/assets",
            "@styles": "/src/app/ui/styles",
            "@formatters": "/src/app/utils/formatters",
            "@constants": "/src/app/utils/constants",
            "@functions": "/src/app/utils/functions",
            "@modules": "/src/@clean/modules",
            "@entities": "/src/@clean/shared/domain/entities",
            "@enums": "/src/@clean/shared/domain/enums",
            "@helpers": "/src/@clean/shared/domain/helpers",
            "@axios": "/src/@clean/shared/infra/axios",
            "@containers": "/src/@clean/shared/infra/containers",
            "@jsons": "/src/@clean/shared/infra/jsons",
            "@repositories": "/src/@clean/shared/infra/repositories",
            "@@types": "/src/app/utils/@types"
        }
    },
    envPrefix: "APP_"
});
