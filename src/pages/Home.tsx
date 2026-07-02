import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Target, TreePine, Users } from "lucide-react";
import { useState, useEffect } from "react";
import PageTransition from "../components/PageTransition";

export default function Home() {
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/media')
      .then(res => res.json())
      .then(data => {
        if(data && data.images) {
          setImages(data.images.slice(0, 3));
        }
      })
      .catch(err => console.error("Could not fetch media", err));
  }, []);

  return (
    <PageTransition className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-20 md:pb-32 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://i.ibb.co/Kxdkfy9M/Whats-App-Image-2026-04-26-at-9-55-03-AM.jpg" 
            alt="TerraNova Energy facility" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-terra-brown/90 via-terra-brown/70 to-terra-brown/40" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur text-white text-xs md:text-sm font-bold uppercase tracking-widest mb-6 rounded-full border border-white/30">
              Energy Transition • ESG Excellence • Innovation
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
              Powering a <span className="text-terra-yellow">Net-Zero Future</span><br className="hidden sm:block" />
              Through Innovation and Nature.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-10 max-w-2xl leading-relaxed">
              TerraNova Energy Limited leads the energy transition in Nigeria, combining green energy infrastructure, carbon credit solutions, and large-scale environmental restoration.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link 
                to="/projects" 
                className="bg-terra-green text-white px-8 py-4 rounded-md font-bold hover:bg-white hover:text-terra-green transition-colors flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300 w-full sm:w-auto text-center"
              >
                Explore Projects
              </Link>
              <Link 
                to="/partnerships" 
                className="bg-white/10 backdrop-blur border-2 border-white text-white px-8 py-4 rounded-md font-bold hover:bg-white hover:text-terra-brown transition-colors flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300 w-full sm:w-auto text-center"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-terra-brown">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="bg-terra-green p-8 md:p-10 text-white flex flex-col justify-center items-center text-center border-b sm:border-r border-white/10"
          >
            <Zap className="w-10 h-10 text-terra-yellow opacity-80 mb-4" />
            <span className="text-4xl md:text-5xl font-serif font-bold text-terra-yellow drop-shadow-md">500MW</span>
            <span className="text-xs md:text-sm uppercase tracking-wider opacity-80 mt-2 font-medium">Renewable Capacity</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-terra-brown p-8 md:p-10 text-white flex flex-col justify-center items-center text-center border-b lg:border-b-0 lg:border-r border-white/10"
          >
            <Target className="w-10 h-10 text-terra-yellow opacity-80 mb-4" />
            <span className="text-4xl md:text-5xl font-serif font-bold text-terra-yellow drop-shadow-md">10M</span>
            <span className="text-xs md:text-sm uppercase tracking-wider opacity-80 mt-2 font-medium">Tonnes CO2 Offset</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-terra-brown p-8 md:p-10 text-white flex flex-col justify-center items-center text-center border-b sm:border-b-0 sm:border-r border-white/10"
          >
            <TreePine className="w-10 h-10 text-terra-yellow opacity-80 mb-4" />
            <span className="text-4xl md:text-5xl font-serif font-bold text-terra-yellow drop-shadow-md">5,000+</span>
            <span className="text-xs md:text-sm uppercase tracking-wider opacity-80 mt-2 font-medium">Hectares Restored</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-terra-green p-8 md:p-10 text-white flex flex-col justify-center items-center text-center"
          >
            <Users className="w-10 h-10 text-terra-yellow opacity-80 mb-4" />
            <span className="text-4xl md:text-5xl font-serif font-bold text-terra-yellow drop-shadow-md">1,000+</span>
            <span className="text-xs md:text-sm uppercase tracking-wider opacity-80 mt-2 font-medium">Green Jobs Created</span>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-24 bg-terra-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
              >
                 <h2 className="text-xs font-bold uppercase tracking-widest text-terra-brown/60 mb-6">Strategic Solutions</h2>
                 <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-terra-brown mb-6 leading-tight">Pioneering the Green Energy Transition in Nigeria</h3>
                 <p className="text-terra-brown/80 text-base sm:text-lg mb-6 leading-relaxed">
                   At TerraNova Energy Limited, we believe that an equitable energy transition must harmonize industrial progress with deep environmental stewardship.
                 </p>
                 <p className="text-terra-brown/80 text-base mb-8 leading-relaxed">
                   Operating across the Niger Delta and scaling national solutions from our headquarters in Rivers State and Abuja branch, we combine innovative decarbonization engineering, certified blue carbon projects, and socioeconomic empowerment to create lasting value for our stakeholders and the planet.
                 </p>
                 <Link to="/about" className="group inline-flex items-center gap-2 text-terra-brown font-semibold hover:text-terra-green transition-colors pb-1 border-b-2 border-terra-yellow">
                    Discover Our Vision 
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                 </Link>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="flex justify-center md:justify-end"
              >
                <img 
                  src="https://i.ibb.co/1tKdHvRF/Whats-App-Image-2026-04-26-at-9-44-02-AM-1.jpg" 
                  alt="TerraNova Operation" 
                  className="rounded-xl h-auto w-full max-h-[500px] object-cover shadow-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-500 ring-4 ring-white" 
                />
              </motion.div>
           </div>
        </div>
      </section>
    </PageTransition>
  );
}
