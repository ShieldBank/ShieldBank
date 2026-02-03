import Image from "next/image";
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";

import logoAppStore from "../assets/apple.svg";
import logoGooglePlay from "../assets/google-play.svg";
import shieldbank from "../assets/shieldbank.png";

export function Footer() {
  return (
    <footer className="w-full bg-[#020F1F] text-white">
      <div className="max-w-7xl mx-auto px-10 py-20">
        <div className="grid grid-cols-4 gap-16 max-md:grid-cols-1">
          <div className="flex flex-col gap-3 font-light">
            <h1 className="text-lg font-medium text-[#CCAA76]">NOSSOS PRODUTOS</h1>
            <a
              href="/produtos/inteligencia"
              className="hover:text-[#CCAA76] transition"
            >
              Inteligência Tributária
            </a>
            <a
              href="/produtos/rendimentos"
              className="hover:text-[#CCAA76] transition"
            >
              Rendimentos
            </a>
            <a
              href="/produtos/shieldpay"
              className="hover:text-[#CCAA76] transition"
            >
              Shield Pay
            </a>
            <a
              href="/produtos/bank"
              className="hover:text-[#CCAA76] transition"
            >
              Shield Bank
            </a>
            <a
              href="/produtos/split"
              className="hover:text-[#CCAA76] transition"
            >
              Split de Pagamentos
            </a>
          </div>

          <div className="flex flex-col gap-3 font-light">
            <h1 className="text-lg font-medium text-[#CCAA76]">SOBRE NÓS</h1>
            <a href="/" className="hover:text-[#CCAA76] transition">
              Quem Somos
            </a>
            <a href="/blog" className="hover:text-[#CCAA76] transition">
              Blog
            </a>
            <a
              href="https://shieldbank.vagas.solides.com.br/"
              target="_blank"
              className="hover:text-[#CCAA76] transition"
            >
              Trabalhe Conosco
            </a>
            <a
              href="/acessar-conta"
              className="hover:text-[#CCAA76] transition"
            >
              Acessar Conta
            </a>
            <a
              href="https://wa.me/5511978802370/?text=Olá, Quero abrir minha conta Shield!"
              target="_blank"
              className="hover:text-[#CCAA76] transition"
            >
              Seja Shield
            </a>
          </div>

          <div className="flex flex-col gap-3 font-light">
            <h1 className="text-lg font-medium text-[#CCAA76]">ATENDIMENTO</h1>
            <p>Segunda a sexta das 9h às 18h (Horário de Brasília)</p>
            <p className="mt-2 font-medium">Whatsapp</p>
            <p>(11) 97880-2370</p>
            <p className="mt-2 font-medium">Todas as regiões</p>
            <p>0800 000 2651</p>
            <p className="mt-2 font-medium">E-mail</p>
            <p>atendimento@shieldbank.com.br</p>
          </div>

          <div className="flex flex-col gap-6">
            <Image className="w-40" src={logoGooglePlay} alt="Google Play" />
            <Image className="w-40" src={logoAppStore} alt="App Store" />

            <div className="flex gap-6 mt-4">
              <a href="https://www.instagram.com/shield_bank" target="_blank">
                <FaInstagram
                  size={22}
                  className="text-[#CCAA76] transition"
                />
              </a>
              <a
                href="https://www.tiktok.com/search?q=shield%20bank"
                target="_blank"
              >
                <FaTiktok
                  size={22}
                  className="text-[#CCAA76] transition"
                />
              </a>
              <a href="https://www.youtube.com/@shield_bank" target="_blank">
                <FaYoutube
                  size={22}
                  className="text-[#CCAA76] transition"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/shield-bank/posts/?feedView=all"
                target="_blank"
              >
                <FaLinkedin
                  size={22}
                  className="text-[#CCAA76] transition"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-16"></div>
      </div>

      <div className="max-w-7xl mx-auto px-10 pb-12 text-sm text-white/80">
        <Image className="w-32" src={shieldbank} alt="Shield Bank" />
        <p>CNPJ: 29.774.053/0001-41</p>
        <p className="mt-2">
          Avenida Brigadeiro Faria Lima, 1.461, 4º andar, conjunto 41, Jardim
          Paulistano, São Paulo-SP, CEP 01452-921
        </p>
        <p className="mt-4">© 2025 Shield Bank</p>
      </div>
    </footer>
  );
}
