import router from "../../router";

const state = {
  currentPlayer: null,
  boardState: [],
  options: [],
  isRunning: true,
  winner: null,
};

const getters = {
  game(state) {
    return state.game;
  },
  winner(state) {
    return state.winner;
  },
  board(state) {
    return state.boardState;
  },
  currentPlayer(state) {
    return state.currentPlayer;
  }
};

const mutations = {
  setCurrentPlayer(state, payload) {
    state.currentPlayer = payload;
  },
  setBoard(state, payload) {
    state.boardState = payload;
  },
  clearGame(state) {
    state.boardState = [];
    state.currentPlayer = null;
    state.isRunning = false;
    state.winner = null;
  },
  endGame(state, payload) {
    if (payload == -1) {
      alert("Draw! \n Returning to Lobby...");
    } else {
      alert(state.currentPlayer.name + " won!\n Returning to Lobby...");
      router.go(-1);
    }
  },
  setWinner(state, payload) {
    state.winner = payload;
  },
  setRunning(state, payload) {
    state.isRunning = payload;
  },
  SOCKET_END_GAME(state, payload) {
    state.winner = payload.winner;
    state.isRunning = false;
  }
};

const actions = {
  SOCKET_GAME_TURN({
    commit
  }, payload) {
    commit("setBoard", payload[0]);
    commit("setCurrentPlayer", payload[1]);
  },
  SOCKET_END_GAME({
    commit
  }, payload) {
    commit("setBoard", payload[0]);
    setTimeout(() => {
      commit("endGame", payload[1]);
      commit("clearGame");
    }, 100);

  },
  SOCKET_START_GAME({
    state,
    commit,
    rootState
  }, payload) {
    // eslint-disable-next-line
    console.log("%c socket_start_game", "color:green");
    router.push({
      name: "game",
      params: {
        gameID: rootState.user.room.id
      }
    });
    commit("setRunning", true);
    commit("setBoard", [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ]);
    commit("setCurrentPlayer", payload[1]);
  },
};

export default {
  state,
  getters,
  mutations,
  actions
};
