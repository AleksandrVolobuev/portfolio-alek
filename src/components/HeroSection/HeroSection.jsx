import React from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import OdometerCounter from "../utilities/OdometerCounter";
import TypedText from "../utilities/TypedText";
import "../../scss/template/section/hero/_hero-section-one.scss";
import "../../scss/utilites/_animation.scss";

const HeroSection = () => {
  const { t } = useTranslation();
  const { ref: heroRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="hero-section pb-270" id="top" ref={heroRef}>
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="hero-left">
              <div className="pb-20">
                <h1 className="title">
                  {t("hello")}{" "}
                  <span role="img" aria-label="wave">
                    🖐
                  </span>
                </h1>
                <div className="type-text">
                  {t("i_am")}{" "}
                  <span className="typed-color">
                    <TypedText strings={[t("name"), t("profession")]} />
                  </span>
                </div>
              </div>
              <div className="pb-30">
                <h2 className="hero-title" data-delay=".7">
                  {t("hero_title")} <br />
                  <span>{t("based_on")}</span>
                </h2>
              </div>
              <div className="hero-btn">
                <a href="#" className="theme-btn bg-theme">
                  <span className="link-effect">
                    <span className="effect-1">{t("view_works")}</span>
                   
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="hero-right">
              <div className="hero-right-text">
                <div className="right-text">
                  <div className="img-shape spin2 mb-30">
                    <img src="./assets/images/shape/9.png" alt="Shape" />
                  </div>
                  <span className="text-1">{t("expert_on")}</span>
                  <p className="text-2 mt-15 mb-20">
                    {t("based_on")} <br />
                    {t("hero_title")} <br />
                    {t("webflow")}
                  </p>
                  <a
                    href="#"
                    className="download-btn"
                    data-text={t("view_works")}
                  >
                    {t("download_cv")}
                    <i className="fa-regular fa-arrow-down-to-line"></i>
                  </a>
                </div>
                <div className="hero-exprience">
                  <div className="work-compeleted">
                    <div className="count-box">
                      {inView && <OdometerCounter value={90} />}
                      <span>0+</span>
                    </div>
                    <p className="text">{t("completed_works")}</p>
                  </div>
                  <div className="work-process">
                    <a
                      className="popup-video"
                      href="https://www.youtube.com/watch?v=SMKPKGW083c"
                      data-fancybox="video-gallery"
                    >
                      <div className="inner-popup d-flex align-items-center">
                        <span className="icon">
                          <i className="fa-solid fa-play"></i>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-img lm-d-none">
          <img src="./assets/images/hero/hero1.png" alt="Hero" />
        </div>
        <div className="hero-image-shape lm-d-none">
          <img src="./assets/images/shape/1.png" alt="Shape" />
        </div>
        <div className="hero-shape jump3">
          <img src="./assets/images/shape/8.png" alt="Shape" />
        </div>
        <div className="hero-work-shape upDown">
          <img src="./assets/images/shape/2.png" alt="Shape" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
