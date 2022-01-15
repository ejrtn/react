import React from "react";
import keplerGlReducer from "kepler.gl/reducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";
import { Provider } from "react-redux";
import KeplerGl from "kepler.gl";

const reducers = combineReducers({
  keplerGl: keplerGlReducer
});

const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));


function Map() {

  return (
    <KeplerGl
      id="foo"
      mapboxApiAccessToken="pk.eyJ1IjoiZGVva3N1IiwiYSI6ImNrdDE2eHF2ejBhdGwzMXBrMmRrNXA2ZjEifQ.INHlGu6fWnbK-FntqU5exA"
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
}

function App() {
  return (
    <Provider store={store}>
      <Map />
    </Provider>
  );
}

export default App;
