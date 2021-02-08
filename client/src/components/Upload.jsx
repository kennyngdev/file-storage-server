import React, { useRef } from "react";
import { uploadFile } from "../utils/index.js";

import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

function Upload({ fileList, setFileList, classes, byteSize }) {
  const fileRef = useRef(null);

  function uploadHandler(e) {
    const file = e.target.files[0];
    console.log(file);
    if (file.name)
      uploadFile(file).then((res) => {
        console.log(res);
        if (res === "success!") {
          const newFile = {
            name: file.name,
            date: "Just Now",
            size: `${byteSize(file.size)}`.replace(/\s+/g, ""),
          };
          console.log(newFile);
          const updatedList = [newFile, ...fileList];
          setFileList(updatedList);
        }
      });
  }

  return (
    <div className="UploadButton">
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
        onClick={() => {
          fileRef.current.click();
        }}
      >
        Upload
      </Button>{" "}
      <input
        onChange={uploadHandler}
        type="file"
        name={"file"}
        className="hide"
        ref={fileRef}
        data-testid="hidden-input"
      ></input>
    </div>
  );
}

export default Upload;
