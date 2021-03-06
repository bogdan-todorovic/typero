import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createGame, joinGame } from "../reducers/gameReducer";

const HomePage = () => {
  const dispatch = useDispatch();
  const [gameId, setGameId] = useState("");

  return (
    <div className="container">
      <input
        id="create-button"
        type="button"
        onClick={() => dispatch(createGame())}
        value="Create game"
      />
      <input
        type="text"
        value={gameId}
        onChange={e => setGameId(e.target.value)}
        placeholder="Enter game id"
      />
      <input
        id="join-button"
        type="button"
        onClick={() => dispatch(joinGame(gameId))}
        value="Join game"
      />
    </div>
  );
};

export default HomePage;