import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store/actions/counter.actions";
import { logginUser } from "./store/actions/login.action";

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()


  console.log(isLogged)

  return (
    <div className="App">
     {( isLogged && 
      <>
      <h1>{counter}</h1>
      <h1>{isLogged}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      </>
      )}
      <button onClick={() => dispatch(logginUser())}>Login</button>

    </div>
  );
}

export default App;
