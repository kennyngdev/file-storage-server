import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { deleteFile } from "../utils/index.js";

function Delete({ fileList, setFileList, confirm, file }) {
  function deleteHandler(selectedFile) {
    const text = `${selectedFile.name} will be deleted forever!`;
    confirm({ description: text }).then(() => {
      deleteFile(selectedFile.name).then((res) => console.log(res));
      setFileList(fileList.filter((file) => file !== selectedFile));
    });
  }
  return (
    <DeleteForeverIcon
      className="DeleteButton"
      onClick={() => deleteHandler(file)}
    />
  );
}

export default Delete;
