import { useEffect, useState } from "react";
import { Link } from "react-router";

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
    <header className="fixed font-logo font-semibold backdrop-blur z-20 text-5xl flex justify-center md:justify-between items-center text-center md:text-left text-white top-0 left-0 right-0 bg px-5 md:px-10 py-4">
      <Link to="/" className="outline-none">
        ValentineVerses
      </Link>
      <button
        onClick={handleMusicToggle}
        className="font-soft text-sm text-end absolute right-2 md:right-10"
      >
        Music
      </button>

      {/* background music */}
      <audio id="background-music" loop>
        <source src="/src/assets/val-audio.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </header>
  );
};

export default Header;
