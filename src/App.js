import './App.css';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';
import LeftPart from './components/LeftPart/LeftPart'

function App() {
  return (
    <div className="App">
      <LeftPart/>
      <Header/>
      <CardList/>
    </div>
  );
}

export default App;
