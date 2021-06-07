import './App.css';
import NavBar from './components/NavBar'
import AboutSection from './components/AboutSection'
import SkillSection from './components/SkillSection';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import FadeIn from 'react-fade-in'


function App() {
  return (
    <div className="App">
      <FadeIn>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
        <AboutSection />
          </Route>
        </Switch>
      </BrowserRouter>
      <SkillSection />
      <Projects />
      <Contact />
      <Footer />
      </FadeIn>
    </div>
  );
}

export default App;
