import  React, { useEffect, useState } from "react";
import styled from "styled-components"
import { BrowserRouter as Router, Link } from "react-router-dom";

const Card = styled.div`
`
const Buttom = styled.div`
  border-radius: 30px;
`
const TweetCreate = () => {   
    return (
      <Card>
        <form >
          <div className="input-group mb-3">
            <input type="text" className="form-control" name="body" placeholder = "What's happening"  />
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <Buttom type="submit" className="btn btn-outline-primary mt-3">
              Create Recipe
            </Buttom>
          </div>
        </form>
      </Card>

    )
}

export default TweetCreate