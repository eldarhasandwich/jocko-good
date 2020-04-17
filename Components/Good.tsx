import * as React from 'react'
import styled from 'styled-components'

interface Props {
  goodText: string
}

const Container = styled.div`
  position: relative;
`

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`

const Text = styled.h1`
  color: white;
  text-align: center;
  position: absolute;
  width: 100vw;
  font-family: Arial, Helvetica, sans-serif;
`

const Good: React.FC<Props> = (props) => {

  return (
    <Container>

      <Image
        src="/jocko.png"
      />

      <Text>
        { props.goodText }
      </Text>

    </Container>
  )
}

export default Good