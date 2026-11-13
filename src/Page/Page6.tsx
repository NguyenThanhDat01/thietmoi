
import { useEffect, useRef, useState } from "react";
import anh1 from "../assets/anh1.jpg";
import anh4 from "../assets/anh4.jpg";
import background2 from "../assets/backgourg2.png";

function Page6() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Kích hoạt hiệu ứng khi Page6 xuất hiện
  useEffect(() => {
    const currentPage = pageRef.current;
    if (!currentPage) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(currentPage);

    return () => observer.disconnect();
  }, []);

  const animationClass = visible ? "show" : "";

  const photoStyle: React.CSSProperties = {
    position: "absolute",
    width: "55%",
    height: "250px",
    padding: "10px",
    backgroundColor: "#912c45",
    boxSizing: "border-box",
    objectFit: "cover",
    opacity: 0,
  };

  return (
    <div
      ref={pageRef}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "426px",
        minHeight: "900px",
        margin: "0 auto",
        padding: "25px 18px",
        boxSizing: "border-box",
        overflow: "hidden",
        backgroundImage: `url(${background2})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        fontFamily: "Georgia, serif",
        textAlign: "center",
        color: "#a51c38",
      }}
    >
      <style>
        {`
          @keyframes flyFromLeft {
            from {
              opacity: 0;
              transform: translateX(-120px) rotate(-15deg);
            }
            to {
              opacity: 1;
              transform: translateX(0) rotate(-6deg);
            }
          }

          @keyframes flyFromRight {
            from {
              opacity: 0;
              transform: translateX(120px) rotate(20deg);
            }
            to {
              opacity: 1;
              transform: translateX(0) rotate(10deg);
            }
          }

          @keyframes flyUp {
            from {
              opacity: 0;
              transform: translateY(65px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .photo-left.show {
            animation: flyFromLeft 1s ease-out both;
          }

          .photo-right.show {
            animation: flyFromRight 1s ease-out 0.2s both;
          }

          .fly-1.show {
            animation: flyUp 0.8s ease-out 0.4s both;
          }

          .fly-2.show {
            animation: flyUp 0.8s ease-out 0.6s both;
          }

          .fly-3.show {
            animation: flyUp 0.8s ease-out 0.8s both;
          }

          .fly-4.show {
            animation: flyUp 0.8s ease-out 1s both;
          }

          .fly-5.show {
            animation: flyUp 0.8s ease-out 1.2s both;
          }

          .fly-6.show {
            animation: flyUp 0.8s ease-out 1.4s both;
          }

          @media (prefers-reduced-motion: reduce) {
            .photo-left,
            .photo-right,
            .fly-1,
            .fly-2,
            .fly-3,
            .fly-4,
            .fly-5,
            .fly-6 {
              animation: none !important;
              opacity: 1 !important;
              transform: none !important;
            }
          }
        `}
      </style>

      {/* Ảnh tốt nghiệp */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "380px",
          marginTop: "100px",
        }}
      >
        <img
          className={`photo-left ${animationClass}`}
          src={anh1}
          alt="Ảnh tốt nghiệp 1"
          style={{
            ...photoStyle,
            top: 0,
            left: "5%",
          }}
        />

        <img
          className={`photo-right ${animationClass}`}
          src={anh4}
          alt="Ảnh tốt nghiệp 2"
          style={{
            ...photoStyle,
            top: "100px",
            right: "2%",
          }}
        />
      </div>

      {/* Tiêu đề */}
      <h1
        className={`fly-1 ${animationClass}`}
        style={{
          fontSize: "clamp(28px, 7vw, 43px)",
          fontFamily: "'Playfair Display', serif",
          fontWeight: "bold",
          margin: "0 0 12px",
          whiteSpace: "nowrap",
          color: "#801e31",
          opacity: 0,
        }}
      >
        LỄ TỐT NGHIỆP
      </h1>

      {/* Được tổ chức */}
      <p
        className={`fly-2 ${animationClass}`}
        style={{
          fontSize: "25px",
          fontStyle: "italic",
          margin: "30px 0 25px",
          color: "#753135",
          opacity: 0,
        }}
      >
        ĐƯỢC TỔ CHỨC
      </p>

      {/* Thời gian */}
      <p
        className={`fly-3 ${animationClass}`}
        style={{
          fontSize: "23px",
          margin: "20px 0",
          fontFamily: '"Times New Roman", Times, serif',
          opacity: 0,
        }}
      >
        VÀO 07:00
      </p>

      {/* Ngày tháng */}
      <div
        className={`fly-4 ${animationClass}`}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          margin: "25px 0",
          color: "#79425e",
          fontFamily: '"Times New Roman", Times, serif',
          opacity: 0,
        }}
      >
        <div
          style={{
            flex: 1,
            borderTop: "5px double #79425e",
            borderBottom: "5px double #79425e",
            padding: "7px 0",
            fontSize: "24px",
            fontStyle: "italic",
          }}
        >
          THỨ TƯ
        </div>

        <strong
          style={{
            fontSize: "52px",
            color: "#85404b",
          }}
        >
          25
        </strong>

        <div
          style={{
            flex: 1,
            borderTop: "5px double #79425e",
            borderBottom: "5px double #79425e",
            padding: "7px 0",
            fontSize: "24px",
            fontStyle: "italic",
          }}
        >
          THÁNG 11
        </div>
      </div>

      {/* Địa điểm */}
      <p
        className={`fly-5 ${animationClass}`}
        style={{
          fontSize: "23px",
          fontStyle: "italic",
          margin: "30px 0 10px",
          opacity: 0,
        }}
      >
        Tại
      </p>

      <h2
        className={`fly-5 ${animationClass}`}
        style={{
          fontSize: "clamp(19px, 5vw, 25px)",
          margin: "10px 0",
          whiteSpace: "nowrap",
          fontFamily: "'Playfair Display', serif",
          color: "#7c2937",
          opacity: 0,
        }}
      >
        ĐẠI HỌC CÔNG NGHIỆP TPHCM
      </h2>

      {/* Địa chỉ */}
      <p
        className={`fly-6 ${animationClass}`}
        style={{
          fontSize: "19px",
          fontStyle: "italic",
          color: "#66515b",
          margin: "15px 0 25px",
          fontFamily: "'Playfair Display', serif",
          opacity: 0,
        }}
      >
        12 Nguyễn Văn Bảo, Hạnh Thông, HCM
      </p>

      {/* Google Maps */}
      <a
        className={`fly-6 ${animationClass}`}
        href="https://www.google.com/maps/search/?api=1&query=Truong+Dai+hoc+Cong+nghiep+Thanh+pho+Ho+Chi+Minh"
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-block",
          backgroundColor: "#8d1535",
          color: "white",
          padding: "12px 20px",
          borderRadius: "18px",
          fontSize: "14px",
          textDecoration: "underline",
          opacity: 0,
        }}
      >
        📍 Xem Google Map
      </a>
    </div>
  );
}

export default Page6;
