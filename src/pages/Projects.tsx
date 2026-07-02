import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, PlayCircle } from "lucide-react";
import PageTransition from "../components/PageTransition";

export default function Projects() {
  const [dbImages, setDbImages] = useState<any[]>([]);
  const [dbVideos, setDbVideos] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/media')
      .then(res => res.json())
      .then(data => {
        if(data && data.images) {
          setDbImages(data.images);
        }
        if(data && data.videos) {
          setDbVideos(data.videos);
        }
      })
      .catch(err => console.error(err));
  }, []);

  const highlightedProjects = [
    {
      title: "Delta Mangrove Restoration Initiative",
      category: "Environmental",
      stats: "3,500 Hectares Restored",
      image: "https://i.ibb.co/rKDkgGJW/47713.jpg",
      description: "A flagship blue carbon project combating coastal erosion and generating high-quality carbon credits."
    },
    {
      title: "Abuja Solar Micro-Grid",
      category: "Renewable Energy",
      stats: "50MW Capacity",
      image: dbImages[2]?.url || "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop",
      description: "Powering multiple commercial districts with reliable, zero-emission solar energy, reducing grid dependency."
    },
    {
      title: "Ogoniland Bioremediation Support",
      category: "Sustainability",
      stats: "15+ Communities Impacted",
      image: dbImages[3]?.url || "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop",
      description: "Working alongside international bodies to introduce clean soil technologies and restore agricultural viability."
    }
  ];

  return (
    <PageTransition className="pt-20 md:pt-24 pb-16 md:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4"
        >
          <span className="text-terra-green font-bold tracking-wider uppercase text-xs sm:text-sm">Portfolio</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-terra-brown mt-4 mb-4 sm:mb-6 leading-tight">Our Impact in Action</h1>
          <p className="text-base sm:text-lg text-terra-brown/70 leading-relaxed">
            Discover the scale and scope of our work transitioning Nigeria to a sustainable energy future.
          </p>
        </motion.div>

        {/* Highlighted Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {highlightedProjects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group cursor-pointer flex flex-col h-full bg-terra-cream rounded-2xl overflow-hidden border border-terra-brown/5 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/90 backdrop-blur text-terra-brown text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-terra-brown mb-3 group-hover:text-terra-green transition-colors">{project.title}</h3>
                <p className="text-terra-brown/70 text-sm sm:text-base mb-6 flex-grow leading-relaxed">{project.description}</p>
                <div className="flex items-center justify-between mt-auto border-t border-terra-brown/10 pt-4">
                  <span className="font-bold text-terra-yellow text-xs sm:text-sm tracking-wide">{project.stats}</span>
                  <ArrowRight className="w-5 h-5 text-terra-brown group-hover:text-terra-green group-hover:-rotate-45 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Gallery from Admin */}
        {dbImages.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-terra-brown/10"
          >
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-terra-brown mb-6 md:mb-8 text-center">Project Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {dbImages.map((img: any, i: number) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  key={img.id} 
                  className="relative aspect-square rounded-lg overflow-hidden group shadow-sm border border-terra-brown/5"
                >
                  <img src={img.url} alt={img.title || "Project image"} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-terra-brown/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center">
                    <span className="text-white font-medium text-sm md:text-base transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Dynamic Videos from Admin */}
        {dbVideos.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-terra-brown/10"
          >
            <div className="text-center mb-8 md:mb-12">
               <h2 className="text-2xl sm:text-3xl font-serif font-bold text-terra-brown mb-3 sm:mb-4">Featured Videos</h2>
               <p className="text-terra-brown/70 text-sm sm:text-base">Insights and updates from our operations.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {dbVideos.map((vid: any, i: number) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={vid.id} 
                  className="bg-white rounded-xl overflow-hidden shadow-md border border-terra-brown/5 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-video w-full bg-terra-brown/5 relative group">
                    <iframe src={vid.url} className="w-full h-full relative z-10 border-0" allowFullScreen></iframe>
                    {/* Placeholder behind iframe */}
                    <div className="absolute inset-0 flex items-center justify-center -z-0">
                       <PlayCircle className="w-10 h-10 sm:w-12 sm:h-12 text-terra-green/40" />
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h4 className="text-base sm:text-lg font-bold text-terra-brown line-clamp-2 leading-tight">{vid.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </PageTransition>
  );
}
