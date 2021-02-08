import axios from "axios";

export async function listFiles() {
  try {
    const res = await axios.get("/api/files");
    return res.data;
  } catch {
    return "fetch error!";
  }
}

export async function deleteFile(fileName) {
  const res = await axios.delete("/api/files/" + fileName);
  return res.data;
}

export async function uploadFile(file) {
  let formData = new FormData();
  formData.append("file", file);
  const res = await axios.post("/api/files", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
}
