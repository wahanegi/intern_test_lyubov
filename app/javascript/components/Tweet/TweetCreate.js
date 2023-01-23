import  React, { useEffect, useState, useRef } from "react";
import styled from "styled-components"
import axios from "axios";
import setAxiosHeaders from '../AxiosHeaders';

const Card = styled.div`
`
const Button = styled.button`
  border-radius: 30px;
  margin-left: 75%;
`
const TweetCreate = (props) => {   
  const [tweet, setTweet] = useState({}) 
  const [errormessage, setErrormessage] = useState(null) 
  const [successmessage, setSuccessmessage] = useState(null) 
  const ref = useRef(null);

  const handleChange = (e) => {
      e.preventDefault();
      console.log( 'name:', e.target.name, 'value:', e.target.value)
      setTweet(Object.assign({}, tweet,{[e.target.name]: e.target.value}))
      console.log( 'tweet:', tweet)

    };
  
  const handleSubmit = (e) => {
      e.preventDefault();
      setAxiosHeaders();
      setSuccessmessage(null)
      setErrormessage(null)
      
      axios.post('/api/v1/tweets', { tweet })
      .then((resp) => {
          //debugger
          setTweet({body: ''})
          props.onTweetSubmitSuccess()
          setErrormessage(null)
          setSuccessmessage("Hurrah! Your tweet is create!")
      })
      .catch((resp) => {
        setErrormessage("A tweet should have a maximum of 255 characters and cannot be blank")
        setSuccessmessage(null)
      })
      e.target.reset();
  }    
  console.log(tweet)
    return (
      <Card>
        <form onSubmit={handleSubmit}>
          {errormessage && 
          <div className="alert alert-danger" role="alert" >
            <p className="mb-0">{errormessage}</p>
          </div>} 
          {successmessage && 
          <div className="alert alert-success" role="alert">
            <p className="mb-0">{successmessage}</p>
          </div>}
          <div className="form-group">
            <input className="form-control" type="text" name="body" placeholder = "What's happening" ref={ref} valeu={tweet.body} onChange={handleChange} /> 
          </div>
          <Button type="submit" className="btn btn-outline-primary mt-3">
            Create Tweet
          </Button>
        </form>
      </Card>

    )
}

export default TweetCreate