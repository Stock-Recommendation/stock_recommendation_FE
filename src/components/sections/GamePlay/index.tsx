import React from "react";
import Slider from "react-slick";

type Props = {};

export default function GamePlay({}: Props) {
  var carouselSetting = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          rows: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 2200,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };

  return (
    <div className="section--gameplay py-5" id="game-play">
      <div className="container py-5">
        <div className="text-center">
          <img className="title pb-3" src="/img/title/game-play.png" />
          <div className="text-description">
            Hero Arena promises to provide players with the best turn-based
            play-to-earn game experience there ever was on the market
          </div>
        </div>
        <div>
          <Slider {...carouselSetting}>
            <div className="gameplay-card d-flex align-items-center flex-column text-center">
              <div>
                <img src="/img/icon/battle.png" />
              </div>
              <div className="text-title">Battle</div>
              <div className="text-description">
                Build unstoppable teams of heroes and conquer the boss
              </div>
            </div>
            <div className="gameplay-card d-flex align-items-center flex-column text-center">
              <div>
                <img src="/img/icon/treasure.png" />
              </div>
              <div className="text-title">Treasure</div>
              <div className="text-description">
                Mix and match heroes to create the new team
              </div>
            </div>
            <div className="gameplay-card d-flex align-items-center flex-column text-center">
              <div>
                <img src="/img/icon/arena.png" />
              </div>
              <div className="text-title">Arena (Ver 2.0)</div>
              <div className="text-description">
                Challenge other players to achieve higher rankings to get more
                rewards
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
