import {  useState } from 'react';
import RootStore, { IRootStore } from './root-store';
import initAxios from '../config/axios';
import { storeContext } from './store-context';


interface IStoreProviderProps {
  children: React.ReactNode;
}

export default function StoreProvider({ children }: IStoreProviderProps) {
  const [store] = useState<IRootStore>(new RootStore() as IRootStore);
  initAxios();

  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
}
