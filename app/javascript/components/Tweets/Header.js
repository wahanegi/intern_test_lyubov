import  React, { useEffect, useState } from "react";
import styled from 'styled-components'
import Tweet from './Tweet';
import axios from 'axios';

const CardBody = styled.div`
  margin-top: 30px;
`

const Header = () => {
    const [tweets, setTweets] = useState([])

    useEffect(() => {
      axios.get('/api/v1/tweets.json')
      .then(response => setTweets(response.data.data))
      .catch(response => console.log(response))
    }, [])
    console.log(tweets)

    const grid = tweets.map( (tweet, index) => {
        const { body } = tweet.attributes
        console.log("body", body)
        console.log("id", tweet.id)
    
        return (
          <Tweet 
            key={index}
            body={body}
            id={tweet.id}
          />
        )
      })

    return ( 
        <CardBody>
            {grid}
        </CardBody>
    )
}

export default Header