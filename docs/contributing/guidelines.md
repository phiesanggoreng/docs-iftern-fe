# Coding Guidelines

Panduan ini bertujuan untuk menjaga konsistensi, keterbacaan, dan kualitas kode dalam proyek IIF Frontend. Semua kontributor diharapkan mengikuti panduan ini.

## Vue 3 & Composition API

### Gunakan `<script setup>`
Selalu gunakan `<script setup>` untuk mendefinisikan komponen Vue. Ini memberikan sintaks yang lebih ringkas dan dukungan TypeScript yang lebih baik.

```vue
<!-- ✅ Benar -->
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<!-- ❌ Hindari -->
<script>
export default {
  setup() {
    return {}
  }
}
</script>
```

### Urutan Blok Komponen
Susun file `.vue` dengan urutan sebagai berikut:
1. `<script setup>`
2. `<template>`
3. `<style>` (jika diperlukan)

### Penamaan Komponen
Gunakan **PascalCase** untuk penamaan file dan pemanggilan komponen di dalam template.

```vue
<!-- File: JobCard.vue -->
<template>
  <JobCard />
</template>
```

## Styling dengan Tailwind CSS

### Gunakan Utility Classes
Maksimalkan penggunaan utility classes dari Tailwind CSS sebelum membuat class CSS kustom di blok `<style>`.

### Ekstraksi Komponen
Jika ada blok HTML dengan banyak class Tailwind yang digunakan berulang kali, pertimbangkan untuk mengekstraknya menjadi komponen Vue yang terpisah daripada menggunakan `@apply` di CSS.

## State Management (Pinia)

### Pisahkan Store Berdasarkan Domain
Buat store terpisah untuk domain data yang berbeda (contoh: `authStore`, `jobStore`).

### Gunakan Actions untuk Logika Bisnis
Pindahkan logika yang kompleks (seperti memanggil API dan memformat data) ke dalam *actions* di store, bukan di komponen. Komponen sebaiknya hanya bertanggung jawab untuk menampilkan data dan menangani event antarmuka pengguna.
