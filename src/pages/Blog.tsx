
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";

const Blog = () => {
  // Sample blog data - in a real app this would come from an API
  const blogPosts = [
    {
      id: "1",
      title: "El Futuro de la Inteligencia Artificial en los Negocios",
      excerpt: "Exploramos cómo la IA está transformando la manera en que las empresas operan y toman decisiones estratégicas.",
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
      excerpt: "Estrategias esenciales para mantener segura la información de tu empresa en la era digital.",
      date: "10 Marzo 2024",
      author: "María González",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=400&fit=crop"
    },
    {
      id: "4",
      title: "Transformación Digital: Guía Completa",
      excerpt: "Cómo implementar una estrategia de transformación digital exitosa en tu organización.",
      date: "8 Marzo 2024",
      author: "Roberto Silva",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=400&fit=crop"
    },
    {
      id: "5",
      title: "Cloud Computing: Optimizando Costos y Rendimiento",
      excerpt: "Mejores prácticas para maximizar los beneficios de la computación en la nube.",
      date: "5 Marzo 2024",
      author: "Laura Mendez"
    },
    {
      id: "6",
      title: "UX/UI: Diseñando Experiencias Memorables",
      excerpt: "Principios fundamentales para crear interfaces que los usuarios amen utilizar.",
      date: "3 Marzo 2024",
      author: "David Ruiz"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Blog Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Blog Tecnológico
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Mantente al día con las últimas tendencias, insights y mejores prácticas 
              en el mundo de la tecnología empresarial.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
