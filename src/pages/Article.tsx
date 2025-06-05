
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Article = () => {
  const { id } = useParams();

  // Sample article data - in a real app this would come from an API
  const articles = {
    "1": {
      title: "El Futuro de la Inteligencia Artificial en los Negocios",
      content: `
        <p>La inteligencia artificial (IA) está revolucionando la manera en que las empresas operan, desde la automatización de procesos hasta la toma de decisiones estratégicas basadas en datos.</p>
        
        <h2>Impacto en la Productividad</h2>
        <p>Las empresas que implementan IA reportan aumentos significativos en productividad, con reducciones de hasta 40% en tareas repetitivas y mejoras del 25% en la precisión de predicciones comerciales.</p>
        
        <h2>Aplicaciones Principales</h2>
        <ul>
          <li><strong>Atención al Cliente:</strong> Chatbots inteligentes que resuelven consultas 24/7</li>
          <li><strong>Análisis Predictivo:</strong> Anticipación de tendencias de mercado y comportamiento del consumidor</li>
          <li><strong>Automatización de Procesos:</strong> Optimización de workflows y reducción de errores humanos</li>
        </ul>
        
        <h2>Implementación Estratégica</h2>
        <p>Para una implementación exitosa de IA, las empresas deben enfocarse en:</p>
        <p>1. Identificar casos de uso específicos donde la IA puede agregar valor inmediato</p>
        <p>2. Invertir en capacitación del personal para trabajar junto con sistemas de IA</p>
        <p>3. Establecer marcos éticos y de governance para el uso responsable de la tecnología</p>
        
        <h2>El Futuro está Aquí</h2>
        <p>La IA no es solo una tendencia futura; es una realidad presente que está transformando industrias completas. Las empresas que adopten estas tecnologías hoy estarán mejor posicionadas para competir en el mercado del mañana.</p>
      `,
      date: "15 Marzo 2024",
      author: "Ana García",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=600&fit=crop"
    },
    "2": {
      title: "Desarrollo Web Moderno: Tendencias 2024",
      content: `
        <p>El desarrollo web continúa evolucionando a un ritmo acelerado, con nuevas tecnologías y frameworks que prometen mejorar tanto la experiencia del desarrollador como del usuario final.</p>
        
        <h2>Frameworks Frontend Dominantes</h2>
        <p>React, Vue.js y Angular siguen siendo los líderes, pero nuevos contendientes como Svelte y SolidJS están ganando tracción por su rendimiento superior y sintaxis más limpia.</p>
        
        <h2>Server-Side Rendering (SSR)</h2>
        <p>El SSR ha regresado con fuerza, ofreciendo beneficios significativos en SEO y tiempo de carga inicial. Frameworks como Next.js y Nuxt.js están liderando esta tendencia.</p>
      `,
      date: "12 Marzo 2024",
      author: "Carlos López",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop"
    }
  };

  const article = articles[id as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Artículo no encontrado</h1>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2" size={20} />
              Volver al Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Article Header */}
      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="mr-2" size={20} />
            Volver al Blog
          </Link>
          
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>
            <div className="flex items-center text-gray-600 text-sm">
              <span>Por {article.author}</span>
              <span className="mx-2">•</span>
              <span>{article.date}</span>
            </div>
          </div>

          {article.image && (
            <div className="aspect-video overflow-hidden rounded-lg mb-8">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Article;
