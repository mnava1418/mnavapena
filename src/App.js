import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { main, selectName } from './features/rootReducer'

function App() {
  const name = useSelector(selectName)
  const dispatch = useDispatch();
  dispatch(main())

  return (
    <div>
        {name}
    </div>
  );
}

export default App;
