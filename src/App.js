import './style/App.css';
import CardList from './components/CardList/CardList';
import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import CardOpen from './components/CardOpen/CardOpen';
import { useSelector } from 'react-redux';
import AuthorForm from './components/Authorization/AuthorForm';

function App() {

  const card = useSelector(state => state.reducer.currentCard)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<CardList/>}/>
          <Route path='/card' 
            element={<CardOpen 
              price={card.price} 
              title={card.title} 
              desription={card.description} 
              tags={card.tags} 
              nick={card.user.nick} 
              name={card.user.name}  
              img={card.img}      
              userImg={card.user.img}     
          />}/>
          <Route path='/authorization' element={<AuthorForm/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
