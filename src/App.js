import { useState } from 'react';
import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Input,
  Label,
  Link,
  LinkDesign,
  ShellBar
} from '@ui5/webcomponents-react';
import './App.css';
import { Home } from './component/Home';
import { NavBar } from './component/NavBar';
import { Contact } from './component/Contact';
import { About } from './component/About';
import { Footer } from './component/Footer';
import { Pro } from './component/Pro';
import {Projects} from './component/Projects';
import { Schooling } from './component/Schooling';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function HomePage() {
  return (
    <>
      <Home />
      <Pro />
      <Projects/>
      <Schooling/>
    </>
  );
}

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/workexperience" element={<Pro />} /> 
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/*" element={<HomePage />} /> 
          <Route path="/education" element={<Schooling/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
