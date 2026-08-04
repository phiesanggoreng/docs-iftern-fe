# Docker Setup

## Dockerfile

Aplikasi menggunakan **Node.js Alpine** image dengan Vite dev server:

```dockerfile
FROM node:lts-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
```

::: info
Dockerfile ini digunakan untuk **development**. Untuk production, sebaiknya buat multi-stage build yang menghasilkan static files dan disajikan via Nginx.
:::

## Docker Compose

```yaml
services:
  frontend:
    build:
      context: .
    container_name: iftern-frontend
    ports:
      - "5173:5173"
    environment:
      - VITE_API_BASE_URL=http://host.docker.internal:8000
    extra_hosts:
      - "host.docker.internal:host-gateway"
    volumes:
      - .:/app
      - /app/node_modules    # Hindari overwrite node_modules dari host
    networks:
      - iftern-network

networks:
  iftern-network:
    driver: bridge
```

### Penjelasan Konfigurasi

| Konfigurasi | Penjelasan |
|-------------|------------|
| `container_name` | Nama container: `iftern-frontend` |
| `ports: 5173:5173` | Map port Vite ke host |
| `host.docker.internal` | Akses ke service di host (backend Laravel) |
| `volumes: .:/app` | Volume mount untuk live reload |
| `/app/node_modules` | Anonymous volume agar `node_modules` dari container tidak tertimpa oleh host |

## Menjalankan dengan Docker

### Build & Start

```bash
docker-compose up --build
```

### Jalankan di Background

```bash
docker-compose up -d
```

### Lihat Logs

```bash
docker logs -f iftern-frontend
```

### Stop & Remove

```bash
docker-compose down
```

## Arsitektur Docker

```mermaid
graph LR
    subgraph Host["💻 Host Machine"]
        Browser[Browser :5173]
        Backend[Laravel :8000]
    end

    subgraph Docker["🐳 Docker"]
        Frontend[iftern-frontend<br/>Node.js + Vite<br/>:5173]
    end

    Browser -->|http://localhost:5173| Frontend
    Frontend -->|host.docker.internal:8000| Backend

    style Docker fill:#E3F2FD,stroke:#1976D2
    style Host fill:#FFF3E0,stroke:#E65100
```

::: warning Catatan untuk Windows/Mac
`host.docker.internal` sudah tersedia secara default. Untuk **Linux**, pastikan `extra_hosts` sudah dikonfigurasi:

```yaml
extra_hosts:
  - "host.docker.internal:host-gateway"
```
:::
