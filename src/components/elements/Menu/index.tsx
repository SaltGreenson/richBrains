import React, { useCallback, useState } from "react";
import { menuMock } from "../../../mockData";
import Button from "../../common/Button";
import Arrow from "../../common/Signs/Arrow";
import Hat from "../../common/Signs/Hat";
import "./styles.less";

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOnClick = useCallback(
    (value: number) => () => {
      setActiveIndex(value);
    },
    [setActiveIndex]
  );

  return (
    <div className="container-menu">
      <div className="container-menu__head">
        <Hat />
        <p>careers</p>
      </div>
      <ul className="container-menu__menu">
        {menuMock &&
          menuMock.map(({ link, subLinks }) => (
            <li key={link.title}>
              <input type="checkbox" />
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
