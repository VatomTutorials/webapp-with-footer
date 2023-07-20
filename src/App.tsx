import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import HomePage from './pages/Home';
import AboutPage from './pages/About';

function App() {
  return (
    <BrowserRouter basename={"/" }>
    	<div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App


// <Header />
// <Footer />
// <p> footer </p>