import { Building2, PaintBucket, Hammer, Phone, Mail, MapPin, Wrench, Lightbulb, Droplets, Grid3X3 } from "lucide-react";
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

      {/* About Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="section-title">Hakkımızda</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-6 text-lg text-text-light">
              ÇEVİK ATS İNŞAAT DEKORASYON, Sivas'ta kurulmuş, inşaat ve dekorasyon sektöründe güvenilir bir isim olarak hizmet vermektedir. Firmamızın kurucusu Ali Çevik önderliğinde, deneyimli ekibimizle her türlü inşaat ve dekorasyon projesinde profesyonel çözümler sunuyoruz.
            </p>
            <p className="mb-6 text-lg text-text-light">
              Uzman kadromuzla alçı işlerinden iç dekorasyona, kapsamlı inşaat projelerinden ince işçiliğe kadar geniş bir yelpazede hizmet veriyoruz. Modern teknikler ve kaliteli malzemeler kullanarak, müşterilerimizin hayallerindeki mekanları gerçeğe dönüştürüyoruz.
            </p>
            <div className="flex items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-2">
                <Phone className="text-secondary" />
                <span>+90 554 549 11 37</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="text-secondary" />
                <span>cevikats@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-secondary" />
                <span>Sivas, Türkiye</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="section-title">Hizmetlerimiz</h2>
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
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary">
        <div className="container text-center">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
            Projenizi Birlikte Hayata Geçirelim
          </h2>
          <div className="flex items-center justify-center mb-8 space-x-4">
            <Phone className="text-secondary" />
            <span className="text-xl text-white">+90 554 549 11 37</span>
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
