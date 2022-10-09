import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface Props {}

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <LandingPageContainer>
      <LandingPageNavbar>
        <LandingPageLogo onClick={() => navigate("/home")}>
          stickza
        </LandingPageLogo>

        <LandingPageNavbarButton onClick={() => navigate("/signin")}>
          Sign In
        </LandingPageNavbarButton>
      </LandingPageNavbar>
      <LandingPageHero>
        <LandingPageHeroText className="border-gradient signOut-border-gradient">
          <h3>okane + secure = okasure</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At placeat
          culpa obcaecati debitis. Ullam iure veritatis consequuntur, cumque
          fugit sint vero eos accusantium animi vitae minus nesciunt pariatur
          quae eligendi?
        </LandingPageHeroText>
        <LandingPageHeroButton onClick={() => navigate("/signup")}>
          Get started
        </LandingPageHeroButton>
      </LandingPageHero>
    </LandingPageContainer>
  );
};

export default LandingPage;

const LandingPageContainer = styled.div``;

const LandingPageNavbar = styled.div`
  width: 100vw;
  background-color: transparent;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  padding:2px;
  background-color: #8393ef;
`;

const LandingPageHero = styled.div`
  width: 100vw;
  background-color: transparent;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 10vh;

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
  font-size: 30px;
  font-weight: normal;
  padding: 2px;
  background: -webkit-linear-gradient(0deg, #5df0a7 ,#bce367);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const LandingPageNavbarButton = styled.div`
  border: 1px solid white;
  background-color: tansparent;
  color: #000000;
  padding: 5px 20px 10px 20px;
  opacity: 0.8;
  border-radius: 5px;
  /* font-family: "Bungee Spice", cursive; */
  font-weight: 500;
  font-size: 14px;
  opacity: 0.8;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const LandingPageHeroButton = styled.div`
  border: 2px solid white;
  color: #000000;
  padding: 5px 20px 10px 20px;
  font-weight: 500;
  font-size: 14px;
  opacity: 0.8;
  border-radius:5px;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const LandingPageHeroText = styled.div`
  width: 30vw;
  padding: 0 30px 30px 30px;
  font-family: "Quicksand", sans-serif;
  color: #000000;
  font-size: 20px;
  font-weight: normal;
  background: -webkit-linear-gradient(35deg, #000000 50%, black 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  > h3 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 30px;
    font-weight: normal;
    background: -webkit-linear-gradient(35deg, #93f9e1 40%, #000000 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding:0;
  }
`;
