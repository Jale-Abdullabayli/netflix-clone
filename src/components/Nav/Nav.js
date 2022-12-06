import React from "react";
import { StyledNav } from "./style";
import logo from "../../images/logo.png";
import search from "../../images/search.png";
import gift from "../../images/gift.png";
import bell from "../../images/bell.png";
import avatar from "../../images/avatar.png";
import arrowDown from "../../images/arrowDown.png";

function Nav() {
  return (
    <StyledNav>
      <div className="left">
        <img className="logo" src={logo} alt="logo" />
        <ul>
          <li className="active">Ana Sayfa</li>
          <li>Diziler</li>
          <li>Filmler</li>
          <li>Filmler</li>
          <li>Listem</li>
        </ul>
      </div>
      <div className="right">
        <img src={search} alt="search" />
        <span className="category">ÇOCUK</span>
        <img src={gift} alt="gift" />
        <img src={bell} alt="bell" />
        <img src={avatar} alt="avatar" />
        <img src={arrowDown} className="arrowDown" alt="arrowDown" />
      </div>
    </StyledNav>
  );
}

export default Nav;
