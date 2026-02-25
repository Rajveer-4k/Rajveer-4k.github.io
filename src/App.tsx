import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX, Heart } from 'lucide-react';

const timelineData = [
  { id: 1, date: "2006", title: "A new chapter starts", image: "https://images.iimg.live/images/incredible-photography-4493.webp" },
  { id: 2, date: "2014", title: "Best gift is 3...", image: "https://images.iimg.live/images/supreme-picture-2067.webp", rotate: 90, offsetX: "15%", offsetY: "0" },
  { id: 3, date: "2017", title: "Wishes from friends", image: "https://images.iimg.live/images/glorious-scene-3404.webp" },
  { id: 4, date: "2020", title: "Wishes from family", image: "https://images.iimg.live/images/epic-work-6679.webp" },
  { id: 5, date: "2025", title: "A family vacation", image: "https://images.iimg.live/images/dynamic-creation-2613.webp" },
  { id: 6, date: "2026", title: "Wishes are not limited to humans ;)", image: "https://images.iimg.live/images/spectacular-shot-5330.webp" },
];

const heartfeltWords = [
  { name: "Rahul Kapoor", message: "(Message goes here...)" },
  { name: "Rajveer Kapoor", message: "To mumma, the best mother a child can ask for. Your are the mother people wish to be. I love you to the moon and backkkkkkk." },
  { name: "Zeke Kapoor", message: "Woof Woof Woof Woof." },
  { name: "Pramila Juneja", message: "(Message goes here...)" },
  { name: "Ashwini Juneja", message: "(Message goes here...)" },
  { name: "Sushma Kapoor", message: "(Message goes here...)" },
  { name: "Kulbushan Kapoor", message: "(Message goes here...)" },
  { name: "Rohit Kapoor", message: "(Message goes here...)" },
  { name: "Grace Kapoor", message: "(Message goes here...)" },
  { name: "Kunal Khurana", message: "(Message goes here...)" },
  { name: "Laksha Khurana", message: "(Message goes here...)" },
  { name: "Alay Patel", message: "(Message goes here...)" },
  { name: "Apeksha Patel", message: "(Message goes here...)" },
  { name: "Divya Jain", message: "(Message goes here...)" },
  { name: "Shashank Jain", message: "(Message goes here...)" },
  { name: "Mansi Aggarwal", message: "(Message goes here...)" },
  { name: "Ankit Aggarwal", message: "(Message goes here...)" },
  { name: "Aman Mathur", message: "(Message goes here...)" },
  { name: "Vipul Mathur", message: "(Message goes here...)" },
  { name: "Kavita Sharma", message: "(Message goes here...)" },
  { name: "Sumit Sharma", message: "(Message goes here...)" },
  { name: "Pooja Gehaani", message: "(Message goes here...)" },
  { name: "Rajnesh Gehaani", message: "(Message goes here...)" },
  { name: "Neelam Kaur", message: "(Message goes here...)" },
  { name: "Jaggi Kaur", message: "(Message goes here...)" },
  { name: "Deepti Mondol", message: "(Message goes here...)" },
  { name: "Suvonath Mondol", message: "(Message goes here...)" }
];

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-yellow-500/10"
          style={{
            width: Math.random() * 60 + 20,
            height: Math.random() * 60 + 20,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -150, 0],
            x: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const LoopyArrow = ({ className = "" }) => (
  <motion.svg 
    width="80" 
    height="160" 
    viewBox="0 0 100 250" 
    fill="none" 
    className={`text-yellow-500 mx-auto ${className}`}
  >
    <motion.path 
      d="M50 10 C 120 60, 120 120, 50 120 C -20 120, -20 60, 50 60 C 120 60, 50 180, 50 230 L 35 215 M 50 230 L 65 215" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
  </motion.svg>
);

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* TODO: Replace this URL with your preferred background audio file */}
      <audio ref={audioRef} loop>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
      </audio>
      <button 
        onClick={togglePlay}
        className="bg-yellow-600 hover:bg-yellow-500 text-black p-4 rounded-full shadow-[0_0_15px_rgba(202,138,4,0.5)] transition-transform hover:scale-110 flex items-center justify-center group relative"
        aria-label="Toggle background music"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
        {!isPlaying && (
          <span className="absolute -top-10 right-0 bg-zinc-800 text-yellow-500 text-xs px-3 py-1 rounded-full shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-yellow-500/30">
            Play Music
          </span>
        )}
      </button>
    </div>
  );
};

