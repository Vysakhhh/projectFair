import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import server_url from '../../Services/server_url';


function ProjectCard({displayData}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  return (
    <>
    
      
    <Card className='rounded ' style={{ width: '16rem',height:'22rem' }} onClick={handleShow}>
      <Card.Img className='mt-2' variant="top" src={`${server_url}/uploads/${displayData?.projectImg}`} />
      <Card.Body>
        <Card.Title className='text-danger text-center fw-semibold'>{displayData?.title}</Card.Title> 
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose} size='lg' style={{backdropFilter:'blur(15px)'}}>
        <Modal.Header closeButton>
          <Modal.Title className='text-primary fw-semibold'></Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <div className='row'>
          <div className="col-lg-6">
            <img src={`${server_url}/uploads/${displayData?.projectImg}`} alt="" className='w-100' />
          </div>
          <div className="col-lg-6">
           <div className='ms-2'>
           <h2 className='text-danger fs-3 text-center fw-semibold'> {displayData?.title} </h2> 
           <h5 className='text-dark mt-4 '>Languages Used : <span className='text-warning' style={{fontSize:'20px'}}>{displayData?.languages} </span></h5>
           <h5 className='text-dark mt-3'>Project Overview : <span className='text-secondary w-100 ' style={{fontSize:'16px'}}>{displayData?.overView}</span></h5>
           </div>
          </div>

          <div className='d-flex justify-content-start mt-5'>
            <a href={displayData?.github}  style={{color:'white'}} className='btn  ms-2 btn-dark p-2 w-25 '><i class="fa-brands fa-github fa-xl"></i> </a>
            <a href={displayData?.websiteLink} style={{color:'white'}}  className='btn  btn-dark ms-2 p-2 w-25'><i class="fa-solid fa-link fa-lg "></i></a>
            
          </div>

         </div>

        </Modal.Body>
       
     
      </Modal>
    

    
    
    
    
    
    
    
    </>
  )
}

export default ProjectCard