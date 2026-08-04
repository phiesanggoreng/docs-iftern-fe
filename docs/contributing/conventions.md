# Konvensi & Best Practices

Mengikuti konvensi proyek memastikan kolaborasi tim berjalan mulus dan mengurangi gesekan saat melakukan integrasi kode.

## Pesan Commit (Conventional Commits)

Kami menggunakan format **Conventional Commits** untuk riwayat git yang bersih dan pembuatan changelog otomatis.

Format: `<tipe>(<opsional scope>): <pesan pendek>`

### Tipe yang Diizinkan:
- `feat:` Fitur baru
- `fix:` Perbaikan bug
- `docs:` Perubahan dokumentasi saja
- `style:` Perubahan yang tidak mempengaruhi makna kode (spasi, formatting, missing semi-colons, dll)
- `refactor:` Perubahan kode yang tidak memperbaiki bug atau menambah fitur
- `perf:` Perubahan kode yang meningkatkan kinerja
- `test:` Menambah atau memperbaiki tes
- `chore:` Perubahan pada proses build atau alat bantu (misalnya perubahan di `package.json`)

**Contoh:**
```
feat(auth): tambahkan fitur login dengan Google
fix(jobStore): atasi error saat data lowongan kosong
docs: perbarui panduan instalasi di README
```

## Pengelolaan Branch

- **`main`**: Branch stabil yang mencerminkan status *production-ready*. (Dilarang langsung commit ke sini)
- **`development`**: Branch integrasi tempat fitur-fitur baru dikumpulkan sebelum rilis.
- **`feature/<nama-fitur>`**: Branch untuk mengembangkan fitur baru (contoh: `feature/login-page`).
- **`bugfix/<nama-bug>`**: Branch untuk memperbaiki bug (contoh: `bugfix/nav-mobile-glitch`).

## Proses Pull Request (PR)

1. Buat branch baru dari `development`.
2. Commit perubahan sesuai *Conventional Commits*.
3. Push branch ke origin dan buat Pull Request ke branch `development`.
4. Pastikan tidak ada konflik dan PR memiliki deskripsi yang jelas.
5. Tunggu minimal 1 *approval* dari tim sebelum *merge*.

## Struktur Penulisan Kode

### Penamaan Variabel & Fungsi
Gunakan **camelCase** untuk variabel dan fungsi di JavaScript.
```javascript
const userProfile = {}
function calculateDuration() {}
```

### Penamaan Konstanta
Gunakan **UPPER_SNAKE_CASE** untuk konstanta global.
```javascript
const MAX_PAGINATION_LIMIT = 20;
```
