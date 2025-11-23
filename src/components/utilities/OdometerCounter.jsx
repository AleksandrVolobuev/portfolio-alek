import React, { useEffect, useRef, useState } from "react";
import Odometer from "odometer";
import "odometer/themes/odometer-theme-default.css";

const OdometerCounter = ({ value, suffix = "" }) => {
  const odometerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Чтобы не запускать анимацию повторно
        }
      },
      { threshold: 0.6 }
    );

    if (odometerRef.current) {
      observer.observe(odometerRef.current);
    }

    return () => {
      if (odometerRef.current) {
        observer.unobserve(odometerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (visible && odometerRef.current) {
      new Odometer({
        el: odometerRef.current,
        value: 0,
        format: "(,ddd)", // Формат с запятыми, можно убрать
        theme: "default",
      }).update(value);
    }
  }, [visible, value]);

  return (
    <span className="odometer" ref={odometerRef}>
      {visible ? value : 0}
      {suffix}
    </span>
  );
};

export default OdometerCounter;
