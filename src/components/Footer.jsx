import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    
       
    <div className='conatiner  w-100 mx-2   ' style={{height:'400px',marginTop:'170px'}}>

       <div className='row mx-5 '>
       <div className='col-lg-3  '>

        <h4 className='text-primary fw-semibold mt-3' > <i class="fa-brands fa-docker me-2 text-warning"></i>Project Fair</h4>

        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt necessitatibus qui impedit. Ducimus consequatur impedit, facere ex quia quaerat obcaecati, nesciunt expedita modi dolorum dignissimos libero nihil, repellat quod distinctio?</p>

        <p>code is licensed by vysakh</p>

        <p>Currently v5.3.2</p>
        
     
         </div>
         <div className='col-md-3'>
            <h5 className='ms-4 mt-3'>Links</h5>
            <div className='ms-4  mt-4' >
               <Link className='text-decoration-none text-black' to={'/'}>Home</Link> <br /> 
               <Link className='text-decoration-none text-black' to={'/login'}>Login</Link> <br />
               <Link className='text-decoration-none text-black' to={'/register'}>Register</Link>
            </div>
         </div>
         <div className='col-lg-3'>
            <h5 className='ms-4 mt-3'>Guides</h5>
            <div className='mt-4 ms-4' >
               <a href='' className='text-decoration-none text-black'>React</a> <br />
               <a href='' className='text-decoration-none text-black'>React Bootstrap</a> <br />
               <a href='' className='text-decoration-none text-black'>React Router</a> <br />
                </div>
         </div>
         <div className='col-lg-3'>
            <h5 className='ms-3  mt-3 '>FeedBack</h5>
            <form action="email">
               <div className='d-flex  justify-content-center flex-row  mt-3'>
               <input className=' form-control w-75 me-2 border-2 border-primary ' type="email" placeholder='enter your feedback' />
               <button className='btn rounded bg-primary  me-5'><i class="fa-solid fa-arrow-right "  style={{color:"white"}}></i> </button>
               </div>
            </form>
            <div className='d-flex justify-content-around align-items-center  mt-4 '>
            <i class="fa-brands fa-facebook fs-5"style={{color:"black"}}></i>
            <i class="fa-brands fa-twitter fs-5  " style={{color:"black"}}></i>
             <i class="fa-brands fa-github fs-5  " style={{color:"black"}}></i>
             <i class="fa-brands fa-linkedin fs-5 " style={{color:"black"}}></i>
             <i class="fa-brands fa-instagram fs-5 " style={{color:"black"}}></i>
             <i class="fa-solid fa-phone  " style={{color:"black",fontSize:'189x'}}></i>



            </div>
         </div>
        
    </div>
        <p className='text-center mt-4'>Copyright &copy; september 2024 Batch,ProjectFair,Build with react</p>
       </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Footer