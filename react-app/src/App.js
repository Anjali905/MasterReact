import logo from './logo.svg';
import './App.css';
import { LazyState } from './component/state';
import { Clock } from './component/clock';
import DigitalClock from './component/useeffect/DigitalClock';
import Impure, { Cup } from './component/useeffect/impure';
import StopWatch from './component/ref/stopwatch';
function App() {
  return (
    <div className="App">
  <StopWatch/>
    </div>
  );
}

export default App;
