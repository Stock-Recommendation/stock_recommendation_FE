import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { setPopup } from "@redux/slices/counter";

export default function HeroArenaPopup() {
  const popupData = useSelector((state) => state.cmsSlice.cmsData) as any;

  var carouselSetting = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const dispatch = useDispatch();
  useEffect(() => {
    let entered = sessionStorage["popup-flag"];
    if (!entered) {
      dispatch(setPopup(true));
      sessionStorage["popup-flag"] = true;
    } else {
      // dispatch(setPopup(false));
      // sessionStorage["popup-flag"] = false;
    }
  }, [dispatch]);
  const popupOpen = useSelector((state) => state.counter.popupOpen);

  return (
    // popupOpen
    <div>
      <Modal
        // visible={true}
        centered
        show={popupOpen}
        onHide={() => {
          dispatch(setPopup(false));
          sessionStorage["popup-flag"] = false;
        }}
        dialogClassName="popup-launching-wrap"
      >
        <div className="popup-launching">
          <Slider {...carouselSetting}>
            {popupData?.data?.attributes?.popups?.map((item, index) => (
              <a href={item.url} target="_blank" rel="noreferrer" key={index}>
                <img
                  src={`https://cms.heroarena.app${item?.image?.data?.attributes?.url}`}
                  style={{ width: "100%" }}
                  alt="popup"
                />
              </a>
            ))}
          </Slider>
        </div>
      </Modal>
    </div>
  );
}
