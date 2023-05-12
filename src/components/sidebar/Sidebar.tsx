import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { FileSectionStatusContext } from "../contexts/FileSectionStatusContext";
import { ModalWindowsDisplayNameContext } from "../contexts/ModalWindowsDisplayNameContext";
import { ModalWindowsDisplayValueContext } from "../contexts/ModalWindowDisplayValueContext";
import {FoldersAndFilesRecordContext} from "../contexts/FoldersAndFilesRecordContext";
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
import FolderIcon from "@mui/icons-material/Folder";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import SelectAllIcon from "@mui/icons-material/SelectAll";
import { FilesForSidebar } from "./FilesForSidebar";

interface Props {}

type onClickToolkitTypes = {
  displayStatus: string;
};

const Sidebar = (props: any) => {
  const [newFileName, setNewFileName] = useState("");
  const [newFolderName, setNewFolderName] = useState("");
  const [inputFieldDisplayValue, setInputFieldDisplayValue] = useState("flex");
  const [
    searchFieldResultContainerDisplayValue,
    setSearchFieldResultContainerDisplayValue,
  ] = useState("none");
  const [createNewFileOptionDisplayValue, setCreateNewFileOptionDisplayValue] =
    useState("none");
  const [
    createNewFolderOptionDisplayvalue,
    setCreateNewFolderOptionDisplayvalue,
  ] = useState("none");

  const [folderList, setFolderList] = useState(FilesForSidebar);
  const [filteredFolderList, setFilteredFolderList] = useState({
    folders: [""],
    files: [""],
  });


  const fileSectionStatusContext = useContext(FileSectionStatusContext);
  const [fileSectionStatus, setFileSectionStatus] = useState(
    fileSectionStatusContext?.fileSectionStatus?.fileSectionOpenOrShut
  );

  const modalWindowsDisplayNameContext = useContext(
    ModalWindowsDisplayNameContext
  );
  const [modalWindowName, setModalWindowName] = useState(
    modalWindowsDisplayNameContext?.modalWindowsDisplayName?.whichModalWindow
  );

  const modalWindowsDisplayValueContext = useContext(ModalWindowsDisplayValueContext);
  const [modalWindowValue, setModalWindowValue] = useState(
    modalWindowsDisplayValueContext?.modalWindowsDisplayValue?.modalWindowDisplayValue
  );

  const foldersAndFilesRecordContext = useContext(FoldersAndFilesRecordContext);

  useEffect(() => {
    const foldersArray = [""];
    const filesArray = [""];
    folderList.map((folder, folderIndex) => {
      if (folder.name !== "---") foldersArray.push(folder.name);
      folder.fileIds.map((file, fileIndex) => {
        filesArray.push(file.fileName);
      });
    });
    foldersArray.shift();
    filesArray.shift();
    setFilteredFolderList({
      ...filteredFolderList,
      folders: [...foldersArray],
      files: [...filesArray],
    });
    // foldersAndFilesRecordContext?.foldersAndFilesRecord({
    //   foldersAndFiles: nameOfTheModalWindow,
    // });
  }, [folderList]);

  useEffect(() => {
    setFileSectionStatus(
      fileSectionStatusContext?.fileSectionStatus?.fileSectionOpenOrShut
    );
  }, [fileSectionStatusContext?.fileSectionStatus?.fileSectionOpenOrShut]);

  useEffect(() => {
    setModalWindowName(
      modalWindowsDisplayNameContext?.modalWindowsDisplayName?.whichModalWindow
    );
  }, [
    modalWindowsDisplayNameContext?.modalWindowsDisplayName?.whichModalWindow,
  ]);



  const handleSearchIconClick = () => {
    fileSectionStatusContext?.setFileSectionStatus({
      fileSectionOpenOrShut: "open",
    });

    if (inputFieldDisplayValue === "none") {
      setInputFieldDisplayValue("flex");
    }
    setCreateNewFileOptionDisplayValue("none");
    setCreateNewFolderOptionDisplayvalue("none");
  };

  const handleCreateNewFileIconClicked = () => {
    fileSectionStatusContext?.setFileSectionStatus({
      fileSectionOpenOrShut: "open",
    });
    if (createNewFileOptionDisplayValue === "none") {
      setCreateNewFileOptionDisplayValue("flex");
    }
    setInputFieldDisplayValue("none");
    setCreateNewFolderOptionDisplayvalue("none");
  };

  const handleCreateNewFolderIconClicked = () => {
    fileSectionStatusContext?.setFileSectionStatus({
      fileSectionOpenOrShut: "open",
    });
    if (createNewFolderOptionDisplayvalue === "none") {
      setCreateNewFolderOptionDisplayvalue("flex");
    }
    setInputFieldDisplayValue("none");
    setCreateNewFileOptionDisplayValue("none");
  };

  const handleModalWindowName = (e: any, nameOfTheModalWindow: string) => {
    console.log(nameOfTheModalWindow,"set");
    modalWindowsDisplayNameContext?.setModalWindowsDisplayName({
      whichModalWindow: nameOfTheModalWindow,
    });
    modalWindowsDisplayValueContext?.setModalWindowsDisplayValue({
      modalWindowDisplayValue: "block",
    });
  };

  const handleFolderClicked = (e: any, indexOfTheClickedFolder: any) => {
    const newFolderList = folderList.map((folder, folderIndex) => {
      if (folderIndex == indexOfTheClickedFolder) {
        if (folder.status == "open") {
          return { ...folder, status: "shut" };
        } else {
          return { ...folder, status: "open" };
        }
      } else {
        return { ...folder };
      }
    });
    setFolderList(newFolderList);
    
    
  };

  const handleFileClicked = (
    e: any,
    indexOfTheClickedFile: any,
    indexOfTheEncompassingFolder: any
  ) => {
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
        return { ...folder, status: "open" };
      } else {
        folder.fileIds.map((file, fileIndex) => {
          file.fileClicked = false;
          return file;
        });
        return { ...folder, status: "shut" };
      }
    });
    setFolderList(newFolderList);
  };

  const handleCheckboxClicked = (
    e: any,
    indexOfTheClickedFile: any,
    indexOfTheEncompassingFolder: any
  ) => {
    e.preventDefault();

    const newFolderList = folderList.map((folder, folderIndex) => {
      if (folderIndex == indexOfTheEncompassingFolder) {
        folder.fileIds.map((file, fileIndex) => {
          if (fileIndex == indexOfTheClickedFile) {
            file.checkboxClicked = !file.checkboxClicked;
            file.selectedWithSelectAllIcon = false;
            return file;
          }
        });
        return folder;
      } else {
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
      folder.fileIds.map((file, fileIndex) => {
        if (
          file.checkboxClicked == true &&
          file.selectedWithSelectAllIcon == true
        ) {
          file.checkboxClicked = false;
          file.selectedWithSelectAllIcon = true;
        } else if (
          file.checkboxClicked == false &&
          file.selectedWithSelectAllIcon == false
        ) {
          file.checkboxClicked = true;
          file.selectedWithSelectAllIcon = true;
        } else if (
          file.checkboxClicked == false &&
          file.selectedWithSelectAllIcon == true
        ) {
          file.checkboxClicked = true;
          file.selectedWithSelectAllIcon = true;
        } else {
          file.checkboxClicked = true;
          file.selectedWithSelectAllIcon = false;
        }

        return file;
      });
      return folder;
    });
    setFolderList(newFolderList);
  };

  const handleSearch = (e: any) => {
    const searchedSubString = e.target.value;
    const foldersArray = [""];
    const filesArray = [""];
    folderList.map((folder, folderIndex) => {
      if (folder.name !== "---" && folder.name.includes(searchedSubString))
        foldersArray.push(folder.name);
      folder.fileIds.map((file, fileIndex) => {
        if (file.fileName.includes(searchedSubString)) {
          filesArray.push(file.fileName);
        }
      });
    });
    foldersArray.shift();
    filesArray.shift();
    setFilteredFolderList({
      ...filteredFolderList,
      folders: [...foldersArray],
      files: [...filesArray],
    });
  };

  const openAnEntityFromSearchResultContainer = (
    e: any,
    nameOfTheClickedEntity: any
  ) => {
    folderList.map((folder, folderIndex) => {
      if (folder.name == nameOfTheClickedEntity) {
        handleFolderClicked(e, folderIndex);
      }
      folder.fileIds.map((file, fileIndex) => {
        if (file.fileName == nameOfTheClickedEntity) {
          handleFileClicked(e, fileIndex, folderIndex);
        }
      });
    });
  };

  const handleNewFolder = () => {
    const folderName = newFolderName;
    const newFolderObject = {
      name: folderName,
      fileIds: [],
      status: "shut",
      folderId: "folderk",
      folderClicked: false,
    };
    const draftFolderList = [...folderList];
    draftFolderList.splice(draftFolderList.length - 1, 0, newFolderObject);
    setFolderList(draftFolderList);
  };

  const handleNewFile = () => {
    const fileName = newFileName;
    const newFileObject = {
      fileName: fileName,
      fileClicked: false,
      checkboxClicked: false,
      selectedWithSelectAllIcon: false,
    };
    const draftFolderList = [
      ...folderList.map((folder, folderIndex) => {
        if (folder.name === "---") {
          const modifiedFolder = {
            ...folder,
            fileIds: [...folder.fileIds, newFileObject],
          };
          return { ...modifiedFolder };
        }
        return folder;
      }),
    ];
    setFolderList(draftFolderList);
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
          <OptionIconWrapper
            onClick={(event: any) => handleModalWindowName(event, "share")}
          >
            <ShareIcon />
          </OptionIconWrapper>
          <OptionIconWrapper
            onClick={(event: any) => handleModalWindowName(event, "download")}
          >
            <DownloadIcon />
          </OptionIconWrapper>
          <OptionIconWrapper
            onClick={(event: any) => handleModalWindowName(event, "delete")}
          >
            <DeleteIcon />
          </OptionIconWrapper>
        </SidebarContainerTopHalf>

        <DarkVerticalLink></DarkVerticalLink>

        {/* <SidebarContainerMidHalf>
        </SidebarContainerMidHalf> */}

        <LightVerticalLink></LightVerticalLink>
        <SidebarContainerBottomHalf>
          <OptionIconWrapper
            onClick={(event: any) => handleModalWindowName(event, "settings")}
          >
            <SettingsIcon />
          </OptionIconWrapper>
          <OptionIconWrapper
            onClick={(event: any) => handleModalWindowName(event, "help")}
          >
            <QuestionMarkIcon />
          </OptionIconWrapper>
        </SidebarContainerBottomHalf>
      </SidebarOptions>

      <SidebarSecondHalf displayStatus={fileSectionStatus}>
        <SidebarFileSearchField displayStatus={inputFieldDisplayValue}>
          <input
            type="text"
            placeholder="Search a file / folder"
            onChange={handleSearch}
            onFocus={(e: any) => {
              setSearchFieldResultContainerDisplayValue("flex");
            }}
            onBlur={(e: any) => {
              setSearchFieldResultContainerDisplayValue("none");
            }}
          ></input>
          <IconWrapper>
            <KeyboardArrowRightIcon />
          </IconWrapper>
        </SidebarFileSearchField>

        <SidebarNewFileCreationField
          displayStatus={createNewFileOptionDisplayValue}
        >
          <input
            type="text"
            placeholder="File name"
            onChange={(e: any) => {
              const fileName = e.target.value;
              setNewFileName(fileName);
            }}
          ></input>
          <IconWrapper onClick={handleNewFile}>
            <AddIcon />
          </IconWrapper>
        </SidebarNewFileCreationField>

        <SidebarNewFolderCreationField
          displayStatus={createNewFolderOptionDisplayvalue}
        >
          <input
            type="text"
            placeholder="Folder name"
            onChange={(e: any) => {
              const folderName = e.target.value;
              setNewFolderName(folderName);
            }}
          ></input>
          <IconWrapper onClick={handleNewFolder}>
            <AddIcon />
          </IconWrapper>
        </SidebarNewFolderCreationField>

        <AllFilesAndFoldersContainer>
          {folderList.map((folder, folderIndex) => {
            if (folder.name != "---") {
              return (
                <IndividualFolder key={folderIndex}>
                  <FolderIconAndNameContainer
                    onClick={(event: any) =>
                      handleFolderClicked(event, folderIndex)
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
                        <IndividualFile
                          fileClicked={file.fileClicked}
                          key={fileIndex}
                        >
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
                      );
                    })}
                  </FilesBelongingToThisFolder>
                </IndividualFolder>
              );
            } else {
              return (
                <FilesBelongingToTheUnnamedFolder key={folderIndex}>
                  {folder.fileIds.map((file, fileIndex) => {
                    return (
                      <IndividualFile
                        fileClicked={file.fileClicked}
                        key={fileIndex}
                      >
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
        <SidebarFileSearchFieldResultContainer
          className="sidebarFileSearchFieldResultContainer"
          displayStatus={searchFieldResultContainerDisplayValue}
        >
          {filteredFolderList.folders.map((folderName, folderIndex) => {
            return (
              <SearchFieldResultContainerEntity
                onMouseDown={(event: any) =>
                  openAnEntityFromSearchResultContainer(event, folderName)
                }
                key={folderIndex}
              >
                <SearchFieldResultContainerEntityIcon>
                  <FolderIcon />|
                </SearchFieldResultContainerEntityIcon>
                <SearchFieldResultContainerEntityName>
                  {folderName}
                </SearchFieldResultContainerEntityName>
              </SearchFieldResultContainerEntity>
            );
          })}

          {filteredFolderList.files.map((fileName, fileIndex) => {
            return (
              <SearchFieldResultContainerEntity
                onMouseDown={(event: any) =>
                  openAnEntityFromSearchResultContainer(event, fileName)
                }
                key={fileIndex}
              >
                <SearchFieldResultContainerEntityIcon>
                  <InsertDriveFileIcon />|
                </SearchFieldResultContainerEntityIcon>
                <SearchFieldResultContainerEntityName>
                  {fileName}
                </SearchFieldResultContainerEntityName>
              </SearchFieldResultContainerEntity>
            );
          })}
        </SidebarFileSearchFieldResultContainer>
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
  position: relative;
  height: 100%;
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
  flex-grow: 1;
  height: 100%;
  position: relative;
  align-self: stretch;
  padding: 5px;
  padding-top: 10px;
  box-sizing: border-box;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  border-right: 1px solid var(--fileContentBackgroundColor);
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
  height: 0;
  width: 1.4em;
  background-color: var(--sidebarContainerMidHalf);
`;

const LightVerticalLink = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 5em;
  width: 2.13em;
  background-image: linear-gradient(
    var(--sidebarContainerMidHalf),
    var(--sidebarContainerBottomHalf)
  );
`;

const SidebarContainerBottomHalf = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
  padding: 5px;
  border-radius: 0 0 5px 5px;
  background-image: linear-gradient(
    var(--sidebarContainerBottomHalf),
    transparent
  );
  background-color: var(--sidebarContainerBottomHalf);
`;

const SidebarSecondHalf = styled.div`
  display: ${(props: onClickToolkitTypes) =>
    props.displayStatus == "open" ? "flex" : "none"};
  flex-flow: column;
  align-items: flex-start;
  box-sizing: border-box;
  gap: 8px;
  padding: 5px;
  padding-top: 10px;
  position: relative;
  border-right: 1px solid var(--fileContentBackgroundColor);
  background-color: var(--sidebarBackgroundColor);
  height: 100%;
  padding-bottom: 0;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  @media (max-width: 468px) {

    display: ${(props: onClickToolkitTypes) =>
      props.displayStatus == "open" ? "flex" : "none"};
    flex-flow: column;
    align-items: flex-start;
    box-sizing: border-box;
    gap: 8px;
    padding: 5px;
    padding-top: 10px;
    position: absolute;
    z-index:3;
    border-right: 1px solid var(--fileContentBackgroundColor);
    background-color: var(--sidebarBackgroundColor);
    height: 100%;
    left:2.8rem;
    padding-bottom: 0;
    order: 1;
    align-self: stretch;
    flex-grow: 0;  }
`;

const OptionIconWrapper = styled.div`
  background-color: transparent;
  color: var(--sidebarOptionsColor);
  opacity: 0.8;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const SidebarFileSearchField = styled.div`
  display: ${(props: onClickToolkitTypes) => props.displayStatus};
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  > input[type="text"] {
    min-width: 150px;
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
  > input[type="text"]:focus .sidebarFileSearchFieldResultContainer {
    display: none;
  }
`;

const SidebarNewFileCreationField = styled.div`
  display: ${(props: onClickToolkitTypes) => props.displayStatus};
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  > input[type="text"] {
    min-width: 150px;
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

const SidebarFileSearchFieldResultContainer = styled.div`
  background-color: var(--sidebarContainerTopHalf);
  display: ${(props: onClickToolkitTypes) => props.displayStatus};
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
  width: 95.14%;
  max-height: 38%;
  box-sizing: border-box;
  overflow-y: scroll;
  border-radius: 0 0 7px 7px;
  /* padding: 5px; */
  position: absolute;
  z-index: 3;
  margin-top: 27px;
`;

const AllFilesAndFoldersContainer = styled.div`
  background-color: var(--navbarBackground);
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  border-radius: 5px 5px 7px 7px;
  padding: 5px 5px 30px 5px;

  order: 1;
  align-self: stretch;
  flex-grow: 1;
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
  border-radius: 50%;
  box-shadow: 0 0 0 1.6em var(--sidebarBackgroundColor);
  z-index: 2;
  position: relative;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
  > .MuiSvgIcon-root {
    color: var(--toggleButtonColor);
    opacity: 0.8;
  }
  > .MuiSvgIcon-root:hover {
    opacity: 1;
    cursor: pointer;
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
  color: var(--toggleButtonColor);
  visibility: visible;
  opacity: 0.7;
  > .MuiSvgIcon-root {
    font-size: 13px;
  }
`;

const SearchFieldResultContainerEntity = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  margin-left: 5px;
  gap: 4px;
  /* width:100%; */
  padding: 1px 5px 5px 5px;
  border-radius: 5px;
  /* border-right:5px solid transparent; */
  opacity: 0.6;

  &:hover {
    opacity: 0.8;
    /* background-color: var(--navbarBackground); */
    /* border-right:5px solid var(--sidebarBackgroundColor); */
    cursor: context-menu;
  }
`;

const SearchFieldResultContainerEntityName = styled.div`
  font-size: 13px;
  padding: 3px 5px 3px 5px;
  border-radius: 3px;
  background-color: ${(props: any) =>
    props.fileClicked === true
      ? "var(--folderHoverBackgroundColor)"
      : "transparent"};
`;

const SearchFieldResultContainerEntityIcon = styled.div`
  visibility: ${(props: any) =>
    props.checkboxClicked === true ? "visible" : "hidden"};
  color: var(--toggleButtonColor);
  visibility: visible;
  opacity: 0.7;
  > .MuiSvgIcon-root {
    font-size: 13px;
  }
`;
