/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import ProjectCard from '../components/ProjectCard'
import { allProjectAPI } from '../../Services/allAPI'



function Projects() {

   const [searchKey,setSearchKey]=useState("")
  const [allprojects, setAllProjects] = useState([])

  useEffect(() => {
    
  getAllProjects()

  }, [searchKey])
  


  const getAllProjects = async () => {

    const token = sessionStorage.getItem('token')

    if (token) {

      const reqHeader = {

        "content-type": "application/json",
        "authorization": `Bearer ${token}`

      }

      try {

        const result = await allProjectAPI(searchKey,reqHeader)
        console.log(result);
        setAllProjects(result.data)

      }
      catch (err) {
        
        console.log(err);

      }


    }




  }

  return (
    <>


      <div style={{ minHeight: '65vh' }}>
        <div className=' container w-100 mt-5 d-flex justify-content-between align-items-center' >

          <h2 className='fw-bold fs-3' style={{color:'orangered'}}>All Projects</h2>


          <TextField onChange={(e)=>setSearchKey(e.target.value)} className='form-control w-25 p-0' id="searchProject" label="search project by language" variant="standard" />

          </div>

      

       <div className='row mt-5 container  mx-5'>
       {
        allprojects?.length>0 ?

      allprojects?.map(project=>(

        <div className='col-lg-4 gap-3 mb-5'>
        <ProjectCard displayData={project}/>
        </div>
      ))
        :

        <div className='fw-semibold text-danger fs-5 text-center my-3'>Projects Not Found</div>
      }

       </div>
      </div>











    </>
  )
}

export default Projects