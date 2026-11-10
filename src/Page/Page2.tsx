import background from "../assets/backgroud.jpg";
import totnghiep from "../assets/totphiep.jpg";
function Page2() {
   const photoStyle: React.CSSProperties = {
    position: "absolute",
    width: "55%",
    height: "250px",
    padding: "10px",
    backgroundColor: "#7c253b",
    boxSizing: "border-box",
    objectFit: "cover",
  };

  return (
      <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "426px",
        minHeight: "620px",
        margin: "0 auto",
        padding: "20px 16px",
        boxSizing: "border-box",
        overflow: "hidden",
    
       backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
      
        
      }}
    >
      <div
  style={{
    width: "195px",
    minWidth: "400px",
    minHeight: "600px",
    backgroundColor: "transparent",
  border: "3px solid #77172c",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    boxSizing: "border-box",

    // Bo tròn 4 góc
    borderRadius: "18px",
  }}
>
      {/* Tiêu đề */}
      <h1
        style={{
          textAlign: "center",
          color: "#a20d36",
          fontFamily: "Georgia, serif",
          fontSize: "clamp(22px, 5vw, 36px)",
          fontWeight: "bold",
          lineHeight: 1.1,
          margin: "0 0 35px",
          textShadow:
            "2px 2px white, -2px -2px white, 2px -2px white, -2px 2px white",
          position: "relative",
          zIndex: 2,
        }}
      >
        For the besties
        <br />
        OF YOUTH
      </h1>

      {/* Nội dung */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          width: "100%",
          minHeight: "420px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Khung ảnh */}
        <div
          style={{
            width: "125px",
            minWidth: "125px",
            minHeight: "420px",
            backgroundColor: "#761b2f",
            padding: "15px 11px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            boxSizing: "border-box",
          }}
        >
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              style={{
                width: "100%",
                height: "105px",
                overflow: "hidden",
              }}
            >
              <img
                src={totnghiep}
                alt="Graduation"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>

        {/* Phần nội dung bên phải */}
        <div style={{ flex: 1, minWidth: 0 }} />
      </div>

      {/* Họa tiết phía trên */}
     

      
      </div>
         <div
        style={{
          position: "relative",
          width: "100%",
          height: "380px",
          marginTop: "100px",
        }}
      >
   
        <img
          src={totnghiep}
          alt="Ảnh tốt nghiệp 1"
          style={{
            ...photoStyle,
            top: 0,
            left: "5%",
            transform: "rotate(-6deg)",
          }}
        />

        <img
          src={totnghiep}
          alt="Ảnh tốt nghiệp 2"
          style={{
            ...photoStyle,
            top: "100px",
            right: "2%",
            transform: "rotate(10deg)",
          }}
        />
      </div>

      {/* Tiêu đề */}
      <h1
        style={{
          fontSize: "clamp(28px, 7vw, 43px)",
          fontFamily: "'Playfair Display', serif",
          fontWeight: "bold",
          margin: "0 0 12px",
          whiteSpace: "nowrap",
          color: "#801e31",
        }}
      >
        LỄ TỐT NGHIỆP
      </h1>

      {/* Được tổ chức */}
      <p
        style={{
          fontSize: "25px",
          fontStyle: "italic",
          margin: "30px 0 25px",
          color: "#753135",
        }}
      >
        ĐƯỢC TỔ CHỨC
      </p>

      {/* Thời gian */}
      <p
        style={{
          fontSize: "23px",
          margin: "20px 0",
          fontFamily: '"Times New Roman", Times, serif',
        }}
      >
        VÀO 07:00, THỨ TƯ
      </p>

      {/* Ngày tháng */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          margin: "25px 0",
          color: "#79425e",
          fontFamily: '"Times New Roman", Times, serif',
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
            fontFamily: '"Times New Roman", Times, serif',
          }}
        >
          THÁNG 11
        </div>

        <strong
          style={{
            fontSize: "52px",
            color: "#85404b",
            fontFamily: '"Times New Roman", Times, serif',
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
            fontFamily: '"Times New Roman", Times, serif',
          }}
        >
          10:00 - 11:00
        </div>
      </div>

      {/* Địa điểm */}
      <p
        style={{
          fontSize: "23px",
          fontStyle: "italic",
          margin: "30px 0 10px",
        }}
      >
        Tại
      </p>

      <h2
        style={{
          fontSize: "clamp(19px, 5vw, 25px)",
          margin: "10px 0",
          whiteSpace: "nowrap",
          fontFamily: "'Playfair Display', serif",
          color: "#7c2937",
        }}
      >
        ĐẠI HỌC CÔNG NGHIỆP TPHCM
      </h2>

      <p
        style={{
          fontSize: "19px",
          fontStyle: "italic",
          color: "#66515b",
          margin: "15px 0 25px",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        12 Nguyễn Văn Bảo, Hạnh Thông, HCM
      </p>

      {/* Google Maps */}
      <a
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
        }}
      >
        📍 Xem Google Map
      </a>
    </div>
    
  );
}


export default Page2;