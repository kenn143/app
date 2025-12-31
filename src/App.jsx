import { useState } from "react";
import "./style.css";

const images = [
  { id: 1, name: "Alera Car Detailing Brea", src: "/images/Alera Car Detailing Brea.png" },
  { id: 2, name: "Apex Car Detailing Westminster", src: "/images/Apex Car Detailing Westminster.png" },
  { id: 3, name: "Auto Glow Car Detailing", src: "/images/Auto Glow Car Detailing.png" },
  { id: 4, name: "Aventa Car Detailing Anaheim", src: "/images/Aventa Car Detailing Anaheim.png" },
  { id: 5, name: "Bonnie Car Detailing Buena Park", src: "/images/Bonnie Car Detailing Buena Park.jpg" },
  { id: 6, name: "Bright Shine Car Detailing", src: "/images/Bright Shine Car Detailing.png" },
  { id: 7, name: "Clevra Car Detailing Costa Mesa", src: "/images/Clevra Car Detailing Costa Mesa.png" },
  { id: 8, name: "Davids Car Detailing Lake Forest", src: "/images/Davids Car Detailing Lake Forest.jpg" },
  { id: 9, name: "Fresh Look Car Detailing", src: "/images/Fresh Look Car Detailing.png" },
  { id: 10, name: "Hard Coat Car Detailing", src: "/images/Hard Coat Car Detailing.png" },
  { id: 11, name: "Hard Hitters Car Detailing", src: "/images/Hard Hitters Car Detailing.png" },
  { id: 12, name: "High Detail Car Detailing", src: "/images/High Detail Car Detailing.png" }
];

export default function App() {
  const [search, setSearch] = useState("");
  const [view, setView] = useState("grid");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = images.filter((img) =>
    img.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <div className="toolbar">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{width:"40%"}}
        />

        <div className="view-toggle">
          <span>{view === "grid" ? "Grid View" : "List View"}</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={view === "list"}
              onChange={() =>
                setView(view === "grid" ? "list" : "grid")
              }
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      <div className="count">
        Total items: {filteredImages.length}
      </div>
      <div className={`gallery ${view}`}>
        {filteredImages.map((img) => (
          <div
            key={img.id}
            className="asset-card"
            onClick={() => setSelectedImage(img)}
          >
            <img src={img.src} alt={img.name} />
            <div className="asset-title">{img.name}</div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close">✕</button>
            <img src={selectedImage.src} alt={selectedImage.name} />
            <h3>{selectedImage.name}</h3>
          </div>
        </div>
      )}
    </div>
  );
}
