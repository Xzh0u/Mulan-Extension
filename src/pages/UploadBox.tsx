import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { videoContext } from '@src/common/context/VideoProvider';
import React, { useContext } from 'react';
const { Dragger } = Upload;

const UploadBox: React.FC = () => {
  const { dispatch, file } = useContext(videoContext);
  const props = {
    name: 'file',
    multiple: true,
    action: 'http://127.0.0.1:5000/',
    method: 'post' as const,
    onChange(info: any) {
      const { status } = info.file;
      // console.log(window.URL.createObjectURL(info.file.originFileObj));
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
        return;
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
        return;
      }
      // if (status !== 'uploading') {
      //   console.log(info.file, info.fileList);
      //   return;
      // }
      debugger;
      if (file) {
        return;
      }
      dispatch({
        type: 'setFile',
        payload: { file: info.file.originFileObj },
      });
    },
  };

  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">Support for a single or bulk upload.</p>
    </Dragger>
  );
};

export default UploadBox;
