import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="container pt-24">
      <h1 className="mb-8 text-4xl font-bold text-center">İletişim</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-secondary" />
            <div>
              <h3 className="font-semibold">Telefon</h3>
              <p>+90 554 549 11 37</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-secondary" />
            <div>
              <h3 className="font-semibold">E-posta</h3>
              <p>cevikats@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6 text-secondary" />
            <div>
              <h3 className="font-semibold">Adres</h3>
              <p>Sivas, Türkiye</p>
            </div>
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold">
              Adınız
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded"
              placeholder="Adınız"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">
              E-posta
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded"
              placeholder="E-posta adresiniz"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-semibold">
              Mesajınız
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-2 border rounded"
              placeholder="Mesajınız"
            ></textarea>
          </div>
          <button type="submit" className="btn-primary">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;