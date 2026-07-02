import { motion } from "motion/react";
import PageTransition from "../components/PageTransition";

export default function About() {
  return (
    <PageTransition className="pt-24 pb-16 min-h-screen bg-terra-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4"
        >
          <span className="text-terra-green font-bold tracking-wider uppercase text-xs sm:text-sm">About TerraNova Energy</span>
          <div className="text-terra-brown/60 font-medium tracking-wide uppercase text-[10px] sm:text-xs mt-2">RC Number 9478210</div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-terra-brown mt-4 mb-4 sm:mb-6 leading-tight">Our Vision & Mission</h1>
          <p className="text-base sm:text-lg md:text-xl text-terra-brown/70 leading-relaxed">
            Pioneering a sustainable energy future through engineering, nature-based solutions, and community trust.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full"
          >
            <div className="bg-white p-6 sm:p-8 md:p-12 rounded-2xl shadow-sm border border-terra-brown/5">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-terra-brown mb-4 sm:mb-6">Mission</h2>
              <p className="text-terra-brown/80 leading-relaxed text-base sm:text-lg mb-6 sm:mb-8">
                To accelerate the global transition to net-zero emissions by deploying scalable renewable energy infrastructure, executing high-integrity carbon offset projects, and fostering resilient, empowered communities across Nigeria and beyond.
              </p>
              
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-terra-brown mb-4 sm:mb-6">Vision</h2>
              <p className="text-terra-brown/80 leading-relaxed text-base sm:text-lg">
                To be Africa's leading integrated energy and environmental solutions provider, recognized globally for bridging the gap between industrial advancement and ecological restoration.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6 sm:space-y-8 w-full"
          >
            <div className="border-l-4 border-terra-green pl-5 sm:pl-6 py-2 transition-all hover:bg-white/50 hover:pl-7 rounded-r-lg">
              <h3 className="text-lg sm:text-xl font-bold text-terra-brown mb-2">Strategic Positioning</h3>
              <p className="text-terra-brown/70 leading-relaxed text-sm sm:text-base">
                TerraNova exists at the critical intersection of energy, environment, and finance. We don't just build solar farms; we actively restore natural carbon sinks and navigate global climate funding to ensure economic viability and maximum social impact.
              </p>
            </div>
            
            <div className="border-l-4 border-terra-yellow pl-5 sm:pl-6 py-2 transition-all hover:bg-white/50 hover:pl-7 rounded-r-lg">
              <h3 className="text-lg sm:text-xl font-bold text-terra-brown mb-2">Corporate Head Office</h3>
              <p className="text-terra-brown/70 leading-relaxed text-sm sm:text-base">
                123 Energy Way, Port Harcourt, Rivers State, Nigeria. Strategically located to manage our Niger Delta restoration initiatives and offshore operations.
              </p>
            </div>

            <div className="border-l-4 border-terra-brown pl-5 sm:pl-6 py-2 transition-all hover:bg-white/50 hover:pl-7 rounded-r-lg">
              <h3 className="text-lg sm:text-xl font-bold text-terra-brown mb-2">Regional Office</h3>
              <p className="text-terra-brown/70 leading-relaxed text-sm sm:text-base">
                45 Diplomatic Drive, Central Business District, Abuja, Nigeria. Our hub for engaging with government agencies, climate funds, and international ESG partners.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
