import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './store/store';
import { State } from "./store/reducers/mainReduser"
import './App.css';

function App() {

  const dispatch = useDispatch()
  const { depositMoney, withdrawMoney, resetMoney } = bindActionCreators(actionCreators, dispatch)

  const account = useSelector((state: State) => state.account)
  console.log(account)
  return (
    <div className="App">
      <h1>{account}</h1>
      <div>
        <button onClick={() => depositMoney(1)}>Add</button>
        <button onClick={() => withdrawMoney(1)}>Remove</button>
        <button onClick={() => resetMoney()}>Reset</button>
      </div>
    </div>
  );
}

export default App;
