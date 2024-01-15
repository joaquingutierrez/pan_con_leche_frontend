import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header, Home, Footer, ItemListContainer, AboutUs, ContactUs } from './componentContainer';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path='/nosotros' element={<AboutUs />} />
            <Route path='/contacto' element={<ContactUs />} />
          </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
