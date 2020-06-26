import axios from 'axios';
export async function getCaption() {
  try {
    const response = await axios.get(
      'http://127.0.0.1:5000/caption/get_caption',
    );
    const context = response.data.context;
    alert(context);
  } catch (e) {
    alert(e);
    console.log(e);
  }
}
