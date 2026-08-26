import DownloadButton from "@/components/DownloadButton";
import PhoneSchematic from "@/components/PhoneSchematic";

// Detail Aplikasi
const APP_NAME = "SIMPADA";
const APP_TAGLINE = "Sistem Monitoring Penyakit Daun Padi";
const APP_VERSION = "v1.0.0";
const APK_FILE_NAME = "app-release.apk";
const APK_PATH = `/downloads/${APK_FILE_NAME}`;

// 5 Langkah Alur Diagnosis Aplikasi
const DIAGNOSIS_STEPS = [
  {
    step: "LANGKAH 01",
    title: "Pilih Titik Pola X",
    description:
      "Pengamatan pada 5 titik petak sawah: kiri atas, kanan atas, tengah, kiri bawah, dan kanan bawah.",
  },
  {
    step: "LANGKAH 02",
    title: "Ambil 3 Foto Strata",
    description:
      "Ambil atau unggah 3 foto daun per titik pada bagian bawah, tengah, dan atas rumpun padi.",
  },
  {
    step: "LANGKAH 03",
    title: "Deteksi Otomatis AI",
    description:
      "Model AI menandai dan menghitung sebaran bercak penyakit daun secara langsung dengan bounding box.",
  },
  {
    step: "LANGKAH 04",
    title: "Rekapitulasi 15 Sampel",
    description:
      "Sistem mengagregasi seluruh hasil analisis dari total 15 foto sampel yang terkumpul.",
  },
  {
    step: "LANGKAH 05",
    title: "Keputusan Pengendalian",
    description:
      "Dapatkan kesimpulan intensitas serangan serta rekomendasi tindakan pengendalian untuk lahan.",
  },
];

