"use client";

import AnimeList from "@/components/animeList";
import { UserProvider } from "@/provider";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function Home() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useContext(UserProvider);
  if (!currentUser) {
    const savedUser = JSON.parse(localStorage.getItem("user")) || false;
    if (!savedUser) {
      router.replace("/");
      return null;
    }
    setCurrentUser(savedUser);
  }
  return (
    <main className="p-4">
      <h1 className="text-2xl font-semibold">Welcome back {currentUser && currentUser.username}</h1>
      <AnimeList title={"Anime List"} list={[{}]} url={"animelist"} useMore={true} />
    </main>
  );
}
