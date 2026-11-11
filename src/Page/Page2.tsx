import background from "../assets/backgourg1.png";
import totnghiep from "../assets/totphiep.jpg";
function Page2() {
 

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
        
    </div>
    
  );
}


export default Page2;