import './App.css';
import { Provider } from 'react-redux'
import PokemonsList from './Components/PokemonsList'
import generateStore from './redux/store';

function App() {
  const store = generateStore();

  return (
    <Provider store={store}>
      <div>
        <h1>Practicing REDUX with the Pokemon API!</h1>
        <PokemonsList />
      </div>
    </Provider>
  );
}

export default App;
