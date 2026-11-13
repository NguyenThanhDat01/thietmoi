
import { useRef } from "react";
import "./App.css";

import nhac from "./assets/nhac2.mp3";

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const openInvitation = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 1;

    // Phát nhạc ngay khi người dùng nhấn
    const playPromise = audio.play();

    // Mở website Canva
    const newTab = window.open(
      "https://gazelle-19h6vf.my.canva.site/lelamlinhh",
      "_blank"
    );

    if (!newTab) {
      alert("Vui lòng cho phép trình duyệt mở tab mới.");
    }

    playPromise.catch((error) => {
      console.log("Không thể phát nhạc:", error);
    });
  };

  return (
    <main className="invitation">
      {/* Nhạc nền */}
      <audio
        ref={audioRef}
        src={nhac}
        loop
        preload="auto"
        playsInline
      />

      <section className="opening">
        <div className="envelope-wrapper">
          <div className="envelope">
            <div className="envelope-back" />

            <div className="envelope-paper">
              <span>Graduation</span>
            </div>

            <div className="envelope-flap" />
            <div className="envelope-front" />
            <div className="envelope-bow">🎀</div>
          </div>
        </div>

        <h2
          style={{
            color: "#842b40",
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
        >
          Thân mời bạn
        </h2>

        <p>
          Một lời mời nhỏ, một ngày thật đặc biệt
        </p>

        <button onClick={openInvitation}>
          Nhấn để mở thiệp
        </button>
      </section>
    </main>
  );
}

export default App;
