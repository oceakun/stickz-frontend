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

  const [folderList, setFolderList] = useState([
    {
      name: "Folder 1",
      fileIds: ["file1", "file2"],
      status: "shut",
      folderId: "folder1",
    },
    {
      name: "Folder 2",
      fileIds: ["file3", "file4"],
      status: "shut",
      folderId: "folder2",
    },
    {
      name: "---",
      fileIds: [
        "file5",
        "file6",
        "file7",
        "file8",
        "file9",
        "file10",
        "file11",
        "file12",
        "file13",
        "file14",
        "file15",
        "file16",
      ],
      status: "open",
      folderId: "folder3",
    },
  ]);

  const fileSectionStatusContext = useContext(FileSectionStatusContext);

  const [fileSectionStatus, setFileSectionStatus] = useState(
    fileSectionStatusContext?.fileSectionStatus?.fileSectionOpenOrShut
  );

  useEffect(() => {
    console.log("app - useEffect called");
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

  const handleFolderClick = (e: any, indexOfTheClickedChannel: any) => {
    console.log("folder clicked");
    setFolderList((current) =>
      current.map((folder, index) => {
        if (index == indexOfTheClickedChannel) {
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

  return (
    <SidebarContainer>
      {/* sidebar options */}
      <SidebarOptions>
        <OptionIconWrapper onClick={handleSearchIconClick}>
          <SearchIcon />
        </OptionIconWrapper>
        <OptionIconWrapper onClick={handleCreateNewFileIconClicked}>
          <NoteAddIcon />
        </OptionIconWrapper>
        <OptionIconWrapper onClick={handleCreateNewFolderIconClicked}>
          <CreateNewFolderIcon />
        </OptionIconWrapper>
        <OptionIconWrapper>
          <ShareIcon />
        </OptionIconWrapper>
        <OptionIconWrapper>
          <DownloadIcon />
        </OptionIconWrapper>
        <OptionIconWrapper>
          <DeleteIcon />
        </OptionIconWrapper>
      </SidebarOptions>

      {/* Search field */}
      <SidebarSecondHalf displayStatus={fileSectionStatus}>
        <SidebarFileSearchField displayStatus={inputFieldDisplay}>
          <input type="text" placeholder="Search a file"></input>
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
                      return <IndividualFile>{file}</IndividualFile>;
                    })}
                  </FilesBelongingToThisFolder>
                </IndividualFolder>
              );
            } else {
              return (
                <FilesBelongingToTheUnnamedFolder>
                  {folder.fileIds.map((file, fileIndex) => {
                    return <IndividualFile>{file}</IndividualFile>;
                  })}
                </FilesBelongingToTheUnnamedFolder>
              );
            }
          })}
        </AllFilesAndFoldersContainer>
      </SidebarSecondHalf>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  /* flex: 0 1 auto; */
  color: var(--text);
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: var(--sidebarBackgroundColor);
`;

const SidebarOptions = styled.div`
  color: var(--text);
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  padding: 10px;
  min-height: 500px;
  height: 100vh;
  border-right: 1px solid var(--sidebarBorderColor);
`;

const SidebarSecondHalf = styled.div`
  display: ${(props: onClickToolkitTypes) =>
    props.displayStatus == "open" ? "flex" : "none"};
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  padding: 10px;
  border-right: 1px solid var(--sidebarBorderColor);
  min-height: 500px;
  height: 100vh;
`;

const OptionIconWrapper = styled.div`
  background-color: transparent;
  color: var(--sidebarOptionsColor);
  &:hover {
    cursor: pointer;
    color: var(--iconWrapperHoverColor);
  }
`;

const SidebarFileSearchField = styled.div`
  display: ${(props: onClickToolkitTypes) => props.displayStatus};
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  > input[type="text"] {
    min-width: 150px;
    width: 15vw;
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
    width: 15vw;
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
    width: 15vw;
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
  min-width:25px;
  width:2vw;

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
  min-height: 445px;
  height: 82vh;
  min-width: 175px;
  width: 17vw;
  overflow: scroll;
  overflow-x: hidden;
  /* ::-webkit-scrollbar {
    display: none;
  } */
  border-radius:5px;
  padding:5px;
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
  border-left: 1px solid var(--text);
  opacity: 0.7;
  padding: 0 0 0 9px;
  margin-left: 12px;
`;

const FilesBelongingToTheUnnamedFolder = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;

const IndividualFile = styled.div`
  font-size: 13px;
  border-right: transparent solid 1px;
  padding: 3px 5px 3px 5px;
  margin-left: 5px;
  opacity: 0.7;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  &:hover {
    opacity: 1;
    background-color: var(--folderHoverBackgroundColor);
    border-radius: 3px;
    cursor: context-menu;
  }
`;
