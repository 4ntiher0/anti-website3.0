import React, { useState } from "react";
import "./photos.css";

const images = [
  { src: "/bags.jpg", title: "Bagheera 'Safari in the Jungle'", date: "Sept. 27, 2023" },
  { src: "/eclipse.jpg", title: "Eclipse through Leafs", date: "Oct. 14, 2023" },
  { src: "/audi02.jpg", title: "Side Profile", date: "" },
  { src: "/audi01.jpg", title: "Side Profile", date: "" },
];

function Photos() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div className="section">
      <h2 className="gallery-title">📸 Photos</h2>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-card"
            onClick={() => setSelectedImage(image)}
          >
            <img src={image.src} alt={image.title} className="gallery-img" />
            <div className="gallery-info">
              <p className="gallery-title">{image.title}</p>
              {image.date && <span className="gallery-date">{image.date}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Enlarged */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div
            className="modal-body"
            onClick={(e) => e.stopPropagation()}
            onMouseMove={handleMouseMove}
          >
            <button className="modal-close" onClick={() => setSelectedImage(null)}>
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="modal-img zoomable"
              style={{
                transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
              }}
            />
            <div className="modal-caption">
              <h3>{selectedImage.title}</h3>
              {selectedImage.date && <p>{selectedImage.date}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Photos;
