
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">CorpTech</h3>
            <p className="text-gray-300 mb-4">
              Soluciones tecnológicas innovadoras para impulsar tu negocio hacia el futuro.
            </p>
            <p className="text-gray-400 text-sm">
              © 2024 CorpTech. Todos los derechos reservados.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Desarrollo Web</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Consultoría</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Soporte</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-300">
              <li>info@corptech.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Tech Street</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
