import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'IIF Frontend',
  description: 'Dokumentasi Teknis IIF (Iftern) Frontend — Vue 3 + Vite + Pinia + Tailwind CSS',
  lang: 'id-ID',
  base: '/docs-iftern-fe/',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/docs-iftern-fe/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#752B8E' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'IIF Frontend — Dokumentasi Teknis' }],
    ['meta', { property: 'og:description', content: 'Panduan teknis lengkap untuk pengembangan IIF Frontend: arsitektur, komponen, API layer, dan deployment.' }],
    ['meta', { property: 'og:url', content: 'https://phiesanggoreng.github.io/docs-iftern-fe/' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'IIF Frontend',

    nav: [
      {
        text: 'Dokumentasi',
        activeMatch: '^/(introduction|getting-started|architecture|components|styling)/',
        link: '/introduction/overview',
      },
      {
        text: 'Deployment',
        activeMatch: '^/deployment/',
        link: '/deployment/cicd',
      },
      {
        text: 'Panduan Kontribusi',
        activeMatch: '^/contributing/',
        link: '/contributing/guidelines',
      },
    ],

    sidebar: {
      '/': [
        {
          text: 'Pendahuluan',
          items: [
            { text: 'Ringkasan Proyek', link: '/introduction/overview' },
            { text: 'Tech Stack', link: '/introduction/tech-stack' },
            { text: 'Struktur Proyek', link: '/introduction/folder-structure' },
          ],
        },
        {
          text: 'Memulai',
          items: [
            { text: 'Prasyarat & Instalasi', link: '/getting-started/installation' },
            { text: 'Konfigurasi Environment', link: '/getting-started/environment' },
            { text: 'Docker Development', link: '/getting-started/docker' },
          ],
        },
        {
          text: 'Arsitektur',
          items: [
            { text: 'Gambaran Arsitektur', link: '/architecture/app-architecture' },
            { text: 'Routing & Navigation Guard', link: '/architecture/routing' },
            { text: 'State Management (Pinia)', link: '/architecture/state-management' },
            { text: 'API Layer (Axios)', link: '/architecture/api-layer' },
          ],
        },
        {
          text: 'Komponen & Halaman',
          items: [
            { text: 'Komponen Publik', link: '/components/public-components' },
            { text: 'Panel Admin', link: '/components/admin-pages' },
            { text: 'Layout System', link: '/components/layout-system' },
          ],
        },
        {
          text: 'Design System',
          items: [
            { text: 'Warna & Token', link: '/styling/design-tokens' },
            { text: 'Tipografi & Animasi', link: '/styling/typography-animation' },
          ],
        },
        {
          text: 'Deployment',
          items: [
            { text: 'CI/CD Pipeline', link: '/deployment/cicd' },
            { text: 'Build & Production', link: '/deployment/build' },
          ],
        },
        {
          text: 'Panduan Kontribusi',
          items: [
            { text: 'Coding Guidelines', link: '/contributing/guidelines' },
            { text: 'Konvensi & Best Practices', link: '/contributing/conventions' },
            { text: 'Troubleshooting', link: '/contributing/troubleshooting' },
          ],
        },
        {
          text: 'Referensi',
          items: [
            { text: 'Changelog', link: '/reference/changelog' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/phiesanggoreng/docs-iftern-fe' },
    ],

    editLink: {
      pattern: 'https://github.com/phiesanggoreng/docs-iftern-fe/edit/main/docs/:path',
      text: 'Edit halaman ini di GitHub',
    },

    footer: {
      message: 'Dirilis di bawah lisensi MIT.',
      copyright: '© 2026 Tim IIF — Universitas AMIKOM Yogyakarta',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Cari...', buttonAriaLabel: 'Cari' },
          modal: {
            noResultsText: 'Tidak ada hasil untuk',
            resetButtonTitle: 'Hapus pencarian',
            footer: { selectText: 'Pilih', navigateText: 'Navigasi', closeText: 'Tutup' },
          },
        },
      },
    },

    outline: {
      level: [2, 3],
      label: 'Pada halaman ini',
    },

    lastUpdated: {
      text: 'Terakhir diperbarui',
    },

    docFooter: {
      prev: 'Halaman Sebelumnya',
      next: 'Halaman Selanjutnya',
    },

    returnToTopLabel: 'Kembali ke atas',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Tampilan',
    lightModeSwitchTitle: 'Beralih ke mode terang',
    darkModeSwitchTitle: 'Beralih ke mode gelap',
  },

  markdown: {
    lineNumbers: true,
  },
})
