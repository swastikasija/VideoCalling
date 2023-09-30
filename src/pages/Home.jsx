import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);
  return (
    <>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <button type="submit" class="btn btn-outline-success" onClick={handleJoinRoom}>
        Join
      </button>
    </>
  );
}

export default Home;
