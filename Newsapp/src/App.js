// import logo from './logo.svg';
// import './App.css';
// import {Route,Routes} from 'react-router-dom'
import { UsersList } from './components/UsersList'
import {Fetch} from './components/Fetch' 


function App() {
  return (
    <div className="App">
    <Fetch/>
     {/* <Routes>
      <Route path='/users' element= {<UsersList/>}></Route>
     </Routes> */}
    </div>
  );
}

export default App;
