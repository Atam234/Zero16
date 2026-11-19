FROM node:22-bookworm-slim

RUN apt-get update \
  && apt-get install -y --no-install-recommends ca-certificates git ripgrep \
  && rm -rf /var/lib/apt/lists/*
RUN npm install -g @opencode/cli@2.3.2

# Projects the agent works on are cloned here.
WORKDIR /workspace

# Render routes HTTPS traffic to $PORT. The Android app's WebView origin is http://localhost.
# Set OPENCODE_PASSWORD and the AI provider key (for example ANTHROPIC_API_KEY) as service environment variables.
CMD opencode serve --hostname 0.0.0.0 --port "${PORT:-10000}" --cors http://localhost
