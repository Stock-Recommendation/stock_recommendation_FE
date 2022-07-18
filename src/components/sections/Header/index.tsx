import React, { useEffect, useRef, useState } from "react";
import Parallax from "parallax-js";
import { MainMenu, SubMenu } from "./MenuItem";

type Props = {};

export default function Header({ }: Props) {
  const sceneEl = useRef(null);
  const characterEl = useRef(null);

  const [isOpenDrawer, setOpenDrawer] = useState<boolean>(false);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
      hoverOnly: true,
    });
    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);

  // useEffect(() => {
  //   const parallaxInstance = new Parallax(characterEl.current, {
  //     relativeInput: true,
  //   });
  //   parallaxInstance.enable();

  //   return () => parallaxInstance.disable();
  // }, []);
  return (
    <div className="section--header" id="home">
      <div className="drawer" hidden={!isOpenDrawer}>
        <div className="d-flex justify-content-end">
          <img
            className="close-btn"
            src="/img/icon/close-icon.png"
            onClick={() => setOpenDrawer(false)}
          />
        </div>
        <div className="p-3">
          {MainMenu.map((item: MainMenu, i: number) =>
            <div className="mobile-item" key={i}>
              {item.sub ? (
                <>
                  <div
                    className="d-flex align-items-center"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {item.title}
                    <div>
                      <img
                        className="nav-icon mb-1"
                        src="/img/icon/dropdown.svg"
                      />
                    </div>
                  </div>
                  <ul className="dropdown-menu">
                    {item.sub.map((sub: SubMenu) => (
                      <li key={sub.name} className="p-3">
                        <a
                          href={sub.url}
                          target={`${sub.isNewTab ? "_blank" : ""}`}
                        >
                          {sub.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a
                  key={item.title}
                  href={item.link}
                  target={`${item.isNewTab ? "_blank" : ""}`}
                >
                  {item.title}
                </a>
              )}
            </div>
          )}
        </div>
        <div className="d-flex align-items-center justify-content-center mb-5">
          <div>
            <a target="_blank" href="https://nft.heroarena.app/">
              <img className="btn" src="/img/button/market-mobile.png" />
            </a>
          </div>
          <div>
            <a target="_blank" href="https://play.heroarena.app/">
              <img className="btn" src="/img/button/playnow-mobile.png" />
            </a>
          </div>
        </div>
      </div>
      <div className="parallax d-none d-md-block">
        <div ref={sceneEl}>
          <li data-depth="0.25">
            <img className="prl-layer" src="/img/parallax/GLASS_3.png" />
          </li>
          <li data-depth="0.45">
            <img
              className="prl-layer rotate-180"
              src="/img/parallax/GLASS_2.png"
            />
          </li>
          <li data-depth="0.55">
            <img className="prl-layer" src="/img/parallax/GLASS_2.png" />
          </li>
          <li data-depth="0.75">
            <img className="prl-layer" src="/img/parallax/GLASS_1.png" />
          </li>
        </div>
      </div>
      <div className="container">
        <div className="header justify-content-between align-items-center d-none d-md-flex">
          <div>
            <img className="hera-logo" src="/img/icon/logo.png" />
          </div>
          <div className="d-flex align-items-center">
            {MainMenu.map((item: MainMenu, i: number) =>
              <div className="header--item" key={i}>
                {item.sub ? (
                  <>
                    <div
                      className="d-flex align-items-center"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {item.title}
                      <div>
                        <img
                          className="nav-icon mb-1"
                          src="/img/icon/dropdown.svg"
                        />
                      </div>
                    </div>
                    <ul className="dropdown-menu">
                      {item.sub.map((sub: SubMenu) => (
                        <li key={sub.name} className="p-3">
                          <a
                            href={sub.url}
                            target={`${sub.isNewTab ? "_blank" : ""}`}
                          >
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a
                    key={item.title}
                    href={item.link}
                    target={`${item.isNewTab ? "_blank" : ""}`}
                  >
                    {item.title}
                  </a>
                )}
              </div>
            )}
            <div className="header--item mr-1">
              <a target="_blank" href="https://nft.heroarena.app/">
                <img
                  className="header--item-img"
                  src="/img/button/marketplace.png"
                />
              </a>
            </div>
            <div className="header--item">
              <a target="_blank" href="https://play.heroarena.app/">
                <img
                  className="header--item-img"
                  src="/img/button/playnow.png"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="header-mobile d-flex d-md-none justify-content-between align-items-center">
          <div>
            <img className="hera-logo" src="/img/icon/logo.png" />
          </div>
          <button className="btn-global" type="button" onClick={() => setOpenDrawer(!isOpenDrawer)}>
            <img className="burger-btn" src="/img/button/burger.png" />
          </button>
        </div>
        <div className="main py-5">
          <div className="col-12">
            <div className="row">
              <div className="col-md-8">
                <div className="text-intro my-3 mt-md-5 mt-3">
                  The Best Metaverse &<br /> Play To Earn On Blockchain
                </div>
                <div className="text-description">
                  Hero Arena is a DOTA inspired blockchain RPG game where anyone
                  can play and earn tokens through skilled gameplay and
                  ecosystem engagement
                </div>
                <div className="d-flex align-items-center my-5">
                  <div className="text-center pr-4 right-border">
                    <div className="txt">Total Player</div>
                    <div className="txt-number">7.283.312</div>
                  </div>
                  <div className="text-center pl-4">
                    <div className="txt">Total HERA Paid Out</div>
                    <div className="txt-number">100.000.000</div>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4 mb-md-5 flex-wrap flex-md-nowrap justify-content-center justify-content-md-start">
                  <img
                    className="download-btn mt-3 mt-md-0"
                    src="/img/button/btn-ios.png"
                  />
                  <img
                    className="download-btn mt-3 mt-md-0"
                    src="/img/button/btn-android.png"
                  />
                  <a target="_blank" href="https://play.heroarena.app/">
                    <img
                      className="download-btn mt-3 mt-md-0"
                      src="/img/button/btn-pc.png"
                    />
                  </a>
                </div>
              </div>
              {/* <div className="col-md-4 text-center">
                <div
                  className="character-arena d-none d-md-block mt-5"
                  ref={characterEl}
                >
                  <div data-depth="0.1">
                    <img className="char-1" src="/img/character/01.png/" />
                  </div>
                  <div data-depth="0.09">
                    <img className="char-2" src="/img/character/02.png/" />
                  </div>
                  <div data-depth="0.08">
                    <img className="char-3" src="/img/character/03.png/" />
                  </div>
                </div>
                <div className="d-block d-md-none">
                  <img
                    className="w-100 pl-2 my-3"
                    src="/img/character/char-mobile.png"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
