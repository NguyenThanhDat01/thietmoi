
import { useEffect, useState } from "react";
import background1 from "../assets/backgroud1.jpg";
function Page3() {
  const targetDate = new Date(2026, 10, 25, 7, 0, 0).getTime();

  const calculateTime = () => {
    const distance = targetDate - new Date().getTime();

    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (distance / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (distance / (1000 * 60)) % 60
      ),
      seconds: Math.floor((distance / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculateTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const numberStyle: React.CSSProperties = {
    fontSize: "clamp(28px, 8vw, 58px)",
    fontFamily: '"Times New Roman", Times, serif',
    fontWeight: 500,
    color: "#ffe0df",
    lineHeight: 1.2,
    whiteSpace: "nowrap",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#e8babb",
    fontFamily: '"Times New Roman", Times, serif',
  };

  const format = (value: number) =>
    String(value).padStart(2, "0");

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "426px",
        minHeight: "100px",
        margin: "0 auto",
        padding: "18px 15px",
        boxSizing: "border-box",
        textAlign: "center",
          backgroundImage: `url(${background1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Tiêu đề */}
      <h2
        style={{
          fontFamily: '"Times New Roman", Times, serif',
          fontSize: "clamp(20px, 5vw, 30px)",
          color: "#f5aaa9",
          margin: "0 0 20px",
          fontWeight: "bold",
          whiteSpace: "nowrap",
        }}
      >
        CÙNG ĐẾM NGƯỢC NHÉ
      </h2>

      {/* Đồng hồ */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          alignItems: "center",
          gap: "5px",
          maxWidth: "420px",
          margin: "0 auto",
        }}
      >
        {[
          { value: time.days, label: "NGÀY" },
          { value: time.hours, label: "GIỜ" },
          { value: time.minutes, label: "PHÚT" },
          { value: time.seconds, label: "GIÂY" },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              minWidth: 0,
            }}
          >
            <span style={numberStyle}>
              {format(item.value)}
            </span>

            <span style={labelStyle}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page3;
