import React from 'react';
import Main from './components/Main'
import './styles/App.css'
//import { useSelector, useDispatch } from 'react-redux';
//import { main, selectName } from './features/rootReducer'

function App() {
  /*const name = useSelector(selectName)
  const dispatch = useDispatch();
  dispatch(main())*/
  return (
    <div style={{height: 100+'%'}}>
      <Main />
    </div>
  );
}

export default App;
