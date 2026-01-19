import { Metadata } from "next";
import Newsletter from "@/components/Newsletter";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "O Nama",
  description:
    "Saznajte više o EkoBiH - vašem vodiču za ekološke i održive proizvode iz Bosne i Hercegovine.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <header className="text-center mb-12">
        <span className="text-6xl mb-4 block">🌿</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          O Nama
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Povezujemo vas s najboljim eko proizvodima iz Bosne i Hercegovine
        </p>
      </header>

      {/* Content */}
      <div className="prose prose-lg prose-green max-w-none">
        <section className="bg-white rounded-2xl p-8 mb-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span>🎯</span> Naša Misija
          </h2>
          <p className="text-gray-600">
            <strong>EkoBiH</strong> je osnovan s jasnom misijom: povezati ljude
            koji žele živjeti održivo sa kvalitetnim ekološkim proizvodima iz
            Bosne i Hercegovine. Vjerujemo da mali izbori mogu napraviti veliku
            razliku - za naše zdravlje, naše zajednice i našu planetu.
          </p>
          <p className="text-gray-600">
            Bosna i Hercegovina je zemlja netaknute prirode, čistih rijeka i
            tradicionalne poljoprivrede. Naši proizvođači koriste metode koje su
            se prenosile generacijama, bez štetnih kemikalija i s punim
            poštovanjem prema okolišu.
          </p>
        </section>

        <AdBanner slot="inline" className="mb-8" />

        <section className="bg-white rounded-2xl p-8 mb-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span>💚</span> Što Nudimo
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">Bio Hrana</h3>
              <p className="text-gray-600 text-sm">
                Organski med, ajvar, rakija i druge tradicionalne bosanske
                delicije - sve proizvedeno bez pesticida i umjetnih dodataka.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">Eko Kozmetika</h3>
              <p className="text-gray-600 text-sm">
                Prirodna kozmetika s biljnim ekstraktima, bez parabena i štetnih
                hemikalija.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">Zelena Energija</h3>
              <p className="text-gray-600 text-sm">
                Solarni punjači, eko gadgeti i proizvodi za smanjenje
                ekološkog otiska.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">Održivi Dom</h3>
              <p className="text-gray-600 text-sm">
                Biorazgradivi proizvodi za dom koji pomažu smanjiti plastični
                otpad.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 mb-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span>🤝</span> Affiliate Transparentnost
          </h2>
          <p className="text-gray-600">
            EkoBiH koristi affiliate linkove. To znači da kada kliknete na
            proizvod i obavite kupovinu, mi možemo dobiti malu proviziju - bez
            ikakvih dodatnih troškova za vas. Ova provizija nam pomaže da
            održavamo stranicu i nastavljamo s našom misijom.
          </p>
          <p className="text-gray-600">
            Želimo biti potpuno transparentni: preporučujemo samo proizvode u
            koje vjerujemo i koje bismo sami koristili. Vaše povjerenje nam je
            najvažnije.
          </p>
        </section>

        <section className="bg-white rounded-2xl p-8 mb-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span>🌍</span> Zašto Eko?
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span>
                <strong>Zdravlje:</strong> Proizvodi bez pesticida i štetnih
                kemikalija su bolji za vaše tijelo.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span>
                <strong>Okoliš:</strong> Održiva proizvodnja smanjuje zagađenje
                i čuva biodiverzitet.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span>
                <strong>Zajednica:</strong> Podržavate lokalne proizvođače i
                njihove porodice.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span>
                <strong>Budućnost:</strong> Svaki eko izbor je korak prema
                održivijoj budućnosti.
              </span>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl p-8 mb-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span>📬</span> Kontaktirajte Nas
          </h2>
          <p className="text-gray-600 mb-4">
            Imate pitanja, prijedloge ili želite surađivati? Javite nam se!
          </p>
          <div className="bg-green-50 rounded-xl p-6">
            <p className="text-gray-700">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@ekobih.com"
                className="text-green-600 hover:text-green-700"
              >
                info@ekobih.com
              </a>
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Web:</strong>{" "}
              <a
                href="https://ekobih.com"
                className="text-green-600 hover:text-green-700"
              >
                www.ekobih.com
              </a>
            </p>
          </div>
        </section>
      </div>

      {/* Newsletter */}
      <div className="mt-12">
        <Newsletter />
      </div>
    </div>
  );
}
