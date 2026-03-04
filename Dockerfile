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

# Supprimer la config nginx par défaut
RUN rm /etc/nginx/conf.d/default.conf

# Copier la config nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier les fichiers buildés depuis le stage précédent
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
