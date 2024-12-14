import { PaintBucket, Droplets, Lightbulb, Building2, Grid3X3, Wrench } from "lucide-react";

const Services = () => {
  return (
    <div className="container pt-24">
      <h1 className="mb-8 text-4xl font-bold text-center">Hizmetlerimiz</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="card">
          <PaintBucket className="w-12 h-12 mb-4 text-secondary" />
          <h3 className="mb-2 text-xl font-semibold">Alçı ve Boya</h3>
          <p className="text-text-light">
            Profesyonel alçı işleri ve boya uygulamaları ile mekanlarınıza yeni bir görünüm kazandırıyoruz.
          </p>
        </div>
        <div className="card">
          <Droplets className="w-12 h-12 mb-4 text-secondary" />
          <h3 className="mb-2 text-xl font-semibold">Su Tesisatı</h3>
          <p className="text-text-light">
            Modern ve güvenilir su tesisatı çözümleri ile yaşam alanlarınızı güvence altına alıyoruz.
          </p>
        </div>
        <div className="card">
          <Lightbulb className="w-12 h-12 mb-4 text-secondary" />
          <h3 className="mb-2 text-xl font-semibold">Elektrik</h3>
          <p className="text-text-light">
            Elektrik tesisatı ve aydınlatma sistemleri kurulumu ile yaşam alanlarınızı aydınlatıyoruz.
          </p>
        </div>
        <div className="card">
          <Building2 className="w-12 h-12 mb-4 text-secondary" />
          <h3 className="mb-2 text-xl font-semibold">Sıfırdan Teslim</h3>
          <p className="text-text-light">
            A'dan Z'ye tüm inşaat ve dekorasyon ihtiyaçlarınızı karşılıyoruz.
          </p>
        </div>
        <div className="card">
          <Grid3X3 className="w-12 h-12 mb-4 text-secondary" />
          <h3 className="mb-2 text-xl font-semibold">Parke</h3>
          <p className="text-text-light">
            Kaliteli parke döşeme hizmetleri ile mekanlarınıza şıklık katıyoruz.
          </p>
        </div>
        <div className="card">
          <Wrench className="w-12 h-12 mb-4 text-secondary" />
          <h3 className="mb-2 text-xl font-semibold">Banyo ve Mutfak Yenileme</h3>
          <p className="text-text-light">
            Banyo ve mutfaklarınızı modern ve fonksiyonel bir şekilde yeniliyoruz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;