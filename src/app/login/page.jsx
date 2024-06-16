"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AddUser from "./addUser";

import Login from "./login";
import { UserProvider } from "@/provider";

export default function LoginPage() {
  const router = useRouter();
  const [selectedUser, setSelectedUser] = useState(null);
  const [userList, setUserList] = useState(
    JSON.parse(localStorage.getItem("userList")) || []
  );
  const [_, setCurrentUser] = useContext(UserProvider);

  const currentUser = JSON.parse(localStorage.getItem("user")) || false;
  if (currentUser) {
    setCurrentUser(currentUser);
    router.replace("/home");
    return null;
  }
  return (
    <>
      <main className="p-4">
        <AddUser
          id="register-popover"
          userList={userList}
          setUserList={setUserList}
        />
        <Login
          id="login-popover"
          selectedUser={selectedUser}
          onSuccess={() => {
            router.push("/home");
          }}
        />

        <section className="grid grid-cols-3 md:grid-cols-4 gap-4">
          <button
            popovertarget="register-popover"
            className={`${
              userList.length > 0 ? "aspect-auto" : "aspect-square"
            } bg-gray-100 opacity-55 hover:opacity-70 duration-300 text-black rounded-md p-4 flex items-center justify-center`}
          >
            <div className="w-20 h-20 bg-gray-300 flex items-center justify-center font-semibold text-3xl rounded-full">
              +
            </div>
          </button>
          {userList.map((user, i) => (
            <button
              key={i}
              onClick={() => {
                setSelectedUser(user);
              }}
              popovertarget="login-popover"
              className="aspect-square bg-gray-100 bg-opacity-55 hover:bg-opacity-70 duration-300 text-black bg-g flex flex-col items-center justify-center gap-2 p-4 rounded-md"
            >
              <div className="bg-black rounded-full aspect-square flex-grow">
                <Image
                  src={`https://robohash.org/${user.username}`}
                  width={200}
                  height={200}
                  className="aspect-square w-full object-cover rounded-full"
                  alt="avatar"
                />
              </div>
              <h1 className="font-semibold">{user.username}</h1>
            </button>
          ))}
        </section>
      </main>
    </>
  );
}
