import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`)
  }, [navigate, value]);
  return (
    <>
      <h1>Home Page</h1>
      <input
        type="text"
        placeholder="enter room id"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleJoinRoom}>Join</button>
    </>
  );
}

export default Home;
