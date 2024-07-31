import React, { useState } from 'react';

// URL validation regex pattern
const urlPattern = new RegExp('^(https?:\\/\\/)?'+ 
'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ 
'((\\d{1,3}\\.){3}\\d{1,3}))'+ 
'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
'(\\?[;&a-z\\d%_.~+=-]*)?'+ 
'(\\#[-a-z\\d_]*)?$','i'); 

export const Qrcode = () => {
  const [img, setimg] = useState('');
  const [loading, setloading] = useState(false);
  const [qrdata, setqrdata] = useState('');
  const [qrsize, setqrsize] = useState('');
  const [isValid, setIsValid] = useState(true);

  async function generateqr() {
    if (!urlPattern.test(qrdata)) {
      setIsValid(false);
      return;
    }

    setIsValid(true);
    setloading(true);

    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrdata)}`;
      setimg(url);
    } catch (error) {
      console.error('Error generating QR code:', error);
    } finally {
      setloading(false);
    }
  }



  return (
    <div className="appcontainer">
      <h1>QR CODE GENERATOR</h1>
      {img && <img src={img} alt="QR Code" />}
      {loading && <p>Please wait...</p>}

      <div>
        <label htmlFor="datainput" className="inputlabel">
          Data for QR code
        </label>
        <input
          type="text"
          id="datainput"
          placeholder="link"
          value={qrdata}
          onChange={(event) => setqrdata(event.target.value)}
          style={{ borderColor: isValid ? 'black' : 'red' }}
        />
        {!isValid && <p style={{ color: 'red' }}>Please enter a valid URL</p>}
        <label htmlFor="sizeinput" className="inputlabel">
          Image size (eg:150)
        </label>
        <input
          type="text"
          id="sizeinput"
          placeholder="size"
          value={qrsize}
          onChange={(event) => setqrsize(event.target.value)}
        />
        <button className="generate-button" onClick={generateqr}>
          Generate QR Code
        </button>
      </div>

      <p>Designed by NK</p>
    </div>
  );
};

