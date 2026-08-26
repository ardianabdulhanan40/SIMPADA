# Halaman Unduh Aplikasi (Next.js)

Landing page untuk mendistribusikan file APK hasil `flutter build apk --release`
langsung dari server yang sama dengan website (di-deploy ke Vercel).

## 1. Jalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## 2. Menaruh file APK

1. Di project Flutter kamu, jalankan:
   ```bash
   flutter build apk --release
   ```
2. File hasilnya ada di:
   ```
   build/app/outputs/flutter-apk/app-release.apk
   ```
3. Salin (copy) file tersebut ke folder ini pada project Next.js:
   ```
   public/downloads/app-release.apk
   ```
4. Hapus file `public/downloads/LETAKKAN_APK_DISINI.txt` (opsional, hanya penanda).

Tombol "Unduh Aplikasi" di halaman utama (`app/page.tsx`) sudah diarahkan ke
`/downloads/app-release.apk`, jadi tidak perlu ubah kode apa pun — cukup taruh
filenya di lokasi tersebut.

Jika kamu ingin mengganti nama file atau menampilkan versi/ukuran yang berbeda,
edit konstanta di bagian atas `app/page.tsx`:

```ts
const APP_NAME = "Nama Aplikasi";
const APP_VERSION = "v1.0.0";
const APK_FILE_NAME = "app-release.apk";
```

## 3. Deploy ke Vercel

1. Push project ini ke repository Git (GitHub/GitLab/Bitbucket).
2. Import repo tersebut di https://vercel.com/new
3. Vercel akan otomatis mendeteksi Next.js — tidak perlu konfigurasi khusus.
4. Setelah deploy selesai, file APK ikut terpublikasi sebagai file statis dan
   bisa diunduh lewat tombol di halaman.

### Catatan penting soal ukuran file APK

- Vercel pada paket Hobby membatasi ukuran satu file dalam deployment sekitar
  100 MB, dan ada juga batas total ukuran deployment.
- Jika APK kamu berukuran besar (misalnya di atas 50–80 MB), pertimbangkan untuk
  meng-host file APK di layanan penyimpanan terpisah (Vercel Blob, Amazon S3,
  GitHub Releases, dsb.) dan cukup arahkan tombol unduh ke URL tersebut, alih-alih
  menyimpannya di folder `public/`.
- Untuk mengecek batas terbaru yang berlaku di akun kamu, lihat dokumentasi resmi
  Vercel mengenai batas ukuran deployment.

## Struktur project

```
app/
  layout.tsx        -> font & metadata halaman
  page.tsx           -> konten halaman (hero, cara kerja, panduan instalasi)
  globals.css
components/
  DownloadButton.tsx  -> tombol unduh
  PipelineDiagram.tsx -> diagram alur build -> deploy -> unduh -> instal
  PhoneSchematic.tsx  -> ilustrasi skema di hero
public/
  downloads/
    app-release.apk   -> taruh file APK kamu di sini
```
