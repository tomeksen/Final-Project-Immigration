import React from "react";
import { IoMdClose } from "react-icons/io";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        {/* <button
          className="absolute top-4 right-4 text-gray-950 hover:text-black"
          onClick={onClose}
        >
          <IoMdClose size={24} />
        </button> */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
