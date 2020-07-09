import axios from 'axios';
export async function getCaption(url) {
  try {
    const response = await axios.post(
      `http://127.0.0.1:5000/video/get_caption?url=${url}`,
    );
    // const response = await axios.post(
    //   'http://127.0.0.1:5000/video/get_caption?url=https://www.bilibili.com/video/BV1H4411N7oD?p=5',
    // );
    const context = response.data.context;
    const startTime = response.data.start_time;
    const endTime = response.data.end_time;
    const count = response.data.count;
    const emphasis = response.data.emphasis;
    const result = { context, startTime, endTime, count, emphasis };
    return result;
  } catch (e) {
    alert(e);
    console.log(e);
  }
}
