import { createContext, useState } from "react";

export type FileSectionStatusType = {
  fileSectionOpenOrShut: string | null;
};

type FileSectionStatusContextType = {
  fileSectionStatus: FileSectionStatusType | null;
  setFileSectionStatus: React.Dispatch<
    React.SetStateAction<FileSectionStatusType | null>
  >;
};

type FileSectionStatusContextProviderProps = {
  children: React.ReactNode;
};

export const FileSectionStatusContext =
  createContext<FileSectionStatusContextType | null>(null);

export const FileSectionStatusContextProvider = ({
  children,
}: FileSectionStatusContextProviderProps) => {
  const [fileSectionStatus, setFileSectionStatus] =
    useState<FileSectionStatusType | null>({
      fileSectionOpenOrShut: JSON.parse(
        localStorage.getItem("fileSectionOpenOrShut") || "{}"
      ),
    });
  return (
    <FileSectionStatusContext.Provider
      value={{ fileSectionStatus, setFileSectionStatus }}
    >
      {children}
    </FileSectionStatusContext.Provider>
  );
};