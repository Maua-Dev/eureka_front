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
import SquareIconButton from "../SquareIconButton/SquareIconButton";

export default function Footer() {
  return (
    <footer id="footer">
      <section className="footer__content">
        <section className="container">
          <span className="container__text">Home e contato: </span>
          <nav className="container__nav">
            <SquareIconButton icon={houseIcon} alt="Ícone de casa" />
            <SquareIconButton
              baloonContentClassName="baloon__content"
              position="--bottom_left"
              icon={letterIcon}
              alt="Ícone de carta"
            >
              <header className="baloon__header">Contato - eureka@maua.br</header>
              <textarea className="baloon__textarea" placeholder="Digite algo" />
            </SquareIconButton>
            <p className="nav__text">eureka@maua.br</p>
          </nav>
        </section>
        <section className="container container--desktop">
          <span className="container__text">Siga-nos: </span>
          <nav className="container__nav">
            <SquareIconButton
              icon={facebookIcon}
              alt="Ícone do Facebook"
              to={"https://www.facebook.com/InstitutoMaua"}
            />
            <SquareIconButton
              icon={instagramIcon}
              alt="Ícone do Instagram"
              to={"https://www.instagram.com/infomaua/"}
            />
            <SquareIconButton
              icon={youtubeIcon}
              alt="Ícone do Youtube"
              to={"https://www.youtube.com/infomaua"}
            />
            <SquareIconButton
              icon={blogIcon}
              alt="Ícone do Facebook"
              to={
                "https://blog.maua.br/?_ga=2.107994242.1414937596.1695719404-557492636.1682549809&_gac=1.53077722.1695732254.CjwKCAjwgsqoBhBNEiwAwe5w0yR8bwZ0v2Dd6deTiy168V5dkN9HsX1jlRARvEG7AbvunbEC-a-4uRoCmHIQAvD_BwE&_gl=1*841yo3*_ga*NTU3NDkyNjM2LjE2ODI1NDk4MDk.*_ga_Q0DH4GG89H*MTY5NTc1OTg1MS43My4xLjE2OTU3NTk4OTIuMTkuMC4w"
              }
            />
            <SquareIconButton
              icon={flickrIcon}
              alt="Ícone do Flickr"
              to={"https://www.flickr.com/photos/infomaua"}
            />
            <SquareIconButton
              icon={twitterIcon}
              alt="Ícone do Twitter"
              to={"https://twitter.com/InfoMauaa"}
            />
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
              <SquareIconButton
                icon={facebookIcon}
                alt="Ícone do Facebook"
                to={"https://www.facebook.com/InstitutoMaua"}
              />
              <SquareIconButton
                icon={instagramIcon}
                alt="Ícone do Instagram"
                to={"https://www.instagram.com/infomaua/"}
              />
              <SquareIconButton
                icon={youtubeIcon}
                alt="Ícone do Youtube"
                to={"https://www.youtube.com/infomaua"}
              />
              <SquareIconButton
                icon={blogIcon}
                alt="Ícone do Facebook"
                to={
                  "https://blog.maua.br/?_ga=2.107994242.1414937596.1695719404-557492636.1682549809&_gac=1.53077722.1695732254.CjwKCAjwgsqoBhBNEiwAwe5w0yR8bwZ0v2Dd6deTiy168V5dkN9HsX1jlRARvEG7AbvunbEC-a-4uRoCmHIQAvD_BwE&_gl=1*841yo3*_ga*NTU3NDkyNjM2LjE2ODI1NDk4MDk.*_ga_Q0DH4GG89H*MTY5NTc1OTg1MS43My4xLjE2OTU3NTk4OTIuMTkuMC4w"
                }
              />
              <SquareIconButton
                icon={flickrIcon}
                alt="Ícone do Flickr"
                to={"https://www.flickr.com/photos/infomaua"}
              />
              <SquareIconButton
                icon={twitterIcon}
                alt="Ícone do Twitter"
                to={"https://twitter.com/InfoMauaa"}
              />
            </nav>
          </section>
          <section className="container container--logos">
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
