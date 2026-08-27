# ─────────────────────────────────────────────
# Stage 1 — Build
# ─────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

# Copier les manifestes en premier pour profiter du cache Docker
COPY package*.json ./
RUN npm ci

# Copier le reste du code source
COPY . .

# Build de production (tsc + vite)
RUN npm run build

# ─────────────────────────────────────────────
# Stage 2 — Serve avec nginx
# ─────────────────────────────────────────────
FROM nginx:alpine AS runner

# Installer curl pour le healthcheck
RUN apk add --no-cache curl

# Supprimer la config nginx par défaut
RUN rm /etc/nginx/conf.d/default.conf

# Copier la config nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier les fichiers buildés depuis le stage précédent
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

# Vérification de l'état de santé du conteneur
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD curl -fsS http://127.0.0.1:80/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
