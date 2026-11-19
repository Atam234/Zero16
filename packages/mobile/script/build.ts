import { $ } from "bun"
import { cp, rm } from "node:fs/promises"
import { fileURLToPath } from "node:url"

const app = fileURLToPath(new URL("../../app", import.meta.url))
const www = fileURLToPath(new URL("../www", import.meta.url))

// The bundle is not served by an opencode server, so the app opens on the connect screen instead of its origin.
await $`bun run build`.cwd(app).env({ ...process.env, VITE_OPENCODE_SERVER_MODE: "none" })
await rm(www, { recursive: true, force: true })
await cp(`${app}/dist`, www, { recursive: true, filter: (path) => !path.endsWith(".map") })
