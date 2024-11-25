import React, { useState } from 'react';
import './Gallery.css'
const Gallery = () => {
  const imageUrls = [
    "https://images.pixieset.com/69200554/30e30eb4b68721893913646cc4fe259e-xlarge.JPG",
    "https://images.pixieset.com/69200554/4a1c4e039f208393c7c0d88f8af24895-xlarge.JPG",
    "https://images.pixieset.com/69200554/e9db48d9cdaf7d8450b32e9de3d82906-xlarge.JPG",
    "https://images.pixieset.com/69200554/51bcb0fcf31c26d1de88e10a573e6a83-xlarge.JPG",
    "https://images.pixieset.com/69200554/c22a1b32c3dd6d5f66ea2c0a0f62a5ac-xlarge.JPG",
    "https://images.pixieset.com/69200554/b499c3329ce46fe7eedc046ae0b731c4-xlarge.JPG",
    "https://images.pixieset.com/69200554/275ffe0c80840e0284ae54cdf46fcdb6-xlarge.JPG",
    "https://images.pixieset.com/69200554/d469b396102f694316a2b602b28caa17-xlarge.JPG",
    "https://images.pixieset.com/69200554/2509acb44a00fc9f455ecf6bf8d94fb1-xlarge.JPG",
    "https://images.pixieset.com/69200554/575536925380dd2ee5a5483ca0e3e324-xlarge.JPG",
    "https://images.pixieset.com/69200554/63e52b861544cd8c3ed12e13d3c8e9a9-xlarge.JPG",
    "https://images.pixieset.com/69200554/ae9edcc9a80f40144111b570d15e9e5f-xlarge.JPG",
    "https://images.pixieset.com/69200554/4fc064110a438c4999f9fc3c6ac01d7e-xlarge.JPG",
    "https://images.pixieset.com/69200554/0d0d4d8a7880b9c1db1f0a07b25b2de0-xlarge.JPG",
    "https://images.pixieset.com/69200554/fef1f3f79fcf10a1a119b4ed5396587b-xlarge.JPG",
    "https://images.pixieset.com/69200554/6e9e2cd174ec4059bcf2d1f73ff6251f-xlarge.JPG",
    "https://images.pixieset.com/69200554/8f6d5ad8bff649559be9fa98972b0e92-xlarge.JPG",
    "https://images.pixieset.com/69200554/9ec59038598a9eb8c6b6f49731e13e32-xlarge.JPG",
    "https://images.pixieset.com/69200554/883490a48de24766d3e4d7e7c24e63d9-xlarge.JPG",
    "https://images.pixieset.com/69200554/22de55fc79efb10b2f39d3c74146c438-xlarge.JPG",
    "https://images.pixieset.com/69200554/eb0c6c7202139f07ff1c089318c29034-xlarge.JPG",
    "https://images.pixieset.com/69200554/234dbfa4b2493fbb9c6e16f69f7da488-xlarge.JPG",
    "https://images.pixieset.com/69200554/f08018e41b82a8e1aef134e4b57e6a12-xlarge.JPG",
    "https://images.pixieset.com/69200554/89fd76d5efc1fdd2067e9b47e405d9ca-xlarge.JPG",
    "https://images.pixieset.com/69200554/ed93cfc6bcaaf58790a607f2eeb7544e-xlarge.JPG",
    "https://images.pixieset.com/69200554/063da8960e5ca5106eb2f1edfb2013bc-xlarge.JPG",
    "https://images.pixieset.com/69200554/04220ebc3fe3dbda11ad78dff4317a24-xlarge.JPG",
    "https://images.pixieset.com/69200554/548ae55c23f0a003c3db98290c799081-xlarge.JPG",
    "https://images.pixieset.com/69200554/547b415bfa5a4fe568b5be5b1010b7ea-xlarge.JPG",
    "https://images.pixieset.com/69200554/745ac4a2eaf8cfb1bc6c55de7e0099c4-xlarge.JPG",
    "https://images.pixieset.com/69200554/233c410bb45745a1b98b06ecda60e12d-xlarge.JPG",
    "https://images.pixieset.com/69200554/5628c4363e6fe0c3072f4577d3bbf63b-xlarge.JPG",
    "https://images.pixieset.com/69200554/7d51e10a8e8fa87d4a13248e46282d34-xlarge.JPG",
    "https://images.pixieset.com/69200554/da629f76db7c9e93a57cbb55c3509681-xlarge.JPG",
    "https://images.pixieset.com/69200554/219d0b8f301bc911e8a56ab1fe9ab950-xlarge.JPG"
    // Add more images as necessary...
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const goToPreviousImage = () => {
    setSelectedImageIndex(
      selectedImageIndex === 0 ? imageUrls.length - 1 : selectedImageIndex - 1
    );
  };

  const goToNextImage = () => {
    setSelectedImageIndex(
      selectedImageIndex === imageUrls.length - 1 ? 0 : selectedImageIndex + 1
    );
  };

  return (
    <div className="gallery">
      <div className="image-grid">
        {imageUrls.map((url, index) => (
          <div className="image-item" key={index} onClick={() => openModal(index)}>
            <img src={url} alt={`Gallery ${index}`} />
          </div>
        ))}
      </div>

      {/* Modal (Lightbox) */}
      {selectedImageIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="prev-btn" onClick={goToPreviousImage}>❮</button>
            <img
              src={imageUrls[selectedImageIndex]}
              alt={`Selected ${selectedImageIndex}`}
              className="modal-image"
            />
            <button className="next-btn" onClick={goToNextImage}>❯</button>
            <button className="close-btn" onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;


