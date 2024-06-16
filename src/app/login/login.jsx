import { Card, Input } from "@nextui-org/react";
import { useContext, useState } from "react";

import bcrypt from "bcryptjs";
import { UserProvider } from "@/provider";

export default function Login({ id, selectedUser, onSuccess }) {
  const [password, setPassword] = useState("");
  const [saveUser, setSaveUser] = useState(false);
  const [errors, setErrors] = useState({});
  const [_, setCurrentUser] = useContext(UserProvider);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!selectedUser) return;
        if (!bcrypt.compareSync(password, selectedUser.password)) {
          setErrors({ password: "Invalid password" });
          return;
        }
        if (saveUser) {
          localStorage.setItem("user", JSON.stringify(selectedUser));
        }
        setCurrentUser(selectedUser);
        onSuccess();
      }}
      popover="auto"
      id={id}
      className="bg-[#0000] w-[30vw]"
    >
      <Card className="p-4 flex flex-col justify-center gap-2 h-full">
        <div className="flex justify-between">
          <h1 className="font-medium text-lg">Login here</h1>
          <button type="button" popovertarget={id} popovertargetaction="hide">
            X
          </button>
        </div>
        {errors.password && (
          <p className="text-xs text-red-500">{errors.password}</p>
        )}
        <Input
          placeholder="Password ..."
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>
          <input
            className="me-2"
            type="checkbox"
            checked={saveUser}
            onChange={(e) => setSaveUser(e.target.checked)}
          />
          Remember me
        </label>
        <button type="submit" className="bg-black text-white rounded-md p-2">
          Login
        </button>
      </Card>
    </form>
  );
}
