import { createContext, useState } from "react";

export type ModalWindowsDisplayValueType = {
    modalWindowDisplayValue: string | null;
  };
  
type ModalWindowsDisplayValueContextType = {
    modalWindowsDisplayValue: ModalWindowsDisplayValueType | null;
    setModalWindowsDisplayValue: React.Dispatch<React.SetStateAction<ModalWindowsDisplayValueType | null>>;
};

type ModalWindowsDisplayValueContextProviderProps = {
    children: React.ReactNode;
  };  

  export const ModalWindowsDisplayValueContext =
  createContext<ModalWindowsDisplayValueContextType | null>(null);

  export const ModalWindowsDisplayValueContextProvider = ({
    children,
  }: ModalWindowsDisplayValueContextProviderProps) => {
    const [modalWindowsDisplayValue, setModalWindowsDisplayValue] =
      useState<ModalWindowsDisplayValueType | null>({
        modalWindowDisplayValue: "none"
      });
    return (
      <ModalWindowsDisplayValueContext.Provider
        value={{ modalWindowsDisplayValue, setModalWindowsDisplayValue }}
      >
        {children}
      </ModalWindowsDisplayValueContext.Provider>
    );
  };