
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, MessageSquare, Clock, Users, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";

const Index = () => {
  const services = [
    {
      title: "Desarrollo Web",
      description: "Creamos aplicaciones web modernas y escalables con las últimas tecnologías.",
      icon: "🚀"
    },
    {
      title: "Consultoría Tecnológica", 
      description: "Asesoramos a tu empresa en la transformación digital y optimización de procesos.",
      icon: "💡"
    },
    {
      title: "Soporte 24/7",
      description: "Brindamos soporte técnico continuo para garantizar el funcionamiento óptimo.",
      icon: "🛠️"
    }
  ];

  const assistantSteps = [
    {
      step: "1",
      title: "Haz tu pregunta",
      description: "Escribe cualquier consulta sobre nuestros servicios o tecnología",
      icon: <MessageSquare className="w-8 h-8 text-blue-600" />
    },
    {
      step: "2", 
      title: "Procesamiento inteligente",
      description: "Nuestro asistente analiza tu consulta y busca la mejor respuesta",
      icon: <Clock className="w-8 h-8 text-blue-600" />
    },
    {
      step: "3",
      title: "Respuesta personalizada",
      description: "Recibes una respuesta detallada con enlaces y recursos útiles",
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />
    }
  ];

  const featuredPosts = [
    {
      id: "1",
      title: "El Futuro de la Inteligencia Artificial en los Negocios",
      excerpt: "Exploramos cómo la IA está transformando la manera en que las empresas operan.",
      date: "15 Marzo 2024",
      author: "Ana García",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop"
    },
    {
      id: "2",
      title: "Desarrollo Web Moderno: Tendencias 2024", 
      excerpt: "Las últimas tecnologías y frameworks que están definiendo el futuro del desarrollo web.",
      date: "12 Marzo 2024",
      author: "Carlos López",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop"
    },
    {
      id: "3",
      title: "Ciberseguridad: Protegiendo tu Empresa Digital",
      excerpt: "Estrategias esenciales para mantener segura la información de tu empresa.",
      date: "10 Marzo 2024", 
      author: "María González",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=400&fit=crop"
    }
  ];

  const testimonials = [
    {
      name: "Roberto Martínez",
      position: "CEO, TechSolutions",
      content: "CorpTech transformó completamente nuestra infraestructura digital. El asistente virtual ha mejorado significativamente nuestra atención al cliente.",
      image: "👨‍💼"
    },
    {
      name: "Laura Hernández", 
      position: "CTO, InnovaCorp",
      content: "La consultoría tecnológica que recibimos fue excepcional. Nos ayudaron a optimizar nuestros procesos y reducir costos en un 40%.",
      image: "👩‍💻"
    },
    {
      name: "Carlos Vega",
      position: "Director IT, GlobalTech",
      content: "El soporte 24/7 es increíble. Siempre están disponibles cuando los necesitamos y resuelven cualquier problema rápidamente.",
      image: "👨‍🔧"
    }
  ];

  const faqs = [
    {
      question: "¿Qué servicios ofrece CorpTech?",
      answer: "Ofrecemos desarrollo web, consultoría tecnológica, soporte 24/7, y soluciones de transformación digital personalizadas para tu empresa."
    },
    {
      question: "¿Cómo funciona el asistente virtual?",
      answer: "Nuestro asistente virtual utiliza inteligencia artificial para responder consultas en tiempo real, proporcionando información precisa sobre nuestros servicios y soluciones técnicas."
    },
    {
      question: "¿Cuánto tiempo toma implementar una solución?",
      answer: "El tiempo de implementación varía según la complejidad del proyecto. Proyectos simples pueden tomar 2-4 semanas, mientras que soluciones más complejas pueden requerir 2-6 meses."
    },
    {
      question: "¿Ofrecen soporte post-implementación?",
      answer: "Sí, ofrecemos soporte continuo 24/7 para todas nuestras soluciones, incluyendo mantenimiento, actualizaciones y resolución de problemas."
    },
    {
      question: "¿Pueden integrar con sistemas existentes?",
      answer: "Absolutamente. Nos especializamos en integraciones y podemos conectar nuestras soluciones con la mayoría de sistemas empresariales existentes."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Innovación Tecnológica
              <span className="block text-blue-200">para tu Empresa</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Transformamos ideas en soluciones digitales que impulsan el crecimiento 
              y la eficiencia de tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-blue-600">
                Comenzar Proyecto
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Conocer Más
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits/Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir CorpTech?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nos destacamos por ofrecer soluciones tecnológicas innovadoras que generan resultados medibles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How Assistant Works Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Cómo funciona nuestro asistente?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Obtén respuestas instantáneas y personalizadas con nuestro asistente virtual inteligente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {assistantSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {step.icon}
                </div>
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Artículos Destacados
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mantente informado con nuestros últimos insights y tendencias tecnológicas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/blog">
              <Button variant="outline" size="lg">
                Ver todos los artículos
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conoce las experiencias de empresas que han transformado su negocio con CorpTech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-4">{testimonial.image}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600">
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para Transformar tu Negocio?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Agenda una demo personalizada y descubre cómo nuestras soluciones pueden impulsar tu empresa al siguiente nivel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-blue-600">
              Agendar Demo Gratuita
              <Users className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Solicitar Consulta
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
