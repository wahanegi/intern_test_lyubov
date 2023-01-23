import  React from "react";
import styled from 'styled-components'
import Tweet from './Tweet';


const CardBody = styled.div`
  margin-top: 30px;
`

const Header = (props) => {
  
    const grid = props.tweets.map( (tweet, index) => {
        const { body } = tweet.attributes
        const { user } = tweet.attributes
        const { created_at } = tweet.attributes
        console.log("body", body)
        console.log("id", tweet.id)
        console.log("tweet", tweet)
        console.log("user", user)
        console.log("created_at", created_at)
    
        return (
          <Tweet 
            key={index}
            body={body}
            id={tweet.id}
            user={user}
            created_at={created_at}
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