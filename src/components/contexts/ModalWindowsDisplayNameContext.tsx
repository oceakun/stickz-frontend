import { createContext, useState } from "react";

export type ModalWindowsDisplayNameType = {
  whichModalWindow: string | null;
};

type ModalWindowsDisplayNameContextType = {
    modalWindowsDisplayName: ModalWindowsDisplayNameType | null;
    setModalWindowsDisplayName: React.Dispatch<React.SetStateAction<ModalWindowsDisplayNameType | null>>;
};

type ModalWindowsDisplayNameContextProviderProps = {
  children: React.ReactNode;
};

export const ModalWindowsDisplayNameContext =
  createContext<ModalWindowsDisplayNameContextType | null>(null);

export const ModalWindowsDisplayNameContextProvider = ({
  children,
}: ModalWindowsDisplayNameContextProviderProps) => {
  const [modalWindowsDisplayName, setModalWindowsDisplayName] =
    useState<ModalWindowsDisplayNameType | null>({
      whichModalWindow: JSON.parse(
        localStorage.getItem("modalWindowsDisplayName") || "{}"
      ),
    });
  return (
    <ModalWindowsDisplayNameContext.Provider
      value={{ modalWindowsDisplayName, setModalWindowsDisplayName }}
    >
      {children}
    </ModalWindowsDisplayNameContext.Provider>
  );
};