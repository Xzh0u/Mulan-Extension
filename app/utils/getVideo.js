import axios from 'axios';

function base64toBlob(base64, type) {
  // 将base64转为Unicode规则编码
  const bstr = atob(base64, type);

  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n); // 转换编码后才可以使用charCodeAt 找到Unicode编码
  }
  return new Blob([u8arr], {
    type,
  });
}

export async function getImg(url) {
  try {
    const response = await axios.post(
      `http://127.0.0.1:5000/video/get_image?url=${url}`,
    );
    // const response = await axios.post(
    //   'http://127.0.0.1:5000/video/get_image?url=https://www.bilibili.com/video/BV1H4411N7oD?p=5',
    // );
    const img64 = response.data.image.imgs; //base64 format
    const times = response.data.image.times;
    const imgSrcs = [];
    for (let i = 0, len = img64.length; i < len; i++) {
      const res = base64toBlob(img64[i], 'image/jpeg'); //blob format

      const imgSrc = window.URL.createObjectURL(res); //url
      imgSrcs.push([imgSrc, times[i]]);
    }
    return imgSrcs;
  } catch (e) {
    alert(e);
    console.log(e);
  }
}
