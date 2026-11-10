
import { useRef, useState } from "react";
import "./App.css";

import nhac from "./assets/nhac2.mp3";

import Page1 from "./Page/Page1";
import Page2 from "./Page/Page2";
import Page3 from "./Page/Page3";
import Page4 from "./Page/Page4";
import Page5 from "./Page/Page5";

function App() {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const openInvitation = async () => {
    setOpened(true);

    try {
      await audioRef.current?.play();
    } catch (error) {
      console.log("Không thể phát nhạc:", error);
    }
  };

  return (
    <main className="invitation">
      <audio
        ref={audioRef}
        src={nhac}
        loop
        preload="auto"
      />

      {!opened ? (
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

          <h2>Thân mời bạn</h2>
          <p>Một lời mời nhỏ, một ngày thật đặc biệt</p>

          <button onClick={openInvitation}>
            Nhấn để mở thiệp
          </button>
        </section>
      ) : (
        <section>
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
        </section>
      )}
    </main>
  );
}

export default App;
