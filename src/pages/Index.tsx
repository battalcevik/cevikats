import { Building2, PaintBucket, Hammer, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative flex items-center h-full">
          <div className="max-w-2xl text-white animate-fade-up">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
              Kaliteyi inşa ediyoruz, detaylarda yaşıyoruz.
            </h1>
            <p className="mb-8 text-lg md:text-xl">
              Cevik ATS Dekorasyon, inşaat ve dekorasyon projelerinde uzmanlaşmış,
              yüksek kaliteli hizmet sunan bir firmadır.
            </p>
            <Link to="/contact" className="btn-primary">
              Bizimle İletişime Geçin
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container">
          <h2 className="section-title">Hizmetlerimiz</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="card">
              <Building2 className="w-12 h-12 mb-4 text-secondary" />
              <h3 className="mb-2 text-xl font-semibold">İnşaat Projeleri</h3>
              <p className="text-text-light">
                Modern ve dayanıklı yapılar inşa ediyoruz.
              </p>
            </div>
            <div className="card">
              <PaintBucket className="w-12 h-12 mb-4 text-secondary" />
              <h3 className="mb-2 text-xl font-semibold">İç Dekorasyon</h3>
              <p className="text-text-light">
                Yaşam alanlarınızı estetik ve fonksiyonel hale getiriyoruz.
              </p>
            </div>
            <div className="card">
              <Hammer className="w-12 h-12 mb-4 text-secondary" />
              <h3 className="mb-2 text-xl font-semibold">Tadilat</h3>
              <p className="text-text-light">
                Mekanlarınızı yeniliyor, değer katıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary">
        <div className="container text-center">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
            Projenizi Birlikte Hayata Geçirelim
          </h2>
          <div className="flex items-center justify-center mb-8 space-x-4">
            <Phone className="text-secondary" />
            <span className="text-xl text-white">+90 555 123 4567</span>
          </div>
          <Link to="/contact" className="btn-primary">
            Ücretsiz Keşif İsteyin
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;