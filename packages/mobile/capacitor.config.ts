import type { CapacitorConfig } from "@capacitor/cli"

export default {
  appId: "ai.opencode.mobile",
  appName: "OpenCode",
  webDir: "www",
  server: {
    // Servers on a LAN usually speak plain HTTP, which an https:// WebView would block as mixed content.
    androidScheme: "http",
  },
  android: {
    allowMixedContent: true,
  },
} satisfies CapacitorConfig
