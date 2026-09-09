import { Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppWidget from './components/WhatsAppWidget.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import ScrollTopButton from './components/ScrollTopButton.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import WebsiteDevelopment from './pages/WebsiteDevelopment.jsx'
import MobileAppDevelopment from './pages/MobileAppDevelopment.jsx'
import VideoEditing from './pages/VideoEditing.jsx'
import DigitalMarketing from './pages/DigitalMarketing.jsx'
import WebApplications from './pages/WebApplications.jsx'

export default function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <ScrollToTop />
        <Navbar />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/website-development" element={<WebsiteDevelopment />} />
            <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/video-editing-services" element={<VideoEditing />} />
            <Route path="/digital-marketing-services" element={<DigitalMarketing />} />
            <Route path="/web-applications-development" element={<WebApplications />} />
            {/* redirects: old landing-page URLs */}
            <Route path="/video-editing" element={<Navigate to="/video-editing-services" replace />} />
            <Route path="/digital-marketing" element={<Navigate to="/digital-marketing-services" replace />} />
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
