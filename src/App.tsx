import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
// import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience/>
        {/* <Projects /> */}
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
