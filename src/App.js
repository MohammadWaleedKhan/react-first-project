import './App.css';
import Headers from './components/header'
import Leftbar from './components/leftsidebar'
import Rightbar from './components/rightsidebar'

function App() {
  return (
    <div className="App">
      <Headers/>
      <Leftbar/>
      <Rightbar/>
    </div>
  );
}

export default App;
