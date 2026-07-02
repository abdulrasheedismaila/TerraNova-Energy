import { motion } from "motion/react";
import PageTransition from "../components/PageTransition";

export default function Strategy() {
  return (
    <PageTransition className="pt-20 md:pt-24 pb-16 md:pb-20 bg-terra-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20 px-4"
        >
          <span className="text-terra-green font-bold tracking-wider uppercase text-xs sm:text-sm">Roadmap</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-terra-brown mt-4 mb-4 sm:mb-6 leading-tight">Strategic Trajectory</h1>
          <p className="text-base sm:text-lg text-terra-brown/70 leading-relaxed">
            A structured approach to transforming Nigeria's energy landscape over the coming decade.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-terra-brown/10 md:-translate-x-1/2"></div>
          
          {/* Phases */}
          <div className="space-y-12 md:space-y-16">
            
            {/* Phase 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative flex flex-col md:flex-row items-start md:items-center justify-between w-full"
            >
              <div className="order-1 flex-1 md:text-right pr-0 md:pr-16 w-full ml-16 md:ml-0">
                <span className="text-terra-green font-bold text-sm sm:text-lg mb-2 block">Phase 1: Foundation (Year 1-2)</span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-terra-brown mb-3">Asset Acquisition & Pilot Restoration</h3>
                <p className="text-terra-brown/70 bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-terra-brown/5 md:ml-auto text-sm sm:text-base leading-relaxed hover:shadow-md transition-shadow">
                  Acquisition of legacy infrastructure for decarbonization. Kick-off of the initial 1,000-hectare mangrove restoration pilot in Rivers State.
                </p>
              </div>
              <div className="absolute left-6 md:left-1/2 -ml-[11px] md:ml-0 w-6 h-6 rounded-full bg-terra-yellow border-4 border-terra-cream shadow z-10 md:-translate-x-1/2 mt-1 md:mt-0 transition-transform hover:scale-125 duration-300"></div>
              <div className="order-3 flex-1 pl-8 md:pl-16 w-full hidden md:block">
                {/* Empty space for layout */}
              </div>
            </motion.div>

            {/* Phase 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative flex flex-col md:flex-row items-start md:items-center justify-between w-full"
            >
               <div className="order-1 flex-1 pr-8 md:pr-16 w-full hidden md:block">
                {/* Empty space for layout */}
              </div>
              <div className="absolute left-6 md:left-1/2 -ml-[11px] md:ml-0 w-6 h-6 rounded-full bg-terra-green border-4 border-terra-cream shadow z-10 md:-translate-x-1/2 mt-1 md:mt-0 transition-transform hover:scale-125 duration-300"></div>
              <div className="order-3 flex-1 pl-0 md:pl-16 w-full ml-16 md:ml-0">
                 <span className="text-terra-green font-bold text-sm sm:text-lg mb-2 block">Phase 2: Acceleration (Year 3-5)</span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-terra-brown mb-3">Scale & Monetization</h3>
                <p className="text-terra-brown/70 bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-terra-brown/5 text-sm sm:text-base leading-relaxed hover:shadow-md transition-shadow">
                  Deployment of 150MW utility-scale solar. First issuance and trading of verified blue carbon credits on international markets.
                </p>
              </div>
            </motion.div>

            {/* Phase 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative flex flex-col md:flex-row items-start md:items-center justify-between w-full"
            >
              <div className="order-1 flex-1 md:text-right pr-0 md:pr-16 w-full ml-16 md:ml-0">
                <span className="text-terra-green font-bold text-sm sm:text-lg mb-2 block">Phase 3: Integration (Year 6-10)</span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-terra-brown mb-3">Net-Zero Hub Development</h3>
                <p className="text-terra-brown/70 bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-terra-brown/5 md:ml-auto text-sm sm:text-base leading-relaxed hover:shadow-md transition-shadow">
                  Achieving 500MW aggregate renewable capacity. 10 million tonnes CO2 mapped and secured. Full operational tech-stack integration for real-time national monitoring.
                </p>
              </div>
              <div className="absolute left-6 md:left-1/2 -ml-[11px] md:ml-0 w-6 h-6 rounded-full bg-terra-brown border-4 border-terra-cream shadow z-10 md:-translate-x-1/2 mt-1 md:mt-0 transition-transform hover:scale-125 duration-300"></div>
              <div className="order-3 flex-1 pl-8 md:pl-16 w-full hidden md:block">
                {/* Empty space for layout */}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}
