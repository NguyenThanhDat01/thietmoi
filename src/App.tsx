
import { useRef } from "react";
import "./App.css";

import nhac from "./assets/nhac2.mp3";

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const openInvitation = async () => {
    // Mở website Canva ở tab mới
    const newTab = window.open(
      "https://gazelle-19h6vf.my.canva.site/lelamlinhh",
      "_blank"
    );

    // Phát nhạc từ React
    try {
      await audioRef.current?.play();
    } catch (error) {
      console.log("Không thể phát nhạc:", error);
    }

    // Kiểm tra trình duyệt có chặn cửa sổ mới không
    if (!newTab) {
      alert("Trình duyệt đã chặn cửa sổ mới. Vui lòng cho phép mở tab mới.");
    }
  };

  return (
    <main className="invitation">
      {/* Nhạc nền */}
      <audio
        ref={audioRef}
        src={nhac}
        loop
        preload="auto"
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
