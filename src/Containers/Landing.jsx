import React from 'react';
import styled from 'styled-components';

const LandingComponent = styled.div`
  font-family: fantasy;
  background: #DEC9BE;
`

function Landing() {
  return (
    <div id="/">
      <LandingComponent>
        <h3>Landing section</h3>
        <p>Cindy Vo</p>
        <p>Just keep Coding</p>
      </LandingComponent>
    </div>

  )
}

export default Landing;