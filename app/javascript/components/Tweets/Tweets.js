import  React, { useEffect, useState } from "react";
import styled from 'styled-components'
import axios from "axios";
import Header from './Header'
import TweetCreate from '../Tweet/TweetCreate'
import ActionCable from "actioncable";
import { ActionCableConsumer } from "@thrash-industries/react-actioncable-provider";

const Card = styled.div`
`

const Tweets = ( {cable} ) => {

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

  const handleReceived = (message) => {
    console.log('ActionCable')
    //debugger
    onTweetSubmitSuccess()      
  }

  return (
  <div>
    <ActionCableConsumer
        channel={{channel: 'TweetChannel'}} onReceived={handleReceived}
      >
    <Card>
      <div className = "card-header">
        <h2>Home</h2>
      </div>      
      <TweetCreate
        onTweetSubmitSuccess ={onTweetSubmitSuccess}
        cable={cable} 
      />      
    </Card>
    <Header
      tweets={tweets}
    />
    </ActionCableConsumer>
  </div>
    
  )
}

export default Tweets
