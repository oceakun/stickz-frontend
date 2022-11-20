import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { FileSectionStatusContext } from "./contexts/FileSectionStatusContext";
import useLocalStorage from "use-local-storage";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DownloadIcon from "@mui/icons-material/Download";
import AddIcon from "@mui/icons-material/Add";
import ShareIcon from "@mui/icons-material/Share";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import SelectAllIcon from "@mui/icons-material/SelectAll";
import { FilesForSidebar } from "./FilesForSidebar";

interface Props {}

type onClickToolkitTypes = {
  displayStatus: string;
};

const Sidebar = (props: any) => {
  const [inputFieldDisplay, setInputFieldDisplay] = useState("flex");
  const [createNewFileOptionDisplay, setCreateNewFileOptionDisplay] =
    useState("none");
  const [createNewFolderOptionDisplay, setCreateNewFolderOptionDisplay] =
    useState("none");

  const [folderList, setFolderList] = useState(FilesForSidebar);

  const fileSectionStatusContext = useContext(FileSectionStatusContext);

  const [fileSectionStatus, setFileSectionStatus] = useState(
    fileSectionStatusContext?.fileSectionStatus?.fileSectionOpenOrShut
  );

  useEffect(() => {
    setFileSectionStatus(
      fileSectionStatusContext?.fileSectionStatus?.fileSectionOpenOrShut
    );
  }, [fileSectionStatusContext?.fileSectionStatus?.fileSectionOpenOrShut]);

  const handleSearchIconClick = () => {
    fileSectionStatusContext?.setFileSectionStatus({
      fileSectionOpenOrShut: "open",
    });

    if (inputFieldDisplay === "none") {
      setInputFieldDisplay("flex");
    }
    setCreateNewFileOptionDisplay("none");
    setCreateNewFolderOptionDisplay("none");

    console.log("handleSearchIconClick invoked");
  };

  const handleCreateNewFileIconClicked = () => {
    fileSectionStatusContext?.setFileSectionStatus({
      fileSectionOpenOrShut: "open",
    });
    if (createNewFileOptionDisplay === "none") {
      setCreateNewFileOptionDisplay("flex");
    }
    setInputFieldDisplay("none");
    setCreateNewFolderOptionDisplay("none");
    console.log("handleCreateNewFileIconClicked invoked");
  };

  const handleCreateNewFolderIconClicked = () => {
    fileSectionStatusContext?.setFileSectionStatus({
      fileSectionOpenOrShut: "open",
    });
    if (createNewFolderOptionDisplay === "none") {
      setCreateNewFolderOptionDisplay("flex");
    }
    setInputFieldDisplay("none");
    setCreateNewFileOptionDisplay("none");
    console.log("handleCreateNewFileIconClicked invoked");
  };

  const handleFolderClick = (e: any, indexOfTheClickedFolder: any) => {
    console.log("folder clicked");
    setFolderList((current) =>
      current.map((folder, index) => {
        if (index == indexOfTheClickedFolder) {
          if (folder.status == "open") {
            return { ...folder, status: "shut" };
          } else {
            return { ...folder, status: "open" };
          }
        } else {
          return { ...folder };
        }
      })
    );
  };

  const handleFileClicked = (
    e: any,
    indexOfTheClickedFile: any,
    indexOfTheEncompassingFolder: any
  ) => {
    console.log("file clicked");
    e.preventDefault();
    const newFolderList = folderList.map((folder, folderIndex) => {
      if (folderIndex == indexOfTheEncompassingFolder) {
        folder.fileIds.map((file, fileIndex) => {
          if (fileIndex == indexOfTheClickedFile) {
            file.fileClicked = true;
            return file;
          } else {
            file.fileClicked = false;
            return file;
          }
        });
        return folder;
      } else {
        folder.fileIds.map((file, fileIndex) => {
          file.fileClicked = false;
          return file;
        });
        return folder;
      }
    });
    setFolderList(newFolderList);
  };

  const handleCheckboxClicked = (
    e: any,
    indexOfTheClickedFile: any,
    indexOfTheEncompassingFolder: any
  ) => {
    console.log("checkbox clicked");
    e.preventDefault();

    const newFolderList = folderList.map((folder, folderIndex) => {
      console.log("inside the folders map");
      if (folderIndex == indexOfTheEncompassingFolder) {
        folder.fileIds.map((file, fileIndex) => {
          console.log("inside the files map");
          if (fileIndex == indexOfTheClickedFile) {
            file.checkboxClicked = !file.checkboxClicked;
            file.selectedWithSelectAllIcon = false;
            console.log("file.checkboxClicked : ", file.checkboxClicked);
            return file;
          }
        });
        return folder;
      } else {
        console.log("folder dont match");
        folder.fileIds.map((file, fileIndex) => {
          return file;
        });
        return folder;
      }
    });
    setFolderList(newFolderList);
  };

  const selectAllFiles = () => {
    const newFolderList = folderList.map((folder, folderIndex) => {
      console.log("inside the folders map");
      folder.fileIds.map((file, fileIndex) => {
        console.log("inside the files map");
        if (
          file.checkboxClicked == true &&
          file.selectedWithSelectAllIcon == true
        ) {
          file.checkboxClicked = false;
          file.selectedWithSelectAllIcon = true;
        }
        if (
          file.checkboxClicked == false &&
          file.selectedWithSelectAllIcon == false
        ) {
          file.checkboxClicked = true;
          file.selectedWithSelectAllIcon = true;
        }
        if (
          file.checkboxClicked == false &&
          file.selectedWithSelectAllIcon == true
        ) {
          file.checkboxClicked = true;
          file.selectedWithSelectAllIcon = true;
        }
        if (
          file.checkboxClicked == true &&
          file.selectedWithSelectAllIcon == false
        ) {
        }
        return file;
      });
      return folder;
    });
    setFolderList(newFolderList);
  };

  return (
    <SidebarContainer>
      {/* sidebar options */}
      <SidebarOptions>
        <SidebarContainerTopHalf>
          <OptionIconWrapper onClick={handleSearchIconClick}>
            <SearchIcon />
          </OptionIconWrapper>
          <OptionIconWrapper onClick={handleCreateNewFileIconClicked}>
            <NoteAddIcon />
          </OptionIconWrapper>
          <OptionIconWrapper onClick={handleCreateNewFolderIconClicked}>
            <CreateNewFolderIcon />
          </OptionIconWrapper>
        </SidebarContainerTopHalf>
        {/* <hr></hr> */}
        <DarkVerticalLink></DarkVerticalLink>

        <SidebarContainerMidHalf>
          <OptionIconWrapper>
            <ShareIcon />
          </OptionIconWrapper>
          <OptionIconWrapper>
            <DownloadIcon />
          </OptionIconWrapper>
          <OptionIconWrapper>
            <DeleteIcon />
          </OptionIconWrapper>
        </SidebarContainerMidHalf>

        {/* <hr></hr> */}
        <LightVerticalLink></LightVerticalLink>
        <SidebarContainerBottomHalf>
          <OptionIconWrapper>
            <SettingsIcon />
          </OptionIconWrapper>
          <OptionIconWrapper>
            <QuestionMarkIcon />
          </OptionIconWrapper>
        </SidebarContainerBottomHalf>
      </SidebarOptions>

      {/* Search field */}
      <SidebarSecondHalf displayStatus={fileSectionStatus}>
        <SidebarFileSearchField displayStatus={inputFieldDisplay}>
          <input type="text" placeholder="Search a file / folder"></input>
          <IconWrapper>
            <KeyboardArrowRightIcon />
          </IconWrapper>
        </SidebarFileSearchField>

        <SidebarNewFileCreationField displayStatus={createNewFileOptionDisplay}>
          <input type="text" placeholder="File name"></input>
          <IconWrapper>
            <AddIcon />
          </IconWrapper>
        </SidebarNewFileCreationField>

        <SidebarNewFolderCreationField
          displayStatus={createNewFolderOptionDisplay}
        >
          <input type="text" placeholder="Folder name"></input>
          <IconWrapper>
            <AddIcon />
          </IconWrapper>
        </SidebarNewFolderCreationField>

        <AllFilesAndFoldersContainer>
          {folderList.map((folder, folderIndex) => {
            if (folder.name != "---") {
              return (
                <IndividualFolder>
                  <FolderIconAndNameContainer
                    onClick={(event: any) =>
                      handleFolderClick(event, folderIndex)
                    }
                  >
                    <FolderArrowIcon>
                      {folder.status == "open" ? (
                        <ArrowDropDownIcon />
                      ) : (
                        <ArrowRightIcon />
                      )}
                    </FolderArrowIcon>

                    <FolderName> {folder.name}</FolderName>
                  </FolderIconAndNameContainer>

                  <FilesBelongingToThisFolder
                    displayStatus={folder.status}
                    key={folder.folderId}
                  >
                    {folder.fileIds.map((file, fileIndex) => {
                      return (
                        <IndividualFile fileClicked={file.fileClicked}>
                          <IndividualFileCheckbox
                            className="checkbox"
                            onClick={(event: any) =>
                              handleCheckboxClicked(
                                event,
                                fileIndex,
                                folderIndex
                              )
                            }
                            checkBoxClicked={file.checkboxClicked}
                          >
                            {file.checkboxClicked ? (
                              <CheckBoxIcon />
                            ) : (
                              <CheckBoxOutlineBlankIcon />
                            )}
                          </IndividualFileCheckbox>
                          <IndividualFileName
                            className="fileName"
                            onClick={(event: any) =>
                              handleFileClicked(event, fileIndex, folderIndex)
                            }
                            fileClicked={file.fileClicked}
                          >
                            {file.fileName}
                          </IndividualFileName>
                        </IndividualFile>
                        // <ContextMenuContainer displayStatus="none">
                        // </ContextMenuContainer>
                      );
                    })}
                  </FilesBelongingToThisFolder>
                </IndividualFolder>
              );
            } else {
              return (
                <FilesBelongingToTheUnnamedFolder>
                  {folder.fileIds.map((file, fileIndex) => {
                    return (
                      <IndividualFile fileClicked={file.fileClicked}>
                        <IndividualFileCheckbox
                          className="checkbox"
                          onClick={(event: any) =>
                            handleCheckboxClicked(event, fileIndex, folderIndex)
                          }
                          checkBoxClicked={file.checkboxClicked}
                        >
                          {file.checkboxClicked ? (
                            <CheckBoxIcon />
                          ) : (
                            <CheckBoxOutlineBlankIcon />
                          )}
                        </IndividualFileCheckbox>
                        <IndividualFileName
                          className="fileName"
                          onClick={(event: any) =>
                            handleFileClicked(event, fileIndex, folderIndex)
                          }
                          fileClicked={file.fileClicked}
                        >
                          {file.fileName}
                        </IndividualFileName>
                      </IndividualFile>
                    );
                  })}
                </FilesBelongingToTheUnnamedFolder>
              );
            }
          })}
        </AllFilesAndFoldersContainer>
        <SelectAllIconsContainer onClick={selectAllFiles}>
          <SelectAllIcon />
        </SelectAllIconsContainer>
      </SidebarSecondHalf>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  color: var(--text);
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: var(--sidebarBackgroundColor);
  border-right: 1px solid var(--sidebarBorderColor);
  position: relative;
  height: 100%;
  order: 0;
  box-sizing: border-box;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const SidebarOptions = styled.div`
  color: var(--text);
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  /* gap: 10px; */
  flex-grow: 1;
  height: 100%;
  position: relative;
  align-self: stretch;
  padding: 5px;
  padding-top: 10px;
  /* gap: 15px; */
  box-sizing: border-box;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  > hr {
    opacity: 0.4;
    width: 100%;
    color: var(--toggleButtonColor);
  }
`;

const SidebarContainerTopHalf = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
  padding: 5px;
  border-radius: 5px 5px 0 0;
  background-color: var(--sidebarContainerTopHalf);
`;

const DarkVerticalLink = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 3.5em;
  width:1.5em;
  background-color: var(--sidebarContainerMidHalf);
  /* border-left: 0.5em solid var(--sidebarContainerMidHalf); */
  /* border-right: 0.5em solid var(--sidebarContainerMidHalf); */
`;

const SidebarContainerMidHalf = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
  padding: 5px;
  background-color: var(--sidebarContainerMidHalf);
`;

const LightVerticalLink = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 5em;
  width:1.5em;
  background-image: linear-gradient(var(--sidebarContainerMidHalf),var(--sidebarContainerBottomHalf));
  /* border-left: 0.5em solid var(--sidebarContainerBottomHalf); */
  /* border-right: 0.5em solid var(--sidebarContainerBottomHalf); */
`;

const SidebarContainerBottomHalf = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
  padding: 5px;
  border-radius: 0 0 5px 5px;
  background-image: linear-gradient(var(--sidebarContainerBottomHalf),transparent);
  /* background-color: var(--sidebarContainerBottomHalf); */

`;

const SidebarSecondHalf = styled.div`
  display: ${(props: onClickToolkitTypes) =>
    props.displayStatus == "open" ? "flex" : "none"};
  /* transition: 5s ease-in-out; */
  flex-flow: column;
  align-items: flex-start;
  /* justify-content: flex-start; */
  box-sizing: border-box;
  gap: 10px;
  padding: 10px;
  position: relative;
  border-left: 1px solid var(--sidebarBorderColor);
  height: 100%;
  padding-bottom: 0;
  /* min-height: 500px;*/
  /* z-index:3; */

  /* flex:none; */
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

const OptionIconWrapper = styled.div`
  background-color: transparent;
  color: var(--sidebarOptionsColor);
  opacity: 0.8;
  &:hover {
    cursor: pointer;
    opacity: 1;
    /* color: var(--iconWrapperHoverColor); */
  }
`;

const SidebarFileSearchField = styled.div`
  display: ${(props: onClickToolkitTypes) => props.displayStatus};
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  > input[type="text"] {
    min-width: 150px;
    /* width: 15%; */
    border: none;
    border-radius: 5px 0 0 5px;
    border-right: none;
    height: 25px;
    background-color: var(--textInputFieldBackgroundColor);
    color: var(--textInputFieldColor);
    opacity: 0.9;
    text-align: left;
    padding: 0;
    margin: 0;
    padding-left: 10px;
  }
  > input[type="text"]:focus {
    outline: none;
    opacity: 1;
  }
`;

const SidebarNewFileCreationField = styled.div`
  display: ${(props: onClickToolkitTypes) => props.displayStatus};
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  > input[type="text"] {
    min-width: 150px;
    /* width: 15%; */
    border: none;
    border-radius: 5px 0 0 5px;
    border-right: none;
    height: 25px;
    background-color: var(--textInputFieldBackgroundColor);
    color: var(--textInputFieldColor);
    opacity: 0.9;
    text-align: left;
    padding: 0;
    margin: 0;
    padding-left: 10px;
  }
  > input[type="text"]:focus {
    outline: none;
    opacity: 1;
  }
`;

const SidebarNewFolderCreationField = styled.div`
  display: ${(props: onClickToolkitTypes) => props.displayStatus};
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  > input[type="text"] {
    min-width: 150px;
    /* width: 15%; */
    border: none;
    border-radius: 5px 0 0 5px;
    border-right: none;
    height: 25px;
    background-color: var(--textInputFieldBackgroundColor);
    color: var(--textInputFieldColor);
    opacity: 0.9;
    text-align: left;
    padding: 0;
    margin: 0;
    padding-left: 10px;
  }
  > input[type="text"]:focus {
    outline: none;
    opacity: 1;
  }
`;

const IconWrapper = styled.div`
  /* border-left: 1px solid var(--sidebarBackgroundColor); */
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  border-radius: 0 5px 5px 0;
  height: 25px;
  background-color: var(--textInputFieldBackgroundColor);
  opacity: 0.6;
  width: 25px;

  > .MuiSvgIcon-root {
    color: var(--textInputFieldColor);
  }
  > .MuiSvgIcon-root:hover {
    color: var(--text);
    opacity: 1;
  }
`;

const AllFilesAndFoldersContainer = styled.div`
  background-color: var(--navbarBackground);
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  /* box-sizing: border-box; */
  /* min-height: 445px; */
  height: 100%;
  width: 100%;
  /* min-width: 175px; */
  box-sizing: border-box;
  /* width: 17vw; */
  overflow-y: scroll;
  /* overflow-y: auto; */
  ::-webkit-scrollbar {
    display: none;
  }
  border-radius: 5px 5px 7px 7px;
  padding: 5px 5px 0 5px;

  /* flex:none; */
  order: 1;
  align-self: stretch;
  flex-grow: 1;
`;

const EachFilesAndFoldersContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

const FolderArrowIcon = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  opacity: 0.7;
`;

const IndividualFolder = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

const FolderIconAndNameContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  padding: 0 8px 0 0;
  margin-bottom: 5px;
  font-size: 13px;
  opacity: 0.7;
  &:hover {
    opacity: 1;
    background-color: var(--folderHoverBackgroundColor);
    border-radius: 3px;
    cursor: context-menu;
  }
`;

const FolderName = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  opacity: 0.7;
`;

const FilesBelongingToThisFolder = styled.div`
  display: ${(props: any) =>
    props.displayStatus === "open" ? "flex" : "none"};
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
  border-left: 1px solid var(--leftborderForFilesOfAFolder);
  padding: 0 0 0 9px;
  margin-left: 12px;
`;

const FilesBelongingToTheUnnamedFolder = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
`;

const SelectAllIconsContainer = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 0 5px 0 5px;
  /* margin-bottom:10px; */
  border-radius: 50%;
  box-shadow: 0 0 0 1.6em var(--sidebarBackgroundColor);
  /* margin-top:25px; */
  z-index: 2;
  position: relative;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
  > .MuiSvgIcon-root {
    color: var(--toggleButtonColor);
    opacity: 0.8;
    /* box-shadow: ; */
  }
  > .MuiSvgIcon-root:hover {
    opacity: 1;
    cursor: pointer;
    /* box-shadow: ; */
  }
`;

const IndividualFile = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  margin-left: 5px;
  gap: 10px;
  opacity: ${(props: any) => (props.fileClicked === true ? 1 : 0.6)};
  &:hover {
    opacity: 1;
  }
  &:hover .checkbox {
    visibility: visible;
  }
  &:hover .fileName {
    width: auto;
    background-color: var(--folderHoverBackgroundColor);
    cursor: context-menu;
  }
`;

const IndividualFileName = styled.div`
  font-size: 13px;
  padding: 3px 5px 3px 5px;
  border-radius: 3px;
  background-color: ${(props: any) =>
    props.fileClicked === true
      ? "var(--folderHoverBackgroundColor)"
      : "transparent"};
`;

const IndividualFileCheckbox = styled.div`
  visibility: ${(props: any) =>
    props.checkboxClicked === true ? "visible" : "hidden"};
  /* margin-left: 50px; */
  color: var(--toggleButtonColor);
  visibility: visible;
  opacity: 0.7;
  > .MuiSvgIcon-root {
    font-size: 13px;
  }
`;

const ContextMenuContainer = styled.div`
  display: ${(props: any) =>
    props.displayStatus === "open" ? "flex" : "none"};
`;
