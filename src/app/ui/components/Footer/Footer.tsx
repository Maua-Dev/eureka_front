import "./Footer.css";
import houseIcon from "../../../assets/icons/house-icon.svg";
import letterIcon from "../../../assets/icons/letter-icon.svg";
import facebookIcon from "../../../assets/icons/facebook-icon.svg";
import instagramIcon from "../../../assets/icons/instagram-icon.svg";
import youtubeIcon from "../../../assets/icons/youtube-icon.svg";
import blogIcon from "../../../assets/icons/blog-icon.svg";
import flickrIcon from "../../../assets/icons/flickr-icon.svg";
import twitterIcon from "../../../assets/icons/twitter-icon.svg";
import devLogo from "../../../assets/logos/dev-logo.png";
import labDesignLogo from "../../../assets/logos/labdesign-logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import DismissableDialog from "../../helpers/DismissableDialog/DismissableDialog";

export default function Footer() {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState<boolean>(false);

  return (
    <footer id="footer">
      <section className="footer__content">
        <section className="container">
          <span className="container__text">Home e contato: </span>
          <nav className="container__nav">
            <Link className="square" to={""} onClick={(event) => event.preventDefault()}>
              <img className="square__img img--hover" src={houseIcon} alt="Ícone de casa" />
            </Link>
            <DismissableDialog setOpen={setIsContactDialogOpen} dialogClassName="square" to={""}>
              <img
                className="square__img img--hover"
                onClick={() => setIsContactDialogOpen(!isContactDialogOpen)}
                src={letterIcon}
                alt="Ícone de carta"
              />
              {isContactDialogOpen && (
                <aside className="baloon">
                  <div className="baloon__content">
                    <header className="baloon__header">Contato - eureka@maua.br</header>
                    <textarea className="baloon__textarea" placeholder="Digite algo" />
                  </div>
                </aside>
              )}
            </DismissableDialog>
            <p className="nav__text">eureka@maua.br</p>
          </nav>
        </section>
        <section className="container container--desktop">
          <span className="container__text">Siga-nos: </span>
          <nav className="container__nav">
            <Link className="square" to={"https://www.facebook.com/InstitutoMaua"}>
              <img className="square__img img--hover" src={facebookIcon} alt="Ícone do Facebook" />
            </Link>
            <Link className="square" to={"https://www.instagram.com/infomaua/"}>
              <img
                className="square__img img--hover"
                src={instagramIcon}
                alt="Ícone do Instagram"
              />
            </Link>
            <Link className="square" to={"https://www.youtube.com/infomaua"}>
              <img className="square__img img--hover" src={youtubeIcon} alt="Ícone do Youtube" />
            </Link>
            <Link
              className="square"
              to={
                "https://blog.maua.br/?_ga=2.107994242.1414937596.1695719404-557492636.1682549809&_gac=1.53077722.1695732254.CjwKCAjwgsqoBhBNEiwAwe5w0yR8bwZ0v2Dd6deTiy168V5dkN9HsX1jlRARvEG7AbvunbEC-a-4uRoCmHIQAvD_BwE&_gl=1*841yo3*_ga*NTU3NDkyNjM2LjE2ODI1NDk4MDk.*_ga_Q0DH4GG89H*MTY5NTc1OTg1MS43My4xLjE2OTU3NTk4OTIuMTkuMC4w"
              }
            >
              <img className="square__img img--hover" src={blogIcon} alt="Ícone do Blog" />
            </Link>
            <Link className="square" to={"https://www.flickr.com/photos/infomaua"}>
              <img className="square__img img--hover" src={flickrIcon} alt="Ícone do Flickr" />
            </Link>
            <Link className="square" to={"https://twitter.com/InfoMaua"}>
              <img className="square__img img--hover" src={twitterIcon} alt="Ícone do Twitter" />
            </Link>
          </nav>
        </section>
        <section className="container container--desktop">
          <span className="container__text">Desenvolvido por:</span>
          <nav className="container__nav container__nav--spaced">
            <Link className="logo" to={"https://labdesign.maua.br"}>
              <img className="logo__img img--hover" src={labDesignLogo} alt="Logo da LabDesign" />
            </Link>
            <Link className="logo" to={"https://devmaua.com"}>
              <img
                className="logo__img img--hover"
                src={devLogo}
                alt="Logo da Dev. Community Mauá"
              />
            </Link>
          </nav>
        </section>
        <div className="footer__div--mobile">
          <section className="container">
            <span className="container__text">Siga-nos: </span>
            <nav className="container__nav">
              <Link className="square" to={"https://www.facebook.com/InstitutoMaua"}>
                <img
                  className="square__img img--hover"
                  src={facebookIcon}
                  alt="Ícone do Facebook"
                />
              </Link>
              <Link className="square" to={"https://www.instagram.com/infomaua/"}>
                <img
                  className="square__img img--hover"
                  src={instagramIcon}
                  alt="Ícone do Instagram"
                />
              </Link>
              <Link className="square" to={"https://www.youtube.com/infomaua"}>
                <img className="square__img img--hover" src={youtubeIcon} alt="Ícone do Youtube" />
              </Link>
              <Link
                className="square"
                to={
                  "https://blog.maua.br/?_ga=2.107994242.1414937596.1695719404-557492636.1682549809&_gac=1.53077722.1695732254.CjwKCAjwgsqoBhBNEiwAwe5w0yR8bwZ0v2Dd6deTiy168V5dkN9HsX1jlRARvEG7AbvunbEC-a-4uRoCmHIQAvD_BwE&_gl=1*841yo3*_ga*NTU3NDkyNjM2LjE2ODI1NDk4MDk.*_ga_Q0DH4GG89H*MTY5NTc1OTg1MS43My4xLjE2OTU3NTk4OTIuMTkuMC4w"
                }
              >
                <img className="square__img img--hover" src={blogIcon} alt="Ícone do Blog" />
              </Link>
              <Link className="square" to={"https://www.flickr.com/photos/infomaua"}>
                <img className="square__img img--hover" src={flickrIcon} alt="Ícone do Flickr" />
              </Link>
              <Link className="square" to={"https://twitter.com/InfoMaua"}>
                <img className="square__img img--hover" src={twitterIcon} alt="Ícone do Twitter" />
              </Link>
            </nav>
          </section>
          <section className="container">
            <span className="container__text">Desenvolvido por:</span>
            <nav className="container__nav container__nav--spaced">
              <Link className="logo" to={"https://labdesign.maua.br"}>
                <img className="logo__img img--hover" src={labDesignLogo} alt="Logo da LabDesign" />
              </Link>
              <Link className="logo" to={"https://devmaua.com"}>
                <img
                  className="logo__img img--hover"
                  src={devLogo}
                  alt="Logo da Dev. Community Mauá"
                />
              </Link>
            </nav>
          </section>
        </div>
      </section>
    </footer>
  );
}
