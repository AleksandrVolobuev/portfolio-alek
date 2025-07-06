import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const MenuItems = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', label: '🇬🇧 English' },
    { code: 'ru', label: '🇷🇺 Русский' },
    { code: 'ua', label: '🇺🇦 Українська' },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="header-nav">
      <ul className="navigation">
        <li className="language-selector">
          <button className="language-button" onClick={() => setIsOpen(!isOpen)}>
            🌐 {currentLanguage.label} ▼
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.ul
                className="sub-menu language-menu"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {languages.map(lang => (
                  <li key={lang.code}>
                    <button onClick={() => changeLanguage(lang.code)}>{lang.label}</button>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </li>

        <li><a href="#about"><i className="fa-regular fa-user"></i>{t('about')}</a></li>
        <li><a href="#service"><i className="fa-regular fa-file-lines"></i>{t('services')}</a></li>
        <li><a href="#portfolio"><i className="fa-regular fa-folder"></i>{t('works')}</a></li>
        <li><a href="#blog"><i className="fa-regular fa-file-lines"></i>{t('blog_label')}</a></li>
        <li><a href="#contact"><i className="fa-regular fa-envelope-open"></i>{t('contact_label')}</a></li>
      </ul>
    </div>
  );
};

export default MenuItems;
