//Components//
import About from "./Components/About";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Services from "./Components/Services";
import Work from "./Components/Work";
import Particles from "./Components/Particles";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Particles />
      <Header />
      <main className="relative z-10">
        <Banner />
        <About />
        <Services />
        <Work />
        <Contact />
      </main>
      <Nav />
    </div>
  );
}

export default App;
