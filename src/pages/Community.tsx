import { motion } from "motion/react";
import { GraduationCap, HeartPulse, Droplets } from "lucide-react";
import PageTransition from "../components/PageTransition";

export default function Community() {
  return (
    <PageTransition className="pt-20 md:pt-24 pb-16 md:pb-20 bg-white min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-24 mb-16 md:mb-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1 w-full"
            >
                <span className="text-terra-green font-bold tracking-wider uppercase text-xs sm:text-sm">Social Impact</span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-terra-brown mt-4 mb-4 sm:mb-6 leading-tight">Building Community Trust</h1>
                <p className="text-base sm:text-lg text-terra-brown/80 mb-4 sm:mb-6 leading-relaxed">
                  Lasting environmental change is impossible without the active participation and prospering of local communities. At TerraNova, we don't just operate in communities; we partner with them through established <strong className="text-terra-green">Community Trust Committees</strong>.
                </p>
                <p className="text-base sm:text-lg text-terra-brown/80 leading-relaxed">
                   A percentage of our carbon credit revenue is legally ring-fenced to fund local infrastructure, ensuring that global climate finance translates directly to local upliftment.
                </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1 w-full relative mt-8 md:mt-0"
            >
                <div className="w-full aspect-square md:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border-4 md:border-8 border-terra-cream relative z-10">
                   <img src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800&auto=format&fit=crop" alt="Community members working together" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <div className="absolute top-1/2 right-0 md:-right-8 w-48 h-48 md:w-64 md:h-64 bg-terra-yellow/20 rounded-full blur-3xl -z-10 -translate-y-1/2"></div>
            </motion.div>
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-serif font-bold text-terra-brown mb-8 sm:mb-12 text-center"
        >
          Core Impact Pillars
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
           <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-terra-cream p-6 sm:p-8 rounded-2xl border border-terra-brown/5 hover:border-terra-green transition-all hover:-translate-y-1 hover:shadow-md"
           >
              <div className="bg-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-sm mb-5 sm:mb-6">
                 <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-terra-brown" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-terra-brown mb-3 sm:mb-4">Youth & Women Empowerment</h3>
              <p className="text-terra-brown/70 text-sm sm:text-base leading-relaxed">
                Skills training programs focusing on renewable energy installation, nursery management for mangrove seedlings, and eco-entrepreneurship for marginalized groups.
              </p>
           </motion.div>

           <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1 }}
              className="bg-terra-cream p-6 sm:p-8 rounded-2xl border border-terra-brown/5 hover:border-terra-yellow transition-all hover:-translate-y-1 hover:shadow-md"
           >
              <div className="bg-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-sm mb-5 sm:mb-6">
                 <HeartPulse className="w-6 h-6 sm:w-7 sm:h-7 text-terra-brown" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-terra-brown mb-3 sm:mb-4">Healthcare Access</h3>
              <p className="text-terra-brown/70 text-sm sm:text-base leading-relaxed">
                Refurbishing and solarizing strategic rural clinics in our operational zones, ensuring cold-chain storage for vaccines and 24/7 emergency lighting.
              </p>
           </motion.div>

           <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2 }}
              className="bg-terra-cream p-6 sm:p-8 rounded-2xl border border-terra-brown/5 hover:border-terra-green transition-all hover:-translate-y-1 hover:shadow-md sm:col-span-2 md:col-span-1"
           >
              <div className="bg-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-sm mb-5 sm:mb-6 mx-auto sm:mx-0">
                 <Droplets className="w-6 h-6 sm:w-7 sm:h-7 text-terra-brown" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-terra-brown mb-3 sm:mb-4 text-center sm:text-left">Clean Water Projects</h3>
              <p className="text-terra-brown/70 text-sm sm:text-base leading-relaxed text-center sm:text-left">
                Installation of solar-powered boreholes in Delta communities suffering from groundwater pollution, providing safe, reliable potable water.
              </p>
           </motion.div>
        </div>

      </div>
    </PageTransition>
  );
}
