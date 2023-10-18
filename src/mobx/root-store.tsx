import { makeAutoObservable } from "mobx";
import AuthStore, { IAuthStore } from "../auth/store";
import AppStore, { IAppStore } from "../pages/store";

export interface IRootStore {
  appStore: IAppStore;
  authStore: IAuthStore;
}

export default class RootStore implements IRootStore {
  authStore = new AuthStore() as IAuthStore;
  appStore = new AppStore() as IAppStore;

  constructor() {
    makeAutoObservable(this);
  }
}
