import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="w-full flex flex-col items-center gap-8">
        <div className="footer-container">
          <div className="flex flex-col justify-center">
            <p>FullStack Developer</p>
          </div>
          <div className="socials">
            {socialImgs.map((socialImg) => (
              <a className="icon" target="_blank" href={socialImg.url} key={socialImg.url}>
                <img src={socialImg.imgPath} alt="social icon" />
              </a>
            ))}
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-center md:text-end">
              © {new Date().getFullYear()} Rodrigo Oliveira. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
