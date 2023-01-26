import  React, { useEffect, useState } from "react";
import styled from 'styled-components'
import axios from "axios";
import Header from './Header'

const Card = styled.div`
`

const Untweets  = () => {

  const [tweets, setTweets] = useState([]) 

  useEffect(() => {
    axios.get('/api/v1/tweets.json')
    .then((resp) => {
      //debugger
      setTweets(resp.data.data)
  })
    .catch(resp => console.log(resp))
  }, [])
  console.log(tweets)

  return (
  <div>
    <Card>
      <div className = "card-header">
        <h2>Home</h2>
      </div>    
    </Card>
    <Header
      tweets={tweets}
    />
  </div>
    
  )
}

export default Untweets 