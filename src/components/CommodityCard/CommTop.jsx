import React from "react";
import styles from "./commtop.module.scss";
import pricetag from "../../assets/images/Commodities/pricetag.svg";
import saveIcon from "../../assets/images/Commodities/save.svg";
import book from "../../assets/images/Commodities/book.svg";
import { FaBookmark, FaRegBookmark, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";



const CommTop = ({ data }) => {

  const Description = () => {
    if (!data.description) {
      return <p className={styles.commDescr}>Современное общество пропагандирует культ успеха: будь умнее, богаче, продуктивнее – будь лучше всех. Соцсети изобилуют историями на тему, как какой-то малец придумал приложение и заработал кучу денег, статьями в духе «Тысяча и один способ быть счастливым», а фото во френдленте создают впечатление, что окружающие живут лучше и интереснее, чем мы.Однако наша зацикленность на позитиве и успехе лишь напоминает о том, чего мы не достигли, о мечтах, которые не сбылись. Как же стать по-настоящему счастливым? Популярный блогер Марк Мэнсон в книге «Тонкое искусство пофигизма» предлагает свой, оригинальный подход к этому вопросу. Его жизненная философия проста – необходимо научиться искусству пофигизма. Определив то, до чего вам действительно есть дело, нужно уметь наплевать на все второстепен ное, забить на трудности, послать к черту чужое мнение и быть готовым взглянуть в лицо неудачам и показатьим средний палец.</p>
    } else {
      return <p className={styles.commDescr}>{data.description}</p>
    }
  }


  const [save, setSave] = useState(false)

  const handleSave = () => {
    console.log(save);
    setSave(!save)
  }

 const ChangeSaveBtn = ()=> {
   if(!save){
     return <Link to="" className={`${styles.commRightBtn} ${styles.active}`} onClick={handleSave}>
     <FaRegBookmark className={styles.commRightBtnIcon} /> Добавить в библиотеку
   </Link>
   }else  {
    return <Link to="" className={`${styles.commRightBtn}`} onClick={handleSave}>
    <FaBookmark className={styles.commRightBtnIcon} /> В библиотеке
  </Link>
   }
 }

    console.log(data, "current");
  return (
    <div className="container">
      <div className="mt-5">
        <div className={styles.commRightTitleBox}>
          <h3 className={styles.commRightTitle}>{data.title}</h3>
          <p className={styles.commRightLabel}>
            Парадоксальный способ жить счастливо
          </p>
        </div>
        <div className={styles.comm}>
          <div className={styles.commLeft}>
            <div className={styles.commLeftBox}>
              <img src={data.img} alt="" />
            </div>

            <Link to="/" className={styles.commLeftLink}>
              <img src={pricetag} alt="" /> {data.price}
            </Link>
          </div>

          <div className={styles.commRight}>
            <div className={styles.commRightTitleBox1}>
              <h3 className={styles.commRightTitle}>{data.title}</h3>

              <p className={styles.commRightLabel}>
                Парадоксальный способ жить счастливо
              </p>
            </div>
            <div className={styles.commRightBox}>
              <div className={styles.commRightInfos}>
                <h4 className={styles.commRightType}>Автор:</h4>
                <p className={styles.commRightInfo}>{data.author}</p>
              </div>

              <div className={styles.commRightInfos}>
                <h4 className={styles.commRightType}>Рейтинг:</h4>
                <div className={styles.commRightStars}>
                  <FaStar className={styles.commRightStar} />
                  <FaStar className={styles.commRightStar} />
                  <FaStar className={styles.commRightStar} />
                  <FaStar className={styles.commRightStar} />
                  <FaStar className={styles.commRightStar} />
                  <h4 className={styles.commRightRate}>4,1</h4>
                </div>
              </div>

              <div className={styles.commRightInfos}>
                <h4 className={styles.commRightType}>Дата выхода:</h4>
                <p className={styles.commRightInfo}>04 сентября 2017</p>
              </div>

              <div className={styles.commRightInfos}>
                <h4 className={styles.commRightType}>Объем:</h4>
                <p className={styles.commRightInfo}>180 стр.</p>
              </div>

              <div className={styles.commRightInfos}>
                <h4 className={styles.commRightType}>Жанр:</h4>
                <p className={styles.commRightFormat}>
                  Зарубежная психология, Саморазвитие / личностный рост,
                  Социальная психология
                </p>
              </div>

              <div className={styles.commRightInfos}>
                <h4 className={styles.commRightType}>Теги:</h4>
                <p className={styles.commRightFormat}>
                  Бестселлеры «New York Times», Борьба со стрессом, Поиск
                  предназначения, Самореализация
                </p>
              </div>

              <div className={styles.commRightInfos}>
                <h4 className={styles.commRightType}>
                  Форматы для скачивания:
                </h4>
                <p className={styles.commRightInfo}>fb2, txt, epub, pdf, mp3</p>
              </div>

              <div className={styles.commRightBtns}>
                <Link to="/" className={styles.commRightBtn1}>
                  Текст
                </Link>
                <Link to="/" className={styles.commRightBtn2}>
                  Аудио
                </Link>
              </div>
            </div>

            <div className={styles.commRightLinks}>



              {/* ===================================== */}
              
        <ChangeSaveBtn/>
              {/* ================================ */}


              <Link to="/" className={styles.commRightBtn}>
                <img src={book} alt="" /> Купить{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <h2 className={styles.commDescrTitle}>Описание книги</h2>

      <Description />
    </div>
  );
};

export default CommTop;
