# Tipografi & Animasi

## Tipografi

### Font Families

Empat font family diregistrasikan di `tailwind.config.js`:

| Tailwind Class | Font | Penggunaan |
|---------------|------|------------|
| `font-jakarta` | Plus Jakarta Sans | Body text utama |
| `font-poppins` | Poppins | Headings (`h1`–`h6`) |
| `font-inter` | Inter | Alternatif body |
| `font-orbitron` | Orbitron | Elemen dekoratif / branding |

### Hierarki Heading

```css
/* Di style.css */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Poppins', sans-serif;
}

body {
  font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
}
```

### Import Google Fonts

```css
@import url('https://fonts.googleapis.com/css2?
  family=Orbitron:wght@400;500;600;700;800;900
  &family=Poppins:wght@300;400;500;600;700;800
  &family=Plus+Jakarta+Sans:wght@400;500;600;700;800
  &family=Inter:wght@400;500;600;700
  &display=swap');
```

---

## Animasi

### Custom Keyframes

| Keyframe | Efek | Digunakan Di |
|----------|------|-------------|
| `fade-in` | Muncul dari bawah (24px) | General entrance |
| `fade-in-up` | Muncul dari bawah (32px) | Section entrance |
| `marquee` | Scroll horizontal | Ticker/marquee |
| `scroll-up` | Scroll vertikal ke atas | Testimonials column |
| `float` | Melayang naik-turun (12px) | Decorative elements |
| `pulse-soft` | Opacity berkedip halus | Background elements |

### Tailwind Animation Classes

```js
// tailwind.config.js
animation: {
  'fade-in':          'fade-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
  'fade-in-up':       'fade-in-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
  'marquee':          'marquee 18s linear infinite',
  'scroll-up-slow':   'scroll-up 25s linear infinite',
  'scroll-up-medium': 'scroll-up 18s linear infinite',
  'scroll-up-fast':   'scroll-up 14s linear infinite',
  'float':            'float 6s ease-in-out infinite',
  'pulse-soft':       'pulse-soft 3s ease-in-out infinite',
}
```

**Penggunaan di template:**

```html
<div class="animate-fade-in">Konten muncul dengan fade</div>
<div class="animate-float">Elemen melayang</div>
<div class="animate-scroll-up-slow">Auto-scroll lambat</div>
```

---

## Scroll Animations (CSS)

### Intersection Observer Pattern

Komponen menggunakan class `.animate-on-scroll` yang diaktifkan saat elemen masuk viewport:

```css
/* style.css */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(28px);
  transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Cara kerja:**
1. Elemen dimulai dengan `opacity: 0` dan posisi di bawah
2. JavaScript/Intersection Observer menambahkan class `visible` saat elemen masuk viewport
3. CSS transition menganimasikan elemen ke posisi normal

---

## Testimonial Mask

Efek fade gradient di atas dan bawah kolom testimoni:

```css
.testimonial-mask {
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 8%,
    black 92%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 8%,
    black 92%,
    transparent 100%
  );
}
```

```
   ░░░░░░░░░░░  ← Fade out (transparent)
   ████████████
   ████████████  ← Konten terlihat penuh
   ████████████
   ░░░░░░░░░░░  ← Fade out (transparent)
```

---

## Custom Scrollbar

Scrollbar di-customize dengan warna brand:

```css
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #F3EDFB;    /* surface-soft */
}
::-webkit-scrollbar-thumb {
  background: #BB8FE6;    /* primary-300 */
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #7B2CBF;    /* Slightly darker */
}
```

---

## Easing Function

Semua animasi menggunakan easing `cubic-bezier(0.22, 1, 0.36, 1)` — ini menghasilkan gerakan yang cepat di awal dan melambat di akhir (ease-out), memberikan kesan natural dan premium.

::: tip Best Practices
- Gunakan `animate-fade-in` untuk elemen yang muncul saat halaman load
- Gunakan `.animate-on-scroll` untuk elemen yang muncul saat scroll
- Hindari terlalu banyak animasi bersamaan untuk menjaga performa
:::
