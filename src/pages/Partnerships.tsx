import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Handshake, Globe2, Banknote } from "lucide-react";
import PageTransition from "../components/PageTransition";

export default function Partnerships() {
  return (
    <PageTransition className="bg-terra-cream min-h-screen">
      {/* Header */}
      <div className="bg-terra-brown text-white pt-24 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-10 pointer-events-none">
           <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
              <polygon fill="currentColor" points="100,0 0,100 100,100" />
           </svg>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto relative z-10 text-center max-w-3xl"
        >
          <span className="text-terra-yellow font-bold tracking-wider uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">Collaborate For Scale</span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold mb-4 sm:mb-6 leading-tight">Strategic Partnerships</h1>
          <p className="text-base sm:text-xl text-terra-cream/80 leading-relaxed">
            Addressing the climate crisis requires unprecedented collaboration. We offer structured vehicles for investment, technology transfer, and off-take agreements.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 md:mb-32">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.2 }}
             className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-sm border-t-4 border-terra-green hover:shadow-md transition-shadow"
           >
              <Banknote className="w-8 h-8 sm:w-10 sm:h-10 text-terra-green mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-terra-brown mb-3 sm:mb-4">Climate Funding & Joint Ventures</h3>
              <p className="text-terra-brown/80 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                We invite international development finance institutions (DFIs), private equity, and sovereign wealth funds to co-invest in utility-scale solar and robust nature-based solutions with demonstrable ROI and ESG impact metrics.
              </p>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.2 }}
             transition={{ delay: 0.1 }}
             className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-sm border-t-4 border-terra-yellow hover:shadow-md transition-shadow"
           >
              <Globe2 className="w-8 h-8 sm:w-10 sm:h-10 text-terra-yellow mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-terra-brown mb-3 sm:mb-4">Carbon Offsetting</h3>
              <p className="text-terra-brown/80 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Corporate entities seeking to neutralize their hard-to-abate emissions can secure high-integrity, VCM-compliant blue carbon credits through long-term off-take agreements with TerraNova's restoration projects.
              </p>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.2 }}
             transition={{ delay: 0.2 }}
             className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-sm border-t-4 border-terra-brown hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1"
           >
              <Cpu className="w-8 h-8 sm:w-10 sm:h-10 text-terra-brown mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-terra-brown mb-3 sm:mb-4">Technology Transfer</h3>
              <p className="text-terra-brown/80 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                 Partnering with global clean-tech innovators to localize manufacturing, deploy advanced IoT sensor networks for carbon monitoring, and implement AI-driven grid management software in the Nigerian context.
              </p>
           </motion.div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-terra-brown rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-16 text-center shadow-xl relative overflow-hidden"
        >
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-terra-yellow to-transparent"></div>
           <div className="relative z-10">
             <Handshake className="w-12 h-12 sm:w-16 sm:h-16 text-terra-yellow mx-auto mb-4 sm:mb-6" />
             <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-white mb-4 sm:mb-6">Ready to Drive Impact?</h2>
             <p className="text-terra-cream/80 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
               Whether you represent an institutional investor, a heavy-industry corporation, or a technology provider, let's build the net-zero architecture of tomorrow, today.
             </p>
             <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:terranovaenergylimited@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-terra-yellow hover:bg-white text-terra-brown hover:text-terra-brown font-bold text-sm sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-colors shadow-lg"
              >
                Initiate Discussion
             </motion.a>
           </div>
        </motion.div>

      </div>
    </PageTransition>
  );
}

// Defining a local icon since it's used here specifically
function Cpu(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  )
}
