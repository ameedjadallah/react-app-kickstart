import { useContext } from 'react';
import { storeContext } from '../mobx/store-context';

export default function useStores() {
  const context = useContext(storeContext);

  return context;
}
