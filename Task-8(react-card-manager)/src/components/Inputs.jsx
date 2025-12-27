import { useState } from "react";
import Card from "./Card";

const Inputs = () => {
  const [img, setimg] = useState("");
  const [name, setname] = useState("");
  const [role, setrole] = useState("");

  const [users, setusers] = useState([]);

  function submitHandle() {
    const newUser = { img, name, role };
    setusers([...users, newUser]);
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
        <div className="" key={idx}>
            <Card img={user.img} name={user.name} role={user.role} />
            
        </div>
      ))}
    </div>
  );
};

export default Inputs;
