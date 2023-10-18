import { makeAutoObservable, runInAction } from "mobx";
import { IOrganization } from "../auth/store";
// import axios from "axios";

export interface IOrganization {
  displayName: string;
  name: string;
}

export interface IAppStore {
  organizations?: IOrganization[];
  loadOrganizations(): Promise<void>;
}

export default class AppStore implements IAppStore {
  organizations: IOrganization[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  loadOrganizations = async () => {
    this.isLoading = true;
    //ToDO: call load api
    // const result = await axios.get(`apiName`);
    runInAction(() => {
      this.isLoading = false;
      this.organizations = [
        {
          displayName: "Test",
          name: "test",
        },
      ];
    });
  };
}
