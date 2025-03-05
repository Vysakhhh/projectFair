import commonAPI from "./commonAPI";
import server_url from "./server_url";

// register

export const registerAPI = async (reqBody) => {

  return await commonAPI("POST", `${server_url}/register`, reqBody)

}

// login

export const loginAPI = async (reqBody) => {

  return await commonAPI("POST", `${server_url}/login`, reqBody)

}

// addProject

export const addProjectAPI = async (reqBody, reqHeader) => {

  return await commonAPI("POST", `${server_url}/add-project`, reqBody, reqHeader)

}

// get-home-projects

export const homeProjectAPI = async () => {

  return await commonAPI("GET", `${server_url}/get-home-projects`, "")

}

// get-all-projects

export const allProjectAPI = async (searchKey,reqHeader) => {

  return await commonAPI("GET", `${server_url}/get-all-projects?search=${searchKey}`, "", reqHeader)

}


// get-user-projects

export const userProjectAPI = async (reqHeader) => {

  return await commonAPI("GET", `${server_url}/get-user-projects`, "", reqHeader)

}

// update-project

export const updateProjectAPI = async (pid, reqBody, reqHeader) => {

  return await commonAPI("PUT", `${server_url}/edit/project/${pid}`, reqBody, reqHeader)
}

// remove-project

export const deleteProjectAPI = async (id, reqHeader) => {

  return await commonAPI("DELETE", `${server_url}/remove/project/${id}`, {}, reqHeader)     // delete case :  reqbody : {}
}

// update-user-profile

export const updateProfileAPI = async (reqBody,reqHeader) => {

  return await commonAPI("PUT", `${server_url}/edit/profile`, reqBody, reqHeader)
}