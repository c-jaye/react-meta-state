import type { PluginOption, ViteDevServer } from "vite"
import { buildTokens } from "../util/generation"

export default function tokenGenerator(tokensFile: string, tokensDir: string) {
    void buildTokens(tokensFile, tokensDir)

    return {
        configureServer(server: ViteDevServer) {
            server.watcher.on("change", (file) => {
                if (!file.endsWith(tokensFile.split("/").slice(1).join("/"))) return
                void buildTokens(tokensFile, tokensDir)
            })
        },
    } as PluginOption
}
