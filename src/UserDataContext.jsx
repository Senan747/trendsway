
import { createContext, useState, useContext } from 'react';

const UserDataContext = createContext();

export function UserDataProvider({ children }) {
  const [userData, setUserData] = useState(null);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserData() {
  return useContext(UserDataContext);
}
