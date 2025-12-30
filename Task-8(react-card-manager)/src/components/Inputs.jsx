import { useState } from "react";
import Card from "./Card";

const Inputs = () => {
  const [img, setimg] = useState("");
  const [name, setname] = useState("");
  const [role, setrole] = useState("");

  const localData = JSON.parse(localStorage.getItem("all-users")) || [];

  const [users, setusers] = useState(localData);

  function submitHandle() {
    const newUser = { img, name, role };

    const updatedUsers = [...users, newUser];

    setusers(updatedUsers);

    localStorage.setItem("all-users", JSON.stringify(updatedUsers));

    setname("");
    setimg("");
    setrole("");
  }

  function deleteHandler(idx) {
    const copyElement = [...users];
    copyElement.splice(idx, 1);
    setusers(copyElement);
    localStorage.setItem("all-users", JSON.stringify(copyElement));
  }

  return (
    <div className=" ">
      <div className=" border border-red-400 flex flex-col gap-4 items-center w-[50vh]">
        <input
          onChange={(e) => {
            setimg(e.target.value);
          }}
          className="border rounded mt-5"
          type="text"
          placeholder="Img"
          value={img}
        />

        <input
          onChange={(e) => {
            setname(e.target.value);
          }}
          className="border rounded"
          type="text"
          placeholder="Name"
          value={name}
        />

        <input
          onChange={(e) => {
            setrole(e.target.value);
          }}
          className="border rounded"
          type="text"
          placeholder="Role"
          value={role}
        />

        <button onClick={submitHandle} className="border mt-10 rounded">
          Generate
        </button>
      </div>
      {users.map((user, idx) => (
        <div className="flex gap-4 flex-wrap" key={idx}>
          <Card
            img={user.img}
            name={user.name}
            role={user.role}
            deleteHandler={deleteHandler}
            idx={idx}
          />
        </div>
      ))}
    </div>
  );
};

export default Inputs;
