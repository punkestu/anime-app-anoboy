"use client";

import { UserProvider } from "../provider";
import { useState } from "react";

export default function TheProvider({ children }) {
  return (
    <UserProvider.Provider value={useState(null)}>
      {children}
    </UserProvider.Provider>
  );
}
