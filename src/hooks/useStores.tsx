import { useContext } from 'react';
import { storeContext } from '../mobx/store-provider';

export default function useStores() {
  const context = useContext(storeContext);

  return context;
}
