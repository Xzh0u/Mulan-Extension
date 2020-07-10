import axios from 'axios';
export async function getVideo() {
  try {
    const response = await axios.get(`http://127.0.0.1:5000/video/video_feed`);
    // const response = await axios.post(
    //   'http://127.0.0.1:5000/video/get_caption?url=https://www.bilibili.com/video/BV1H4411N7oD?p=5',
    // );

    const { context, start_time: startTime, end_time: endTime } = response.data;

    return { context, startTime, endTime };
  } catch (e) {
    alert(e);
    console.log(e);
    throw e;
  }
}
