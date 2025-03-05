import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import landImg5 from "../assets/landImg5.png"
import ProjectCard from '../components/ProjectCard'
import Card from 'react-bootstrap/Card';
import { homeProjectAPI } from '../../Services/allAPI'
import { useEffect } from 'react'
import { toast } from 'react-toastify'





function Home() {

  const [homeProject, setHomeProject] = useState([])

  const navigate=useNavigate()

  useEffect(() => {

    getHomeProject()

  }, [])

  const getHomeProject = async () => {
    try {

      const result = await homeProjectAPI()
      if(result.status==200){
        setHomeProject(result.data)
      }


    } catch (err) {
      console.log(err);

    }
  }

  const handleProject=()=>{
    if(sessionStorage.getItem("token")){
      navigate('/projects')
    }
    else{
      toast.warning("please login to get full access to our projects")
    }
  }


 

  return (
    <>
      <div className='container mb-5' style={{ marginTop: '110px' }}>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div>
              <h2 className='fw-bold text-primary mt-5' style={{ fontSize: '43px' }}> <i class="fa-brands fa-docker text-warning"></i>&nbsp; Project Fair</h2>
              <p className='mt-4'>One top destination for all software development projects. where user can add and manage their projects. As well as access all projects avaliable in website..what are you waiting for!!! </p>
              {
                sessionStorage.getItem("token")
                  ?
                  <Link to={'/dashboard'} className="btn text-white shadow py-3  px-3  mt-2" style={{ borderRadius: '10px', backgroundColor: 'orangered', fontSize: '14px' }} >Manage your projects</Link>
                  :
                  <Link to={'/login'} className='btn text-white shadow  py-3  px-3 mt-2 ' style={{ borderRadius: '10px', backgroundColor: 'orangered', fontSize: '14px' }} >Start to explore </Link>
              }

            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className='ms-5'  >
              <img className='ms-5 w-100 ' src={landImg5} alt="" />
            </div>
          </Col>

        </Row>

        <div className='text-center ' style={{ marginTop: '120px' }}>
          <h2 className='mb-5 ' style={{ color: 'brown', fontSize: '37px' }}>Explore Our Projects</h2>
          {
            homeProject?.length>0 ?
            <marquee className='mb-5' >              
            
               <div className=' d-flex gap-5'>
                
                { homeProject?.map(project=>(
                    <ProjectCard key={project._id} displayData={project} />
                ))
                 }
              </div>              
          
            
          </marquee>

          :

          <div className='text-center fw-semibold my-5 text-danger'> Project Not Found </div>}


          <button onClick={handleProject} className=' btn btn-link mt-4 text-info' >Click here to view more projects</button>


        </div>
        {/* {testimonial} */}


        <div className='text-center ' style={{ marginTop: '150px' }}>
          <h2 className='mb-5' style={{ color: 'brown', fontSize: '37px' }}>Our Testimonial</h2>

          <div className='d-flex justify-content-center align-items-center mt-5 '>

            <Card style={{ width: '16rem' }} className='shadow'>
              <Card.Img className='w-50  mt-3 ' style={{ borderRadius: '50%', marginLeft: '65px' }} variant="top" src="https://img.freepik.com/premium-vector/man-suit-employee-concept-illustration_842145-125.jpg" />
              <Card.Body>
                <Card.Title className='text-center text-black mt-2'>Max Miller</Card.Title>

                <div className='d-flex justify-content-center mt-2'>
                  <i class="fa-solid fa-star me-1 text-warning" ></i>
                  <i class="fa-solid fa-star me-1 text-warning" ></i>
                  <i class="fa-solid fa-star me-1 text-warning" ></i>
                  <i class="fa-solid fa-star me-1 text-warning" ></i>
                </div>
                <Card.Text className='my-3' style={{ fontSize: '14px' }}>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>



              </Card.Body>
            </Card>

            <Card style={{ width: '16rem' }} className='ms-5 shadow'>
              <Card.Img className='w-50  mt-3 ' style={{ borderRadius: '50%', marginLeft: '65px' }} variant="top" src="https://img.freepik.com/premium-photo/illustration-single-woman-american-cartoon-art-style-images-with-ai-generated_545052-628.jpg" />
              <Card.Body>
                <Card.Title className='text-center text-black mt-2'>Rachel</Card.Title>
                <div className='d-flex justify-content-center mt-2'>
                  <i class="fa-solid fa-star me-1 text-warning " ></i>
                  <i class="fa-solid fa-star me-1 text-warning" ></i>
                  <i class="fa-solid fa-star me-1 text-warning" ></i>
                  <i class="fa-solid fa-star me-1 text-warning" ></i>
                </div>
                <Card.Text className='my-3' style={{ fontSize: '14px' }}>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>


              </Card.Body>
            </Card>

            <Card style={{ width: '16rem' }} className='ms-5 shadow'>
              <Card.Img className='w-50  mt-3 ' style={{ borderRadius: '50%', marginLeft: '65px' }} variant="top" src="https://img.freepik.com/premium-photo/profile-icon-white-background_941097-162211.jpg" />
              <Card.Body>
                <Card.Title className='text-center text-black mt-2'>Lewis Hamilton</Card.Title>
                <div className='d-flex justify-content-center mt-2'>
                  <i class="fa-solid fa-star me-1 text-warning" ></i>
                  <i class="fa-solid fa-star me-1 text-warning" ></i>
                  <i class="fa-solid fa-star me-1 text-warning" ></i>
                  <i class="fa-solid fa-star me-1 text-warning" ></i>
                </div>
                <Card.Text className='my-3 ' style={{ fontSize: '14px' }}>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>


              </Card.Body>
            </Card>
          </div>

        </div>







      </div>




    </>
  )
}

export default Home