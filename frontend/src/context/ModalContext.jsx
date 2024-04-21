import React from "react";

const ModalContext = React.createContext(null);

export const useModal = () => {
  const context = React.useContext(ModalContext);

  if (!context) {
    throw new Error("useModal deve estar dentro do ModalContextProvider");
  }

  return context;
};

export const ModalContextProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [taskIdToDelete, setTaskIdToDelete] = React.useState("");

  return (
    <ModalContext.Provider
      value={{ isOpenModal, setIsOpenModal, taskIdToDelete, setTaskIdToDelete }}
    >
      {children}
    </ModalContext.Provider>
  );
};
