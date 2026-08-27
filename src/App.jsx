import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppWidget from './components/WhatsAppWidget.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import ScrollTopButton from './components/ScrollTopButton.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <CustomCursor />
        <ScrollToTop />
        <Navbar />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppWidget />
        <ScrollTopButton />
      </ErrorBoundary>
    </ThemeProvider>
  )
}
