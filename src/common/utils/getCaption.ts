import axios from 'axios';
export async function getCaption(url: string) {
  try {
    const response = await axios.get<{
      context: string[];
      start_time: number[];
      end_time: number[];
    }>(`http://127.0.0.1:5000/video/get_caption?url=${url}`);
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
