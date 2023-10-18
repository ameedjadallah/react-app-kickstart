import { createContext, useState } from 'react';
import RootStore, { IRootStore } from './root-store';
import initAxios from '../config/axios';

export const storeContext = createContext<IRootStore>({} as IRootStore);

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
