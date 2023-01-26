import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Untweets from './Tweets/Untweets'


const Unapp = () => {
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<Untweets/>} />
      </Routes>
    </Router>
  )
}
export default Unapp