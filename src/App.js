import './App.css';
import AddpostFrom from './features/posts/AddpostFrom';
// import Welcome from './components/Welcome';
// import { store } from './app/store';
// import { Provider } from 'react-redux';
// import Counter from './features/counter/Counter';
import PostsList from './features/posts/PostsList';

function App() {
  return (
    <div className="App">
     {/* <Welcome name='pradeep Gupta'/> */}
     {/* <Counter/> */}
     <AddpostFrom/>
     <PostsList/>
    </div>
  );
}

export default App;
