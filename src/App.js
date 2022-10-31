import './App.css';
import CardList from './components/CardList/CardList';
import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import CardOpen from './components/CardOpen/CardOpen';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<CardList/>}/>
          <Route path='/card' element={<CardOpen/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
