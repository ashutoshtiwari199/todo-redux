import logo from './logo.svg';
import './App.css';
import {Container} from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css"

// import Component

import Todo from './component/Todo';
import Todoform from './component/Todoform';

// redux
import {Provider} from 'react-redux'
import store from './Store';


function App() {
  return (
    <Provider store={store} >
      <Container fluid>
        <Todo />
        <Todoform />
      </Container>
    </Provider>
  );
}

export default App;
