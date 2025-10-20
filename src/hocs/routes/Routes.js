import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from "../../components/others/ScrollToTop";
import Home from '../../containers/pages/Home';
import Error404 from '../../containers/errors/Error404';
import Developer from '../../containers/pages/Developer';
import About from '../../containers/pages/About';
import Contact from '../../containers/pages/Contact'; 

<Route path="/contact" element={<Contact />} />


function AnimatedRoutes() {    
    const location = useLocation();
    return (
        <>
           
            <ScrollToTop />
                <Routes location={location} key={location.pathname}>
                <Route path="*" element={<Error404/>}/>
    
                <Route path="/" element={<Home/>}/>
                <Route path="/inicio" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/developer" element={<Developer/>}/>
                <Route path="/contact" element={<Contact/>}/>

               
          </Routes>
        </>
    );
}

export default AnimatedRoutes;
