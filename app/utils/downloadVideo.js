import axios from 'axios';
export async function download(url) {
  try {
    debugger;
    const response = await axios.post(
      `http://127.0.0.1:5000/video/download_video?url=${url}`,
    );
    return true;
  } catch (e) {
    alert(e);
    console.log(e);
  }
}
