import './App.css';
import { useSelector } from 'react-redux';

function App() {
  // Returns the state inside our store.
  // Key value pair of store(account) and accountReducer
  // const state = useSelector((state) => state);

  // Only returns one key value pair from state
  const account = useSelector((state) => state.account);

  //returns only the value
  console.log(account);


  return (
    <div className="App">

    </div>
  );
}

export default App;
