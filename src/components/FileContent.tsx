import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import GestureIcon from "@mui/icons-material/Gesture";
import ListIcon from "@mui/icons-material/List";
import PaletteIcon from "@mui/icons-material/Palette";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import SquareOutlinedIcon from "@mui/icons-material/SquareOutlined";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

interface Props {}

type ColorPalleteBackgroundType = {
  backgroundColor: string;
};

type colorPalleteDisplayStatusType = {
  displayStatus: string;
};

type bulletinPalleteDisplayStatus = {
  displayStatus: string;
};

type textColorType = {
  textColor: string;
};

const FileContent = () => {
  const [colorPalleteDisplayStatus, setColorPalleteDisplayStatus] =
    useState("flex");
  const [bulletinPalleteDisplayStatus, setBulletinPalleteDisplayStatus] =
    useState("none");
  const [textColor, setTextColor] = useState("var(--text)");
  const [bulletType, setBulletType] = useState("circle");
  const [textContent, setTextContent] = useState("");

  const ref = useRef(null);
  useEffect(() => {
    // ref.current?.focus();
  }, [textContent]);

  const showColorPallete = () => {
    setColorPalleteDisplayStatus("flex");
    setBulletinPalleteDisplayStatus("none");
  };

  const showBulletinPallete = () => {
    setBulletinPalleteDisplayStatus("flex");
    setColorPalleteDisplayStatus("none");
  };

  const handleColorSelectionFromPallete = (e: any, selectedColor: any) => {
    setTextColor(selectedColor);
  };

  const handleBulletSelectionFromPallete = (
    e: any,
    selectedBulletType: any
  ) => {
    e.preventDefault();
    setBulletType(selectedBulletType);

    switch (selectedBulletType) {
      case "circlularBullet":
        setTextContent(textContent.concat("\n◉ "));
        break;
      case "arrow":
        setTextContent(textContent.concat("\n▶ "));
        break;
      case "crossedBullet":
        setTextContent(textContent.concat("\n⊗ "));
        break;
 
      case "doubleCross":
        setTextContent(textContent.concat("\n⨳ "));
        break;

      case "arrowWithADot":
        setTextContent(textContent.concat("\n⋗ "));
        break;

      default:
        setTextContent(textContent.concat("\n■ "));
        break;
    }
  };

  const handleTextContentModification = (e: any) => {
    let newText = e?.target?.value;
    let bulletRequestInNewLine = /\n- /;
    let bulletRequestInSameLine = /.*- /;
    let bulletShiftRequestInNewLine = /\n-- /;
    let bulletShiftRequestInSameLine = /.*-- /;
    let newLineRequestedFromABullettedLine = /\n▶ \n/;
    if (newText.match(bulletShiftRequestInNewLine))
    {
      newText = newText.replace(/-- /, "   ⋗ ");
    }
    if (newText.match(bulletShiftRequestInSameLine))
    {
      newText = newText.replace(/-- /, "\n   ⋗ ");
    }
    if (newText.match(bulletRequestInNewLine)) {
      newText = newText.replace(/- /, "▶ ");
    }
    if (newText.match(bulletRequestInSameLine)) {
      newText = newText.replace(/- /, "\n▶ ");
    }
    
    // if (newText.match(newLineRequestedFromABullettedLine)) {
    //   newText = newText.concat("◉ ");
    // }
    setTextContent(newText);
  };

  return (
    <FileContentContainer>
      <FileContentCommandPalletesContainer>
      <FileContentCommandsPallete1>
        <FileContentCommandIcons>
          <OptionIconWrapper onClick={showColorPallete}>
            <PaletteIcon />
          </OptionIconWrapper>
          <OptionIconWrapper onClick={showBulletinPallete}>
            <MoreHorizIcon />
          </OptionIconWrapper>
        </FileContentCommandIcons>
      </FileContentCommandsPallete1>

      <FileContentCommandsPallete2>
        <ColorPallete displayStatus={colorPalleteDisplayStatus}>
          <ColorPalleteIndividualColor
            onClick={(event: any) =>
              handleColorSelectionFromPallete(event, "var(--colorPalleteIndividualColor1)")
            }
            // backgroundColor="crimson"
            backgroundColor="var(--colorPalleteIndividualColor1)"
          ></ColorPalleteIndividualColor>
          <ColorPalleteIndividualColor
            onClick={(event: any) =>
              handleColorSelectionFromPallete(event, "var(--colorPalleteIndividualColor2)")
            }
            // backgroundColor="cyan"
            backgroundColor="var(--colorPalleteIndividualColor2)"

          ></ColorPalleteIndividualColor>
          <ColorPalleteIndividualColor
            onClick={(event: any) =>
              handleColorSelectionFromPallete(event, "var(--colorPalleteIndividualColor3)")
            }
            backgroundColor="var(--colorPalleteIndividualColor3)"
          ></ColorPalleteIndividualColor>
          <ColorPalleteIndividualColor
            onClick={(event: any) =>
              handleColorSelectionFromPallete(event, "var(--colorPalleteIndividualColor4)")
            }
            backgroundColor="var(--colorPalleteIndividualColor4)"
          ></ColorPalleteIndividualColor>
          <ColorPalleteIndividualColor
            onClick={(event: any) =>
              handleColorSelectionFromPallete(event, "var(--colorPalleteIndividualColor5)")
            }
            backgroundColor="var(--colorPalleteIndividualColor5)"
          ></ColorPalleteIndividualColor>
        </ColorPallete>

        {/* •>»▶●◉○■◻⊗⋗⨳⩺⩷⫸ */}

        <BulletsPallete displayStatus={bulletinPalleteDisplayStatus}>
          <BulletsPalleteIndividualIcon
            onClick={(e: any) =>
              handleBulletSelectionFromPallete(e, "circlularBullet")
            }
          >
            ◉
          </BulletsPalleteIndividualIcon>
          <BulletsPalleteIndividualIcon
            onClick={(e: any) => handleBulletSelectionFromPallete(e, "arrow")}
          >
            ▶
          </BulletsPalleteIndividualIcon>
          <BulletsPalleteIndividualIcon
            onClick={(e: any) =>
              handleBulletSelectionFromPallete(e, "crossedBullet")
            }
          >
            ⊗
          </BulletsPalleteIndividualIcon>
          <BulletsPalleteIndividualIcon
            onClick={(e: any) =>
              handleBulletSelectionFromPallete(e, "doubleCross")
            }
          >
            ⨳
          </BulletsPalleteIndividualIcon>
          <BulletsPalleteIndividualIcon
            onClick={(e: any) =>
              handleBulletSelectionFromPallete(e, "arrowWithADot")
            }
          >
            ⋗
          </BulletsPalleteIndividualIcon>
        </BulletsPallete>
        </FileContentCommandsPallete2>
        
      {/* <FileContentCommandsPallete1>
        <FileContentCommandIcons>
          <OptionIconWrapper>
            <GestureIcon />
          </OptionIconWrapper>
        </FileContentCommandIcons>
        </FileContentCommandsPallete1>
        
        <FileContentCommandsPallete1>
        <FileContentCommandIcons>
          <OptionIconWrapper>
            <ListIcon />
          </OptionIconWrapper>
        </FileContentCommandIcons>
        </FileContentCommandsPallete1> */}
        
        </FileContentCommandPalletesContainer>
      <FileContentBody
        autoFocus
        ref={ref}
        textColor={textColor}
        spellCheck="false"
        // placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat itaque quae pariatur porro explicabo. Nam, suscipit consectetur aperiam vel totam ipsa officiis, id blanditiis temporibus conser."
        value={textContent}
        onChange={handleTextContentModification}
      ></FileContentBody>
    </FileContentContainer>
  );
};

