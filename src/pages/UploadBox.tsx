import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import React from 'react';
const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'http://127.0.0.1:5000/',
  onChange(info: any) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const UploadBox: React.FC = () => {
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
