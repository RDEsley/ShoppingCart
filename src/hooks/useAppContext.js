import { useContext } from 'react';

import AppContext from '../context/AppContext';

function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext deve ser usado dentro de AppProvider');
  }

  return context;
}

export default useAppContext;
