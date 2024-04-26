import Header from './components/Header';
import Main from './components/Main';
import { useDispatch} from 'react-redux';
import { updateToken } from './store/tokenReducer';
import { getToken } from './api/token';
import { Routes, Route } from 'react-router-dom';
// import MainPage from './components/Main/MainPage';

const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));

  return (
    <Routes>
      <Route path='/*' element={
        <>
          <Header />
          <Main />
          <MainPage/>
        </>
      }/>
      <Route path='*'>
        <>404</>
      </Route>
    </Routes>
  );
};

export default App;
