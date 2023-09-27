import "./Footer.css";
import houseIcon from "../../../assets/house_icon.svg";
import letterIcon from "../../../assets/letter_icon.svg";
import facebookIcon from "../../../assets/facebook_icon.svg";
import instagramIcon from "../../../assets/instagram_icon.svg";
import youtubeIcon from "../../../assets/youtube_icon.svg";
import blogIcon from "../../../assets/blog_icon.svg";
import flickrIcon from "../../../assets/flickr_icon.svg";
import twitterIcon from "../../../assets/twitter_icon.svg";
import devLogo from "../../../assets/dev_logo.png";
import labDesignLogo from "../../../assets/labdesign_logo.png";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const [isContactDialogOpen, setIsContactDialogOpen] =
    useState<boolean>(false);
  const refContactDialog = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (!refContactDialog.current!.contains(e.target as Node)) {
        setIsContactDialogOpen(false);
      }
    });
  }, []);

  return (
    <footer id="footer">
      <section>
        <div>
          <Link className="icon" to={""}>
            <img src={houseIcon} alt="Ícone de casa" />
          </Link>
          <Link ref={refContactDialog} className="icon" to={""}>
            <img
              onClick={() => setIsContactDialogOpen(!isContactDialogOpen)}
              src={letterIcon}
              alt="Ícone de carta"
            />
            {isContactDialogOpen ? (
              <div>
                <header>Contato - eureka@maua.br</header>
                <textarea placeholder="Digite algo" />
              </div>
            ) : null}
          </Link>
          <p className="email">eureka@maua.br</p>
        </div>

        <nav>
          <Link className="icon" to={"https://www.facebook.com/InstitutoMaua"}>
            <img className="social" src={facebookIcon} alt="Ícone do Facebook" />
          </Link>
          <Link className="icon" to={"https://www.instagram.com/infomaua/"}>
            <img className="social" src={instagramIcon} alt="Ícone do Instagram" />
          </Link>
          <Link className="icon" to={"https://www.youtube.com/infomaua"}>
            <img className="social" src={youtubeIcon} alt="Ícone do Youtube" />
          </Link>
          <Link
            className="icon"
            to={
              "https://blog.maua.br/?_ga=2.107994242.1414937596.1695719404-557492636.1682549809&_gac=1.53077722.1695732254.CjwKCAjwgsqoBhBNEiwAwe5w0yR8bwZ0v2Dd6deTiy168V5dkN9HsX1jlRARvEG7AbvunbEC-a-4uRoCmHIQAvD_BwE&_gl=1*841yo3*_ga*NTU3NDkyNjM2LjE2ODI1NDk4MDk.*_ga_Q0DH4GG89H*MTY5NTc1OTg1MS43My4xLjE2OTU3NTk4OTIuMTkuMC4w"
            }
          >
            <img className="social" src={blogIcon} alt="Ícone do Blog" />
          </Link>
          <Link className="icon" to={"https://www.flickr.com/photos/infomaua"}>
            <img className="social" src={flickrIcon} alt="Ícone do Flickr" />
          </Link>
          <Link className="icon" to={"https://twitter.com/InfoMaua"}>
            <img className="social" src={twitterIcon} alt="Ícone do Twitter" />
          </Link>
        </nav>
      </section>
      <aside>
        <span>Desenvolvido por:</span>
        <div>
          <Link className="link" to={"https://labdesign.maua.br"}>
            <img src={labDesignLogo} alt="Logo da LabDesign" />
          </Link>
          <Link className="link" to={"https://devmaua.com"}>
            <img src={devLogo} alt="Logo da Dev. Community Mauá" />
          </Link>
        </div>
      </aside>
    </footer>
  );
}
