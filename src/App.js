import { Canvas, Hi } from './components';
import { Route } from 'react-router-dom';
import './scss/main.scss';

const App = () => {
  return (
    <div className="App">
      <Route exact path='/' component={Hi} />
      <Route path='/about' component={Canvas} />
    </div>
  );
}

export default App;
