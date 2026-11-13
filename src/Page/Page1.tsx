import totnghiep from "../assets/totnghiep.png";

function Page1() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "450px",
        margin: "0 auto",
        padding: "0 12px",
        boxSizing: "border-box",
      }}
    >
      <img
        src={totnghiep}
        alt="Thiệp tốt nghiệp"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          objectFit: "contain",
        }}
      />
    </div>
  );
}

export default Page1;