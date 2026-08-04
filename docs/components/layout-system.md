# Layout System

## Overview

Aplikasi menggunakan 2 pendekatan layout:

| Layout | Digunakan Di | Metode |
|--------|-------------|--------|
| **Publik** | Landing, Results, Login, Register | Komposisi langsung di page (Navbar + Footer) |
| **Admin** | Semua halaman `/admin/*` | `AdminLayout.vue` sebagai wrapper |

---

## AdminLayout

**File:** `src/layouts/AdminLayout.vue` (4.9 KB)

Layout khusus untuk panel admin dengan **sidebar** dan **header**.

### Struktur Visual

```
┌────────────────────────────────────────────────────────────┐
│  AdminLayout                                                │
│ ┌──────────┬──────────────────────────────────────────────┐ │
│ │          │  Header (Search + Notif + Profile)           │ │
│ │          ├──────────────────────────────────────────────┤ │
│ │  Sidebar │                                              │ │
│ │          │                                              │ │
│ │  - Logo  │            <slot />                          │ │
│ │  - Menu  │          (Page Content)                      │ │
│ │  - Items │                                              │ │
│ │          │                                              │ │
│ │ Sign Out │                                              │ │
│ └──────────┴──────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────┘
```

### Sidebar

```vue
<aside class="w-64 bg-white border-r flex flex-col hidden md:flex sticky top-0 h-screen">
  <!-- Logo -->
  <router-link to="/">
    <img src="/IIF-Logo.png" alt="IIF Logo" />
  </router-link>

  <!-- Add Post Button -->
  <button>+ Tambah Postingan</button>

  <!-- Navigation Menu -->
  <nav>
    <router-link v-for="item in menuItems" :to="item.path">
      <component :is="item.icon" />
      {{ item.name }}
    </router-link>
  </nav>

  <!-- Sign Out -->
  <button>Sign Out</button>
</aside>
```

### Menu Items

| Menu | Path | Icon |
|------|------|------|
| Dashboard | `/admin/dashboard` | `LayoutDashboard` |
| Manajemen Postingan | `/admin/postingan` | `Files` |
| Manajemen Mitra | `/admin/mitra` | `Handshake` |
| Manajemen User | `/admin/user` | `Users` |
| Testimoni | `/admin/testimoni` | `MessageSquare` |
| Aproval | `/admin/aproval` | `CheckSquare` |
| Aktivitas Sistem | `/admin/aktivitas` | `History` |

### Active State Detection

```js
const isActive = (path) => {
  return route.path === path || route.path.startsWith(path + '/')
}
```

Menu item aktif mendapat styling:
- **Aktif:** `bg-[#763096] text-white` (ungu solid)
- **Tidak aktif:** `text-gray-500 hover:text-[#763096] hover:bg-purple-50`

### Header

```vue
<header class="h-20 bg-white flex items-center justify-between px-8 sticky top-0 z-10">
  <!-- Search bar -->
  <input type="text" placeholder="Search here..." />

  <!-- Notification bell -->
  <button><Bell /></button>

  <!-- User profile -->
  <div>
    <img :src="avatar" />
    <p>Nibras</p>
    <p>Admin</p>
  </div>
</header>
```

### Icons

Semua icon berasal dari **Lucide Vue Next**:

```js
import {
  LayoutDashboard, Files, Handshake, Users,
  MessageSquare, CheckSquare, History, LogOut,
  Plus, Search, Bell, ChevronDown
} from 'lucide-vue-next'
```

### Penggunaan di Halaman Admin

```vue
<!-- Contoh: DashboardPage.vue -->
<template>
  <AdminLayout>
    <h1>Dashboard</h1>
    <!-- Konten halaman -->
  </AdminLayout>
</template>

<script setup>
import AdminLayout from '@/layouts/AdminLayout.vue'
</script>
```

::: tip Responsif
Sidebar disembunyikan di layar kecil (`hidden md:flex`). Untuk mobile, perlu ditambahkan hamburger menu toggle.
:::
