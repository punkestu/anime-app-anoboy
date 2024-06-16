"use client";

import { UserProvider } from "@/provider";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function Header() {
  const [currentUser, setCurrentUser] = useContext(UserProvider);
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
    router.replace("/");
  };

  if (!currentUser) {
    const savedUser = JSON.parse(localStorage.getItem("user")) || false;
    if (!savedUser) return null;
    setCurrentUser(savedUser);
  }
  return (
    currentUser && (
      <header className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-semibold">Anime App</h1>
        <nav className="flex gap-4">
          <button onClick={logout}>Logout</button>
        </nav>
      </header>
    )
  );
}
