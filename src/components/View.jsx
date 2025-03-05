/* eslint-disable react/jsx-key */
import React, { useContext, useEffect, useState } from 'react'
import Add from '../components/Add'
import Edit from '../components/Edit'
import { deleteProjectAPI, userProjectAPI } from '../../Services/allAPI'
import { addResponseContext, editResponseContext } from '../contexts/ContextAPI'






function View() {
 
  const {addResponse}=useContext(addResponseContext)
  const {editResponse}=useContext(editResponseContext)
  
  const [userProjects,setUserProjects]=useState([])

  useEffect(() => {

    getUserProjects()

  }, [addResponse,editResponse])

  const getUserProjects=async()=>{
     const token = sessionStorage.getItem("token")

     if(token){

      const reqHeader={
        "content-type":"application/json",
        "authorization":`Bearer ${token}`
      }
    try{
      const result= await userProjectAPI(reqHeader)
      console.log(result);
      setUserProjects(result.data)
      
    }
    catch(err){
      console.log(err);
      
    }
     }
  }
  
  const handleDeleteProject=async(id)=>{
    
    

    const token = sessionStorage.getItem("token")

    if(token){

      const reqHeader={
           
           " content-type":"application/json",
           "authorization":`Bearer ${token}`
      }
    
      const result= await deleteProjectAPI(id,reqHeader)
      console.log(result);
      if(result.status==200){
        getUserProjects()
      }
      



    }
    

  }

  return (
    <>
    
    <div className='container mt-4 '>
      <div className='d-flex justify-content-between align-items-center'>

        <h3 className=' fw-semibold mt-3 fs-4 text-danger '>All Projects</h3>

        <Add/>

      </div>


        { userProjects?.length>0 ?

        userProjects?.map(project=>(

          <div className='d-flex justify-content-between  border   rounded p-3 mt-4  bg-light'>
          <h2 className='fs-4  text-dark '>{project?.title}</h2>

          <div className='d-flex justify-content-center align-items-center gap-3'>
            <Edit project={project} />
          <a href={project?.github}><i class="fa-brands fa-github fa-lg  text-black  "></i></a>  
           <button onClick={()=>handleDeleteProject(project?._id)} className='btn'> <i class="fa-solid fa-trash text-danger  fa-lg "></i></button>
          </div>
        </div>
        ))
         
        :
        <div className='text-danger fw-semibold mt-5  fs-4 text-center'>No Projects Added yet!!</div>
        }
      </div>
     
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default View