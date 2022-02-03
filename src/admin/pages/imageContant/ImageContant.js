import React, { useState, useEffect } from 'react';
import Message from '../../components/message/Message';
import Progress from '../../components/progress/Progress';
import useAxiosFetch  from './../../../hooks/useAxiosFetch'
import axios from 'axios';
import './imageContant.css'
const ImageContant = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [posts, setPosts] = useState([])
  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:8080/api/files');

  const onChange = e => {
    setFile(e.target.files[0]);
      setFilename(e.target.files[0].name);
  };
  useEffect(() => {
    setPosts(data);
  }, [data])
  console.log(posts)
  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    console.log(file)

    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const res = await axios.post('http://elkwtherps-001-site3.itempurl.com/api/uploadimages', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-access-token': user.accessToken
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        }
      });
      
      // Clear percentage
      setTimeout(() => setUploadPercentage(0), 10000);

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage('File Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
      setUploadPercentage(0)
    }
  };

  return (
    <main className='imageContant'>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div className='custom-file mb-4'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={onChange}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label>
        </div>

        <Progress percentage={uploadPercentage} />

        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
      {uploadedFile ? (
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <h3 className='text-center'>{uploadedFile.fileName}</h3>
            <img style={{ width: '100%' }} src={"http://elkwtherps-001-site3.itempurl.com/api/images/"+uploadedFile.fileName} alt='' />
          </div>
        </div>
      ) : null}
    </main>
  );
};

export default ImageContant;