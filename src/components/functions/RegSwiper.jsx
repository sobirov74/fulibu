import React, { Component } from 'react';
import toLeft from '../../assets/images/arrow-left.svg';
import toRight from '../../assets/images/arrow-right.svg';
import slideIcon1 from '../../assets/images/slideIcon1.svg';
import slideIcon2 from '../../assets/images/slideIcon2.svg';
import slideIcon3 from '../../assets/images/slideIcon3.svg';
import slideIcon4 from '../../assets/images/slideIcon4.svg';
import slideIcon5 from '../../assets/images/slideIcon5.svg';


export default class RegSwiper extends Component {
    state = [{
        id: 1,
        title: 'и читай книги',
        outline: 'Регистрируйся ',
        description: 'В нашей платформе более 5000 книг и журналов на разные темы и увлечения. У нас ты найдешь книгу души, можешь не выходя из дома путешествовать или окунутся в запутанный криминальный детектив.',
        rightIcon: slideIcon1,
        

    },
    {
        id: 2,
        title: 'Покупай книгу и ',
        outline: 'наслаждайся',
        description: 'Во всех книгах вложена душа писатьеля. Все эмоции передаются через платформе ',
        rightIcon: slideIcon2,
    },
    {
        id: 3,
        title: '  и зарабатывай',
        outline: 'Приглашай ',
        description: 'Чем больше друзей позовешь, тем больше покупок. Чем больше покупок, тем больше кэшбэков. Таким нехитрым способом можно зарабатывать и шанс выиграть супер приз.',
        rightIcon: slideIcon3,

    },
    {
        id: 4,
        title: ' это не только возврат!',
        outline: 'КЭШБЭК',
        description: 'За покупку каждого дуга можно получать кэшбэк. Даже ели твой друг позовет своего друга, то кэшбэк получишь и ты. Приглашай друзей, зарабатывай и читай вместе.',
        rightIcon: slideIcon4,

    },
    {
        id: 5,
        title: 'Наконец ',
        outline: 'Spark',
        description: 'Никогда такого не было, что бы за прочтение книг дарили автомобили. А вот мы дарим, быстрее читай книги и побеждай. <br /> Не упусти шанс!',
        rightIcon: slideIcon5,
    },
];

    handleTitle(title, outline){
        const { id } = this.state;

        if(id === 2 || id === 5){
            <h3 className="main__reg-title">
                {title}<a href=''>{outline}</a>
            </h3>
        }

        else{
            <h3 className="main__reg-title">
                <a href=''>{outline}</a>{title}
            </h3>
        }
    }

  render() {
    return <React.Fragment>
        {this.state.map((match) => (
            <div className="main__reg" key={match.id}>
            <div className="main__reg-left">
            {this.handleTitle(match.title, match.outline)}
      
            <p className="main__reg-descr">{match.description}</p>
      
            <div className="main__reg-dots">
              <span className="main__reg-icon"> <img src={toLeft} alt="" /> </span>
      
              <span></span>
              <span></span>
              <span></span>
      
              <span className="main__reg-icon"> <img src={toRight} alt="" /></span>
            </div>
          </div>
      
          <div className="main__reg-right">
            <img src={match.rightIcon} alt="" />
          </div>
  </div>
    
        ))}
  </React.Fragment>
  }
}
