import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, MessageCircle, Calendar, CreditCard, Clock, Star, ChevronRight, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <header className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">Atende Center</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-blue-100">
              Início
            </a>
            <a href="#" className="text-white hover:text-blue-100">
              Recursos
            </a>
            <a href="#" className="text-white hover:text-blue-100">
              Preços
            </a>
            <a href="#" className="text-white hover:text-blue-100">
              Contato
            </a>
          </nav>
          <Button
            variant="outline"
            className="hidden md:flex bg-transparent text-white border-white hover:bg-white hover:text-blue-700"
          >
            Entrar
          </Button>
        </header>
        <div className="container mx-auto px-4 pt-8 pb-20 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Transforme seus serviços em assinaturas recorrentes de forma simples e automática!
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Gestão de cobranças e agendamentos via WhatsApp para profissionais liberais e pequenas empresas.
            </p>
            {/* <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-bold text-lg px-8 py-6">
              Comece Agora - Grátis por 30 Dias!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button> */}
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src="/IMG_4517.png?height=600&width=400"
                alt="Plataforma de gestão de assinaturas"
                width={300}
                height={500}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <MessageCircle className="h-8 w-8 text-green-500 mr-2" />
                  <div>
                    <p className="text-blue-800 font-bold">WhatsApp integrado</p>
                    <p className="text-gray-600 text-sm">Gestão completa via chat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem and Solution Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
              Cansado de gerenciar cobranças manualmente?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Pare de perder tempo e dinheiro com processos manuais e confusos. Nossa plataforma automatiza toda a
              gestão de assinaturas e agendamentos diretamente pelo WhatsApp, para que você foque no que realmente
              importa: atender seus clientes!
            </p>
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              Veja como funciona
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-red-500 mb-4">Antes</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-3 mt-1">
                    <Clock className="h-5 w-5 text-red-500" />
                  </div>
                  <p className="text-gray-700">Horas perdidas com cobranças manuais</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-3 mt-1">
                    <Clock className="h-5 w-5 text-red-500" />
                  </div>
                  <p className="text-gray-700">Clientes esquecendo de pagar</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-3 mt-1">
                    <Clock className="h-5 w-5 text-red-500" />
                  </div>
                  <p className="text-gray-700">Agendamentos desorganizados</p>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-green-500 mb-4">Depois</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="text-gray-700">Cobranças 100% automatizadas</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="text-gray-700">Pagamentos recorrentes garantidos</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="text-gray-700">Sistema de agendamento integrado</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-16">Principais Recursos</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <CreditCard className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Gestão de Assinaturas Recorrentes</h3>
                <p className="text-gray-600">
                  Controle completo das cobranças, automatização e integração com métodos de pagamento.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <MessageCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Chatbot Inteligente no WhatsApp</h3>
                <p className="text-gray-600">
                  Seus clientes consultam, contratam, editam e cancelam assinaturas diretamente pelo chatbot.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Agendamento Integrado</h3>
                <p className="text-gray-600">
                  Para profissionais da saúde e estética, com diferenciação de preços para assinantes e não assinantes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <CreditCard className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Pagamentos Rápidos e Simples</h3>
                <p className="text-gray-600">
                  Ofereça opções flexíveis, incluindo assinaturas, pagamentos únicos e parcelamentos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="w-full py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-16">
            Depoimentos e Cases de Sucesso
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="João Silva"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-blue-800">João Silva</p>
                    <p className="text-gray-600 text-sm">Fisioterapeuta</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "Reduzi 80% do tempo gasto com cobranças e ainda aumentei minha base de assinantes!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Ana Souza"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-blue-800">Ana Souza</p>
                    <p className="text-gray-600 text-sm">Esteticista</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "Meus clientes adoram a facilidade de agendar consultas pelo WhatsApp. Super recomendo!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Carlos Mendes"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-blue-800">Carlos Mendes</p>
                    <p className="text-gray-600 text-sm">Personal Trainer</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "Desde que comecei a usar, minhas receitas aumentaram em 40%. A plataforma é incrível!"
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              Confira mais histórias de sucesso
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section> */}

      {/* Live Demo Section */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">Experimente a Automação na Prática</h2>
            <p className="text-lg text-gray-700 mb-8">
              Quer ver como funciona? Clique abaixo para testar o chatbot agora mesmo!
            </p>
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold">
              <MessageCircle className="mr-2 h-5 w-5" />
              Teste o Chatbot Agora
            </Button>

            <div className="mt-12 relative">
              <Image
                src="/IMG_4517.png?height=500&width=800"
                alt="Demonstração do chatbot"
                width={800}
                height={500}
                className="rounded-lg shadow-xl mx-auto"
              />
              {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-blue-600 rounded-full p-5 cursor-pointer hover:bg-blue-700 transition-colors">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-6">
            Escolha o Plano Perfeito para o Seu Negócio
          </h2>
          <p className="text-lg text-center text-gray-700 mb-16 max-w-3xl mx-auto">
            Todos os planos incluem 30 dias grátis. Sem compromisso, cancele quando quiser.
          </p>

          <Tabs defaultValue="monthly" className="max-w-4xl mx-auto">
            <TabsList className="grid w-[400px] grid-cols-2 mx-auto mb-8">
              <TabsTrigger value="monthly">Mensal</TabsTrigger>
              <TabsTrigger value="yearly">Anual (20% de desconto)</TabsTrigger>
            </TabsList>

            <TabsContent value="monthly">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-2 border-gray-200 hover:border-blue-500 transition-colors">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Básico</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-blue-800">R$99</span>
                      <span className="text-gray-600">/mês</span>
                    </div>
                    <p className="text-gray-600 mb-6">Ideal para profissionais autônomos.</p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Até 50 assinantes</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Chatbot no WhatsApp</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Agendamento básico</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Assine Agora</Button>
                  </CardContent>
                </Card>

                <Card className="border-2 border-blue-500 relative">
                  <Badge className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/2 bg-blue-600">
                    Mais Popular
                  </Badge>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Profissional</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-blue-800">R$199</span>
                      <span className="text-gray-600">/mês</span>
                    </div>
                    <p className="text-gray-600 mb-6">Perfeito para pequenas empresas.</p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Até 200 assinantes</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Chatbot personalizado</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Agendamento avançado</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Relatórios detalhados</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Assine Agora</Button>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-200 hover:border-blue-500 transition-colors">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Premium</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-blue-800">R$349</span>
                      <span className="text-gray-600">/mês</span>
                    </div>
                    <p className="text-gray-600 mb-6">Para empresas em crescimento.</p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Assinantes ilimitados</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Chatbot com IA avançada</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Agendamento premium</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">API completa</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Suporte prioritário</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Assine Agora</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="yearly">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-2 border-gray-200 hover:border-blue-500 transition-colors">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Básico</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-blue-800">R$79</span>
                      <span className="text-gray-600">/mês</span>
                    </div>
                    <p className="text-gray-600 mb-6">Ideal para profissionais autônomos.</p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Até 50 assinantes</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Chatbot no WhatsApp</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Agendamento básico</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Assine Agora</Button>
                  </CardContent>
                </Card>

                <Card className="border-2 border-blue-500 relative">
                  <Badge className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/2 bg-blue-600">
                    Mais Popular
                  </Badge>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Profissional</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-blue-800">R$159</span>
                      <span className="text-gray-600">/mês</span>
                    </div>
                    <p className="text-gray-600 mb-6">Perfeito para pequenas empresas.</p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Até 200 assinantes</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Chatbot personalizado</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Agendamento avançado</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Relatórios detalhados</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Assine Agora</Button>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-200 hover:border-blue-500 transition-colors">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Premium</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-blue-800">R$279</span>
                      <span className="text-gray-600">/mês</span>
                    </div>
                    <p className="text-gray-600 mb-6">Para empresas em crescimento.</p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Assinantes ilimitados</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Chatbot com IA avançada</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Agendamento premium</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">API completa</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Suporte prioritário</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Assine Agora</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Todos os planos incluem período gratuito de 30 dias. Sem compromisso.</p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-6">
              Assine Agora - Grátis por 30 Dias!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="w-full bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Sobre Nós</h3>
              <p className="text-blue-200 mb-4">
                Somos uma plataforma inovadora que automatiza a gestão de assinaturas e agendamentos via WhatsApp.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-200">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-200">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-200">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Recursos
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Preços
                  </a>
                </li> */}
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Sobre Nós
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Blog
                  </a>
                </li> */}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Suporte</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Documentação
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Tutoriais
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Status
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Termos de Serviço
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Política de Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    LGPD
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-12 pt-8 text-center">
            <p className="text-blue-200">
              &copy; {new Date().getFullYear()} Atende Center. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

