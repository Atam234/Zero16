# opencode server on Render

A Docker web service that runs `opencode serve` for the Android app (`packages/mobile`).

- Docker context: `deploy/render`, Dockerfile: `deploy/render/Dockerfile`
- Environment variables: `OPENCODE_PASSWORD` (the app asks for it) and an AI provider key such as `ANTHROPIC_API_KEY`
- In the app, connect to the service's `https://<name>.onrender.com` URL with that password.

The free plan sleeps after 15 idle minutes and loses files and session history on every restart. Use a paid plan with a persistent disk to keep them.
