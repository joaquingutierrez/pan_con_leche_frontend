import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header, Home, Footer, ItemListContainer, AboutUs, ContactUs, UserSession, ItemDetailContainer } from './componentContainer';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path='/productos/:id' element={<ItemDetailContainer />} />
            <Route path='/nosotros' element={<AboutUs />} />
            <Route path='/contacto' element={<ContactUs />} />
            <Route path='/sesion' element={<UserSession />} />
          </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
