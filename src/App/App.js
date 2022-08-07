import React from 'react';
import { Route, Routes} from '../../node_modules/react-router/index';
import Main from '../Routes/Main';

const App = () => {
  
  return (
    <Routes>
      <Route path="/all" element={<Main />} />
      <Route path="/business" element= {<Main />} />
      <Route path="/entertainment" element= {<Main />} />
      <Route path="/science" element= {<Main />} />
      <Route path="/technology" element= {<Main />} />
      <Route path="/sports" element= {<Main />} />
      <Route path="/health" element= {<Main />} />

     

    </Routes>
  );
};

export default App;