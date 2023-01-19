import  React from "react";
import styled from 'styled-components'
import Tweet from './Tweet';


const CardBody = styled.div`
  margin-top: 30px;
`

const Header = (props) => {
  
    const grid = props.tweets.map( (tweet, index) => {
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