import React, { useCallback, useState } from "react";
import { menuMock } from "../../../mockData/menu.mock";
import Button from "../../common/Button";
import Arrow from "../../common/Signs/Arrow";
import Hat from "../../common/Signs/Hat";
import "./styles.less";

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpenedMobileMenu, setIsOpenedMobileMenu] = useState(false);

  const handleOnClick = useCallback(
    (value: number) => () => {
      setActiveIndex(value);
    },
    [setActiveIndex]
  );

  const handleSetOpenedMenu = useCallback(
    () => () => {
      setIsOpenedMobileMenu((prev) => !prev);
    },
    [setIsOpenedMobileMenu]
  );

  return (
    <div className="container-menu">
      <div className="container-menu__head">
        <Hat />
        <p>careers</p>
      </div>
      <div className="container-menu__mobile-head">
        <Hat />
        <p>Choose YOUR Career</p>
        <input
          className="container-menu__toggle-btn"
          type="checkbox"
          onClick={handleSetOpenedMenu()}
        />
        <div className="container-menu_arrow-wrapper">
          <Arrow />
        </div>
      </div>
      <ul
        className={`container-menu__menu ${isOpenedMobileMenu ? "active" : ""}`}
      >
        {menuMock &&
          menuMock.map(({ link, subLinks }) => (
            <li key={link.title}>
              <input className="container-menu__toggle-btn" type="checkbox" />
              <a href={link.href}> {link.title} </a>
              <Arrow />

              {subLinks && (
                <ul className="container-menu__submenu">
                  {subLinks.map((sublink, idx) => (
                    <li
                      key={sublink.title}
                      className={idx === activeIndex ? "active" : ""}
                      onClick={handleOnClick(idx)}
                    >
                      <a href={sublink.href}>{sublink.title}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
      <div className="container-menu__btn-container">
        <Button variant="secondary">show all programmes</Button>
      </div>
    </div>
  );
};

export default Menu;
