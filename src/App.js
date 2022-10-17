import "./App.css"
import { useContext } from 'react';
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Main from "./Main";
import Navigation from "./Navigation";
import { ThemeContext } from './ThemeContext';

import Contact from "./Contact";
import Detail from "./Detail";
import AboutUs from "./AboutUs";
import News from "./News";

function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className="App" style={{ backgroundColor: theme.backgroundColor }}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about_us' element={<AboutUs />}></Route>
        <Route path='/news' element={<News />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
