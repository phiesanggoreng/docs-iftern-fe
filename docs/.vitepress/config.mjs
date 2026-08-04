import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'IIF Frontend Docs',
  description: 'Dokumentasi Teknis IIF (Iftern) Frontend — Vue 3 + Vite + Pinia',
  lang: 'id-ID',
  base: '/docs-iftern-fe/',

  head: [
    ['link', { rel: 'icon', href: '/docs-iftern-fe/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#752B8E' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'IIF Frontend Docs' }],
    ['meta', { name: 'og:description', content: 'Dokumentasi Teknis IIF Frontend' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'IIF Frontend Docs',

    nav: [
      { text: 'Beranda', link: '/' },
      { text: 'Dokumentasi', link: '/introduction/overview' },
    ],

    sidebar: [
      {
        text: '01 Pendahuluan',
        items: [
          { text: 'Ringkasan Proyek', link: '/introduction/overview' },
          { text: 'Tech Stack', link: '/introduction/tech-stack' },
          { text: 'Struktur Folder', link: '/introduction/folder-structure' },
        ],
      },
      {
        text: '02 Memulai',
        items: [
          { text: 'Instalasi & Setup', link: '/getting-started/installation' },
          { text: 'Environment Variables', link: '/getting-started/environment' },
          { text: 'Docker Setup', link: '/getting-started/docker' },
        ],
      },
      {
        text: '03 Arsitektur',
        collapsed: false,
        items: [
          { text: 'Arsitektur Aplikasi', link: '/architecture/app-architecture' },
          { text: 'Routing & Navigation Guard', link: '/architecture/routing' },
          { text: 'State Management (Pinia)', link: '/architecture/state-management' },
          { text: 'API Layer (Axios)', link: '/architecture/api-layer' },
        ],
      },
      {
        text: '04 Komponen',
        collapsed: false,
        items: [
          { text: 'Komponen Publik', link: '/components/public-components' },
          { text: 'Halaman Admin', link: '/components/admin-pages' },
          { text: 'Layout System', link: '/components/layout-system' },
        ],
      },
      {
        text: '05 Styling & Design System',
        collapsed: false,
        items: [
          { text: 'Design Tokens', link: '/styling/design-tokens' },
          { text: 'Tipografi & Animasi', link: '/styling/typography-animation' },
        ],
      },
      {
        text: '06 Deployment',
        items: [
          { text: 'CI/CD Pipeline', link: '/deployment/cicd' },
          { text: 'Build & Preview', link: '/deployment/build' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/phiesanggoreng/docs-iftern-fe' },
    ],

    footer: {
      message: 'Dokumentasi Teknis IIF Frontend',
      copyright: '© 2026 Tim IIF — AMIKOM',
    },

    search: {
      provider: 'local',
    },

    outline: {
      level: [2, 3],
      label: 'Daftar Isi',
    },

    lastUpdated: {
      text: 'Terakhir diperbarui',
    },

    docFooter: {
      prev: 'Sebelumnya',
      next: 'Selanjutnya',
    },
  },
})
