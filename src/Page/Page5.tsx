
import { useState } from "react";
import background1 from "../assets/backgroud1.jpg";

function Page5() {
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxInoLKNjTrdMuaxnU3_0ipympiokQmnxtMPUoVwIvz_J_YOTSJ_O1WoAkh6T3vU-Ap/exec";

  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState(
    "💗 Có chứ, mình nhất định sẽ đến!"
  );
  const [time, setTime] = useState("🎀 10:00 – 11:00");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!name.trim()) {
      setMessage("Bạn vui lòng nhập họ và tên nhé!");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          name: name.trim(),
          attendance,
          time,
          note: note.trim(),
        }),
      });

      setMessage("Cảm ơn bạn! Yêu cầu xác nhận đã được gửi ❤️");
      setName("");
      setNote("");
    } catch (error) {
      console.error("Lỗi gửi xác nhận:", error);
      setMessage("Không gửi được thông tin. Bạn vui lòng thử lại nhé!");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px",
    boxSizing: "border-box",
    border: "1px solid #f2a4a8",
    borderRadius: "6px",
    backgroundColor: "#fff0f0",
    outline: "none",
    fontSize: "15px",
    fontFamily: '"Times New Roman", Times, serif',
    color: "#70202d",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    textAlign: "left",
    color: "#9c1d32",
    fontSize: "15px",
    fontWeight: "bold",
    marginBottom: "10px",
    lineHeight: 1.5,
  };

  const optionStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "7px",
    textAlign: "left",
    backgroundColor: "#f9c6c7",
    padding: "11px",
    borderRadius: "6px",
    marginBottom: "8px",
    color: "#7c2636",
    fontSize: "14px",
    cursor: "pointer",
    lineHeight: 1.5,
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "426px",
        minHeight: "600px",
        margin: "0 auto",
        padding: "25px 15px",
        boxSizing: "border-box",
        backgroundImage: `url(${background1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        fontFamily: '"Times New Roman", Times, serif',
        overflow: "hidden",
      }}
    >
      {/* Tiêu đề */}
      <div
        style={{
          textAlign: "center",
          color: "#f6c4c2",
          marginBottom: "18px",
          width: "100%",
        }}
      >
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(19px, 5vw, 23px)",
            margin: "5px 0",
            color: "#e88383",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ fontSize: "25px" }}>🎓</span>
          XÁC NHẬN THAM DỰ
        </h2>

        <p
          style={{
            fontSize: "20px",
            margin: "10px 0",
            color: "#f6c4c2",
          }}
        >
          Lễ tốt nghiệp của LinLin nhoaa
        </p>

        <p
          style={{
            fontSize: "12px",
            margin: "8px 0",
            color: "#f8f8f8",
            lineHeight: 1.5,
          }}
        >
          Sự hiện diện của bạn sẽ khiến ngày đặc biệt này trọn vẹn hơn. 🌷
        </p>

        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#b56a76",
            margin: "20px auto 0",
          }}
        />
      </div>

      {/* Form xác nhận */}
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          margin: "0 auto",
          backgroundColor: "#ffe1e1",
          padding: "18px 15px",
          borderRadius: "12px",
          boxSizing: "border-box",
        }}
      >
        {/* Họ tên */}
        <div style={{ marginBottom: "20px" }}>
          <label style={labelStyle}>
            Bạn tên gì để Linlin lưu lại kỷ niệm nè? 🎀
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập họ và tên của bạn..."
            style={inputStyle}
            required
          />
        </div>

        {/* Tham dự */}
        <div style={{ marginBottom: "20px" }}>
          <label style={labelStyle}>
            Bạn sẽ dành chút thời gian đến chung vui cùng Linlin chứ? 🧸
          </label>

          {[
            "💗 Có chứ, mình nhất định sẽ đến!",
            "🥺 Tiếc quá, lần này mình không thể tham gia rồi...",
          ].map((item) => (
            <label key={item} style={optionStyle}>
              <input
                type="radio"
                name="attendance"
                value={item}
                checked={attendance === item}
                onChange={(e) => setAttendance(e.target.value)}
              />
              {item}
            </label>
          ))}
        </div>

        {/* Thời gian */}
        <div style={{ marginBottom: "20px" }}>
          <label style={labelStyle}>
            Linlin nên đón bạn vào lúc nào đây ta? 🥰
          </label>

          {["🌷 06:00 – 06:50", "🎀 10:00 – 11:00"].map((item) => (
            <label key={item} style={optionStyle}>
              <input
                type="radio"
                name="time"
                value={item}
                checked={time === item}
                onChange={(e) => setTime(e.target.value)}
              />
              {item}
            </label>
          ))}
        </div>

        {/* Ghi chú */}
        <div style={{ marginBottom: "20px" }}>
          <label style={labelStyle}>
            Để lại vài lời yêu thương cho Linlin nhé! 💌
          </label>

          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            placeholder="Nhập lời nhắn..."
            style={{
              ...inputStyle,
              resize: "vertical",
            }}
          />
        </div>

        {/* Nút gửi */}
        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "13px",
            border: "none",
            borderRadius: "7px",
            backgroundColor: "#86172e",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
            fontFamily: '"Times New Roman", Times, serif',
            cursor: loading ? "wait" : "pointer",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "ĐANG GỬI..." : "GỬI LINLIN NHA 💗"}
        </button>

        {/* Thông báo */}
        {message && (
          <p
            style={{
              textAlign: "center",
              color: "#9c1d32",
              fontSize: "14px",
              lineHeight: 1.5,
              marginTop: "15px",
            }}
          >
            {message}
          </p>
        )}
      </form>

      {/* Khung thông tin liên hệ */}
      <div
        style={{
          width: "100%",
          margin: "16px auto 0",
          padding: "15px 13px",
          boxSizing: "border-box",
          backgroundColor: "#ffe1e1",
          borderRadius: "12px",
          color: "#70202d",
          fontFamily: '"Times New Roman", Times, serif',
          fontSize: "14px",
          lineHeight: 1.6,
        }}
      >
        <p
          style={{
            margin: "0 0 10px",
            fontWeight: "bold",
            color: "#9c1d32",
            fontSize: "16px",
          }}
        >
          📍 Nếu bạn đã đến trường nhưng chưa tìm thấy Linlin, hãy nhắn tin hoặc gọi cho mình nhé!
        </p>

        <p style={{ margin: "8px 0" }}>
          💗 Linlin: [Số điện thoại của Linlin]
        </p>

        <p style={{ margin: "8px 0" }}>
          🌷 Chị Hai: [Số điện thoại của chị Hai]
        </p>

        <p style={{ margin: "12px 0" }}>
          Nếu Linlin chưa kịp nghe máy, bạn có thể liên hệ chị Hai giúp mình nha. Đừng ngại gọi, mọi người sẽ hỗ trợ bạn tìm Linlin nhé! 🥰
        </p>

        <p style={{ margin: "12px 0 0" }}>
          Cảm ơn bạn đã đến chung vui cùng Linlin. Hẹn gặp bạn vào ngày đặc biệt ấy! 🎓
        </p>
      </div>
    </div>
  );
}

export default Page5;