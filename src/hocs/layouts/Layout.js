import { connect } from "react-redux";
import { motion } from "framer-motion";
import Navigation from "../../components/navigations/Navigation";
import Footer from "../../components/navigations/Footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar fijo arriba */}
      <Navigation />

      {/* Contenido con animación */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="flex-1"
      >
        {children}
      </motion.main>

      {/* Footer fijo abajo */}
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Layout);
