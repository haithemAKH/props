import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import photo1 from './photo1.jpg'
import PropTypes from 'prop-types';
const Profile = (props) => {
    const handleName =(Fullname) => alert(`the FULLNAME developper is ${props.Fullname}`)
    const {Fullname,Age,Bio,Profession}=props
  return (
    <div className='card'>
      <Card style={{ width: '18rem' ,flex: 'content',marginTop:'7%'}}>
      <Card.Img  variant="top" src={photo1}  />
      <Card.Body>
        <Card.Title>{Fullname}</Card.Title>
        <h4>{Age}</h4>
        <Card.Text>
          {Bio}
        </Card.Text>
        <Button variant="primary" onClick={handleName}>{Profession}</Button>
      </Card.Body>
    </Card>    
    </div>
  )
}
Profile.prototype={
Fullname : PropTypes.string,
Age:PropTypes.number,
Bio:PropTypes.string,
Profession:PropTypes.string,
}

export default Profile