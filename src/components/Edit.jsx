import { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import Modal from 'react-bootstrap/Modal';
import modalImg from '../assets/modalImg.png'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import server_url from '../../Services/server_url';
import { toast } from 'react-toastify';
import { updateProjectAPI } from '../../Services/allAPI';
import { editResponseContext } from '../contexts/ContextAPI';






function Edit({ project }) {

  const {setEditResponse}=useContext(editResponseContext)

  const [projectDetails, setProjectDetails] = useState({ id: project?._id, title: project?.title, projectImg: "", languages: project?.languages, github: project?.github, websiteLink: project?.websiteLink, overView: project?.overView })

  const [imgFileStatus, setImgFileStatus] = useState(false)

  const [preview, setPreview] = useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setProjectDetails({id:project?._id ,title: project?.title, projectImg: "", languages: project?.languages, github: project?.github, websiteLink: project?.websiteLink, overView: project?.overView })
  }
  const handleShow = () => {
    setShow(true);
    setProjectDetails({id: project?._id, title: project?.title, projectImg: "", languages: project?.languages, github: project?.github, websiteLink: project?.websiteLink, overView: project?.overView })

   
  }

  useEffect(() => {

    if (projectDetails.projectImg.type == "image/png" || projectDetails.projectImg.type == "image/jpg" || projectDetails.projectImg.type == "image/jpeg") {

      setImgFileStatus(true)
      setPreview(URL.createObjectURL(projectDetails.projectImg))
    }
    else {

      setImgFileStatus(false)
      setProjectDetails({ ...projectDetails, projectImg: "" })
      setPreview("")
    }

  }, [projectDetails.projectImg])



  const handleUpdate = async () => {
    const { id, title, languages, github, websiteLink, projectImg, overView } = projectDetails

    if (title && languages && languages && github && websiteLink && overView) {

      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("languages", languages)
      reqBody.append("github", github)
      reqBody.append("websiteLink", websiteLink)
      reqBody.append("overView", overView)
      preview ? reqBody.append("projectImg", projectDetails.projectImg) : reqBody.append("projectImg", project.projectImg)



      const token = sessionStorage.getItem("token")

      if (token) {

        const reqHeader = {

          "content-type": preview ? "multipart/form-data" : "application/json",
          "authorization": `Bearer ${token}`
        }

        try {
          const result = await updateProjectAPI(id, reqBody, reqHeader)
          console.log(result);
          if (result.status == 200) {
            setEditResponse(result.data)
            handleClose()
            
          }

        }
        catch (err) {
          console.log(err)
        }

      }



    }
    else {
      toast.warning("please fill the form completely")
    }
  }

  return (
    <>

      <button onClick={handleShow} className='btn'><i class="fa-solid fa-pen-to-square fa-lg  text-black"></i></button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        style={{ backdropFilter: 'blur(15px)' }}
      >
        <Modal.Header closeButton  >
          <Modal.Title className='text-primary fw-semibold' >Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row p-2 '>
            <div className="col-lg-6">
              <label htmlFor='projectImg'> <img className='w-75 ms-4' src={preview ? preview : `${server_url}/uploads/${project?.projectImg}`} alt=""/>
                <input id='projectImg' onChange={(e) => setProjectDetails({ ...projectDetails, projectImg: e.target.files[0] })} type="file" style={{ display: 'none' }} /></label>

              {!imgFileStatus &&
                <p className='fw-semibold text-danger mt-3 ms-5'>*upload only the following file <br /> type ( jpg,jpeg,png )</p>

              }
            </div>
            <div className="col-lg-6 ">

              <form className='mt-3 '>
                <FloatingLabel controlId="floatingInput" label="Project Title" className="mb-3" >
                  <Form.Control onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })} type="text" placeholder="Project Title" value={projectDetails?.title} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Languages used" className='mb-3'>
                  <Form.Control onChange={(e) => setProjectDetails({ ...projectDetails, languages: e.target.value })} type="text" placeholder="Languages used" value={projectDetails?.languages} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Github link" className="mb-3" >
                  <Form.Control onChange={(e) => setProjectDetails({ ...projectDetails, github: e.target.value })} type="link" placeholder="github link" value={projectDetails?.github} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Website link" className='mb-3'>
                  <Form.Control onChange={(e) => setProjectDetails({ ...projectDetails, websiteLink: e.target.value })} type="link" placeholder="website link" value={projectDetails?.websiteLink} />
                </FloatingLabel>
              </form>


            </div>
            <FloatingLabel controlId="floatingInput" label="Overview" className='p-0'>
              <Form.Control onChange={(e) => setProjectDetails({ ...projectDetails, overView: e.target.value })} type="link" placeholder="Overview" value={projectDetails?.overView} />
            </FloatingLabel>

          </div>




        </Modal.Body>
        <Modal.Footer>
          <Button color='error' className='w-25 fw-semibold btn-danger  me-3' variant="contained" onClick={handleClose}>  Cancel</Button>

          <Button onClick={handleUpdate} color='success' className='w-25 fw-semibold btn-success ' variant="contained">Update</Button>

        </Modal.Footer>
      </Modal>







    </>
  )
}

export default Edit