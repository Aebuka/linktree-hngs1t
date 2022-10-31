import "../App.css";
import Buttonlink from "./Buttonlink";
import Avatar from "./Avatar";
import profileImg from "../assets/images/20220310_154252.jpg";
import { links } from "./Buttonlink";
import Footer from "./Footer";
import slackImg from "../assets/images/slack.png";
import githubImg from "../assets/images/github.png";
import shareImgm from "../assets/images/mobileAvatarShare.png";
import shareImgw from "../assets/images/webAvatarShare.png";

export default function App() {
  return (
    <div className="App">
      <div className="profile">
        <a href="/">
          <img className="share-img" src={shareImgm} alt="" />
        </a>
        <a href="/">
          <img className="share-img hidden" src={shareImgw} alt="" />
        </a>
        <Avatar img={profileImg} />
        <h1 id="twitter">Chukwuaebuka</h1>
        <p id="slack">Aebuka</p>
      </div>
      <div className="linktree">
        {links.map((link) => {
          return (
            <Buttonlink
              key={link.key}
              id={link.id}
              dataTip={link.dataTip}
              href={link.href}
              displayName={link.displayName}
            />
          );
        })}
        <div className="socials">
          <a href="/">
            <img src={slackImg} alt="" />
          </a>
          <a href="/">
            <img src={githubImg} alt="" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
