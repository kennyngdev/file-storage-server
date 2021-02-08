import React, { useState, useEffect, useRef } from "react";
import FileList from "./components/FileList";
import Upload from "./components/Upload";

import { listFiles } from "./utils/index.js";

import byteSize from "byte-size";

//CSS and Material UI setups
import "./css/App.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: "theme.palette.text.secondary",
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

function App() {
  const classes = useStyles();
  const [fileList, setFileList] = useState([]);
  let fetchCancelled = useRef(false);
  //fetching list of files in server
  useEffect(() => {
    listFiles().then((data) => {
      if (!fetchCancelled.current) {
        const sorted = data.sort((a, b) => a.unix_time - b.unix_time).reverse();
        setFileList(sorted);
      }
    });
    return () => {
      fetchCancelled.current = true;
    };
  }, []);

  return (
    <div className="App">
      <header className="AppHeader">File Storage Service</header>
      <div className="Container">
        <Upload
          fileList={fileList}
          setFileList={setFileList}
          classes={classes}
          byteSize={byteSize}
        />
        {fileList ? (
          <FileList fileList={fileList} setFileList={setFileList} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
