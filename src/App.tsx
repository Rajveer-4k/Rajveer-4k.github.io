import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  { name: "Rahul Kapoor", message: "(Happy Birthday BV ❤️, To the woman who doesn’t just stand beside me but quietly holds my entire world together — thank you. You take care of me in ways big and small. From making sure I’ve eaten, to listening to my endless thoughts, to standing strong when I’m not — you do it all with so much care and grace. I may not say it every day, but I feel it every single day. You are my comfort, my strength, my peace, and my biggest blessing. The way you look after me, support me, and love me so selflessly makes me want to become a better man every day. On your birthday, I just want you to feel the same warmth, protection, and care that you give me all year round. You deserve all the happiness in the world — and I promise to keep trying to give you just that. Happy Birthday to my heart, my home, my forever. 💖 "}, 
  { name: "Rajveer Kapoor", message: "To mumma, the best mother a child can ask for. Your are the mother people wish to be. I love you to the moon and backkkkkkk." },
  { name: "Zeke Kapoor", message: "Woof Woof Woof Woof. (Still waiting for my 47 treats...)" },
  { name: "Pramila Juneja", message: "( It was on this day (not too many years ago) that I was elevated from a daughter, sister and wife to a Mother, the biggest role a woman can ask for (you can identify with that after Rajveer's birth). Have been enjoying this delightful role till date, because of the love, affection and care you have been showering on me and the rest of the family.........Be blessed..........always ❤️🤗)" },
  { name: "Ashwani Juneja", message: "(Message goes here...)" },
  { name: "Sushma Kapoor", message: "(Ashima means boundryless. Suitable name. Really your love, kindness limitless.... you have a pretty mind, pretty heart and pretty soul. Thank you for being my daughter and filling my life with lots of love and pride.)" },
  { name: "Kulbushan Kapoor", message: "(Message goes here...)" },
  { name: "Rohit Kapoor", message: "(In relation Ashima is my sister in law. In reality she is one of my dearest family member, she is a friend, a guide, someone who is very close to my heart. We don’t speak as often as we use to when I was living in India but we are always well connected. She has a heart of gold and a will power of steel. I’m extremely proud of who she has become and the way she is living her life. Always sparkling, shining and bringing brightness to others life’s. Wishing her a happy bday 😘🫂)" },
  { name: "Grace Kapoor", message: "(Dear Ashi, Wishing the happiest of birthdays of the warmest of hearts. When I met you in Amritsar, you immediately made me feel part of the family and that truly you are my sister. The most special memory has been sharing my wedding morning preparations with you - you brought the love, the fun and the best style! Looking forward to creating more wonderful memories together. Lots of love, Grace.)" },
  { name: "Kunal Khurana", message: "(Message goes here...)" },
  { name: "Laksha Khurana", message: "(Happy Birthday, Ashima Didi ❤️. Watching you over the years turn what you’ve always loved into something you do so effortlessly has been nothing short of inspiring. You didn’t just chase a goal… you became it.  Thank you for being our in-house fitness guru and reminder that strong is truly beautiful. May this year bring you more endorphins, more adventures and of course, cake that fits the macros (or not - balance, right?). Keep flexing. Keep shining. Keep inspiring. With lots of love and a big birthday squeeze, Laksha)" },
  { name: "Alay Patel", message: "(Down to earth, humble and fit as a fiddle! Thank you for always being so caring and thoughtful.  As you get a year younger, I am sure you will find a sport you enjoy, all the while learning to chill a tad more.  I still can’t get over the appetite you displayed in Shimla nor your exceptional skills in bollywood pictionary-  a team up i always look forward to.  A happy-happy birthday to you! PS: sing more often.)" },
  { name: "Apeksha Patel", message: "(Suno!! Apne birthday par humse kaam karvane ke liye tumne Rajveer ko laga to diya, par zyada fayda nahi hoga. Hum pyar bhare message bhi likne ki mehnat nahi karte, aur tarif to bilkul hi nahi!! But, If you want I can sing my signature song for you😅 — dost to kaminey hi hote ha. 🤗🤗 Wish you a very happy birthday!! And a life filled with health, love, laughter and happiness!!🥳🎉.)" },
  { name: "Divya Jain", message: "(Ashima, I really tried very hard. I even consulted a few senior members of the group (you know whom I’m referring to 😜), but I wasn’t able to write anything rosy or friendship-type material… it’s just 💋 dost.)" },
  { name: "Shashank Jain", message: "(Message goes here...)" },
  { name: "Mansi Aggarwal", message: "(“Dosti ka safar yun hi chalta rahe, Har mod par tera saath milta rahe. Khushiyon se bhara ho tera har din, Aur meri duaon ka asar milta rahe.” Happy Birthday, my dearest Ashima 🤍 From international trips to perfectly planned vacations, every journey has been brighter simply because you were there. From airport selfies to boarding gate gossip, from packing meltdowns to shopping victories — every memory feels special with you in it. And how can I ever forget our Thailand trip, when we got completely lost… but somehow laughed our way through it like true explorers! Only with you could being lost feel like the best part of the adventure. You are the calm in the chaos, the softest voice in the loudest room, and the most sensible advice-giver when life feels confusing. I don’t just cherish the miles we’ve covered across countries, I cherish the endless conversations, the unstoppable laughter, and those quiet heart-to-heart moments that only true friends understand. Thank you for being my safe space, my secret keeper, and my constant through every phase of life. Here’s to many more passports stamped, more international adventures, and a lifetime of getting “lost” together in the best possible way. May this year bring you peace, happiness, and everything your beautiful heart truly deserves. “Har safar ho yaadon se haseen, Har khushi aaye tere kareeb. Tu rahe hamesha meri zindagi ka hissa, Bas itni si hai dil se dua naseeb.”)" },
  { name: "Ankit Aggarwal", message: "(Message goes here...)" },
  { name: "Aman Mathur", message: "(Message goes here...)" },
  { name: "Vipul Mathur", message: "(Message goes here...)" },
  { name: "Kavita Sharma", message: "(Happy Birthday to my  unofficial wellness CEO 🎉. I got a  friend… and somehow unlocked a built-in accountability coach. Honestly, elite package. Thank you for caring the way you do and I’m getting stronger, it’s 50% me and 50% you refusing to let me quit 😌. Hope this year gives you gains in joy, peace, and everything you deserve. 💛)" },
  { name: "Sumit Sharma", message: "(Message goes here...)" },
  { name: "Deepika Jain", message: "(I really love Ashima for her loving and caring nature. She has lot of warmth for others. I will miss her 😍)" },
  { name: "Nitish Jain", message: "(Message goes here...)" },
  { name: "Akshaan Jain", message: "(Ashima auntie is an amazing person. When I moved into the society and had no friends, she was the one who introduced me to my first friend. Since then she always made me feel like her second son. Letting me eat and do nightstays at her home aswell. She made me and Rajveer do things that changed us for the better. I am grateful and thankful to God for making me meet her.)" },
  { name: "Rakesh Khurana", message: "(Message goes here...)" },
  { name: "Neelam Kaur", message: "(Message goes here...)" },
  { name: "Jaggi Kaur", message: "(Message goes here...)" },
  { name: "Deepti Mondol", message: "(Message goes here...)" },
  { name: "Suvonath Mondol", message: "(Message goes here...)" }, 
  { name: "Bhavna & Sunil Khanna", message: "(Dear Ashima, some souls enter our lives like gentle sunlight — quiet, warm, and constant. You have been that light for us. Having you as a neighbour felt like having family next door. Your kindness, caring heart, and unwavering support brought comfort and happiness into our lives. Even today, life feels lighter knowing you are around. We are truly grateful for the beautiful bond we share. With love, Bhavna & Sunil 💛)" }, 
  { name: "Rakesh Khurana", message: "(Happy birthday to an amazing niece Ashima! 😊 You're a ray of sunshine in our lives. Wishing you a day as bright and beautiful as you are! 🎉.On your special day, I want you to know how proud we are of the smart, kind, and lovely person you have grown into. May your birthday be filled with laughter, adventure, and all your favourite things! 🎂)" }
];

