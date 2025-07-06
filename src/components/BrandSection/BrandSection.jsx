import React from "react";
import { useTranslation, Trans } from "react-i18next";
import "../../scss/template/section/brand/_brand.scss";

const brands = [
  { id: 1, image: "./assets/images/brand/1.png" },
  { id: 2, image: "./assets/images/brand/2.png" },
  { id: 3, image: "./assets/images/brand/3.png" },
  { id: 4, image: "./assets/images/brand/4.png" },
  { id: 5, image: "./assets/images/brand/5.png" },
  { id: 6, image: "./assets/images/brand/6.png" },
  { id: 7, image: "./assets/images/brand/7.png" },
  { id: 8, image: "./assets/images/brand/8.png" },
  { id: 9, image: "./assets/images/brand/9.png" },
  { id: 10, image: "./assets/images/brand/10.png" },
];

const BrandSection = () => {
  const { t } = useTranslation();

  return (
    <section className="brand-section space-bottom pt-20" id="brands">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="brand-title_inner pb-50">
              <h4 className="brand-title">
                <Trans i18nKey="brand_section.title" components={{ 1: <span /> }} />
              </h4>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="brand-box__grid">
              {brands.map((brand) => (
                <div className="brand__item" key={brand.id}>
                  <a href="#" className="image">
                    <img src={brand.image} alt={`Brand ${brand.id}`} />
                    <img src={brand.image} alt={`Brand ${brand.id}`} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
