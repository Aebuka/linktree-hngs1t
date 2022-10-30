import zuriImg from "../assets/images/ZuriInternshipLogosvg.svg";
import hngImg from "../assets/images/I4Gsvg.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={zuriImg} alt="" />
      <p>HNG Internship 9 Frontend Task</p>
      <img src={hngImg} alt="" />
    </footer>
  );
}
