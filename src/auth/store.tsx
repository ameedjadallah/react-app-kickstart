import { makeAutoObservable } from "mobx";
// import axios from "axios";

export interface IAuthStore {
  login(): void;
}

export default class AuthStore implements IAuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  async login() {
    //TODO: Call login api with try catch block
    // await axios.get(`loginApi`, {
    //   params: {
    //   },
    // });
  }
}
