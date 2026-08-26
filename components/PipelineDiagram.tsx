const steps = [
  {
    n: "01",
    title: "Build APK di Flutter",
    detail: "Perintah flutter build apk --release menghasilkan file .apk versi rilis.",
    icon: "code",
  },
  {
    n: "02",
    title: "APK disimpan di project Next.js",
    detail: "File .apk diletakkan di folder public/downloads pada project Next.js ini.",
    icon: "folder",
  },
  {
    n: "03",
    title: "Deploy ke Vercel",
    detail: "Project Next.js di-deploy, isi folder public ikut dipublikasikan sebagai file statis.",
    icon: "cloud",
  },
  {
    n: "04",
    title: "User klik \"Unduh Aplikasi\"",
    detail: "Browser mengambil file .apk langsung dari server Vercel ke perangkat user.",
    icon: "download",
  },
  {
    n: "05",
    title: "Instal di Android",
    detail: "User membuka file .apk yang terunduh dan menyelesaikan instalasi.",
    icon: "phone",
  },
] as const;

function StepIcon({ kind }: { kind: (typeof steps)[number]["icon"] }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#EEF2F6",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (kind) {
    case "code":
      return (
        <svg {...common}>
          <path d="M8 6l-5 6 5 6" />
          <path d="M16 6l5 6-5 6" />
        </svg>
      );
    case "folder":
      return (
        <svg {...common}>
          <path d="M3 7h6l2 2h10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...common}>
          <path d="M7 18h11a4 4 0 0 0 .4-7.98A6 6 0 0 0 6.6 12.1 4 4 0 0 0 7 18z" />
        </svg>
      );
    case "download":
      return (
        <svg {...common}>
          <path d="M12 3v12" />
          <path d="M7 10l5 5 5-5" />
          <path d="M4 19h16" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 18h2" />
        </svg>
      );
    default:
      return null;
  }
}

export default function PipelineDiagram() {
  return (
    <div>
      {/* Desktop / tablet: horizontal schematic with wires */}
      <div className="hidden md:block">
        <div className="relative flex items-stretch justify-between gap-4">
          <svg
            className="pointer-events-none absolute left-0 top-8 h-px w-full"
            preserveAspectRatio="none"
          >
            <line
              x1="8%"
              x2="92%"
              y1="0"
              y2="0"
              stroke="#3E6690"
              strokeWidth="2"
              className="dashed-wire"
            />
          </svg>
          {steps.map((step) => (
            <div key={step.n} className="relative flex w-1/5 flex-col items-center text-center">
              <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-paper bg-blue shadow-[0_0_0_2px_#3E6690]">
                <StepIcon kind={step.icon} />
              </div>
              <span className="mt-3 font-mono text-xs tracking-widest text-blue-soft">
                LANGKAH {step.n}
              </span>
              <h3 className="mt-1 font-display text-sm font-bold leading-snug text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-ink2">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical stacked steps with connecting wire */}
      <div className="block space-y-0 md:hidden">
        {steps.map((step, i) => (
          <div key={step.n} className="relative flex gap-4 pb-8 last:pb-0">
            {i !== steps.length - 1 && (
              <span
                className="absolute left-[27px] top-14 h-full w-px bg-blue-soft/50"
                aria-hidden="true"
              />
            )}
            <div className="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-paper bg-blue shadow-[0_0_0_2px_#3E6690]">
              <StepIcon kind={step.icon} />
            </div>
            <div>
              <span className="font-mono text-xs tracking-widest text-blue-soft">
                LANGKAH {step.n}
              </span>
              <h3 className="mt-1 font-display text-sm font-bold leading-snug text-ink">
                {step.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-ink2">{step.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
