
import no from "../assets/no.jpg";
function Page4() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "426px",
        minHeight: "600px",
        margin: "0 auto",
        padding: "35px 20px",
        boxSizing: "border-box",
          backgroundImage: `url(${no})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
        textAlign: "center",
        fontFamily: '"Times New Roman", Times, serif',
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
     
       <div
  style={{
    fontFamily: '"Amsterdam Four", cursive',
    fontSize: "42px",
    fontWeight: "normal",
    color: "#4e3039",
  }}
>
  Thank You
</div>
    

      {/* Lời cảm ơn */}
      <div
        style={{
          
          color: "#842b40",
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(25px, 7vw, 36px)",
         
          }}
        >
          CẢM ƠN BẠN!
        </h1>

        <p
          style={{
            fontSize: "19px",
            lineHeight: 1.7,
            margin: "0 auto",
            maxWidth: "330px",
          }}
        >
          Cảm ơn bạn đã dành thời gian
          đến chung vui và lưu giữ khoảnh khắc
          đặc biệt này cùng mình.
        </p>

        <p
          style={{
            fontSize: "23px",
            fontStyle: "italic",
            marginTop: "25px",
            color: "#a64a5c",
          }}
        >
          With love ♥
        </p>
      </div>
    </div>
  );
}

export default Page4;