const Envelope = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <motion.div 
        className="relative w-80 h-52 bg-zinc-900 border-2 border-yellow-500/50 rounded-lg shadow-[0_0_40px_rgba(234,179,8,0.15)] cursor-pointer flex flex-col items-center justify-center group overflow-hidden"
        onClick={onOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Envelope Flap Design */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <motion.div 
            className="absolute -top-[60%] left-[10%] w-[80%] h-[120%] bg-zinc-800 border-b-2 border-r-2 border-yellow-500/50 rounded-br-3xl shadow-lg origin-top"
            style={{ rotate: "45deg" }}
            whileHover={{ rotateX: 20, backgroundColor: "#27272a" }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        {/* Text */}
        <div className="relative z-10 text-center mt-12">
          <h2 className="text-5xl font-cursive text-yellow-400 mb-1 drop-shadow-md">To Ashima</h2>
          <p className="text-sm text-zinc-400 italic font-serif">Click to open</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

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

const CakeWithCandles = () => {
  const [isBlownOut, setIsBlownOut] = useState(false);

  useEffect(() => {
    if (isBlownOut) return;

    let audioContext: AudioContext | null = null;
    let analyser: AnalyserNode | null = null;
    let microphone: MediaStreamAudioSourceNode | null = null;
    let animationFrame: number;
    let stream: MediaStream | null = null;

    const startListening = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        microphone = audioContext.createMediaStreamSource(stream);
        
        analyser.smoothingTimeConstant = 0.8;
        analyser.fftSize = 256;
        microphone.connect(analyser);

        const dataArray = new Uint8Array(analyser.frequencyBinCount);

        const checkAudio = () => {
          if (!analyser) return;
          analyser.getByteFrequencyData(dataArray);
          
          let sum = 0;
          for (let i = 0; i < dataArray.length; i++) {
            sum += dataArray[i];
          }
          const average = sum / dataArray.length;

          // Blowing into a mic creates a loud, low-frequency rumble.
          // An average volume > 80 is usually a good threshold for blowing.
          if (average > 80) {
            setIsBlownOut(true);
          } else {
            animationFrame = requestAnimationFrame(checkAudio);
          }
        };

        checkAudio();
      } catch (err) {
        console.error("Microphone access denied or not supported.", err);
      }
    };

    startListening();

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      if (microphone) microphone.disconnect();
      if (analyser) analyser.disconnect();
      if (audioContext && audioContext.state !== 'closed') audioContext.close();
      if (stream) stream.getTracks().forEach(track => track.stop());
    };
  }, [isBlownOut]);

  return (
    <div 
      className="flex flex-col items-center justify-end cursor-pointer group pb-4 md:pb-8"
      onClick={() => setIsBlownOut(true)}
      title={isBlownOut ? "Yay!" : "Blow into the mic or click to blow out!"}
    >
      {/* Flames & Candles */}
      <div className="flex gap-1.5 md:gap-2 mb-[-2px] z-10">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex flex-col items-center relative">
            <AnimatePresence>
              {!isBlownOut && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0.8, 1, 0.8], 
                    scale: [0.9, 1.1, 0.9],
                    rotate: [-5, 5, -5]
                  }}
                  exit={{ opacity: 0, scale: 0, y: -10 }}
                  transition={{ 
                    duration: 0.2 + Math.random() * 0.2, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="w-2 h-3 md:w-2.5 md:h-4 bg-gradient-to-t from-orange-500 to-yellow-200 rounded-full blur-[1px] mb-1 origin-bottom"
                />
              )}
            </AnimatePresence>
            {/* Smoke puff when blown out */}
            {isBlownOut && (
              <motion.div
                initial={{ opacity: 1, y: 0, scale: 0.5 }}
                animate={{ opacity: 0, y: -20, scale: 2 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-2 h-2 md:w-3 md:h-3 bg-zinc-500 rounded-full blur-[2px] absolute -top-2"
              />
            )}
            <div className="w-1 h-4 md:w-1.5 md:h-5 bg-gradient-to-b from-yellow-100 to-yellow-300 rounded-sm shadow-sm" />
          </div>
        ))}
      </div>
      
      {/* Cake Tiers */}
      <div className="w-12 h-4 md:w-16 md:h-5 bg-gradient-to-b from-zinc-800 to-zinc-900 border-t-2 border-yellow-500 rounded-t-md shadow-lg z-0 relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-t-md">
          <div className="w-full h-1.5 md:h-2 bg-yellow-500/20 rounded-b-full opacity-50"></div>
        </div>
      </div>
      <div className="w-16 h-5 md:w-20 md:h-6 bg-gradient-to-b from-zinc-900 to-black border-t-2 border-yellow-600 rounded-t-md shadow-xl z-0 relative flex items-center justify-center">
        <div className="w-full h-0.5 md:h-1 bg-yellow-600/20" />
      </div>
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
      className={`flex flex-col md:flex-row items-center w-full my-12 relative z-10 ${isEven ? 'md:flex-row-reverse' : ''} pl-8 md:pl-0`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Timeline Dot */}
      <div className="flex absolute left-0 md:left-1/2 top-28 md:top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-black rounded-full border-4 border-yellow-500 z-20 items-center justify-center shadow-[0_0_10px_rgba(234,179,8,0.5)]">
        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-400 rounded-full"></div>
      </div>

      <div className={`w-full md:w-1/2 flex justify-start md:justify-center p-2 md:p-4 ${isEven ? 'md:justify-start md:pl-16' : 'md:justify-end md:pr-16'}`}>
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
      <div className={`w-full md:w-1/2 flex flex-col items-start md:items-center p-4 md:p-8 text-left md:text-center ${isEven ? 'md:items-end md:text-right md:pr-16' : 'md:items-start md:text-left md:pl-16'}`}>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 mb-2 md:mb-4 drop-shadow-sm">{item.date}</h3>
        <p className="text-xl md:text-2xl text-zinc-200 font-serif italic">{item.title}</p>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="bg-black min-h-screen font-sans overflow-x-hidden text-zinc-100 selection:bg-yellow-500 selection:text-black">
      
      {/* The Envelope Overlay */}
      <AnimatePresence>
        {!isOpened && <Envelope onOpen={() => setIsOpened(true)} />}
      </AnimatePresence>

      {/* The Main Website (Only renders after envelope is opened) */}
      {isOpened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
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

        <div className="flex-1 flex flex-col justify-end z-10 mt-8 shrink-0 w-full">
          <motion.div 
            className="flex items-end justify-center gap-4 md:gap-12 w-full px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <CakeWithCandles />
            <div className="flex flex-col items-center">
              <p className="text-yellow-500/80 font-serif italic mb-2 text-sm md:text-lg whitespace-nowrap">Scroll for memories</p>
              <LoopyArrow className="text-yellow-500/70" />
            </div>
            <CakeWithCandles />
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-6xl mx-auto px-4 py-24 relative">
        {/* Center line for desktop, left line for mobile */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-yellow-500/50 to-transparent transform -translate-x-1/2"></div>
        
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
        </motion.div>
      )}
    </div>
  );
}
