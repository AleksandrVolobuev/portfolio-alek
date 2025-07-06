import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import SpringText from "../utilities/SpringText";
import "../../scss/template/section/portfolio/_portfolio.scss";
import { useTranslation } from "react-i18next";

const portfolioItems = [
  {
    id: 1,
    image: "./assets/images/portfolio/3.jpg",
    titleKey: "portfolio_item_title",
    categoryKey: "portfolio_category_design",
    tags: ["creative", "web-design"],
  },
  {
    id: 2,
    image: "./assets/images/portfolio/4.jpg",
    titleKey: "portfolio_item_title",
    categoryKey: "portfolio_category_design",
    tags: ["branding"],
  },
  {
    id: 3,
    image: "./assets/images/portfolio/5.jpg",
    titleKey: "portfolio_item_title",
    categoryKey: "portfolio_category_design",
    tags: ["web-design", "creative"],
  },
  {
    id: 4,
    image: "./assets/images/portfolio/6.jpg",
    titleKey: "portfolio_item_title",
    categoryKey: "portfolio_category_design",
    tags: ["branding", "creative"],
  },
  {
    id: 5,
    image: "./assets/images/portfolio/7.jpg",
    titleKey: "portfolio_item_title",
    categoryKey: "portfolio_category_design",
    tags: ["web-design"],
  },
  {
    id: 6,
    image: "./assets/images/portfolio/8.jpg",
    titleKey: "portfolio_item_title",
    categoryKey: "portfolio_category_design",
    tags: ["web-design", "creative"],
  },
  {
    id: 7,
    image: "./assets/images/portfolio/9.jpg",
    titleKey: "portfolio_item_title",
    categoryKey: "portfolio_category_design",
    tags: ["creative"],
  },
  {
    id: 8,
    image: "./assets/images/portfolio/10.jpg",
    titleKey: "portfolio_item_title",
    categoryKey: "portfolio_category_design",
    tags: ["web-design", "creative"],
  },
  {
    id: 9,
    image: "./assets/images/portfolio/11.jpg",
    titleKey: "portfolio_item_title",
    categoryKey: "portfolio_category_design",
    tags: ["creative"],
  },
];

const PortfolioSection = () => {
  const { t } = useTranslation();
  const [filterKey, setFilterKey] = useState("*");
  const isotope = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    isotope.current = new Isotope(gridRef.current, {
      itemSelector: ".grid-item",
      layoutMode: "fitRows",
    });
    return () => isotope.current.destroy();
  }, []);

  useEffect(() => {
    if (filterKey === "*") {
      isotope.current.arrange({ filter: "*" });
    } else {
      isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  return (
    <section className="portfolio-section space" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area text-center">
              <div className="sub-title">
                <i className="icon fa-brands fa-gg"></i>
                {t("portfolio")}
              </div>
              <SpringText text={t("portfolio_typed_text")} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="portfolio-filter-buttons mb-40">
            <ul className="menu-filtering">
              <li
                className={filterKey === "*" ? "active" : ""}
                onClick={() => setFilterKey("*")}
              >
                {t("view_all")}
              </li>
              <li
                className={filterKey === "creative" ? "active" : ""}
                onClick={() => setFilterKey("creative")}
              >
                {t("creative")}
              </li>
              <li
                className={filterKey === "web-design" ? "active" : ""}
                onClick={() => setFilterKey("web-design")}
              >
                {t("web_design")}
              </li>
              <li
                className={filterKey === "branding" ? "active" : ""}
                onClick={() => setFilterKey("branding")}
              >
                {t("branding")}
              </li>
            </ul>
          </div>
        </div>

        <div className="row gy-30 image_load" ref={gridRef}>
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`col-lg-4 col-md-6 col-sm-6 grid-item ${item.tags.join(
                " "
              )}`}
            >
              <div className="pdesigner-portfolio__item">
                <a href="portfolio-details.html">
                  <img src={item.image} alt={t(item.titleKey)} />
                </a>
                <div className="pdesigner-portfolio__content">
                  <ul>
                    <li>
                      <a
                        href="portfolio-details.html"
                        className="pdesigner-portfolio__title"
                      >
                        {t(item.titleKey)}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="pdesigner-portfolio__category">
                        {t(item.categoryKey)}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="portfolio-btn">
            <a href="#" className="theme-btn bg-theme">
              <span className="link-effect">
                <span className="effect-1">{t("more_works")}</span>
              </span>
              <i className="fa-solid fa-arrows-rotate"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
