import { BrowserRouter } from 'react-router-dom';
import Main from './container/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Main/>
    </BrowserRouter>
  );
}

export default App;
