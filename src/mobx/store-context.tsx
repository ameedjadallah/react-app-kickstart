import { createContext } from "react";
import { IRootStore } from "./root-store";

export const storeContext = createContext<IRootStore>({} as IRootStore);
