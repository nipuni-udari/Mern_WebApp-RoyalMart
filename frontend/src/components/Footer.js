import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer >
      <Container >
        <Row>
          <Col  className='text-center py-3' >Copyright © 2022 .All rights reserved by &copy; Royal Mart</Col>
        </Row>
        <Row>
          <Col className='text-center py-4'>Call us : +94 711064083 <p></p> Love chocolate? Let's chat:<p></p> <a href='https://www.facebook.com/PurdysChocolatier'>facebook</a>
          &ensp;<a href='https://twitter.com/PurdysChocolate'>Twitter</a>
          &ensp;<a href='https://www.instagram.com/purdyschocolatier/'>Instagram</a>
          &ensp;<a href='https://www.youtube.com/user/PurdysChocolates1'>Youtube</a>
          
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
