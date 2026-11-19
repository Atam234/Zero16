# @opencode/mobile

Android shell for the OpenCode web app, built with [Capacitor](https://capacitorjs.com).

The shell bundles `packages/app` with `VITE_OPENCODE_SERVER_MODE=none`, so it starts on the connect screen. Pair it with a running opencode server by scanning the server's QR code or entering its URL and password. The phone must be able to reach the server (same LAN, Tailscale, and so on).

## Requirements

- Bun (repository root `bun install`)
- JDK 21 and the Android SDK (`ANDROID_HOME`), or Android Studio

## Build

```bash
bun run sync          # build packages/app into www/ and copy it into android/
bun run open:android  # open the project in Android Studio
bun run apk           # or build a debug APK: android/app/build/outputs/apk/debug/app-debug.apk
```

## Notes

- The WebView serves the bundle from `http://localhost`, which the server allows for CORS.
- The Android app allows cleartext HTTP so it can reach servers on a LAN without TLS.
- Camera and microphone permissions back QR pairing and voice input.
- The app targets Android only; there is no iOS project.
