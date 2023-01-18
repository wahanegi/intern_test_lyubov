import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import TweetCreate from '../Tweet/TweetCreate'

const Card = styled.div`
`

const Tweets = () => {
  return (
  <div>
    <Card>
      <div className = "card-header">
        <h2>Home</h2>
      </div>      
      <TweetCreate/>      
    </Card>
    <Header/>
  </div>
    
  )
}

export default Tweets
