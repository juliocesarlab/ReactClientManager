import { useContext } from "react";
import { ToggleButtonContext } from "../Contexts/toggleButtonProvider";

export const useToggleButton = () => useContext(ToggleButtonContext)