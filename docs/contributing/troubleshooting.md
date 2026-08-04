# Troubleshooting

Bagian ini memuat beberapa masalah yang sering ditemui selama pengembangan dan cara mengatasinya.

## Node Modules / Instalasi Gagal

**Masalah:** Saat menjalankan `npm install`, proses terhenti atau menampilkan error `ERESOLVE`.

**Solusi:**
1. Hapus folder `node_modules` dan file `package-lock.json`.
2. Bersihkan cache npm: `npm cache clean --force`.
3. Coba install ulang: `npm install`.

## Vite HMR Tidak Berfungsi di Docker (Windows)

**Masalah:** Saat mengubah file, browser tidak melakukan *Hot Reload* otomatis, padahal menggunakan Docker di OS Windows.

**Solusi:**
Sistem *file watching* (inotify) sering bermasalah saat direktori Windows di-mount ke container Linux. Pastikan opsi `usePolling` aktif di `vite.config.js`:

```javascript
server: {
  watch: {
    usePolling: true,
  }
}
```

## API Request Gagal (CORS Error atau 404)

**Masalah:** Request dari frontend ke backend gagal.

**Solusi:**
1. Pastikan backend Laravel sudah menyala di URL yang benar.
2. Cek file `.env` dan pastikan `VITE_API_BASE_URL` sesuai dengan URL backend.
3. Saat *development*, Vite melakukan *proxy* ke backend. Pastikan Anda melakukan request ke `/api/...` (bukan langsung menggunakan *hardcoded domain*).
4. Di *production*, pastikan Nginx sudah dikonfigurasi untuk *reverse proxy* endpoint `/api` ke container backend.

## Masalah Build: Out of Memory

**Masalah:** Proses `npm run build` gagal dengan pesan `JavaScript heap out of memory`.

**Solusi:**
Tingkatkan batas memori Node.js sementara saat menjalankan perintah build:
```bash
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

## Blank Screen di Production

**Masalah:** Halaman tampil putih kosong setelah di-*deploy*.

**Solusi:**
1. Buka *DevTools* (F12) dan cek tab Console.
2. Jika ada error terkait *missing assets* (404 untuk file .js/.css), periksa pengaturan path atau routing di server (seperti konfigurasi `try_files` di Nginx).
3. Jika Anda menggunakan subdirectory di GitHub Pages atau domain lain, pastikan konfigurasi `base` di Vite/VitePress dan Vue Router sudah sesuai.
