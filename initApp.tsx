import * as React from 'react';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';

import firebaseData from './firebase';
import { onValue, ref, off, get } from '@firebase/database';

interface InitAppProps {
  updateVersion: () => void;
  getUpdateVersion: () => void;
  getGroups: () => void;
  getProducts: () => void;
}

export const InitApp: React.FC<InitAppProps> = ({
  updateVersion,
  getUpdateVersion,
  getGroups,
  getProducts,
}) => {
  const [localVersion, setLocalVersion] = React.useState(updateVersion);
  const [serverVersion, setServerVersion] = React.useState(null);

  React.useEffect(() => {
    const starCountRef = ref(firebaseData, '/updateVersion');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setServerVersion(data);
    });
    return () => off(starCountRef);
  }, [onValue]);

  React.useEffect(() => {
    if (serverVersion === null || localVersion === null) {
      const starCountRef = ref(firebaseData, '/updateVersion');
      get(starCountRef).then((snapshot) => {
        const data = snapshot.val();
        setServerVersion(data);
      });
      updateState();
      return () => off(starCountRef);
    }
  }, []);

  const updateState = () => {
    getUpdateVersion();
    getGroups();
    getProducts();
  };

  React.useEffect(() => {
    if (serverVersion !== localVersion) {
      updateState();
      setLocalVersion(updateVersion);
    }
  }, [serverVersion]);

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};
