# Design Tokens

## Color Palette

Aplikasi menggunakan palette **purple-based** yang didefinisikan di `tailwind.config.js`:

### Primary Colors

| Token | Hex | Preview | Penggunaan |
|-------|-----|---------|------------|
| `primary-50` | `#F5EDFC` | 🟪 Sangat terang | Background hover |
| `primary-100` | `#EDE0FA` | 🟪 Terang | Badge background |
| `primary-200` | `#D4B8F0` | 🟪 | Border, accent |
| `primary-300` | `#BB8FE6` | 🟪 | Scrollbar, decorative |
| `primary-400` | `#9B5CD3` | 🟪 | Icon hover |
| `primary-500` | `#752B8E` | 🟪 **Default** | Button, CTA, brand |
| `primary-600` | `#642478` | 🟪 | Button hover |
| `primary-700` | `#531D63` | 🟪 | Text emphasis |
| `primary-800` | `#752B8E` | 🟪 | Dark accent |
| `primary-900` | `#2A0E4F` | 🟪 Sangat gelap | Heading, dark mode |

### Surface Colors

| Token | Hex | Penggunaan |
|-------|-----|------------|
| `surface-DEFAULT` | `#F8F5FC` | Page background |
| `surface-soft` | `#F3EDFB` | Card background |
| `surface-muted` | `#EDE4F7` | Section background |
| `surface-white` | `#FFFFFF` | Content area |

### Utility Colors

| Token | Hex | Penggunaan |
|-------|-----|------------|
| `success` | `#16A34A` | Status open, validasi berhasil |
| `danger` | `#DC2626` | Error, hapus, status closed |
| `warning` | `#F59E0B` | Peringatan, deadline mendekati |
| `dark` | `#0F0F14` | Body text gelap |
| `muted` | `#6B7280` | Secondary text |

---

## Shadow System

Tailwind custom shadows yang didefinisikan:

| Token | CSS Value | Penggunaan |
|-------|-----------|------------|
| `shadow-card` | `0 2px 12px rgba(117,43,142,0.08)` | Card default |
| `shadow-card-hover` | `0 12px 32px rgba(117,43,142,0.18)` | Card on hover |
| `shadow-glow` | `0 0 24px rgba(117,43,142,0.15)` | Glow effect |
| `shadow-glow-lg` | `0 0 40px rgba(117,43,142,0.25)` | Large glow |
| `shadow-search` | `0 4px 24px rgba(0,0,0,0.06)` | Search bar |
| `shadow-nav` | `0 2px 20px rgba(0,0,0,0.12)` | Navbar |

::: tip Shadow Berbasis Brand
Perhatikan bahwa shadow menggunakan warna **primary** (`rgba(117,43,142,...)`) bukan hitam. Ini memberikan efek ungu halus yang konsisten dengan brand.
:::

---

## Admin Color Tokens

Panel admin menggunakan beberapa warna spesifik yang bukan bagian dari Tailwind config:

| Elemen | Warna | Penggunaan |
|--------|-------|------------|
| Sidebar active | `#763096` | Menu item aktif (bg) |
| Sidebar hover | `purple-50` | Menu item hover (bg) |
| Admin bg | `#f8f9fa` | Background halaman admin |
| Notification | `orange-400` | Bell icon |
| Sign out hover | `red-600` | Hover logout |

---

## Global CSS Variables

Didefinisikan di `src/style.css`:

```css
:root {
  font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  scroll-behavior: smooth;
}

body {
  background: #ffffff;
  color: #1a1a2e;
}

/* Custom scrollbar - brand colored */
::-webkit-scrollbar-track { background: #F3EDFB; }
::-webkit-scrollbar-thumb { background: #BB8FE6; }
::-webkit-scrollbar-thumb:hover { background: #7B2CBF; }

/* Selection highlight */
::selection {
  background: rgba(123, 44, 191, 0.2);
  color: #3D1A6E;
}
```
