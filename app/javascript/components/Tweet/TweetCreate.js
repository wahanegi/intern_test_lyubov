import  React, { useEffect, useState } from "react";
import styled from "styled-components"
import axios from "axios";

const Card = styled.div`
`
const Button = styled.button`
  border-radius: 30px;
  margin-left: 75%;
`
const TweetCreate = () => {   
  const [tweet, setTweet] = useState({}) 

  const handleChange = (e) => {
      e.preventDefault();
      console.log( 'name:', e.target.name, 'value:', e.target.value)
      setTweet(Object.assign({}, tweet,{[e.target.name]: e.target.value}))
      console.log( 'tweet:', tweet)

    };
  
  const handleSubmit = (e) => {
      e.preventDefault();

      const csrfToken = document.querySelector('[name=csrf-token]').content
      axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

      
      axios.post('/api/v1/tweets', { tweet })
      .then((resp) => {
          //debugger
          setTweet({body: ''})
      })
      .catch((resp) => {})
  }    
  console.log(tweet)
    return (
      <Card>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input className="form-control" type="text" name="body" valeu={tweet.body} onChange={handleChange} /> 
          </div>
          <Button type="submit" className="btn btn-outline-primary mt-3">
            Create Recipe
          </Button>
        </form>
      </Card>

    )
}

export default TweetCreate