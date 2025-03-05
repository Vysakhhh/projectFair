# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Data sharing between components in react

- state lifting: lifting state to its parent , such that it can share state between its child using props
- redux: to avoid prop drilling while sharing the data across different components, avoid props drilling
- context API: use context to share data between components, avoid props drilling

CONTEXT API - Data sharing technique in react
------------------------------------------------

- providing a centralized way to manage state across components
- share specific info:(like state or function) with multiple components without props drilling
- steps:
    - creating a context: creating a context using createContext() hook
    - provide the context: use provider of context, so that it can help to provide data to component
    - consumig the context: to access/ use shared data using context API, use useContext() hook


MONGO DB
----------------
- database used to store and manage data


SQL
----------------

- Relational / SQL RDBMS
- store data in table with rows and columns
- uses fixed schema (specify the data type of data which been stored, only that type of data can be store)
- optimized for complex join and transaction
- support for rich set of data types
- ACID (Atomicity, Consistency, Isolation, Durability)
- Uses traditional business app



MONGO DB
------------------

- Document Oriented/ NO SQL DB
- store data as collection of JSON document
- Uses dynamic schema
- Optimized for Scalability and Performance
- Limited set of data types
- CAP(Consistency, durability, Partial Tolerance)
- Used in bigdata and real time application


- CRUD OPERATIONS
-------------------

- to read all documents from a collection: find()
- to get single document from a collection: findOne({key: value})
- to insert single document to a collection: insertOne({key: value})
- to insert many document to a collection: insertMany([{key1: value1}, {key2: value2}])
- to display total count of document in a collection: countDocuments()
- to limit count of document read from collection: limit(number)
- to sort the documents use: sort()
    ({sorting_key: 1 for increment : -1 for decrement})
- when sorting the unsorted documents can skip using: skip()
    (unsorted_documents_number)
- $gt/ $lt/ $gte/ $lte :- query expression used to read documents
- $in/ $nin used to check documents included or not
- $expr used to compare different fields in the same document
- to update document --updateOne/updateMany()
    - $set -to assign values
    - $inc -to increment values

- $push -to add an element to an array
- to delete document use deleteOne/deleteMany
- Aggregation: used to join multiple common result

            collection_name: aggregate(*syntax)

            {
                $lookup: {

                    from: <collection to join>, ex: projects

                    localField: <field from the input document>, ex: email

                    foreignField: <field from the document of the "from" collection>, ex: userID

                    as: <output array field> ex: projects

                }
            }


----------------------------
NODE JS - SERVER / BACKEND
----------------------------


- js run time environment + js library

- features

    - extremely fast
    - Asynchronus
    - single threaded with event loop
    - Highly scalable
    - Open source

- Node js global Objects
    - it can be accessed any where from your code app without exporting / importing 
        ex: console.log(), setTimeOut()

- Node module system: a file is considered as module in node, to access data from one file it has export from there, and before using it in another file , it should be  import there.
    to import file: require('module_name/path')
    to export file: module.exports/exports (multiple: exports, single: module.exports)

- built-in modules in node

    - file system module(fs): handling file related event
    - http: used to create webserver
    - https: used to create webserver (for security htttp)
    - crypto: providing tools like hashing, encryption, etc...
    - events: works with eventEmitter
    - process: used to provide info about currently running process in node app
                - environmental variable: used to hold configuration / confidential information regarding the project. To access ev throughout the app use 'process.env.variable_name'
    - node_js packages: used to resolve common problems
        - install package via npm
        - it adds package.json, package.lock.json, and node_modules in your application

    - Back-end concepts: 
        -- client-server architecture
        -- REST API
        - CRUD OPERATIONS (CREATE (POST), READ (GET), UPDATE (PUT), DELETE (DELETE))
        - CORES (Cross origin Resource Sharing) protocol must be enable in the server



----------------------
EXPRESS { NODE JS framework }
----------------------

1. used in client sever architecture as webserver
2. steps to create server using express
    - create a folder for back-end
    - create package.json file using cmnd (npm init -y)
    - update package.json "script" value as "start" : "node index.js" instead of test
    - install packages for creating express server

        - express: npm i express
        - cors: npm i cors
        - dotenv: npm i dotenv

    - create .env file
    - create.gitignore file
    - create index.js file to define express server
    - import dotenv, cors and express
    - create server using express
        - use cors in express server
        - use json parser in express server
        - create port for server app
        - run the server at the port


3. create routes in express server
    - create a folder
        - create a js file in the folder
        - import express library
        - create an object of Router class of express: router object is capable of defining route for the app
        - export router from the file
        - import in index.js file
        - use router in pfServer
        
4. create a folder controller folder to define logic to solve client request


-----------------------------------------------
MONGOOSE - OBJECT DATA MODEL(ODM) FOR NODE JS
-----------------------------------------------

- install mongoose using: npm i mongoose
-  


JSON WEBTOKEN - JWT
---------------------

- library used for authentication in client-server request
- used to securely transfer information over the web
- generate token if login success

    - token creation using JWT: use sign(payload, password)
    

MIDDLEWARE - NODE JS
----------------------

- used to control request-response cycle in server before resolving a request server can perform any task (authorization, data format changing , etc..) using middleware
- middleware are function with 3 argument they are request, result, next

    - request: will give you client request
    - response: object will give you response from server
    - next: method used to control request

- middleware are 2 type:
     - application specific middleware: middleware will active for all client request
     - router specific middleware: middleware will active for selected client request

- verify token using jsonwebtoken(jwt): 
    - using verify(token, password) method, if token verify return response else error



MULTER - middleware for handling multipart/form-data in node js
-------------------------------------------------------------------

- install Multer using npm i multer
- multer add body & file key to the request object
- multer can be used to define storage space for upload file


- To handle multipart/formData request using multer
            - create js file
            - import multer
            - create a upload folder inside server folder for storing upload files
            - define multer storage object in js file

















































































































































                  


            

