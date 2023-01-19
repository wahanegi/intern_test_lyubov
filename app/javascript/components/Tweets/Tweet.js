import React from "react";
import styled from "styled-components"

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
  padding: 20px;
  margin-bottom: 0;
`
const Tweet = ({ id, body}) => {
  console.log(id)
  return (
    <div className="card">
      <Cardtext>{body}</Cardtext>
    </div>
   );
}

export default Tweet;