export default function Home() {
  return (
    <main className="blueprint-bg min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-paperLine/80 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-mono text-xs tracking-[0.2em] text-blue-soft">
            {APP_NAME} · {APP_VERSION}
          </span>
          <nav className="hidden gap-6 font-mono text-xs tracking-widest text-ink2 sm:flex">
            <a href="#unduh" className="hover:text-ink">
              UNDUH
            </a>
            <a href="#cara-kerja" className="hover:text-ink">
              ALUR DIAGNOSIS
            </a>
            <a href="#instalasi" className="hover:text-ink">
              INSTALASI
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="unduh" className="mx-auto max-w-6xl px-6 pb-20 pt-12 md:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          
          {/* Kolom Kiri: Informasi & Tombol Unduh (7 Kolom) */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <div>
              <span className="inline-block rounded-full border border-blue-soft/40 px-3 py-1 font-mono text-[11px] tracking-widest text-blue-soft">
                SIMPADA · DETEKSI CITRA DAUN
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.15] text-ink md:text-5xl">
                Diagnosis kesehatan daun padi langsung dari genggaman.
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-ink2">
                Kenali gejala patologi dan infeksi bercak daun padi secara cepat dan presisi berbasis Artificial Intelligence. Unduh aplikasi untuk mulai melakukan inspeksi mandiri di lahan.
              </p>
            </div>

            <div className="mt-8">
              <DownloadButton href={APK_PATH} fileName={APK_FILE_NAME} />
            </div>

            {/* Spec Sheet Ringkas */}
            <dl className="mt-8 grid max-w-md grid-cols-3 gap-4 border-t border-paperLine pt-5 font-mono text-xs text-ink2">
              <div>
                <dt className="tracking-widest text-blue-soft">VERSI</dt>
                <dd className="mt-1 font-semibold text-ink">{APP_VERSION}</dd>
              </div>
              <div>
                <dt className="tracking-widest text-blue-soft">METODE</dt>
                <dd className="mt-1 font-semibold text-ink">5 Titik Daun</dd>
              </div>
              <div>
                <dt className="tracking-widest text-blue-soft">FORMAT</dt>
                <dd className="mt-1 font-semibold text-ink">Android (.APK)</dd>
              </div>
            </dl>
          </div>

          {/* Kolom Kanan: Phone Mockup & Keterangan (5 Kolom) */}
          <div className="relative flex flex-col items-center justify-center lg:col-span-5">
            <div className="w-full">
              <PhoneSchematic />
            </div>

            {/* Keterangan A & B diletakkan di bawah atau samping secara fleksibel */}
            <div className="mt-6 grid w-full max-w-xs grid-cols-2 gap-3 font-mono text-xs text-ink2 lg:mt-5">
              <div className="rounded-lg border border-paperLine bg-white/40 p-2.5">
                <p>
                  <span className="font-bold text-ink">A —</span> Pindai 5 titik sampling di petak.
                </p>
              </div>
              <div className="rounded-lg border border-paperLine bg-white/40 p-2.5">
                <p>
                  <span className="font-bold text-ink">B —</span> Hasil diagnosis AI instan.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Alur Diagnosis (How it works) */}
      <section id="cara-kerja" className="border-t border-paperLine bg-paper py-20">
        <div className="mx-auto max-w-6xl px-6">
          <span className="font-mono text-xs tracking-widest text-blue-soft">
            ALUR DIAGNOSIS
          </span>
          <h2 className="mt-2 max-w-xl font-display text-3xl font-bold text-ink">
            Deteksi presisi berbasis pengambilan sampel 5 titik daun.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink2">
            Aplikasi memproses foto sampel daun padi melalui model computer vision cerdas untuk mengidentifikasi jenis anomali dan tingkat keparahan penyakit secara akurat.
          </p>

          {/* Stepper Diagram Horizontal */}
          <div className="relative mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-4">
              {DIAGNOSIS_STEPS.map((item, index) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                  {/* Garis konektor */}
                  {index < DIAGNOSIS_STEPS.length - 1 && (
                    <div className="absolute left-[50%] top-6 hidden h-[2px] w-full border-t-2 border-dashed border-blue-soft/30 md:block" />
                  )}

                  {/* Lingkaran Nomor */}
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-soft bg-paper font-mono text-sm font-bold text-blue-soft shadow-sm">
                    0{index + 1}
                  </div>

                  {/* Informasi Langkah */}
                  <div className="mt-4">
                    <span className="font-mono text-[10px] tracking-widest text-blue-soft uppercase">
                      {item.step}
                    </span>
                    <h3 className="mt-1 font-display text-sm font-bold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Installation guide */}
      <section id="instalasi" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <span className="font-mono text-xs tracking-widest text-blue-soft">
            PANDUAN PEMASANGAN
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink">
            Langkah mudah pemasangan file APK di perangkat Android
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink2">
            Karena diunduh langsung dari server lokal sistem, Android memerlukan izin pemasangan dari sumber ini sebagai prosedur keamanan standar.
          </p>

          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            <li className="rounded-lg border border-paperLine bg-white/60 p-6">
              <span className="font-mono text-xs text-blue-soft">01</span>
              <h3 className="mt-2 font-display text-sm font-bold text-ink">
                Unduh Berkas Aplikasi
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-ink2">
                Simpan berkas {APK_FILE_NAME} ke perangkat Anda melalui tombol unduh di atas.
              </p>
            </li>
            <li className="rounded-lg border border-paperLine bg-white/60 p-6">
              <span className="font-mono text-xs text-blue-soft">02</span>
              <h3 className="mt-2 font-display text-sm font-bold text-ink">
                Beri Izin Pemasangan
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-ink2">
                Buka file yang telah diunduh, lalu aktifkan opsi &ldquo;Izinkan dari sumber ini&rdquo; jika diminta sistem.
              </p>
            </li>
            <li className="rounded-lg border border-paperLine bg-white/60 p-6">
              <span className="font-mono text-xs text-blue-soft">03</span>
              <h3 className="mt-2 font-display text-sm font-bold text-ink">
                Mulai Deteksi
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-ink2">
                Selesaikan proses instalasi dan buka {APP_NAME} untuk mulai memeriksa kondisi daun padi di lahan.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-paperLine px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 font-mono text-xs text-ink2 sm:flex-row sm:items-center">
          <span>{APP_NAME} · {APP_TAGLINE}</span>
          <span>Sistem Cerdas Pertanian Mandiri</span>
        </div>
      </footer>
    </main>
  );
}