
import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  ShieldCheck, 
  Users, 
  Rocket, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Menu, 
  X,
  ChevronDown,
  PieChart,
  FileText,
  Briefcase,
  HelpCircle,
  TrendingUp,
  Cpu,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-3 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform duration-300">
            <BarChart3 size={24} />
          </div>
          <span className={`text-xl font-extrabold tracking-tight transition-colors ${isScrolled ? 'text-slate-800' : 'text-slate-900 lg:text-white'}`}>
            FLUXO<span className="text-blue-500">DIGITAL</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-8 text-sm font-semibold transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-100'}`}>
          <a href="#problemas" className="hover:text-blue-500 transition-colors">Dores</a>
          <a href="#servicos" className="hover:text-blue-500 transition-colors">Serviços</a>
          <a href="#diferenciais" className="hover:text-blue-500 transition-colors">Diferenciais</a>
          <a href="#faq" className="hover:text-blue-500 transition-colors">FAQ</a>
          <button className="bg-blue-600 text-white px-7 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 active:scale-95">
            Falar com Contador
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className={`md:hidden ${isScrolled ? 'text-slate-800' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass border-b overflow-hidden absolute top-full left-0 w-full"
          >
            <div className="flex flex-col p-8 gap-6 text-slate-800 font-bold bg-white">
              <a href="#problemas" onClick={() => setIsMenuOpen(false)}>Dores</a>
              <a href="#servicos" onClick={() => setIsMenuOpen(false)}>Serviços</a>
              <a href="#diferenciais" onClick={() => setIsMenuOpen(false)}>Diferenciais</a>
              <a href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a>
              <button className="bg-blue-600 text-white px-6 py-4 rounded-2xl shadow-lg">Falar com Contador</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 overflow-hidden bg-[#020617]">
    {/* Dynamic Background Elements */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/20 blur-[150px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full"></div>
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
    </div>

    <div className="container mx-auto px-6 relative z-10 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto space-y-10"
      >
        <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md text-blue-400 px-5 py-2 rounded-full text-sm font-bold border border-white/10">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-ping"></span>
          A Inteligência por trás do seu crescimento
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1] tracking-tight">
          Sua contabilidade <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">em tempo real.</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
          Transformamos dados complexos em estratégia pura. Esqueça a burocracia e tome decisões baseadas em números reais.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-blue-500 transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)] group"
          >
            Falar com um contador agora
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
          
          <button className="flex items-center justify-center gap-3 bg-white/5 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white/10 transition-all border border-white/10 backdrop-blur-sm">
            Ver como funciona
          </button>
        </div>

        {/* Floating UI Elements Mockup */}
        <div className="relative mt-20 max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=2000&auto=format&fit=crop" 
              alt="Dashboard" 
              className="w-full h-auto opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
          </div>

          {/* Floating Cards - Ajustados para os cantos e com cores melhores */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-16 -right-16 hidden lg:block bg-blue-900/40 backdrop-blur-2xl p-6 rounded-[2rem] border border-blue-400/30 shadow-[0_20px_50px_rgba(30,58,138,0.5)] z-20 group cursor-default"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/30 rounded-2xl text-blue-300 ring-1 ring-blue-400/50 group-hover:scale-110 transition-transform">
                <TrendingUp size={32} />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-blue-300 font-black uppercase tracking-[0.2em]">Lucratividade</p>
                <p className="text-3xl font-black text-white">+24.8%</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-12 -left-20 hidden lg:block bg-emerald-900/40 backdrop-blur-2xl p-6 rounded-[2rem] border border-emerald-400/30 shadow-[0_20px_50px_rgba(6,78,59,0.5)] z-20 group cursor-default"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-500/30 rounded-2xl text-emerald-300 ring-1 ring-emerald-400/50 group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-emerald-300 font-black uppercase tracking-[0.2em]">Compliance</p>
                <p className="text-xl font-black text-white">100% Seguro</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>

    {/* Trusted By Bar */}
    <div className="container mx-auto px-6 mt-20">
       <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em] text-center mb-10">Integrado com os melhores sistemas</p>
       <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 text-white font-black text-2xl italic">ContaAzul</div>
          <div className="flex items-center gap-2 text-white font-black text-2xl">OMIE</div>
          <div className="flex items-center gap-2 text-white font-black text-2xl">Bling</div>
          <div className="flex items-center gap-2 text-white font-black text-2xl">Nibo</div>
       </div>
    </div>
  </section>
);

const Problems = () => (
  <section id="problemas" className="py-32 bg-white relative overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="inline-block bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-sm font-bold">
            O Desafio de Empreender
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            A burocracia está matando a sua produtividade?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Muitos empresários perdem até 40% do seu tempo lidando com papéis, impostos e planilhas confusas. Nós removemos esse peso para você focar no que realmente importa: **crescer**.
          </p>
          <div className="space-y-4">
            {[
              "Impostos calculados de forma ineficiente",
              "Ausência de visão estratégica do fluxo de caixa",
              "Medo constante de notificações do fisco",
              "Dificuldade em gerir folha de pagamento"
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                  <X size={14} />
                </div>
                {t}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {[
            { icon: <ShieldCheck className="text-red-500" />, title: "Insegurança", desc: "Dúvidas sobre a legislação vigente." },
            { icon: <FileText className="text-amber-500" />, title: "Atrasos", desc: "Multas por prazos perdidos." },
            { icon: <BarChart3 className="text-blue-500" />, title: "Cegueira", desc: "Falta de clareza nos lucros." },
            { icon: <Users className="text-purple-500" />, title: "Abandono", desc: "Falta de suporte do contador." },
          ].map((item, idx) => (
            <motion.div 
              whileHover={{ y: -5 }}
              key={idx} 
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm"
            >
              <div className="mb-4 bg-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm">{item.icon}</div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section className="py-24 bg-blue-600 text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-700 -skew-x-12 translate-x-1/2"></div>
    <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
      <div className="lg:w-1/2 space-y-8">
        <h2 className="text-4xl lg:text-6xl font-black leading-tight">Chegou a era da <br /><span className="text-blue-200">Contabilidade 3.0</span></h2>
        <p className="text-xl text-blue-100">Na Fluxo Digital, não somos apenas contadores. Somos seus parceiros estratégicos de negócio.</p>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="space-y-3">
             <Cpu className="text-blue-200" size={32} />
             <h4 className="font-bold text-xl">Automação Inteligente</h4>
             <p className="text-blue-100 text-sm">Eliminamos erros humanos através de integrações bancárias diretas.</p>
          </div>
          <div className="space-y-3">
             <Globe className="text-blue-200" size={32} />
             <h4 className="font-bold text-xl">Escalabilidade</h4>
             <p className="text-blue-100 text-sm">Seu negócio cresce, e nossa estrutura acompanha cada passo.</p>
          </div>
        </div>
        <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-100 transition-all shadow-xl">Quero modernizar minha empresa</button>
      </div>
      <div className="lg:w-1/2 relative group">
        <div className="absolute -inset-4 bg-white/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <img 
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop" 
          alt="Time Fluxo Digital" 
          className="relative z-10 rounded-[3rem] shadow-2xl border-8 border-white/10"
        />
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="servicos" className="py-32 bg-slate-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-20 max-w-2xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">Tudo o que você precisa em um só lugar</h2>
        <p className="text-slate-600 text-lg">Soluções modulares que se adaptam ao momento da sua jornada empreendedora.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          { title: "Gestão Contábil Mensal", desc: "Compliance total com a legislação brasileira para PMEs e Startups de alto crescimento.", icon: <Briefcase /> },
          { title: "Abertura de Empresa", desc: "Abertura ágil e gratuita* com consultoria para escolha do melhor regime tributário.", icon: <Rocket /> },
          { title: "BPO Financeiro Elite", desc: "Nós assumimos seu contas a pagar e receber, entregando relatórios de fluxo de caixa semanais.", icon: <BarChart3 /> },
          { title: "Consultoria Tributária", desc: "Recuperação de impostos e elisão fiscal inteligente para reduzir custos fixos.", icon: <ShieldCheck /> },
          { title: "Contabilidade Digital MEI", desc: "Suporte especializado para o microempreendedor individual formalizar sua jornada.", icon: <Zap /> },
          { title: "Regularização de Débitos", desc: "Parcelamentos e regularização fiscal para manter suas certidões negativas em dia.", icon: <FileText /> },
        ].map((service, i) => (
          <motion.div 
            whileHover={{ y: -10 }}
            key={i} 
            className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group cursor-default"
          >
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-8">{service.desc}</p>
            <a href="#" className="text-blue-600 font-bold flex items-center gap-2 group/link">
              Falar com especialista <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Differentiators = () => (
  <section id="diferenciais" className="py-32 bg-white">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6 pt-12">
              <div className="bg-blue-600 p-10 rounded-[2.5rem] text-white shadow-2xl shadow-blue-500/40">
                <p className="text-5xl font-black mb-2">+500</p>
                <p className="text-xs opacity-70 uppercase tracking-widest font-black">Clientes Ativos</p>
              </div>
              <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white">
                <p className="text-5xl font-black mb-2">99%</p>
                <p className="text-xs opacity-70 uppercase tracking-widest font-black">NPS (Satisfação)</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-100 p-10 rounded-[2.5rem] text-slate-900">
                <p className="text-5xl font-black mb-2">12</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-black">Anos de Histórico</p>
              </div>
              <div className="bg-purple-600 p-10 rounded-[2.5rem] text-white shadow-2xl shadow-purple-500/40">
                <p className="text-5xl font-black mb-2">R$2B</p>
                <p className="text-xs opacity-70 uppercase tracking-widest font-black">Processados/Ano</p>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-10">
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight">O que nos torna <br /><span className="text-blue-600">incomparáveis.</span></h2>
          <div className="space-y-8">
            {[
              { title: "Segurança de Nível Bancário", desc: "Utilizamos as mesmas tecnologias de criptografia dos maiores bancos do mundo.", icon: <ShieldCheck className="text-blue-600" /> },
              { title: "Inteligência Artificial", desc: "Algoritmos que detectam oportunidades de economia tributária automaticamente.", icon: <Zap className="text-yellow-500" /> },
              { title: "Time de Especialistas", desc: "Não somos generalistas. Temos especialistas por setor econômico (Indústria, Varejo, SaaS).", icon: <Users className="text-purple-600" /> },
            ].map((diff, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {diff.icon}
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-800 mb-2">{diff.title}</h4>
                  <p className="text-slate-600 text-base">{diff.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SocialProof = () => (
  <section className="py-32 bg-slate-900 text-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-24">
        <h2 className="text-4xl lg:text-5xl font-black">Quem confia no nosso fluxo</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {[
          { name: "Carlos Silva", role: "CEO da TechFlow", text: "Migramos para a Fluxo Digital e em 3 meses economizamos R$15k em impostos que pagávamos sem necessidade." },
          { name: "Mariana Costa", role: "Arquiteta Autônoma", text: "O suporte via WhatsApp é surreal. Respostas rápidas e precisas. Sinto que tenho um braço financeiro de verdade." },
          { name: "João Pedro", role: "Founder de E-commerce", text: "O dashboard financeiro deles é viciante. Pela primeira vez na vida eu sei exatamente qual meu lucro líquido por produto." },
        ].map((t, i) => (
          <div key={i} className="bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10 relative hover:bg-white/10 transition-all">
            <div className="absolute top-8 left-10 text-6xl text-blue-500/20 font-serif leading-none">“</div>
            <p className="text-slate-300 mb-10 relative z-10 text-lg italic leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-blue-500">
                <img src={`https://picsum.photos/seed/${i+45}/200`} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-black text-white text-lg leading-none">{t.name}</p>
                <p className="text-xs text-blue-400 mt-2 uppercase font-bold tracking-widest">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  
  const questions = [
    { q: "Quanto custa o serviço de contabilidade?", a: "Nossos honorários são calculados com base no porte, regime tributário e volume de movimentação da sua empresa. Oferecemos planos personalizados que cabem no seu orçamento." },
    { q: "Posso trocar de contador facilmente?", a: "Sim! Nós cuidamos de todo o processo de migração para você, sem cobrança de taxas de adesão. É rápido e seguro." },
    { q: "O atendimento é realmente online?", a: "Sim, somos 100% digitais, mas temos pessoas reais. Você terá um gerente de conta dedicado para tirar dúvidas via WhatsApp, e-mail ou videoconferência." },
    { q: "Vocês atendem minha cidade?", a: "Atendemos empresas em todo o território nacional através de nossa plataforma digital conectada com as principais prefeituras do país." },
    { q: "Quais documentos preciso para abrir empresa?", a: "Geralmente apenas RG, CPF e comprovante de endereço dos sócios, além do IPTU do local onde a empresa será instalada. Nós guiamos você em cada passo." }
  ];

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">Perguntas Frequentes</h2>
          <p className="text-slate-600 text-lg">Transparência total desde o primeiro contato.</p>
        </div>
        <div className="space-y-6">
          {questions.map((item, i) => (
            <div key={i} className={`border-2 rounded-[2rem] overflow-hidden transition-all duration-300 ${openIdx === i ? 'border-blue-600 shadow-2xl shadow-blue-500/10' : 'border-slate-100 hover:border-slate-200'}`}>
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full p-8 text-left flex justify-between items-center bg-white transition-colors"
              >
                <span className="font-black text-slate-800 text-xl">{item.q}</span>
                <div className={`p-2 rounded-full bg-slate-50 transition-transform duration-300 ${openIdx === i ? 'rotate-180 bg-blue-600 text-white' : 'text-slate-400'}`}>
                  <ChevronDown />
                </div>
              </button>
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="px-8 pb-8 text-slate-600 text-lg leading-relaxed border-t border-slate-50 pt-6">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="bg-slate-900 rounded-[4rem] p-16 lg:p-32 text-center text-white shadow-2xl relative overflow-hidden group">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full group-hover:bg-blue-600/40 transition-all duration-700"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 space-y-12">
          <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight italic">O futuro da sua empresa começa <span className="text-blue-500">hoje.</span></h2>
          <p className="text-2xl text-slate-400 mb-12 font-medium">Não deixe para amanhã a lucratividade que você pode ter agora. Nossa primeira consultoria estratégica é por nossa conta.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 bg-blue-600 text-white px-12 py-6 rounded-3xl text-xl font-black hover:bg-blue-500 transition-all shadow-[0_0_50px_rgba(37,99,235,0.3)]"
            >
              <MessageCircle size={28} />
              Quero Crescer Agora
            </motion.button>
            <button className="bg-white/5 border border-white/20 hover:bg-white/10 text-white px-12 py-6 rounded-3xl text-xl font-black transition-all backdrop-blur-sm">
              Falar com Sócio-Diretor
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#020617] text-white pt-32 pb-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
              <BarChart3 size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter">FLUXO<span className="text-blue-500">DIGITAL</span></span>
          </div>
          <p className="text-slate-400 text-base leading-relaxed">
            Especialistas em transformar a complexidade fiscal em crescimento estratégico para empresas que pensam no futuro.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all group">
              <Users size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all group">
              <Briefcase size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-black text-xl mb-10 text-blue-500">Explore</h4>
          <ul className="space-y-4 text-slate-400 font-bold">
            <li><a href="#problemas" className="hover:text-white transition-colors">O Desafio</a></li>
            <li><a href="#servicos" className="hover:text-white transition-colors">Soluções</a></li>
            <li><a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">Dúvidas</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-black text-xl mb-10 text-blue-500">Conecte-se</h4>
          <ul className="space-y-6 text-slate-400 font-bold">
            <li className="flex items-start gap-4">
              <MessageCircle size={24} className="text-blue-600 shrink-0" />
              <div>
                <p className="text-white">Central WhatsApp</p>
                <p className="text-sm font-medium">(11) 98765-4321</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Globe size={24} className="text-blue-600 shrink-0" />
              <div>
                <p className="text-white">Atendimento Global</p>
                <p className="text-sm font-medium">contato@fluxodigital.com.br</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-black text-xl mb-10 text-blue-500">Legal</h4>
          <div className="space-y-4">
            <p className="text-slate-400 text-xs leading-relaxed font-bold">
              FLUXO DIGITAL CONTABILIDADE ESTRATÉGICA LTDA.<br />
              CNPJ: 00.000.000/0001-00<br />
              Sede Administrativa: Av. Paulista, 2000 - SP
            </p>
            <div className="flex gap-4">
               <div className="bg-white/5 px-3 py-1 rounded-lg text-[10px] font-black tracking-widest border border-white/5">LGPD READY</div>
               <div className="bg-white/5 px-3 py-1 rounded-lg text-[10px] font-black tracking-widest border border-white/5">CRC-SP</div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
          © {new Date().getFullYear()} Fluxo Contábil Digital. Inteligência que escala.
        </p>
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
           <a href="#" className="hover:text-white">Termos de Uso</a>
           <a href="#" className="hover:text-white">Privacidade</a>
           <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App ---

function App() {
  return (
    <div className="min-h-screen selection:bg-blue-600 selection:text-white bg-slate-50 font-['Inter']">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Solution />
        <Services />
        <Differentiators />
        <SocialProof />
        <CTASection />
        <FAQ />
      </main>
      <Footer />
      
      {/* Dynamic WhatsApp Button */}
      <motion.a 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        href="#" 
        className="fixed bottom-10 right-10 z-[60] bg-[#25D366] text-white p-5 rounded-3xl shadow-[0_20px_50px_rgba(37,211,102,0.4)] transition-all group overflow-hidden"
      >
        <div className="flex items-center gap-3">
          <MessageCircle size={32} fill="currentColor" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-black text-lg">
            Diagnóstico Grátis
          </span>
        </div>
      </motion.a>
    </div>
  );
}

export default App;
