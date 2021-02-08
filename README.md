# File Storage Server

This is a file storage server service in Python, Nginx and React, all wrapped up in Docker. This App is created by Kenny Ng.

## User Manual

If you have `Docker` installed, you can simply run `docker-compose up -d --build` in this directory to run all parts(containers) of the app. After the app is running, You can open the main application from http://localhost:8080 or access the api server from http://localhost:5000 or the React application from http://localhost:3000.

After building for the first time, simply run `docker-compose up -d` to start the app.

### Web Client

From http://localhost:8080, you can access the web client of the App.
This Web Client make calls to the API server to acheive these functionalities:

1. <b>List files</b><br/>
   Upon starting the client, it will automatically fetch the list of files in the server and a list of all files
   in the storage folder will be displayed.

2. <b>Upload a file</b><br/>
   Click the "Upload File" button on the site, and you can choose a file you want to upload to the server.
   After choosing the file, click the confirm button and your file will be uploaded to the server.

   - This server only allows uploading files of these formats:
     `'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif', 'epub', 'doc', 'docs', 'xls', 'xlsx', 'ppt', 'pptx', 'xml'`</br>
     If you want to change this ruleset, go to './api/server.py' to change the allowed extensions.

3. <b>Delete a file</b><br/>
   You can delete a file within the storage system by clicking the delete button. By clicking the confirm button, you will be able to delete a file.

Test is also written to check if the client is behaving normally. run `yarn test` after running `yarn` in the client folder to start the tests.

### API Server and CLI

From http://localhost:5000/api/files, you can see the list of all files stored in this server.
If you use a API tool like `Postman`, you will be able to delete a file by sending a DELETE request to http://localhost:5000/api/files/<filename>.

To use the CLI, run `docker-compose exec api sh` to open a terminal of the api server container.
In the terminal, the following commands are available:

1. `python cli.py list_files` </br>
   This command will list all the files in the server.
2. `python cli.py upload_file <file-path>` </br>
   This command will upload a file to the server according to the file specified by the inputed file path.
3. `python cli.py delete_file <file-name>` </br>
   This command will delete a file in the server, if such file matches the inputed name. Note that the file-name parameter also includes the file format. An example would be: `example.txt` not `example`.

## Tech Stack

Back-end: Python, Flask, Nginx </br>
Front-end: React, Material UI </br>
Platform: Docker

## Future Features

1.  Sorting by name/size/date functionality
2.  Search function for web client
3.  More tests in react and tests for api server
4.  Add Japanese file name support

## Contact

This app is written by Kenny Ng (contact@kennyng.dev).
