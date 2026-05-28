import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import CV from './components/CV';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Projetos />
        <CV />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;
