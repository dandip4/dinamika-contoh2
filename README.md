# Website Profil Perusahaan - Dinamika Solusi Informatika

Website profil perusahaan untuk PT Dinamika Solusi Informatika, Microsoft Gold Partner terkemuka di Indonesia.

## 🚀 Fitur Utama

### Halaman Utama (`index.html`)
- **Hero Section**: Presentasi perusahaan dengan animasi floating elements
- **Tentang Kami**: Informasi perusahaan dengan statistik dan gambar
- **Produk**: Showcase 8 produk Microsoft Dynamics 365 dan Power BI
- **Klien**: Carousel klien dengan auto-scroll dan kontrol manual
- **Berita & Artikel**: 4 artikel terbaru dengan link ke halaman detail
- **Mitra**: Grid mitra strategis bisnis
- **Kontak**: Form kontak dan informasi kontak lengkap
- **Footer**: Informasi perusahaan dan link penting

### Halaman Detail Berita (`news-detail.html`)
- **Breadcrumb Navigation**: Navigasi hierarkis
- **Header Berita**: Meta informasi (kategori, tanggal, penulis)
- **Konten Berita**: Artikel lengkap dengan heading dan paragraf
- **Call-to-Action**: Section untuk konsultasi
- **Tags**: Kategori berita yang dapat diklik
- **Share Buttons**: Tombol berbagi ke social media
- **Berita Terkait**: 3 artikel terkait

### Halaman Daftar Berita (`news-list.html`)
- **Page Header**: Judul dan deskripsi halaman
- **Search Bar**: Pencarian berita real-time
- **Filter Kategori**: Filter berdasarkan kategori berita
- **Featured News**: Berita unggulan dengan layout khusus
- **Grid Berita**: Layout responsive dengan hover effects
- **Pagination**: Navigasi halaman dengan animasi

## 🎨 Desain & UI/UX

### Warna Utama
- **Primary Blue**: `#0067b8` (Microsoft Blue)
- **Secondary Blue**: `#0078d4`
- **Text Dark**: `#262626`
- **Text Light**: `#666`
- **Background Light**: `#f8f9fa`
- **Border**: `#e9ecef`

### Typography
- **Heading**: Font weight 600-700, responsive sizing
- **Body Text**: Font weight 400-500, line-height 1.6-1.8
- **Buttons**: Font weight 600, rounded corners

### Responsive Design
- **Desktop**: 1200px+ (3-4 kolom grid)
- **Tablet**: 768px-1024px (2 kolom grid)
- **Mobile**: 320px-768px (1 kolom grid)

### Animations
- **Hover Effects**: Transform, shadow, dan color transitions
- **Scroll Animations**: Fade-in dan slide-up effects
- **Loading States**: Smooth transitions untuk filter dan pagination

## 📱 Responsivitas

Website sepenuhnya responsive dengan:
- **Flexible Grid System**: CSS Grid dan Flexbox
- **Mobile-First Approach**: Design dimulai dari mobile
- **Touch-Friendly**: Button dan link yang mudah disentuh
- **Optimized Images**: Responsive images dengan object-fit
- **Readable Typography**: Font size yang menyesuaikan layar

## 🔧 Teknologi yang Digunakan

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling dengan Grid, Flexbox, dan Custom Properties
- **JavaScript**: Vanilla JS untuk interaktivitas
- **Font Awesome**: Icons library
- **Google Fonts**: Typography

### Features
- **CSS Grid & Flexbox**: Layout system
- **CSS Animations**: Smooth transitions dan effects
- **Intersection Observer**: Scroll-based animations
- **Local Storage**: User preferences (opsional)
- **Progressive Enhancement**: Works without JavaScript

## 📁 Struktur File

```
company-profile-microsoft/
├── index.html              # Halaman utama
├── news-detail.html        # Halaman detail berita
├── news-list.html          # Halaman daftar berita
├── styles.css              # CSS utama
├── news-detail.css         # CSS halaman detail berita
├── news-list.css           # CSS halaman daftar berita
├── script.js               # JavaScript utama
├── news-list.js            # JavaScript halaman berita
└── README.md               # Dokumentasi
```

## 🚀 Cara Menjalankan

1. **Clone repository** atau download file
2. **Buka file** `index.html` di browser
3. **Atau gunakan live server** untuk development

```bash
# Jika menggunakan VS Code dengan Live Server extension
# Klik kanan pada index.html -> "Open with Live Server"
```

## 📝 Konten

### Berita & Artikel
Website menyediakan berbagai jenis konten:
- **Project Updates**: Update implementasi proyek
- **Tips & Tricks**: Tips penggunaan Microsoft products
- **Technology**: Artikel teknologi terbaru
- **Company News**: Berita internal perusahaan

### Produk Microsoft
- Microsoft Dynamics 365 (F&O, BC, Sales, Marketing, Customer Service, Field Service, Commerce)
- Microsoft Power BI
- Microsoft 365 Business Premium
- Microsoft Azure

## 🎯 Target Audience

- **Decision Makers**: CEO, CTO, IT Director
- **IT Professionals**: System Administrator, Developer
- **Business Users**: Manager, Analyst
- **Prospects**: Perusahaan yang mencari solusi Microsoft

## 📞 Kontak

**PT Dinamika Solusi Informatika**
- **Phone**: +62-21-5700135
- **Email**: marketing@dinamika-si.com
- **Website**: www.dinamika-si.com

## 🔄 Update & Maintenance

### Menambah Berita Baru
1. Edit `news-list.html` - tambah card berita baru
2. Buat file `news-detail-[slug].html` untuk detail berita
3. Update link di card berita

### Mengubah Styling
1. Edit file CSS yang sesuai
2. Test di berbagai ukuran layar
3. Pastikan konsistensi dengan design system

### Menambah Fitur
1. Buat file JavaScript terpisah jika diperlukan
2. Update dokumentasi
3. Test cross-browser compatibility

## 📄 License

© 2024 PT Dinamika Solusi Informatika. All rights reserved.

---

**Dibuat dengan ❤️ untuk Dinamika Solusi Informatika** 