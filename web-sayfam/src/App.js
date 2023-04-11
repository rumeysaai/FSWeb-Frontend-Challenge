import Header from './components/Header';
import About from './components/About';
import Profile from './components/Profile'
import Skills from './components/Skills'
import Projects from './components/Projects';
import Footer from './components/Footer';

import './App.css';
import SwitchMode from './components/SwitchMode';
import useMode from './hooks/useMode';

function App() {
  const [mode, changeMode] = useMode("light");
  
  return (
    <div className="App dark:bg-zinc-900">
      <SwitchMode changeMode={changeMode}/>
      <Header />
      <About />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
