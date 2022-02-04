import styles from "./footer.module.scss";
import footerLogo from "../../assets/images/footerLogo.svg";
import insta from "../../assets/images/Telegram.svg";
import tg from "../../assets/images/Instagram.svg";
import facebook from "../../assets/images/Facebook.svg";
import innovateIcon from "../../assets/images/InnovateIcon.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <img src={footerLogo} alt="" className={styles.footerLogoImg} />
          </div>

          <div className={styles.footerFulibu} style={{ marginRight: "30px" }}>
            <h4 className={styles.footerFulibuTitle}>fulibu</h4>

            <a href="" className={styles.footerFulibuLink}>
              О компании
            </a>
            <a href="" className={styles.footerFulibuLink}>
              Публичная оферта
            </a>
            <a href="" className={styles.footerFulibuLink}>
              Служба поддержки
            </a>
            <a href="" className={styles.footerFulibuLink}>
              Контакты
            </a>
          </div>

          <div className={styles.footerFulibu}>
            <h4 className={styles.footerFulibuTitle}>Сотрудничество</h4>

            <a href="" className={styles.footerFulibuLink}>
              Издательствам
            </a>
            <a href="" className={styles.footerFulibuLink}>
              Авторам{" "}
            </a>
            <a href="" className={styles.footerFulibuLink}>
              Библиотекам
            </a>
            <a href="" className={styles.footerFulibuLink}>
              Вебмастерам
            </a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.footerBottomOrg}>© ООО «FULIBU»</p>

          <div className={styles.footericons}>
                <a href="" className={styles.footericon}>
                    <img src={insta} alt="" />
                </a>
                <a href="" className={styles.footericon}>
                    <img src={tg} alt="" />
                </a>
                <a href="" className={styles.footericon}>
                    <img src={facebook} alt="" />
                </a>
          </div>

          <div className={styles.footerComand}>
              <p className={styles.footerDescr}>Разработано командой </p>

              <div className={styles.footerInnovate}>
                  <img src={innovateIcon} alt="" />
                  <p className={styles.footerInnovateDescr}>Innovative Development Group</p>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
