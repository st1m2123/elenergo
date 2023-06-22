import './App.css';
import Header from './components/header/header';
import { BrowserRouter } from "react-router-dom"
import Works from './components/main/works';
import ContactUs from './components/footer/contactUs'
import Footer from './components/footer/footer';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './components/pages/homePage';
import Services from './components/pages/services';
import Contact from './components/pages/contact';
import About from './components/pages/about';
import CompanyProjects from './components/pages/companyProjects'
import { PostContext, ModalContext } from './components/context/postContext';
import { useState } from 'react';
import PostPage from './components/pages/post'
import { ModalWindows } from './components/elements/modal/ModalWindows.jsx';

function App() {
  const [postContext, setPostContext] = useState([]);
  const [modalContext, setModalContext] = useState([1]);
  return (
    <>
    <PostContext.Provider value={[postContext, setPostContext]}>
    <ModalContext.Provider value={[modalContext, setModalContext]}>
      <ModalWindows/>
      <Header />
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='companyProjects' element={<CompanyProjects/>}/>
      <Route path='companyProjects/:id' element={<PostPage/>}/>
    </Routes>
      <ContactUs />
      <Footer />
      </ModalContext.Provider>
      </PostContext.Provider>
    </>
  );
}

export default App;
