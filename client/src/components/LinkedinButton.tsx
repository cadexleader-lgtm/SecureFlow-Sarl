import { Linkedin } from "lucide-react";

export function LinkedinButton() {
  const linkedinUrl = "https://www.linkedin.com/in/eric-brunnel-quenum-8b99703a4?utm_source=share_via&utm_content=profile&utm_medium=member_android";

  return (
    <a
      href={linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 bg-[#0077B5] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Suivez-nous sur LinkedIn"
    >
      <Linkedin className="w-6 h-6 fill-current" />
      <span className="absolute right-full mr-3 bg-white text-black text-xs font-bold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
        Suivez-nous sur LinkedIn
      </span>
    </a>
  );
}
