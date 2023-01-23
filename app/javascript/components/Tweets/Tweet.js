import React from "react";
import styled from "styled-components"
import TimeAgo from 'react-timeago'
import frenchStrings from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import PublishIcon  from '@material-ui/icons/Publish'
import ChatBubbleOutlineIcon  from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

const Cardtext = styled.div`
  font-size: medium;
  padding: 20px;
  margin-bottom: 0;
`
const Tweetfooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`
const CardtextNik = styled.div`
  font-size: 15px;
  margin-bottom: 5px;
`

const Tweet = ({ id, body, user, created_at}) => {  
  console.log(id)
  const formatter = buildFormatter(frenchStrings)
  return (
    <div className="card">
      <div className = "card_header">
       <CardtextNik>@{user.nikname}</CardtextNik> 
      </div>        
      <Cardtext>{body}</Cardtext>      
      <TimeAgo date={created_at} formatter={formatter} />
      <Tweetfooter>
        <ChatBubbleOutlineIcon fontSize = "small" /> 
        <RepeatIcon fontSize = "small" />
        <FavoriteBorderIcon fontSize = "small" />
        <PublishIcon  fontSize = "small" /> 
      </Tweetfooter>
    </div>
   );
}

export default Tweet;