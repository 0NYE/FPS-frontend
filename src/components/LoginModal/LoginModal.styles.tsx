import { Styles } from "react-modal";

export const modalCustomStyles: Styles = {
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: "none",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 12px 0px",
  },
};
