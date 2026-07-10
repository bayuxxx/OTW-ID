# OTW.ID — Open Thinking Worlds

> **Think Beyond. Create Impact.**

Website company profile modern untuk komunitas inovasi **OTW.ID (Open Thinking Worlds)**.

## Struktur Folder

```
OTW-ID/
│
├── index.html          # Halaman utama (Tailwind utility classes)
├── script.js           # Vanilla JavaScript
├── assets/
│   ├── images/         # Logo & gambar
│   │   └── logo.jpeg
│   └── videos/
└── README.md
```

## Cara Menjalankan

Buka `index.html` langsung di browser. Semua dependency via CDN, tidak perlu install apa pun.

## Teknologi

- **HTML5**
- **Tailwind CSS** (CDN) — utility-first, konfigurasi via `tailwind.config`
- **Vanilla JavaScript** — tanpa framework
- **Google Fonts: Poppins** — via `fontFamily` di config Tailwind

## Fitur Halaman

| Bagian       | Keterangan                                  |
| ------------ | ------------------------------------------- |
| **Navbar**   | Sticky, logo `.jpeg`, scroll effect via JS  |
| **Hero**     | Gradient, ilustrasi SVG, floating animation |
| **About**    | Founded, Vision, Mission cards              |
| **Innovation** | 2 program + accordion detail + video link |
| **Impact**   | 4 statistik dengan animasi counter          |
| **Gallery**  | Grid responsive, hover zoom, lightbox       |
| **Contact**  | Info kontak + social media buttons          |
| **Footer**   | Logo, tagline, copyright                    |

## Fitur JavaScript

1. Hero reveal on load (`opacity-0` → `opacity-100`)
2. Mobile hamburger toggle
3. Navbar scroll: tambah/hapus kelas Tailwind via JS (`bg-white/95`, `backdrop-blur-lg`, `shadow-md`)
4. Accordion expand/collapse + arrow rotation
5. Gallery lightbox (klik, overlay, Escape)
6. Scroll reveal (`data-reveal` attribute, IntersectionObserver)
7. Counter animation (eased, IntersectionObserver)
8. Smooth scroll dengan offset navbar

## Kustomisasi

- **Logo:** ganti `assets/images/logo.jpeg`
- **Gallery:** ganti `src` di `<img>` dengan gambar sendiri
- **Video:** ganti `href` pada tombol "Lihat Video"
- **Konten:** edit langsung di `index.html`

## Kontak

- **Email:** thinkingworkid@gmail.com
- **Instagram:** @thinkingworks.id
- **WA:** 0895-7001-38274 (Novitarini)
- **Lokasi:** Lombok, NTB, Indonesia

---

Dibuat untuk OTW.ID — Open Thinking Worlds.
