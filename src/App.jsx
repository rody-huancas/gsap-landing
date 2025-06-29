import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="flex-center h-dvh">
      <h1 className="text-3xl text-indigo-600">Hola GSAP</h1>
    </div>
  );
};

export default App;
