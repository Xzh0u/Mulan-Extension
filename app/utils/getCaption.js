import axios from 'axios';
export async function getCaption() {
  try {
    const response = await axios.get(
      'http://127.0.0.1:5000/caption/get_caption',
    );
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
