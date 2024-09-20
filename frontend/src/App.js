import logo from './logo.svg';
import './App.css';

import {DataProvider} from './DataProvider';
import ItemButton from './ItemButton';
import ItemStack from './ItemStack';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <ItemButton/>
        <ItemStack/>
      </DataProvider>
    </div>
  );
}

export default App;
