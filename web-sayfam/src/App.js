import Header from './components/Header';
import About from './components/About';
import Profile from './components/Profile'
import Skills from './components/Skills'
import Projects from './components/Projects';
import Footer from './components/Footer';
import SwitchMode from './components/SwitchMode';
import Form from './components/Form';
import {Routes, Route} from 'react-router-dom';
import useMode from './hooks/useMode';

import './App.css';

function App() {
  const [mode, changeMode] = useMode("light");

  return (
    <div className={"App dark:bg-zinc-900"}>
      <Routes>
        <Route path="/" element={
        <>
        <SwitchMode mode={mode} changeMode={changeMode} />
          <Header />
          <About />
          <Skills />
          <Profile />
          <Projects />
          <Footer /> 
          </>
        }>
        </Route>

        <Route path="/hire" element={<Form />}>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
