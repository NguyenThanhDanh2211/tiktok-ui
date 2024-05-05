import React, { createContext, useContext, useState } from 'react';

// Tạo context với giá trị mặc định
const UserContext = createContext({ currentUser: false });

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(true); // Biến giữ trạng thái của user

  // Hàm để cập nhật trạng thái (nếu cần)
  const toggleUser = () => setCurrentUser((prev) => !prev);

  return (
    <UserContext.Provider value={{ currentUser, toggleUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext); // Custom hook để truy cập context
}
