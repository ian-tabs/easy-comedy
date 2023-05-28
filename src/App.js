import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './redux/actions';

function App() {

  const jokeParams = useSelector(state => state.jokeParams)
  const mainScreen = useSelector(state => state.mainScreen)


  return (
    <div className="App">
    </div>
  );
}

export default App;
