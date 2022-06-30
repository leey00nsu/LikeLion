import React from "react";
import {
  HeaderDiv,
  SubHeaderDiv,
  TitleBig,
  TitleLogoDiv,
  TitleSmall,
} from "./styledComponent";

// yarn add @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function Header({ darkMode, setDarkMode }) {
  const toggleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };

  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <HeaderDiv>
      <TitleLogoDiv onClick={goHome}>
        <TitleBig>멋사</TitleBig>
        <TitleSmall>익명게시판</TitleSmall>
      </TitleLogoDiv>
      <SubHeaderDiv>
        {darkMode ? (
          <FontAwesomeIcon onClick={toggleDarkMode} icon={faMoon} />
        ) : (
          <FontAwesomeIcon onClick={toggleDarkMode} icon={faSun} />
        )}
      </SubHeaderDiv>
    </HeaderDiv>
  );
}

export default Header;
