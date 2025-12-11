import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Users, BookOpen, Star, CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";

/**
 * Design: Minimalismo Científico com Toque Humanizado
 * Cores: Azul profundo (#1E40AF) + Verde menta (#10B981) + Branco
 * Tipografia: Poppins (títulos) + Inter (corpo)
 * Objetivo: Capturar leads para serviços premium, sociais e infoproduto
 */

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "evaluation",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você integraria com um serviço de email ou backend
    console.log("Form submitted:", formData);
    alert("Obrigado! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", phone: "", service: "evaluation" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-blue-700" />
            <span className="text-xl font-bold text-blue-700">Dra. Helenara</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-600 hover:text-blue-700 transition">
              Serviços
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-700 transition">
              Sobre
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-700 transition">
              Depoimentos
            </a>
            <a href="#infoproduto" className="text-gray-600 hover:text-blue-700 transition">
              Guia Digital
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-700 transition">
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        <div className="container py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="display-large text-blue-900">
                Clareza, Cuidado e Ciência
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Sua jornada cognitiva começa aqui. Avaliação neuropsicológica especializada em TEA, TDAH e transtornos do neurodesenvolvimento com formação USP e atendimento humanizado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-blue-700 hover:bg-blue-800 text-white"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Agendar Avaliação
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-700 text-blue-700 hover:bg-blue-50"
                  onClick={() => document.getElementById("infoproduto")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Conhecer Guia Digital
                </Button>
              </div>
              <div className="flex gap-6 pt-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">Formação USP</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">CRP 24/02216</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/images/hero-neuropsicologia.png"
                alt="Dra. Helenara em consultório"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="display-medium text-blue-900 mb-4">
              Modelo Híbrido de Serviços
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Três pilares de atendimento para atender diferentes necessidades e orçamentos, mantendo excelência e ética profissional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Premium Evaluation */}
            <Card className="p-8 border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="heading-medium text-blue-900 mb-3">
                Avaliação Completa
              </h3>
              <p className="text-gray-600 mb-4">
                Avaliação neuropsicológica completa com 6-10 sessões, laudo detalhado e devolutiva personalizada.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Anamnese completa</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Bateria de testes</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Laudo detalhado</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Devolutiva com recomendações</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-blue-700 mb-6">
                R$ 2.500
              </div>
              <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">
                Solicitar Avaliação
              </Button>
            </Card>

            {/* Group Screening */}
            <Card className="p-8 border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="heading-medium text-green-900 mb-3">
                Triagem em Grupo
              </h3>
              <p className="text-gray-600 mb-4">
                Sessão de rastreio cognitivo e orientação inicial para pais e educadores. Identifica necessidade de aprofundamento.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Rastreio cognitivo</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Orientação prática</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Indicações de próximos passos</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Ambiente acolhedor</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-green-700 mb-6">
                R$ 200
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Participar da Triagem
              </Button>
            </Card>

            {/* Digital Guide */}
            <Card className="p-8 border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="heading-medium text-blue-900 mb-3">
                Guia Digital
              </h3>
              <p className="text-gray-600 mb-4">
                E-book com estratégias práticas para pais e educadores. Psicoeducação sobre TEA, TDAH e suporte cognitivo.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Estratégias práticas</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Acessível e acessível</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Baseado em evidências</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Acesso imediato</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-blue-700 mb-6">
                R$ 97
              </div>
              <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">
                Comprar Agora
              </Button>
            </Card>
          </div>

          {/* Services Illustration */}
          <div className="mt-16 flex justify-center">
            <img
              src="/images/services-illustration.png"
              alt="Ilustração dos três serviços"
              className="max-w-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-blue-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="display-medium text-blue-900 mb-6">
                Sobre a Dra. Helenara
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="body-large">
                  Psicóloga formada pela Faculdade da Amazônia Ocidental, especializada em Neuropsicologia Clínica pela Universidade de São Paulo (USP). Registro CRP: 24/02216.
                </p>
                <p className="body-large">
                  Dedicada a ajudar crianças, adolescentes e adultos a entenderem melhor suas dificuldades cognitivas e emocionais. Trabalho com empatia e cuidado, respeitando a individualidade de cada pessoa.
                </p>
                <p className="body-large">
                  Especialização em Avaliação e Intervenção Cognitiva, com foco em Transtorno do Espectro Autista (TEA), Transtorno do Déficit de Atenção e Hiperatividade (TDAH), Transtorno de Desenvolvimento Intelectual e Transtorno Específico de Aprendizagem.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Formação de Prestígio (USP)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Atendimento Humanizado</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Ética Profissional Rigorosa</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Responsabilidade Social</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-600">
              <div className="space-y-6">
                <div>
                  <h3 className="heading-medium text-blue-900 mb-2">Avaliação Neuropsicológica</h3>
                  <p className="text-gray-600">Exame aprofundado que analisa as condições cognitivas e emocionais, identificando transtornos e orientando intervenções personalizadas.</p>
                </div>
                <div>
                  <h3 className="heading-medium text-blue-900 mb-2">Acompanhamento Clínico</h3>
                  <p className="text-gray-600">Monitoramento da evolução cognitiva em casos de degeneração (Alzheimer) ou recuperação em reabilitação.</p>
                </div>
                <div>
                  <h3 className="heading-medium text-blue-900 mb-2">Orientação Familiar</h3>
                  <p className="text-gray-600">Estratégias práticas para pais e educadores apoiarem o desenvolvimento cognitivo e emocional.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="display-medium text-blue-900 mb-4">
              Depoimentos de Clientes
            </h2>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-lg text-gray-600">Avaliação média: 4,6/5,0 (12 avaliações)</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Randélia Oliveira Da Silva",
                text: "Fui muito bem recebida, meu filho amou a doutora Helenara, foi muito gentil com ele. Uma ótima profissional, voltarei outras vezes.",
                rating: 5,
              },
              {
                name: "Luzia Aparecida",
                text: "Uma profissional de excelência, muito amável, competente e atenciosa. Recomendo fortemente.",
                rating: 5,
              },
              {
                name: "Daniel Barbosa",
                text: "Muito bom, excelente profissional. Atendimento de qualidade e resultado satisfatório.",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-blue-900">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Guide Section */}
      <section id="infoproduto" className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/autism-tdah-illustration.png"
                alt="Ilustração inclusiva de famílias"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="display-medium text-blue-900">
                Guia Digital: Estratégias Práticas para Pais e Educadores
              </h2>
              <p className="text-lg text-gray-600">
                E-book completo com estratégias baseadas em evidências para apoiar crianças com TEA, TDAH e outras dificuldades cognitivas.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Psicoeducação Clara</h4>
                    <p className="text-sm text-gray-600">Entenda TEA, TDAH e transtornos de aprendizagem</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Estratégias Práticas</h4>
                    <p className="text-sm text-gray-600">Técnicas do dia a dia para casa e escola</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Baseado em Evidências</h4>
                    <p className="text-sm text-gray-600">Fundamentado em pesquisa científica</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Acesso Imediato</h4>
                    <p className="text-sm text-gray-600">Baixe assim que comprar</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <div className="text-4xl font-bold text-blue-700 mb-4">R$ 97</div>
                <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Comprar Guia Digital Agora
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  *Conteúdo educativo. Não substitui avaliação neuropsicológica presencial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-medium text-blue-900 mb-4">
                Entre em Contato
              </h2>
              <p className="text-lg text-gray-600">
                Agende sua avaliação ou tire dúvidas sobre nossos serviços
              </p>
            </div>

            <Card className="p-8 border-2 border-blue-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                      placeholder="(68) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Serviço de Interesse *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                  >
                    <option value="evaluation">Avaliação Completa (R$ 2.500)</option>
                    <option value="screening">Triagem em Grupo (R$ 200)</option>
                    <option value="guide">Guia Digital (R$ 97)</option>
                    <option value="other">Outro</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white"
                >
                  Enviar Mensagem
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Seus dados serão tratados com confidencialidade conforme a LGPD.
                </p>
              </form>
            </Card>

            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Localização</h4>
                <p className="text-gray-600">Rio Branco, Acre</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Registro Profissional</h4>
                <p className="text-gray-600">CRP 24/02216</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Disponibilidade</h4>
                <p className="text-gray-600">Presencial e Online</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-6 h-6" />
                <span className="font-bold">Dra. Helenara Chaves</span>
              </div>
              <p className="text-blue-100 text-sm">
                Neuropsicologia Clínica com Excelência e Humanidade
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li><a href="#services" className="hover:text-white transition">Avaliação Completa</a></li>
                <li><a href="#services" className="hover:text-white transition">Triagem em Grupo</a></li>
                <li><a href="#infoproduto" className="hover:text-white transition">Guia Digital</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Informações</h4>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li><a href="#about" className="hover:text-white transition">Sobre</a></li>
                <li><a href="#testimonials" className="hover:text-white transition">Depoimentos</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Profissional</h4>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li>CRP 24/02216</li>
                <li>Formação: USP</li>
                <li>Rio Branco, AC</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8 text-center text-blue-100 text-sm">
            <p>&copy; 2024 Dra. Helenara Chaves. Todos os direitos reservados.</p>
            <p className="mt-2">Desenvolvido com ❤️ para a comunidade do Acre</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
