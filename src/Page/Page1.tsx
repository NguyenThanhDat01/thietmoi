
import totnghiep from "../assets/totnghiep.png";

function Page1() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "450px",
        margin: "0 auto",
        padding: "0",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <img
        src={totnghiep}
        alt="Thiệp tốt nghiệp"
        style={{
          display: "block",
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          objectFit: "contain",
          margin: "0 auto",
        }}
      />
    </div>
  );
}

export default Page1;
