import { useContext, useEffect } from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from 'react-bootstrap/Modal';
import modalImg from '../assets/modalImg.png'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addProjectAPI } from '../../Services/allAPI';
import { addResponseContext } from '../contexts/ContextAPI';





function Add(){

  const {setAddResponse}=useContext(addResponseContext)


  const [projectDetails, setProjectDetails] = useState({ title: "", projectImg: "", languages: "", github: "", websiteLink: "", overView: "" })
  console.log(projectDetails);
  const [imgFileStatus, setImgFileStatus] = useState(false)
  const [preview, setPreview] = useState("")


  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setProjectDetails({ title: "", projectImg: "", languages: "", github: "", websiteLink: "", overView: "" })
  }
  const handleShow = () => setShow(true);



  useEffect(() => {

    if (projectDetails.projectImg.type == "image/png" || projectDetails.projectImg.type == "image/jpg" || projectDetails.projectImg.type == "image/jpeg") {

      setImgFileStatus(true)
      setPreview(URL.createObjectURL(projectDetails.projectImg))
    }
    else {

      setImgFileStatus(false)
      setProjectDetails({ ...projectDetails, projectImg: "" })
      setPreview(modalImg)
    }

  }, [projectDetails.projectImg])

  const handleAddProject = async () => {

    const { title, projectImg, github, websiteLink, overView, languages } = projectDetails

    if (title && projectImg && github && websiteLink && overView && languages) {

      // reqBody

      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("languages", languages)
      reqBody.append("github", github)
      reqBody.append("websiteLink", websiteLink)
      reqBody.append("projectImg", projectImg)
      reqBody.append("overView", overView)

      // reqHeader

      const token = sessionStorage.getItem("token")
      console.log(token);


      if (token) {

        const reqHeader = {

          "content-type": "multipart/form-data",
          "authorization": `bearer ${token}`

        }
        // api call

        try {

          const result = await addProjectAPI(reqBody, reqHeader)

          if (result.status == 200) {
            setAddResponse(result.data)
            toast.success("project added successfully")
            handleClose()
          }
          else {
            toast.error(result.response.data)
          }

        }
        catch (err) {
          console.log(err);

        }
      }



    }

    else {
      toast.warning("enter the fields completely")
    }
  }



  return (
    <>

      <div className='mt-2'>
        <Button onClick={handleShow} className='btn  text-white fw-semibold btn-warning rounded p-2' color='warning' variant="contained">+ New Project</Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        style={{ backdropFilter: 'blur(15px)' }}
      >
        <Modal.Header closeButton  >
          <Modal.Title className='text-primary fw-semibold' >New Project Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row p-2 '>
            <div className="col-lg-6">
              <label htmlFor='projectImg'> <img className='w-75 ms-4' src={preview} alt="" />
                <input id='projectImg' onChange={(e) => setProjectDetails({ ...projectDetails, projectImg: e.target.files[0] })} type="file" style={{ display: 'none' }} /></label>

              {!imgFileStatus &&
                <p className='fw-semibold text-danger mt-3 ms-5'>*upload only the following file <br /> type ( jpg,jpeg,png )</p>

              }
            </div>
            <div className="col-lg-6 ">

              <form className='mt-3 '>
                <FloatingLabel controlId="floatingInput" label="Project Title" className="mb-3" >
                  <Form.Control onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })} type="text" placeholder="Project Title" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Languages used" className='mb-3'>
                  <Form.Control onChange={(e) => setProjectDetails({ ...projectDetails, languages: e.target.value })} type="text" placeholder="Languages used" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Github link" className="mb-3" >
                  <Form.Control onChange={(e) => setProjectDetails({ ...projectDetails, github: e.target.value })} type="link" placeholder="github link" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Website link" className='mb-3'>
                  <Form.Control onChange={(e) => setProjectDetails({ ...projectDetails, websiteLink: e.target.value })} type="link" placeholder="website link" />
                </FloatingLabel>
              </form>


            </div>
            <FloatingLabel controlId="floatingInput" label="Overview" className='p-0'>
              <Form.Control onChange={(e) => setProjectDetails({ ...projectDetails, overView: e.target.value })} type="link" placeholder="Overview" />
            </FloatingLabel>

          </div>




        </Modal.Body>
        <Modal.Footer>
          <Button color='error' className='w-25 fw-semibold btn-danger  me-3' variant="contained" onClick={handleClose}>  Cancel</Button>

          <Button onClick={handleAddProject} color='success' className='w-25 fw-semibold btn-success ' variant="contained">Add</Button>

        </Modal.Footer>
      </Modal>




    </>
  )
}

export default Add