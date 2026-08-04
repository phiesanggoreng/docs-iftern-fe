# Instalasi & Setup

## Prasyarat

Pastikan tools berikut sudah terinstal di mesin development:

| Tool | Versi Minimum | Cek Versi |
|------|---------------|-----------|
| **Node.js** | v18+ (LTS) | `node --version` |
| **npm** | v9+ | `npm --version` |
| **Git** | Terbaru | `git --version` |
| Docker *(opsional)* | v24+ | `docker --version` |

## Langkah Instalasi

### 1. Clone Repository

```bash
git clone <repository-url> iif-frontend
cd iif-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Konfigurasi Environment

Salin file environment template dan sesuaikan:

```bash
cp .env.example .env
```

Edit `.env` dan set base URL backend:

```ini
VITE_API_BASE_URL=http://localhost:8000
```

::: warning Penting
Nilai `VITE_API_BASE_URL` ini digunakan oleh Vite proxy. Pastikan backend Laravel sudah berjalan di URL tersebut sebelum menjalankan frontend.
:::

### 4. Jalankan Development Server

```bash
npm run dev
```

Aplikasi akan berjalan di: **`http://localhost:5173`**

## Verifikasi Instalasi

Setelah dev server berjalan, pastikan:

- [x] Browser membuka halaman tanpa error
- [x] Console browser tidak menampilkan error kritis
- [x] Hot Module Replacement (HMR) berfungsi — edit file `.vue` dan lihat perubahan langsung

## NPM Scripts

| Perintah | Fungsi |
|----------|--------|
| `npm run dev` | Jalankan Vite dev server (port 5173) |
| `npm run build` | Build production bundle ke folder `dist/` |
| `npm run preview` | Preview hasil build di local server |

## Troubleshooting

### Port 5173 Sudah Digunakan

Vite akan otomatis mencoba port berikutnya. Atau hentikan proses yang menggunakan port tersebut:

```bash
lsof -i :5173
kill -9 <PID>
```

### HMR Tidak Berfungsi di Docker

Pastikan `usePolling: true` sudah diset di `vite.config.js`:

```js
server: {
  watch: {
    usePolling: true, // Fix HMR di Docker
  },
}
```

### API Request Gagal / CORS Error

Frontend menggunakan Vite proxy (`/api` → backend URL). Pastikan:
1. Backend sudah berjalan
2. `VITE_API_BASE_URL` di `.env` sesuai
3. Backend mengizinkan `withCredentials: true` (untuk cookie auth)
