import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Airplay, Edit, Headphones } from 'react-feather';


function Landing() {
  return (
    <div className='ss'>
      
        <div>
        <h1>f <br />
        <br /> 
        </h1>
  
        </div>

<div  className='sp'>


  <div className='strmain'><p className='str'> STORYVERSE <br /> </p>
  <p className='pp'> A digital platfrorm that connect readers and writers</p></div>
    
<p className='start'>Get ready <br />
          to dive into world of imagination <br />
           through our incredible stories</p>
</div>

<div className='btnbg'>
    {/* 
     */}
      <Button className="cd"> Get free stories</Button>{' '}
</div>



<div className='crdbody'>
<div>
<Card   className='cr2'style={{ width: '10rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title className='ct'><Headphones></Headphones></Card.Title>
        <Card.Text>
         <span className='spn'>Audio stories</span>
        </Card.Text>
        <Button className="crdbtn">Listen </Button>
      </Card.Body>
    </Card>
</div>

<div>

<Card  className='cr1' style={{ width: '10rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title className='ct'><Edit></Edit></Card.Title>
        <Card.Text>
         <span className='spn'>write your stories</span>
        </Card.Text>
        <Button className="crdbtn">start </Button>
      </Card.Body>
    </Card>
</div>

<div>

<Card  className='cr' style={{ width: '10rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title className='ct'><Airplay></Airplay></Card.Title>
        <Card.Text>
         <span className='spn'> premium</span>
        </Card.Text>
        <Button className="crdbtn">subscribe </Button>
      </Card.Body>
    </Card>
</div>
</div>
<div><img  className="im1" 
         
         src="https://img.freepik.com/premium-vector/read-online-book-icon-outline-vector-virtual-class-internet-education_98396-52168.jpg?w=2000" alt="" /> </div>




        </div>

        

        
  )
}

export default Landing