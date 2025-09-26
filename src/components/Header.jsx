import { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

const Header = () => {
  const [musicPlay, setMusicPlay] = useState(false);

  const handleMusicToggle = () => {
    setMusicPlay(!musicPlay);
  };

  useEffect(() => {
    const audio = document.getElementById("background-music");
    if (musicPlay) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [musicPlay]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "none" }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      className="fixed font-logo font-semibold backdrop-blur-sm z-20 text-5xl flex justify-center md:justify-between items-center text-center md:text-left text-white top-0 left-0 right-0 bg px-5 md:px-10 py-4"
    >
      <Link to="/" className="outline-none">
        ValentineVerses
      </Link>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: [0, 10, -10, 10, 0] }}
        transition={{ repeat: Infinity, repeatDelay: 1 }}
        onClick={handleMusicToggle}
        className="font-soft text-sm text-end absolute right-2 md:right-10"
      >
        <img
          src={musicPlay ? "/volume_up.svg" : "/volume_off.svg"}
          alt={musicPlay ? "sound-on" : "sound-off"}
        />
      </motion.button>

      {/* background music */}
      <audio id="background-music" loop>
        <source src="/val-audio.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </motion.header>
  );
};

export default Header;
