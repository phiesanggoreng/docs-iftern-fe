# Struktur Folder

## Gambaran Umum

```
iif-frontend/
├── public/                    # Aset statis (favicon, logo, dll.)
├── src/
│   ├── api/                   # HTTP client & endpoint modules
│   │   ├── axios.js           # Konfigurasi instance Axios
│   │   ├── authApi.js         # Endpoint autentikasi
│   │   ├── internshipApi.js   # Endpoint lowongan magang
│   │   ├── geolocationApi.js  # Endpoint provinsi & kota
│   │   └── testimonialApi.js  # Endpoint testimoni
│   │
│   ├── assets/                # Aset yang di-bundle (gambar, svg, dll.)
│   │
│   ├── components/            # Komponen Vue reusable
│   │   ├── Navbar.vue         # Navigasi header
│   │   ├── HeroSection.vue    # Hero banner landing page
│   │   ├── SearchBar.vue      # Form pencarian dengan filter
│   │   ├── JobsList.vue       # Daftar kartu lowongan
│   │   ├── JobCard.vue        # Kartu individual lowongan
│   │   ├── HowItWorks.vue     # Seksi cara kerja
│   │   ├── Testimonials.vue   # Seksi testimoni
│   │   └── Footer.vue         # Footer website
│   │
│   ├── layouts/               # Layout wrapper
│   │   └── AdminLayout.vue    # Layout sidebar + header admin
│   │
│   ├── pages/                 # Halaman / views
│   │   ├── LandingPage.vue    # Halaman utama publik
│   │   ├── ResultsPage.vue    # Halaman hasil pencarian
│   │   ├── JobDetailPage.vue  # Detail lowongan magang
│   │   ├── LoginPage.vue      # Halaman login
│   │   ├── RegisterPage.vue   # Halaman registrasi
│   │   └── admin/             # Halaman panel admin
│   │       ├── DashboardPage.vue
│   │       ├── ManajemenPostingan.vue
│   │       ├── ManajemenMitra.vue
│   │       ├── ManajemenUser.vue
│   │       ├── TestimoniPage.vue
│   │       ├── AprovalPage.vue
│   │       └── AktivitasSistem.vue
│   │
│   ├── router/                # Konfigurasi routing
│   │   └── index.js           # Definisi routes + navigation guard
│   │
│   ├── stores/                # Pinia state stores
│   │   ├── authStore.js       # State autentikasi
│   │   ├── jobStore.js        # State lowongan magang
│   │   ├── searchStore.js     # State pencarian & filter
│   │   └── locationStore.js   # State geolocation (provinsi/kota)
│   │
│   ├── App.vue                # Root component
│   ├── main.js                # Entry point aplikasi
│   └── style.css              # Global CSS + Tailwind imports
│
├── deployment/                # Konfigurasi deployment
│   └── cicd/                  # Docker & CI/CD files
│
├── .env                       # Environment variables (lokal)
├── .env.example               # Template environment
├── .gitlab-ci.yml             # GitLab CI/CD pipeline
├── Dockerfile                 # Docker image definition
├── docker-compose.yml         # Docker Compose orchestration
├── index.html                 # HTML entry point
├── package.json               # Dependencies & scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── vite.config.js             # Vite build configuration
└── sonar-project.properties   # SonarQube configuration
```

## Penjelasan Per Layer

### `src/api/` — API Layer
Semua komunikasi HTTP ke backend dikelola di sini. Setiap file bertanggung jawab atas satu domain endpoint:

| File | Domain | Endpoint Utama |
|------|--------|---------------|
| `axios.js` | Base config | Interceptor token, error handling |
| `authApi.js` | Autentikasi | `/login`, `/register`, `/logout`, `/user` |
| `internshipApi.js` | Lowongan | `/internshippost/public`, `/internshippost/:id` |
| `geolocationApi.js` | Lokasi | `/provinces`, `/cities` |
| `testimonialApi.js` | Testimoni | `/testimonials` |

### `src/stores/` — State Management
Menggunakan Pinia dengan Composition API style (`setup function`):

| Store | Tanggung Jawab |
|-------|---------------|
| `authStore` | Login, logout, token management, user profile |
| `jobStore` | Fetch lowongan, filter, pencarian, data mapping |
| `searchStore` | State form pencarian, riwayat pencarian |
| `locationStore` | Cascading dropdown provinsi → kota |

### `src/components/` — Reusable Components
Komponen-komponen UI yang digunakan di berbagai halaman.

### `src/pages/` — Page Views
Setiap file di sini merepresentasikan satu halaman/route dalam aplikasi.

### `src/layouts/` — Layout Wrappers
Layout yang membungkus halaman. `AdminLayout.vue` menyediakan sidebar + header untuk semua halaman admin.
