// import Navbar from './components/Navbar'
// import CustomCursor from './components/CustomCursor'
// import ScrollToTop from './components/ScrollToTop'
// import Preloader from './components/Preloader'
// import Hero from './sections/Hero'
// import LogoStrip from './sections/LogoStrip'
// import Statement from './sections/Statement'
// import Differentiators from './sections/Differentiators'
// import ReadyCTA from './sections/ReadyCTA'
// import PlatformTabs from './sections/PlatformTabs'
// import Products from './sections/Products'
// import Steps from './sections/Steps'
// import Security from './sections/Security'
// import Testimonials from './sections/Testimonials'
// import Pricing from './sections/Pricing'
// import FAQ from './sections/FAQ'
// import IntegrationCTA from './sections/IntegrationCTA'
// import Footer from './sections/Footer'

// export default function App() {
//   return (
//     <div className="relative min-h-screen bg-black text-white">
//       <div className="noise-overlay" />
//       <Preloader />
//       <CustomCursor />
//       <Navbar />
//       <main>
//         <Hero />
//         <LogoStrip />
//         <Statement />
//         <Differentiators />
//         <ReadyCTA />
//         <PlatformTabs />
//         <Products />
//         <Steps />
//         <Security />
//         <Testimonials />
//         <Pricing />
//         <FAQ />
//         <IntegrationCTA />
//       </main>
//       <Footer />
//       <ScrollToTop />
//     </div>
//   )
// }
import { useState } from 'react'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import ScrollToTop from './components/ScrollToTop'
import Preloader from './components/Preloader'
import { ThemeProvider } from './hooks/useTheme'

import Hero from './sections/Hero'
import LogoStrip from './sections/LogoStrip'
import Statement from './sections/Statement'
import Differentiators from './sections/Differentiators'
import ReadyCTA from './sections/ReadyCTA'
import PlatformTabs from './sections/PlatformTabs'
import Products from './sections/Products'
import Steps from './sections/Steps'
import Security from './sections/Security'
import Testimonials from './sections/Testimonials'
import Pricing from './sections/Pricing'
import FAQ from './sections/FAQ'
import IntegrationCTA from './sections/IntegrationCTA'
import Footer from './sections/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <ThemeProvider>
    <div className="relative min-h-screen bg-black text-white">
      <div className="noise-overlay" />
      <Preloader onComplete={() => setLoading(false)} />

      {!loading && (
        <>
          <CustomCursor />
          <Navbar />
          <main>
            <Hero />
            <LogoStrip />
            <Statement />
            <Differentiators />
            <ReadyCTA />
            <PlatformTabs />
            <Products />
            <Steps />
            <Security />
            <Testimonials />
            <Pricing />
            <FAQ />
            <IntegrationCTA />
          </main>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </div>
     </ThemeProvider>
  )
}