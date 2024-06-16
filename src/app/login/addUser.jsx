import { Button, Card, Input } from "@nextui-org/react";
import bcrypt from "bcryptjs";
import { useState } from "react";

export default function AddUser({ id, setUserList, userList }) {
  const [errors, setErrors] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const addUser = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setErrors({
        username: "Username is required",
        password: "Password is required",
      });
      return;
    }
    if (userList.some((user) => user.username === username)) {
      setErrors({ username: "Username already exists" });
      return;
    }
    const newUser = { username, password: bcrypt.hashSync(password) };
    userList.push(newUser);
    localStorage.setItem("userList", JSON.stringify(userList));
    setUserList([...userList]);

    document.getElementById(id).hidePopover();
  };
  return (
    <form
      onSubmit={addUser}
      popover="auto"
      id={id}
      className="bg-[#0000] w-[30vw]"
    >
      <Card className="p-4 flex flex-col justify-center gap-2 h-full">
        <div className="flex justify-between">
          <h1 className="font-medium text-lg">Add new user here</h1>
          <button type="button" popovertarget={id} popovertargetaction="hide">
            X
          </button>
        </div>
        <label className="text-sm text-gray-500">Username</label>
        {errors.username && (
          <p className="text-xs text-red-500">{errors.username}</p>
        )}
        <Input
          placeholder="Username ..."
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="text-sm text-gray-500">Password</label>
        {errors.password && (
          <p className="text-xs text-red-500">{errors.password}</p>
        )}
        <Input
          placeholder="Password ..."
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Add User</Button>
      </Card>
    </form>
  );
}
