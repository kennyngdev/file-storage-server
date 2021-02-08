import React from "react";
import Delete from "./Delete";

import { useConfirm } from "material-ui-confirm";

function FileList({ fileList, setFileList }) {
  const confirm = useConfirm();

  return (
    <>
      <div className="IndexRow">
        <h2 id="IndexName">Name</h2> <h2 id="IndexSize">Size</h2>{" "}
        <h2 id="IndexDate">Date</h2>
      </div>
      <ul data-testid="FileList">
        {fileList.map((file) => (
          <li key={file.name} className="FileList">
            <p className="fileName">{file.name}</p>
            <p className="fileSize">{file.size}</p>
            <p className="fileDate">{file.date}</p>
            <Delete
              fileList={fileList}
              setFileList={setFileList}
              confirm={confirm}
              file={file}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default FileList;
