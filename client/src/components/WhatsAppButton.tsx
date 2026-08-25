import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "+22950363636"; // Numéro WhatsApp SECUREFLOW
  const message = "Bonjour SecureFlow, j'aimerais en savoir plus sur vos services.";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="absolute right-full mr-3 bg-white text-black text-xs font-bold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
        Besoin d'aide ? Discutons !
      </span>
    </a>
  );
}
