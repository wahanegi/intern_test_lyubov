import React from "react";
import styled from "styled-components"
import PublishIcon  from '@material-ui/icons/Publish'
import ChatBubbleOutlineIcon  from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

const Card = styled.div`
  background-color: white;
  text-align: center;
  color: #272727;
  padding: 20px;
  border: 1px;
  border-color: #ced4da;
  border-style: solid;
`
const Cardtext = styled.div`
  font-size: medium;
`
const Tweetfooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`
const Tweet = ({ id, body}) => {
  console.log(id)
  return (
    <Card>
      <Cardtext>{body}</Cardtext>
      <Tweetfooter>
        <ChatBubbleOutlineIcon fontSize = "small" /> 
        <RepeatIcon fontSize = "small" />
        <FavoriteBorderIcon fontSize = "small" />
        <PublishIcon  fontSize = "small" /> 
      </Tweetfooter>
    </Card>
   );
}

export default Tweet;