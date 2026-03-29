/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Radio, 
  Globe, 
  FileText, 
  Mic, 
  TrendingUp, 
  Target, 
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Award,
  BarChart3,
  ShieldCheck,
  Users,
  Send,
  X,
  Play
} from "lucide-react";

// --- Data ---

const services = [
  { 
    title: "Planejamento de Divulgação", 
    icon: FileText,
    desc: "Estratégias sob medida para que sua mensagem chegue ao público certo, no momento ideal."
  },
  { 
    title: "Campanhas em Rádio", 
    icon: Radio,
    desc: "Alcance massivo e credibilidade com spots criativos e inserções estratégicas nas melhores emissoras."
  },
  { 
    title: "Conteúdo Digital", 
    icon: Globe,
    desc: "Presença digital forte com gestão de redes sociais e tráfego pago focado em conversão."
  },
  { 
    title: "Podcasts e Entrevistas", 
    icon: Mic,
    desc: "Criação de autoridade através de formatos longos que conectam sua marca profundamente com a audiência."
  },
  { 
    title: "Posicionamento de Marca", 
    icon: Target,
    desc: "Definição clara da sua identidade para que sua empresa seja a primeira escolha do seu cliente."
  },
  { 
    title: "Conteúdo Estratégico", 
    icon: TrendingUp,
    desc: "Copywriting e storytelling que transformam curiosos em clientes fiéis."
  },
];

const differentials = [
  {
    title: "Estratégia Personalizada",
    icon: Target,
    desc: "Não acreditamos em fórmulas prontas. Cada negócio recebe um plano único baseado em dados."
  },
  {
    title: "Foco em Resultado",
    icon: BarChart3,
    desc: "Nossa métrica de sucesso é o seu crescimento. Monitoramos KPIs que realmente importam."
  },
  {
    title: "Autoridade de Mercado",
    icon: Award,
    desc: "Transformamos sua empresa em uma referência respeitada no seu nicho de atuação."
  }
];

const targetAudience = [
  "Empresas que buscam expansão acelerada",
  "Negócios que precisam de previsibilidade de vendas",
  "Marcas que desejam se destacar da concorrência",
  "Empreendedores que buscam construir autoridade real",
];

const steps = [
  { title: "Diagnóstico", desc: "Análise profunda do seu cenário atual e identificação de gargalos." },
  { title: "Planejamento", desc: "Criação do roadmap estratégico focado em seus objetivos de negócio." },
  { title: "Execução", desc: "Implementação tática com monitoramento constante de performance." },
  { title: "Resultados", desc: "Análise de métricas, otimização e escala do que está funcionando." },
];

// --- Components ---

