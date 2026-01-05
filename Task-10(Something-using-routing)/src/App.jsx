import Home from "./components/Home";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Mens from "./pages/Mens";
import Women from "./pages/Women";
import Notfound from "./pages/Notfound";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Product" element={<Product />}>
          <Route path="Mens" element={<Mens />} />
          <Route path="Women" element={<Women />} />
        </Route>

        <Route path="*" element={<Notfound />}></Route>

        <Route path="Courses" element={<Courses />} />
        <Route path="/Courses/:id" element={<CourseDetails />}/>

        
      </Routes>

      <Footer />
    </>
  );
}

export default App;
