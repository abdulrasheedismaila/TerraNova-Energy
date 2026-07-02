import { motion } from "motion/react";
import { Factory, LeafyGreen, Waves, Cpu } from "lucide-react";
import PageTransition from "../components/PageTransition";

export default function Services() {
  const services = [
    {
      title: "Decarbonization Engineering",
      description: "Comprehensive retrofitting of existing fossil-fuel infrastructure, transitioning facilities to hybrid or fully renewable power grids, and optimizing industrial energy consumption.",
      icon: <Factory className="w-6 h-6 sm:w-8 sm:h-8 text-terra-yellow" />,
      benefits: ["Reduced operational costs", "Compliance with global emissions standards", "Enhanced energy security"],
      image: "https://i.ibb.co/1JvZJHH8/47669.jpg"
    },
    {
      title: "Carbon Credit Solutions",
      description: "End-to-end development of verifiable carbon offset projects. We guide initiatives from feasibility and methodology design to international certification (Verra, Gold Standard) and market trading.",
      icon: <LeafyGreen className="w-6 h-6 sm:w-8 sm:h-8 text-terra-green" />,
      benefits: ["New revenue streams", "Verified ESG reporting", "Direct climate action"],
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Blue Carbon & Mangrove Restoration",
      description: "Large-scale ecological restoration of the Niger Delta’s mangrove forests. These vital ecosystems sequester carbon at up to four times the rate of terrestrial forests while protecting coastlines.",
      icon: <Waves className="w-6 h-6 sm:w-8 sm:h-8 text-terra-yellow" />,
      benefits: ["Exceptional carbon capture rates", "Coastal erosion protection", "Biodiversity restoration"],
      image: "https://i.ibb.co/0y5h7N9L/IMG-20260429-WA0000.jpg"
    },
    {
      title: "AI-Driven Monitoring",
      description: "Deployment of advanced satellite imagery analysis, drone surveillance, and IoT sensors to track carbon capture rates, monitor infrastructure health, and prevent ecological degradation in real-time.",
      icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-terra-green" />,
      benefits: ["Transparent automated reporting", "Predictive maintenance", "High-fidelity data for investors"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <PageTransition className="pt-20 md:pt-24 pb-16 md:pb-20 bg-terra-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20 px-4"
        >
          <span className="text-terra-green font-bold tracking-wider uppercase text-xs sm:text-sm">Our Expertise</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-terra-brown mt-4 mb-4 sm:mb-6 leading-tight">Solutions for a Sustainable Future</h1>
          <p className="text-base sm:text-lg text-terra-brown/70 leading-relaxed">
            We deliver integrated energy and environmental services designed to meet the complex challenges of the 21st century.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 md:gap-12 items-center`}
            >
              <div className="flex-1 w-full relative group">
                <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border-2 sm:border-4 border-white transition-transform duration-500 group-hover:shadow-xl">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-terra-brown/10 mix-blend-multiply opacity-50 group-hover:opacity-0 transition-opacity duration-500"></div>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-terra-brown/5 w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 flex justify-center items-center transition-transform hover:rotate-6 duration-300">
                  {service.icon}
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-terra-brown mb-3 sm:mb-4">{service.title}</h2>
                <p className="text-terra-brown/80 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">{service.description}</p>
                <div className="bg-terra-cream p-5 sm:p-6 rounded-xl border border-terra-brown/10 hover:bg-white/40 transition-colors">
                  <h4 className="font-bold text-terra-brown uppercase tracking-wider text-xs sm:text-sm mb-3 sm:mb-4">Key Benefits</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i, duration: 0.3 }}
                        key={i} 
                        className="flex items-start sm:items-center gap-3 text-terra-brown/70 text-sm sm:text-base group"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-terra-green shrink-0 mt-2 sm:mt-0 group-hover:scale-150 transition-transform"></div>
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
