import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tweets from './Tweets/Tweets'


const App = () => {
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<Tweets/>} />
      </Routes>
    </Router>
  )
}
export default App
