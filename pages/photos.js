import React, { useState } from "react";

const images = [
  {
    src: "/bags.jpg",
    title: "Bagheera 'Safari in the Jungle'",
    date: "Sept. 27, 2023",
  },
  {
    src: "/eclipse.jpg",
    title: "Eclipse through Leafs",
    date: "Oct. 14, 2023",
  },
  {
    src: "/audi02.jpg" ,
    title: "Side Profile",
    date: "",
  },
  {
    src: "/audi01.jpg" ,
    title: "Side Profile",
    date: "",
  },
  // Add more image objects here if needed
];

function Photos() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="section">
      <h2>Photos:</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <div className="image-container" onClick={() => openModal(image.src)}>
              <img
                src={image.src}
                alt={image.title}
                width="300"
                height="200" /* Set desired dimensions */
              />
            </div>
            <div className="image-info">
              <h2>{image.title}</h2>
              <h3>Date: {image.date}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-content" src={selectedImage} alt="Full Size" />
        </div>
      )}
    </div>
  );
}

export default Photos;
