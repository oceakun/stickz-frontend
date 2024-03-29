import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import useLocalStorage from "use-local-storage";

interface Props {}

const LandingPage = () => {
  const navigate = useNavigate();

  const sellingPoints = [
    "create & search, delete, update, download and share notes embedded with text and images",
    "organize notes with files and folders",
    "set interface theme and configurations to your liking",
    "enjoy a responsive design which lets you use the tool on any device, be it, a pc, mobile phone or tablet",
    "save files to your account by signing up",
  ];

  return (
    <LandingPageContainer>
      <LandingPageNavbar>
        <LandingPageLogo onClick={() => navigate("/home")}>
          stickza
        </LandingPageLogo>

        <LandingPageNavbarButton onClick={() => navigate("/login")}>
          Sign In
        </LandingPageNavbarButton>
      </LandingPageNavbar>
      <LandingPageHero>
        <LandingPageHeroText>
          <LandingPageHeroTextBullet>
            <KeyboardArrowRightIcon />
            <p>
              create & search, delete, update, download and share notes embedded
              with text and images
            </p>
          </LandingPageHeroTextBullet>
          <LandingPageHeroTextBullet>
            <KeyboardArrowRightIcon />
            <p>organize notes with files and folders</p>
          </LandingPageHeroTextBullet>
          <LandingPageHeroTextBullet>
            <KeyboardArrowRightIcon />
            <p>set interface theme and configurations to your liking</p>
          </LandingPageHeroTextBullet>
          <LandingPageHeroTextBullet>
            <KeyboardArrowRightIcon />
            <p>
              enjoy a responsive design which lets you use the tool across devices with varying screen-size
            </p>
          </LandingPageHeroTextBullet>
          <LandingPageHeroTextBullet>
            <KeyboardArrowRightIcon />
            <p>save files to your account by signing up</p>
          </LandingPageHeroTextBullet>
        </LandingPageHeroText>
        <LandingPageHeroButton onClick={() => navigate("/signup")}>
          Get started
        </LandingPageHeroButton>
      </LandingPageHero>
    </LandingPageContainer>
  );
};

export default LandingPage;

const LandingPageContainer = styled.div`
  background-color: #0a041b;
  height: 100vh;
`;

const LandingPageNavbar = styled.div`
  width: 100vw;
  background-color: transparent;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  padding: 12px 2px;
  background-color: #111633;
`;

const LandingPageHero = styled.div`
  width: 100vw;
  background-color: transparent;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  gap: 100px;
  align-items: center;
  text-align: justify;
  margin-top:100px;
  @media only screen and (max-width: 1200px) {
    width: 100vw;
    background-color: transparent;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 10vh;
    gap: 50px;
  }
`;

const LandingPageLogo = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 26px;
  font-weight: normal;
  padding: 2px;
  color: #93f9e1;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const LandingPageNavbarButton = styled.div`
  border: 1px solid transparent;
  background-color: #1a214a;

  color: white;
  padding: 10px 20px 10px 20px;
  opacity: 0.8;
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
  opacity: 0.8;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const LandingPageHeroButton = styled.div`
  border: 2px solid transparent;
  color: white;
  background-color: #1a214a;
  padding: 10px 20px 10px 20px;
  font-weight: 500;
  font-size: 16px;
  opacity: 0.8;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const LandingPageHeroText = styled.div`
  width: 60vw;
  font-family: "Quicksand", sans-serif;
  color: white;
  font-size: 16px;
  font-weight: normal;
  text-align: left;
  line-height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0;
  margin-top:

  > h3 {
    font-family: "Quicksand", sans-serif;
    font-size: 20px;
    font-weight: normal;
    color: #186369;
    background-color: #0e1229;
    letter-spacing: 0;
    word-spacing: 0;
    border-radius: 5px;
    padding: 4px 10px 7px 10px;
  }
`;

const LandingPageHeroTextBullet = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  > .MuiSvgIcon-root {
    color: #fc03be;
    background-color: #220f56;
    border-radius: 5px;
  }
  > p {
    background-color: #0e1229;
    padding: 4px 10px 8px 10px;
    border-radius: 5px;
    font-size: 14px;
  }
`;

const LandingPageHeroTextBulletsContainer = styled.div``;
