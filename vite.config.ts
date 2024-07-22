import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import imagemin from "vite-plugin-imagemin";
import analyze from "rollup-plugin-analyzer";
import compression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            devTarget: "es2022"
        }),
        imagemin({
            optipng: {
                optimizationLevel: 7
            },
            pngquant: {
                quality: [0.95, 1.0],
                speed: 1
            },
            verbose: true,
            svgo: {
                plugins: [
                    {
                        name: "removeViewBox"
                    },
                    {
                        name: "removeEmptyAttrs",
                        active: false
                    }
                ]
            }
        }),
        analyze({
            summaryOnly: true
        }),
        compression({
            algorithm: "brotliCompress",
            ext: ".br"
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
    envPrefix: "APP_",
    optimizeDeps: {
        exclude: ["react-spinners"]
    },
    cacheDir: "node_modules/.vite_cache"
});
