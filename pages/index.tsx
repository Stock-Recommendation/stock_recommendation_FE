import GamePlay from "@components/sections/GamePlay";
import Header from "@components/sections/Header";
import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getCms, getWPPost } from "@redux/slices/cmsSlice";
import { useDispatch } from "react-redux";
import Footer from "@components/sections/Footer";
import Copyright from "@components/sections/Copyright";
import HeroArenaPopup from "@components/Popup";
import TokenList from "@components/priceBoard/TokenList";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCms());
    dispatch(getWPPost());
  }, []);
  const scrollPageItems = [
    { title: "Home", id: "home" },
    { title: "Game Play", id: "game-play" },
    { title: "Character System", id: "character-system" },
    { title: "Hera Utility", id: "hera-utility" },
    { title: "Hegem Utility", id: "hegem-utility" },
    { title: "Road Map", id: "roadmap" },
    { title: "Investors And Partners", id: "investors-and-partners" },
    { title: "Media Press", id: "media-press" },
    { title: "Blog", id: "blog" },
    { title: "FAQ", id: "faq" },
  ];
  return (
    <div className="">
      <HeroArenaPopup />
      <div className="scroll-spy d-none d-md-flex">
        {/* <div className="nav nav-pills">
          <nav id="scroll-page" className="navbar">
            {scrollPageItems.map((obj, i) => {
              return (
                // <a className={`nav-link`} href={`#${obj.id}`} key={obj.id}>
                //   <div className="d-flex align-items-center justify-content-end">
                //     <span>{obj.title}</span>
                //     <img src="/img/icon/scroll-icon.png" />
                //   </div>
                // </a>
                <div className="header justify-content-between align-items-center d-none d-md-flex">
                  <div>
                    <img className="hera-logo" src="/img/icon/logo.png" />
                  </div>
                  <div className="d-flex align-items-center">
                      <div className="header--item" key={i} />
                  </div>
                </div>
              );
            })}
          </nav>
        </div> */}
      </div>
      <div
        data-spy="scroll"
        data-target="#scroll-page"
        // data-bs-spy="scroll"
        // data-bs-target="#scroll-page"
        // data-bs-offset="0"
        // tab-index="0"
      >
        <div className="d-flex text-center flex-wrap flex-md-nowrap align-items-center justify-content-center py-2">
          <div className="mx-3 address-line">
            <a
              className="address-line"
              target="_blank"
              href="https://bscscan.com/token/0x49c7295ff86eabf5bf58c6ebc858db4805738c01"
            >
              HERA Contract Address: 0x49C7295ff86EaBf5bf58C6eBC858DB4805738c01
            </a>
          </div>
          <div className="mx-3 address-line">
            <a
              className="address-line"
              target="_blank"
              href="https://bscscan.com/token/0x7f0cd209b05cd6a1183a5fadd1b0fcaa6f50f808"
            >
              HEGEM Contract Address: 0x7f0Cd209B05CD6a1183A5fadd1b0fCAa6f50F80
            </a>
          </div>
        </div>
        <Header />
        {/* <GamePlay /> */}
        <TokenList/>
        <Footer />
        <Copyright />
      </div>
    </div>
  );
};

export default Home;
