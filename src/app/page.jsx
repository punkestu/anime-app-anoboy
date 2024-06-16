"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";

import welcomeBg from "../../public/welcome-bg.jpeg";
import { useRouter } from "next/navigation";

export default function Welcome() {
  const router = useRouter();
  return (
    <main>
      <section className="flex h-screen items-center justify-center">
        <Image
          className="w-full h-full opacity-25 blur-md"
          src={welcomeBg}
          alt="background"
        />
        <div className="absolute flex flex-col items-center gap-2">
          <h1 className="font-semibold text-4xl">Welcome to Anime App!</h1>
          <p>Where you can explore and watch your favorite anime</p>
          <Button onClick={() => router.push("/login")}>
            Watch Now &raquo;
          </Button>
        </div>
      </section>
    </main>
  );
}