export default FileContent;

const FileContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--sidebarBackgroundColor);
  align-self: stretch;
  /* padding: 5px; */
  padding-top:10px; 
  
  /* position: relative; */
  /* height: 100%; */
  /* box-sizing: border-box; */
  /* flex: none; */
  /* order: 0; */
  /* align-self: stretch; */
  /* flex-grow: 0;  */
`;

const FileContentBody = styled.textarea`
  resize:none;
  border: none;
  flex-grow: 1;
  border-radius:5px;
  color: var(--text);
  width: 100%;
  font-size: 13px;
  font-family: "Catamaran", sans-serif;
  background-color: var(--navbarBackground);
  padding: 9px;
  box-sizing: border-box;
  color: ${(props: textColorType) => props.textColor};
  &:focus {
    outline: none;
  }
`;

const FileContentCommandPalletesContainer = styled.div`
display: flex;
  flex-flow: row;
  align-items: flex-start;
  justify-content:space-around;
  gap:10px;
padding-bottom:5px;
`;


const FileContentCommandIcons = styled.div`
  color: var(--text);
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  padding: 3px 4px 1px 4px;
  border-radius:5px;
  background-color: var(--fileContentBackgroundColor);
  
  background-image: linear-gradient(90deg,
    var(--sidebarContainerMidHalf),
    var(--sidebarContainerBottomHalf)
  );
`;

const OptionIconWrapper = styled.div`
  background-color: transparent;
  color: var(--fileContentOptionsColor);
  opacity: 0.8;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  
`;

const FileContentCommandsPallete1 = styled.div`
  color: var(--text);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: var(--sidebarBackgroundColor);
  /* box-shadow: 0 10px var(--fileContentBackgroundColor); */
`;


const FileContentCommandsPallete2 = styled.div`
  color: var(--text);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-color: var(--navbarBackground);
  box-shadow: 0 10px var(--navbarBackground);
  border-radius: 5px 5px 0 0;
  padding:2px 0 2px 0;
`;

const ColorPallete = styled.div`
  display: ${(props: colorPalleteDisplayStatusType) => props.displayStatus};
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 5px;
  width: 120px;
  height: 18px;
`;

const BulletsPallete = styled.div`
  display: ${(props: bulletinPalleteDisplayStatus) => props.displayStatus};
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 5px;
  width: 120px;
  height: 18px;
`;

const ColorPalleteIndividualColor = styled.div`
  border-radius: 50%;
  background-color: ${(props: ColorPalleteBackgroundType) =>
    props.backgroundColor};
  width: 10px;
  height: 10px;
  border: 2px transparent solid;
  &:hover {
    border: 2px var(--toggleButtonColor) solid;
  }
`;

const BulletsPalleteIndividualIcon = styled.div`
  font-size: 17px;
  color: var(--toggleButtonColor);
  border-radius: 5px;
  opacity: 0.8;
  &:hover {
    border-radius: 5px;
    cursor: pointer;
    opacity: 1;
  }
`;