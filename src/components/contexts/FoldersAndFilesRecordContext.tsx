import { createContext, useState } from "react";
import { FilesForSidebar } from "../../components/FilesForSidebar";

export type FoldersAndFilesRecordType = {
  foldersAndFiles:
    | {
        name: string ;
        fileIds: {
          fileName: string ;
          fileClicked: boolean;
          checkboxClicked: boolean;
          selectedWithSelectAllIcon: boolean ;
        }[];
        status: string ;
        folderId: string;
        folderClicked: boolean;
      }[]
    | null;
};

type FoldersAndFilesRecordContextType = {
  foldersAndFilesRecord: FoldersAndFilesRecordType | null;
  setFoldersAndFilesRecord: React.Dispatch<
    React.SetStateAction<FoldersAndFilesRecordType | null>
  >;
};

type FoldersAndFilesRecordContextProviderProps = {
  children: React.ReactNode;
};

export const FoldersAndFilesRecordContext =
  createContext<FoldersAndFilesRecordContextType | null>(null);

export default FoldersAndFilesRecordContext;

export const FoldersAndFilesRecordContextProvider = ({
  children,
}: FoldersAndFilesRecordContextProviderProps) => {
  const [foldersAndFilesRecord, setFoldersAndFilesRecord] =
    useState<FoldersAndFilesRecordType | null>({
      foldersAndFiles: [...FilesForSidebar],
    });
  return (
    <FoldersAndFilesRecordContext.Provider
      value={{ foldersAndFilesRecord, setFoldersAndFilesRecord }}
    >
      {children}
    </FoldersAndFilesRecordContext.Provider>
  );
};
