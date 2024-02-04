import Header from './components/Header';
import Main from './components/Main';
import {Provider} from 'react-redux';
import { AuthContextProvider } from './context/authContext';
import { PostsContextProvider } from './context/postsContext';
import { store } from './store';


const App = () => (
  <Provider store={store}>
    <AuthContextProvider>
      <Header />
      <PostsContextProvider>
        <Main />
      </PostsContextProvider>
    </AuthContextProvider>
  </Provider>

);

export default App;