const TimelineItem = ({ item, index }: { item: typeof timelineData[0], index: number }) => {
  const isEven = index % 2 === 0;
  return (
    <motion.div 
      className={`flex flex-col md:flex-row items-center w-full my-12 relative z-10 ${isEven ? 'md:flex-row-reverse' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Timeline Dot for Desktop */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black rounded-full border-4 border-yellow-500 z-20 items-center justify-center shadow-[0_0_10px_rgba(234,179,8,0.5)]">
        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
      </div>

      <div className={`w-full md:w-1/2 flex justify-center p-4 ${isEven ? 'md:justify-start md:pl-16' : 'md:justify-end md:pr-16'}`}>
        <div className="relative group w-full max-w-md">
          <div className="absolute -inset-3 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
          <div className="relative rounded-2xl shadow-2xl w-full aspect-[4/3] border-2 border-yellow-500/50 bg-zinc-900 overflow-hidden">
            <img 
              src={item.image} 
              alt={item.date} 
              className={`w-full h-full object-cover transition duration-500 ${!item.rotate ? 'rotate-1 group-hover:rotate-0 scale-105' : ''}`} 
              style={item.rotate ? { transform: `rotate(${item.rotate}deg) scale(1.35) translate(${item.offsetX || 0}, ${item.offsetY || 0})` } : {}}
              referrerPolicy="no-referrer" 
            />
          </div>
        </div>
      </div>
      <div className={`w-full md:w-1/2 flex flex-col items-center p-8 text-center ${isEven ? 'md:items-end md:text-right md:pr-16' : 'md:items-start md:text-left md:pl-16'}`}>
        <h3 className="text-5xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 mb-4 drop-shadow-sm">{item.date}</h3>
        <p className="text-2xl text-zinc-200 font-serif italic">{item.title}</p>
      </div>
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="bg-black min-h-screen font-sans overflow-x-hidden text-zinc-100 selection:bg-yellow-500 selection:text-black">
      <AudioPlayer />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-between bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black overflow-hidden py-12">
        <FloatingParticles />
        
        <div className="flex-1"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="z-10 text-center px-4 shrink-0"
        >
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-cursive text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 drop-shadow-[0_0_15px_rgba(234,179,8,0.3)] leading-tight py-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Happy 47th <br /> Birthday <br /> Mumma !!
          </motion.h1>
        </motion.div>

        <div className="flex-1 flex flex-col justify-end z-10 mt-8 shrink-0">
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <p className="text-yellow-500/80 font-serif italic mb-2 text-lg">Scroll for memories</p>
            <LoopyArrow className="text-yellow-500/70" />
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-6xl mx-auto px-4 py-24 relative">
        {/* Center line for desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-yellow-500/50 to-transparent transform -translate-x-1/2"></div>
        
        {timelineData.map((item, index) => (
          <div key={item.id}>
            <TimelineItem item={item} index={index} />
            {index < timelineData.length - 1 && (
              <div className="flex justify-center my-8 md:my-16 relative z-10">
                <LoopyArrow className="text-yellow-500/30" />
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Heartfelt Words Section */}
      <section className="max-w-7xl mx-auto px-4 py-24 relative border-t border-yellow-900/30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 mb-4 drop-shadow-sm">
            A few heartfelt words from close ones
          </h2>
          <div className="w-24 h-1 bg-yellow-500/50 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {heartfeltWords.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 10) * 0.05 }}
              className="bg-zinc-900/50 border border-yellow-500/20 p-6 rounded-2xl shadow-lg hover:border-yellow-500/50 transition-colors"
            >
              <h3 className="text-xl font-serif text-yellow-400 mb-3">{item.name} :</h3>
              <p className="text-zinc-400 italic font-light whitespace-pre-line">
                {item.message}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-zinc-400 py-20 text-center relative overflow-hidden border-t border-yellow-900/30">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-600 via-black to-black"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.5 }}
          >
            <Heart className="w-10 h-10 mx-auto text-yellow-500 mb-8 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" fill="currentColor" />
          </motion.div>
          
          <h4 className="text-4xl font-cursive text-yellow-500 mb-10">Credits</h4>
          
          <div className="space-y-4 text-xl font-serif">
            <p><span className="text-yellow-400 font-semibold">Creator</span> - Rajveer Kapoor</p>
            <p><span className="text-yellow-400 font-semibold">Image co-ordinator</span> - Rahul Kapoor</p>
            <p><span className="text-yellow-400 font-semibold">Made for</span> - Ashima Kapoor (04/03/2026)</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
