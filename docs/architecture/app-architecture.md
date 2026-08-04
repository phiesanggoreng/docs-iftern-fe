# Arsitektur Aplikasi

## Overview

IIF Frontend dibangun dengan arsitektur **layered** yang memisahkan tanggung jawab ke dalam beberapa lapisan:

```mermaid
graph TB
    subgraph Presentation["🖼️ Presentation Layer"]
        Pages[Pages / Views]
        Components[Components]
        Layouts[Layouts]
    end

    subgraph Logic["🧠 Logic Layer"]
        Router[Vue Router]
        Stores[Pinia Stores]
        Guard[Navigation Guard]
    end

    subgraph Data["📡 Data Layer"]
        API[API Modules]
        Axios[Axios Instance]
        Interceptors[Request/Response Interceptors]
    end

    subgraph External["☁️ External"]
        Backend[Laravel API]
        LocalStorage[localStorage]
    end

    Pages --> Components
    Pages --> Stores
    Layouts --> Pages
    Router --> Pages
    Guard --> Router
    Guard --> Stores
    Stores --> API
    API --> Axios
    Axios --> Interceptors
    Interceptors --> Backend
    Stores --> LocalStorage

    style Presentation fill:#F5EDFC,stroke:#752B8E,stroke-width:2px
    style Logic fill:#FFF3E0,stroke:#E65100,stroke-width:2px
    style Data fill:#E3F2FD,stroke:#1976D2,stroke-width:2px
    style External fill:#E8F5E9,stroke:#16A34A,stroke-width:2px
```

## Entry Point

### `main.js`

```js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import './style.css'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)    // State management
app.use(router)   // Routing
app.mount('#app') // Mount ke DOM
```

**Urutan inisialisasi:**
1. Import dan create Vue app instance
2. Create Pinia store instance
3. Register Pinia dan Router sebagai plugin
4. Mount aplikasi ke elemen `#app` di `index.html`

### `App.vue`

Root component hanya berisi `<RouterView />` — seluruh rendering dikendalikan oleh Vue Router:

```vue
<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>
```

## Alur Data (Data Flow)

```mermaid
sequenceDiagram
    participant User
    participant Component
    participant Store as Pinia Store
    participant API as API Module
    participant Backend as Laravel API

    User->>Component: Interaksi (klik, input)
    Component->>Store: Panggil action
    Store->>API: Panggil fungsi API
    API->>Backend: HTTP Request (via Axios)
    Backend-->>API: JSON Response
    API-->>Store: Return data
    Store-->>Component: Reactive state update
    Component-->>User: UI terupdate otomatis
```

### Penjelasan Flow

1. **User** berinteraksi dengan komponen (klik tombol, isi form, dsb.)
2. **Component** memanggil action dari Pinia store
3. **Store** memanggil fungsi di API module
4. **API module** mengirim HTTP request via Axios instance (yang sudah dikonfigurasi dengan interceptors)
5. **Backend** memproses request dan mengembalikan JSON
6. **Store** menyimpan data ke state reactif
7. **Component** otomatis terupdate karena state binding reactif dari Pinia

## Pola Desain yang Digunakan

### 1. Composition API Pattern
Semua komponen menggunakan `<script setup>` — lebih ringkas dan performant.

### 2. Store Pattern (Pinia)
State dipusatkan di store, bukan di komponen. Ini memudahkan sharing data antar komponen.

### 3. Repository Pattern (API Layer)
Setiap domain memiliki file API sendiri (`authApi.js`, `internshipApi.js`, dll.) yang meng-abstract endpoint.

### 4. Proxy Pattern (Vite Proxy)
Request `/api/*` di-proxy ke backend untuk menghindari CORS issues di development.

### 5. Guard Pattern (Navigation Guard)
Route-level access control menggunakan `beforeEach` hook di Vue Router.
