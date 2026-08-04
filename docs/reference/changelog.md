# Changelog

Semua perubahan besar pada dokumentasi IIF Frontend akan dicatat di halaman ini. Format pencatatan didasarkan pada *Keep a Changelog*.

## [1.0.0] - 2026-08-04

### Added
- **Initial Release Dokumentasi Teknis IIF Frontend**.
- Setup VitePress dengan konfigurasi kustom dan tema berbahasa Indonesia.
- **Pendahuluan**: Ringkasan proyek, *Tech Stack*, dan arsitektur struktur folder.
- **Panduan Setup**: Instruksi instalasi, environment variables, dan *Docker integration*.
- **Arsitektur**: Dokumentasi *app architecture*, routing, Pinia state management, dan API layer menggunakan Axios.
- **Komponen**: Dokumentasi *Public components*, halaman Admin, dan layout system.
- **Styling**: Dokumentasi untuk Tailwind CSS, *design tokens*, tipografi, dan sistem animasi.
- **Deployment**: Panduan *CI/CD Pipeline*, *build process*, dan pengaturan Nginx.
- **Panduan Kontribusi**: Aturan *Coding guidelines*, konvensi git commit, dan troubleshooting.

### Changed
- Konfigurasi VitePress diperbarui untuk mematuhi standar dokumentasi industri (*sidebar* terorganisir, penghapusan tombol beranda *hero section* menjadi redirect halaman *overview*).
- Auto-deploy dikonfigurasi ke GitHub Pages menggunakan GitHub Actions.
