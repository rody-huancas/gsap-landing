import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Art from "./components/Art";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Cocktails from "./components/Cocktails";
import Contact from "./components/Contact";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  );
};

export default App;