const SectionHeading = ({ subtitle, title, light = true }: { subtitle?: string, title: string, light?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="text-center mb-16 px-4"
  >
    {subtitle && (
      <span className="uppercase tracking-[0.4em] text-xs font-bold mb-4 block text-onix-gold glow-gold">
        {subtitle}
      </span>
    )}
    <h2 className={`text-3xl md:text-5xl font-bold leading-tight ${light ? 'text-white' : 'text-onix-dark'}`}>
      {title}
    </h2>
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="h-1 bg-gradient-to-r from-onix-gold to-onix-orange mx-auto mt-6 rounded-full" 
    />
  </motion.div>
);

export default function App() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-onix-gold selection:text-onix-dark bg-onix-dark">
      
      {/* --- Navbar --- */}
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-onix-black/90 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <img 
              src="https://i.postimg.cc/C574vHy9/oniquis.png" 
              alt="Logo" 
              className="h-10 w-auto glow-gold"
              referrerPolicy="no-referrer"
            />
            <span className="text-white font-display font-bold text-xl hidden sm:block tracking-tight">Agência Ônix</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-10">
            {['Sobre', 'Serviços', 'Metodologia'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-zinc-400 hover:text-onix-gold transition-colors font-medium text-sm uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
            <a href="#contato" className="btn-shine bg-gradient-to-r from-onix-gold to-onix-orange text-onix-dark px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(245,184,0,0.4)]">
              DIAGNÓSTICO GRATUITO
            </a>
          </div>

          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <BarChart3 className="w-6 h-6 rotate-90 text-onix-gold" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-onix-black/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
            >
              <div className="flex flex-col p-8 gap-6">
                {['Sobre', 'Serviços', 'Metodologia'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`} 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className="text-zinc-300 hover:text-onix-gold py-2 border-b border-white/5 text-lg font-medium"
                  >
                    {item}
                  </a>
                ))}
                <a href="#contato" onClick={() => setIsMobileMenuOpen(false)} className="bg-gradient-to-r from-onix-gold to-onix-orange text-onix-dark px-6 py-5 rounded-2xl font-bold text-center text-lg shadow-xl">
                  SOLICITAR DIAGNÓSTICO
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- Floating WhatsApp --- */}
      <motion.a
        href="https://wa.me/5515998192105"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] flex items-center justify-center group"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 whitespace-nowrap font-bold text-sm uppercase tracking-wider">
          Falar no WhatsApp
        </span>
      </motion.a>

      {/* --- Hero Section --- */}
      <header className="relative min-h-screen flex items-center justify-center bg-animated-gradient text-white px-6 overflow-hidden pt-20">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-20 w-96 h-96 bg-onix-gold/10 blur-[120px] rounded-full" 
          />
          <motion.div 
            animate={{ 
              y: [0, 20, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 -right-20 w-96 h-96 bg-onix-orange/10 blur-[120px] rounded-full" 
          />
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10 py-20">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-12 flex flex-col items-center"
          >
            <img 
              src="https://i.postimg.cc/C574vHy9/oniquis.png" 
              alt="Agência Ônix Logo" 
              className="w-32 md:w-48 h-auto glow-gold"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tight px-4"
          >
            Sua empresa pronta para <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-onix-gold via-onix-orange to-onix-gold bg-[length:200%_auto] animate-gradient-move italic">crescer de verdade</span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed px-6"
          >
            Dominamos as estratégias de <span className="text-white font-semibold">comunicação, rádio, digital e conteúdo</span> para transformar sua marca em uma máquina de resultados.
          </motion.p>
          
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 px-6"
          >
            <a 
              href="#contato" 
              className="btn-shine pulse-glow group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-onix-gold to-onix-orange text-onix-dark px-10 py-6 rounded-2xl font-black text-lg transition-all transform hover:scale-105 shadow-[0_20px_40px_rgba(245,184,0,0.3)]"
            >
              QUERO CRESCER AGORA
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://wa.me/5515998192105"
              target="_blank"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white px-10 py-6 rounded-2xl font-bold text-lg transition-all"
            >
              FALAR COM ESPECIALISTA
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
          >
            <div className="w-1.5 h-2 bg-onix-gold rounded-full" />
          </motion.div>
        </motion.div>
      </header>
      {/* --- Trusted By --- */}
      <section className="py-16 bg-onix-black border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-zinc-500 text-xs font-bold uppercase tracking-[0.3em] mb-10">Empresas que confiam na nossa estratégia</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="flex items-center gap-2 font-display font-bold text-lg text-white"><Radio className="w-5 h-5 text-onix-gold" /> RÁDIO FM</div>
            <div className="flex items-center gap-2 font-display font-bold text-lg text-white"><Globe className="w-5 h-5 text-onix-gold" /> TECH CORP</div>
            <div className="flex items-center gap-2 font-display font-bold text-lg text-white"><TrendingUp className="w-5 h-5 text-onix-gold" /> VAREJO+</div>
            <div className="flex items-center gap-2 font-display font-bold text-lg text-white"><Users className="w-5 h-5 text-onix-gold" /> GRUPO GESTÃO</div>
            <div className="flex items-center gap-2 font-display font-bold text-lg text-white"><ShieldCheck className="w-5 h-5 text-onix-gold" /> SECURE BIZ</div>
          </div>
        </div>
      </section>

      {/* --- About Section --- */}
      <section id="sobre" className="py-32 px-6 bg-onix-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-onix-gold/5 blur-[150px] rounded-full -mr-64 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-onix-gold font-bold tracking-[0.4em] uppercase text-xs mb-6 block glow-gold">Autoridade & Posicionamento</span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-white leading-[1.1]">
              Não somos apenas uma agência. Somos seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-onix-gold to-onix-orange">braço estratégico</span>.
            </h2>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed font-light">
              O Instituto de Gestão e Comunicação Agência Ônix nasceu com a missão de elevar o padrão da comunicação corporativa. Unimos a força do rádio com a precisão do digital.
            </p>
            <p className="text-lg text-zinc-400 mb-10 leading-relaxed font-light">
              Nossa abordagem foca em criar <span className="font-bold text-white">autoridade real</span>, garantindo que sua marca não apenas seja vista, mas respeitada e desejada pelo seu público-alvo.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-onix-gold/10 rounded-2xl flex items-center justify-center group-hover:bg-onix-gold/20 transition-colors">
                  <ShieldCheck className="w-6 h-6 text-onix-gold" />
                </div>
                <span className="font-bold text-white tracking-wide">Segurança</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-onix-gold/10 rounded-2xl flex items-center justify-center group-hover:bg-onix-gold/20 transition-colors">
                  <TrendingUp className="w-6 h-6 text-onix-gold" />
                </div>
                <span className="font-bold text-white tracking-wide">Escalabilidade</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] md:aspect-square bg-onix-gray rounded-[40px] overflow-hidden shadow-2xl relative group">
              <img 
                src="https://picsum.photos/seed/agency-office/800/800" 
                alt="Agência Ônix Office" 
                className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onix-dark via-onix-dark/20 to-transparent" />
              <div className="absolute bottom-12 left-12">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="text-5xl font-black text-onix-gold mb-2 glow-gold">MAIS DE 40</div>
                  <div className="text-white font-bold text-xl uppercase tracking-[0.2em]">Anos de Credibilidade</div>
                </motion.div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-8 -right-8 w-48 h-48 border-2 border-onix-gold/20 rounded-[40px] -z-10 animate-pulse" />
          </motion.div>
        </div>
      </section>

      {/* --- Video Spotlight Section --- */}
      <section className="py-32 px-6 bg-onix-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            subtitle="Apresentação" 
            title="Assista Nossa Estratégia em Ação" 
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative group cursor-pointer"
            onClick={() => setIsVideoModalOpen(true)}
          >
            {/* Video Thumbnail Placeholder */}
            <div className="aspect-video bg-onix-gray rounded-[48px] overflow-hidden border border-white/10 shadow-2xl relative">
              <img 
                src="https://picsum.photos/seed/agency-video/1920/1080" 
                alt="Video Thumbnail" 
                className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-onix-black/80 via-transparent to-transparent" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-24 h-24 bg-onix-gold rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(245,184,0,0.4)] group-hover:shadow-[0_0_80px_rgba(245,184,0,0.6)] transition-all duration-500"
                >
                  <Play className="w-10 h-10 text-onix-dark fill-current ml-1" />
                </motion.div>
              </div>
              
              {/* Video Info */}
              <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                <div>
                  <p className="text-onix-gold font-bold uppercase tracking-widest text-xs mb-2">Vídeo Institucional</p>
                  <h3 className="text-3xl font-black text-white">O Poder da Comunicação Ônix</h3>
                </div>
                <div className="hidden md:block">
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold border border-white/10">01:45</span>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-onix-gold/5 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-onix-orange/5 blur-[80px] rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* --- Video Modal --- */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-onix-black/95 backdrop-blur-xl"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl aspect-video bg-onix-gray rounded-[32px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all border border-white/10"
              >
                <X className="w-6 h-6" />
              </button>
              
              {/* Video Player */}
              <div className="w-full h-full">
                <video 
                  src="https://res.cloudinary.com/dswdajhkd/video/upload/v1774807335/WhatsApp_Video_2026-03-29_at_10.45.49_mwwyoc.mp4" 
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  playsInline
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Services Section --- */}
      <section id="servicos" className="py-32 px-6 bg-onix-black relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle="Nossas Soluções" 
            title="Estratégias que Convertem" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -12 }}
                className="glass-card p-10 rounded-[32px] transition-all group hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-onix-gold/30"
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gradient-to-br group-hover:from-onix-gold group-hover:to-onix-orange transition-all duration-500 shadow-inner">
                  <service.icon className="w-8 h-8 text-onix-gold group-hover:text-onix-dark transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-onix-gold transition-colors">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed font-light group-hover:text-zinc-300 transition-colors">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Differentials --- */}
      <section className="py-32 px-6 bg-onix-dark">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            subtitle="Por que a Ônix?" 
            title="Diferenciais que Geram Valor" 
          />
          
          <div className="grid md:grid-cols-3 gap-12">
            {differentials.map((diff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="text-center p-8 rounded-3xl hover:bg-white/5 transition-all"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-onix-gold/20 to-onix-orange/20 mb-8 border border-onix-gold/20">
                  <diff.icon className="w-10 h-10 text-onix-gold glow-gold" />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-white tracking-tight">{diff.title}</h4>
                <p className="text-zinc-400 leading-relaxed font-light">{diff.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Emotional Impact --- */}
      <section className="py-40 px-6 bg-onix-black text-white text-center relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 0.2, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src="https://picsum.photos/seed/crowd/1920/1080" 
            alt="Impact" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-7xl font-black mb-10 leading-[1.1] italic tracking-tighter"
          >
            "Sua empresa precisa ser <span className="text-onix-gold">lembrada</span> para ser escolhida."
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-3xl text-zinc-400 mb-0 font-light tracking-wide"
          >
            Saia do anonimato e se torne a referência inquestionável no seu mercado.
          </motion.p>
        </div>
      </section>

      {/* --- For Whom --- */}
      <section className="py-32 px-6 bg-onix-dark">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            subtitle="Perfil Ideal" 
            title="Para quem é a Agência Ônix" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targetAudience.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10, borderColor: '#F5B800' }}
                className="p-8 rounded-2xl bg-onix-gray border border-white/5 flex items-center gap-6 shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-onix-gold to-onix-orange flex items-center justify-center shrink-0 shadow-[0_5px_15px_rgba(245,184,0,0.3)] group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6 text-onix-dark" />
                </div>
                <span className="text-xl font-semibold text-white group-hover:text-onix-gold transition-colors">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- How it Works --- */}
      <section id="metodologia" className="py-32 px-6 bg-onix-black relative">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            subtitle="Metodologia" 
            title="O Caminho para o Sucesso" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connector line for desktop */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/5 z-0" />
            
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative z-10 text-center group"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-onix-gold to-onix-orange text-onix-dark rounded-[32px] flex items-center justify-center font-black text-4xl mx-auto mb-8 shadow-[0_15px_30px_rgba(245,184,0,0.2)] transform -rotate-6 group-hover:rotate-0 transition-all duration-500">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-onix-gold transition-colors">{step.title}</h3>
                <p className="text-zinc-500 leading-relaxed font-light group-hover:text-zinc-400 transition-colors">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section className="py-32 px-6 bg-onix-dark">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            subtitle="Depoimentos" 
            title="Quem cresce com a Ônix" 
          />
          
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { name: "Ricardo Santos", role: "CEO, Varejo Plus", text: "A estratégia de rádio integrada ao digital mudou nosso patamar. Em 3 meses, dobramos nossa captação de leads qualificados." },
              { name: "Juliana Mendes", role: "Diretora de Marketing, Tech Corp", text: "O diagnóstico gratuito foi o divisor de águas. Eles entenderam nosso gargalo e entregaram uma execução impecável." }
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -8 }}
                className="glass-card p-10 rounded-[40px] relative transition-all hover:border-onix-gold/20"
              >
                <div className="text-onix-gold mb-6 flex gap-1 glow-gold">
                  {[...Array(5)].map((_, i) => <Award key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-zinc-300 italic mb-8 text-xl leading-relaxed font-light">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-onix-gold/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-onix-gold" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">{t.name}</p>
                    <p className="text-onix-gold text-sm font-medium uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="py-32 px-6 bg-onix-black">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            subtitle="Dúvidas Frequentes" 
            title="Perguntas Comuns" 
          />
          
          <div className="space-y-6">
            {[
              { q: "Qual o tempo médio para ver resultados?", a: "Depende do canal, mas estratégias de tráfego pago costumam gerar leads nos primeiros 15 dias, enquanto posicionamento de marca e autoridade são construídos de forma sólida em 3 a 6 meses." },
              { q: "Vocês atendem empresas de qualquer tamanho?", a: "Focamos em empresas que já possuem uma estrutura mínima e desejam escalar. Nosso diagnóstico gratuito serve justamente para avaliar se estamos no momento certo para essa parceria." },
              { q: "Como funciona a integração entre Rádio e Digital?", a: "Usamos o rádio para alcance massivo e autoridade imediata, direcionando o público para canais digitais onde fazemos a captura e conversão do lead." },
              { q: "O diagnóstico é realmente gratuito?", a: "Sim. É uma reunião estratégica de 30 minutos onde analisamos seu cenário e entregamos um plano de ação inicial, sem compromisso." }
            ].map((faq, i) => (
              <motion.details 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group glass-card rounded-3xl p-8 cursor-pointer hover:border-onix-gold/30 transition-all"
              >
                <summary className="list-none flex items-center justify-between font-bold text-xl text-white">
                  {faq.q}
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-open:rotate-180 transition-transform">
                    <ArrowRight className="w-5 h-5 text-onix-gold rotate-90" />
                  </div>
                </summary>
                <p className="mt-6 text-zinc-400 leading-relaxed font-light text-lg">
                  {faq.a}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* --- Final CTA & Form --- */}
      <section id="contato" className="py-32 px-6 bg-animated-gradient text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-onix-gold/10 rounded-3xl flex items-center justify-center mb-10 border border-onix-gold/20">
              <TrendingUp className="w-10 h-10 text-onix-gold glow-gold" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-10 italic leading-[1.05] tracking-tighter">
              Chega de investir sem <span className="text-onix-gold">resultado</span>.
            </h2>
            <p className="text-xl text-zinc-400 mb-12 leading-relaxed font-light">
              Estamos prontos para analisar o seu negócio e propor uma estratégia que realmente mova o ponteiro das suas vendas.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-onix-gold/20 transition-all">
                  <Users className="w-7 h-7 text-onix-gold" />
                </div>
                <div>
                  <p className="font-bold text-xl tracking-tight">Atendimento Exclusivo</p>
                  <p className="text-zinc-500 font-light">Fale diretamente com nossos especialistas.</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-onix-gold/20 transition-all">
                  <ShieldCheck className="w-7 h-7 text-onix-gold" />
                </div>
                <div>
                  <p className="font-bold text-xl tracking-tight">Garantia de Entrega</p>
                  <p className="text-zinc-500 font-light">Compromisso total com prazos e qualidade.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-onix-gray p-10 md:p-14 rounded-[48px] shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/5"
          >
            <h3 className="text-3xl font-bold mb-10 text-center tracking-tight">Solicitar Diagnóstico <span className="text-onix-gold">Gratuito</span></h3>
            
            {formStatus === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/20">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h4 className="text-3xl font-bold mb-4">Mensagem Enviada!</h4>
                <p className="text-zinc-400 text-lg font-light">Em breve um especialista entrará em contato.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-10 text-onix-gold font-bold underline hover:text-white transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 ml-2">Nome Completo</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Ex: João Silva"
                    className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 focus:border-onix-gold focus:ring-4 focus:ring-onix-gold/10 outline-none transition-all text-white placeholder:text-zinc-600"
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 ml-2">E-mail Corporativo</label>
                  <input 
                    required
                    type="email" 
                    placeholder="joao@empresa.com.br"
                    className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 focus:border-onix-gold focus:ring-4 focus:ring-onix-gold/10 outline-none transition-all text-white placeholder:text-zinc-600"
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 ml-2">WhatsApp</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="(00) 00000-0000"
                    className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 focus:border-onix-gold focus:ring-4 focus:ring-onix-gold/10 outline-none transition-all text-white placeholder:text-zinc-600"
                  />
                </div>
                <button 
                  disabled={formStatus === 'sending'}
                  className="btn-shine pulse-glow vibrate-hover w-full bg-gradient-to-r from-onix-gold to-onix-orange text-onix-dark py-6 rounded-2xl font-black text-xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-4 shadow-[0_20px_40px_rgba(245,184,0,0.3)] disabled:opacity-50"
                >
                  {formStatus === 'sending' ? 'ENVIANDO...' : (
                    <>
                      SOLICITAR DIAGNÓSTICO
                      <Send className="w-6 h-6" />
                    </>
                  )}
                </button>
                <p className="text-[10px] text-center text-zinc-600 uppercase tracking-[0.3em] mt-6 font-bold">
                  Seus dados estão protegidos. Sem spam.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-24 px-6 bg-onix-black border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <img 
                  src="https://i.postimg.cc/C574vHy9/oniquis.png" 
                  alt="Logo" 
                  className="h-12 w-auto glow-gold"
                  referrerPolicy="no-referrer"
                />
                <div className="flex flex-col">
                  <span className="text-white font-display font-black text-2xl tracking-tighter leading-none">Agência Ônix</span>
                  <span className="text-[10px] text-onix-gold font-bold uppercase tracking-[0.3em] mt-1">Instituto de Gestão</span>
                </div>
              </div>
              <p className="text-zinc-500 max-w-sm leading-relaxed font-light text-lg">
                Transformando negócios através de comunicação estratégica e gestão de excelência. Sua marca no topo, onde ela merece estar.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Navegação</h4>
              <ul className="space-y-4">
                {['Sobre', 'Serviços', 'Metodologia', 'Contato'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-zinc-500 hover:text-onix-gold transition-colors font-light text-lg">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Contato</h4>
              <ul className="space-y-4">
                <li className="text-zinc-500 font-light text-lg">comercial@fmcristal.com.br</li>
                <li className="text-zinc-500 font-light text-lg">+55 (00) 00000-0000</li>
                <li className="text-zinc-500 font-light text-lg">São Paulo, Brasil</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-zinc-600 text-sm font-light">
              © 2026 Agência Ônix - Instituto de Gestão e Comunicação. Todos os direitos reservados.
            </p>
            <div className="flex gap-10">
              <a href="#" className="text-zinc-600 hover:text-onix-gold transition-colors text-sm font-light">Privacidade</a>
              <a href="#" className="text-zinc-600 hover:text-onix-gold transition-colors text-sm font-light">Termos</a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- Scroll to Top --- */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-24 right-6 z-50 bg-onix-gray text-onix-gold p-5 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/10 hover:bg-onix-gold hover:text-onix-dark transition-all group"
          >
            <ArrowRight className="w-6 h-6 -rotate-90 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
