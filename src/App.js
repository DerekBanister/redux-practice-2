import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

function App() {
  // Returns the state inside our store.
  // Key value pair of store(account) and accountReducer
  // const state = useSelector((state) => state);

  // Only returns one key value pair from state
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch()

  //action creators
  // const AC = bindActionCreators(actionCreators, dispatch);

  //DE-STRUCTURED object containing our two actions (deposit/withdraw)
  const { deposit, withdraw } = bindActionCreators(actionCreators, dispatch);

  // console.log(AC);

  //returns only the value
  console.log(account);


  return (
    <div class="container">
      <div class="header">
        <h1>Banking Application</h1>
        <h2>Account Balance: ${account}</h2>
      </div>
      <div class="buttons">
        <button class="deposit" onClick={() => deposit(1000)}>Deposit</button>
        <button class="withdraw" onClick={() => withdraw(1000)}>Withdraw</button>
      </div>
    </div>

  );
}

export default App;

