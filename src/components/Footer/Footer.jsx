import styles from "./footer.module.scss";
import footerLogo from "../../assets/images/footerLogo.svg";
import insta from "../../assets/images/Telegram.svg";
import tg from "../../assets/images/Instagram.svg";
import facebook from "../../assets/images/Facebook.svg";
import innovateIcon from "../../assets/images/InnovateIcon.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <img src={footerLogo} alt="" className={styles.footerLogoImg} />
          </div>

          <div className={styles.footerFulibu}>
            <h4 className={styles.footerFulibuTitle}>fulibu</h4>

            <Link to="/" className={styles.footerFulibuLink}>
              О компании
            </Link>
            <Link to="/" className={styles.footerFulibuLink}>
              Публичная оферта
            </Link>
            <Link to="/" className={styles.footerFulibuLink}>
              Служба поддержки
            </Link>
            <Link to="/" className={styles.footerFulibuLink}>
              Контакты
            </Link>
          </div>

          <div className={styles.footerFulibu}>
            <h4 className={styles.footerFulibuTitle}>Сотрудничество</h4>

            <Link to="/" className={styles.footerFulibuLink}>
              Издательствам
            </Link>
            <Link to="/" className={styles.footerFulibuLink}>
              Авторам{" "}
            </Link>
            <Link to="/" className={styles.footerFulibuLink}>
              Библиотекам
            </Link>
            <Link to="/" className={styles.footerFulibuLink}>
              Вебмастерам
            </Link>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.footerBottomOrg}>© ООО «FULIBU»</p>

          <div className={styles.footericons}>
            <Link to="/" className={styles.footericon}>
              <img src={insta} alt="" />
            </Link>
            <Link to="/" className={styles.footericon}>
              <img src={tg} alt="" />
            </Link>
            <Link to="/" className={styles.footericon}>
              <img src={facebook} alt="" />
            </Link>
          </div>

          <div className={styles.footerComand}>
            <p className={styles.footerDescr}>Разработано командой </p>

            <div className={styles.footerInnovate}>
              <img src={innovateIcon} alt="" />
              <p className={styles.footerInnovateDescr}>
                Innovative Development Group
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
