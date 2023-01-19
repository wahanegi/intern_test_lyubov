import  React, { useEffect, useState } from "react";
import styled from 'styled-components'
import axios from "axios";
import Header from './Header'
import TweetCreate from '../Tweet/TweetCreate'

const Card = styled.div`
`

const Tweets = () => {

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

  const onTweetSubmitSuccess =() => {
    axios.get('/api/v1/tweets.json')
    .then(response => setTweets(response.data.data))
    .catch(response => console.log(response))
  }

  return (
  <div>
    <Card>
      <div className = "card-header">
        <h2>Home</h2>
      </div>      
      <TweetCreate
        onTweetSubmitSuccess ={onTweetSubmitSuccess}
      />      
    </Card>
    <Header
      tweets={tweets}
    />
  </div>
    
  )
}

export default Tweets
