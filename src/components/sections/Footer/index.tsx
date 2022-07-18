import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="section--footer">
      <div className="container py-5">
        <div className="text-center">
          <img className="hero-logo" src="/img/icon/hero-logo.png" />
        </div>
        <div className="text-center my-2">
          <img className="title" src="/img/title/join-newsletter.png" />
        </div>
        <div className="text-center">
          <div className="text-description">
            Subscribe our newsletter to get more free design course and resource
          </div>
        </div>
        <div className="d-flex align-items-center my-3">
          <div className="d-flex ha-input justify-content-between mr-3">
            <input placeholder="Enter your email" />
          </div>
          <img className="send-btn" src="/img/button/btn-send.png" />
        </div>
        <div className="w-100 justify-content-center social-line d-flex align-items-center">
          <a target="_blank" href="https://twitter.com/HeroArena_Hera">
            <img className="social-button" src="/img/button/twitter-icon.png" />
          </a>
          <a target="_blank" href="https://t.me/heroarenagame">
            <img
              className="social-button"
              src="/img/button/telegram-icon.png"
            />
          </a>
          <a target="_blank" href="https://discord.com/invite/wzWJrhDkHQ">
            <img className="social-button" src="/img/button/discord-icon.png" />
          </a>
          <a target="_blank" href="https://www.facebook.com/HeroArena.Hera">
            <img
              className="social-button"
              src="/img/button/facebook-icon.png"
            />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCkYvwWzFreokzowE8lO5f4A"
          >
            <img className="social-button" src="/img/button/youtube-icon.png" />
          </a>
        </div>
        <div className="w-100 hrz" />
        <div className="col-12 mt-3">
          <div className="row">
            <div className="col-md-2 col-4 footer-item text-description text-gray">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/16eXKY3dCSFTLzee5AiwfLfCkBqE2cb9t/view?usp=sharing"
              >
                <img src="/img/button/bullet.png" />
                Contract Audit
              </a>
            </div>
            <div className="col-md-2 col-4 footer-item text-description text-gray">
              <a target="_blank" href="https://play.heroarena.app/">
                <img src="/img/button/bullet.png" />
                Play Game
              </a>
            </div>
            <div className="col-md-2 col-4 footer-item text-description text-gray">
              <a target="_blank" href="https://nft.heroarena.app/">
                <img src="/img/button/bullet.png" />
                Marketplace
              </a>
            </div>
            <div className="col-md-2 col-4 footer-item text-description text-gray">
              <a
                target="_blank"
                href="https://bscscan.com/token/0x49c7295ff86eabf5bf58c6ebc858db4805738c01"
              >
                <img src="/img/button/bullet.png" />
                HERA Token
              </a>
            </div>
            <div className="col-md-2 col-4 footer-item text-description text-gray">
              <img src="/img/button/bullet.png" />
              Tokenomic
            </div>
            <div className="col-md-2 col-4 footer-item text-description text-gray">
              <a
                target="_blank"
                href="https://docs.heroarena.app/document/term-and-policy/policy"
              >
                <img src="/img/button/bullet.png" />
                Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
