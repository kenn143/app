import { useState } from "react";

const images = [
  { id: 1, name: "mountain.jpg", src: "https://picsum.photos/id/1018/800/600" },
  { id: 2, name: "forest.jpg", src: "https://picsum.photos/id/1015/800/600" },
  { id: 3, name: "beach.jpg", src: "https://picsum.photos/id/1016/800/600" },
  { id: 4, name: "city.jpg", src: "https://picsum.photos/id/1020/800/600" },
  { id: 5, name: "road.jpg", src: "https://picsum.photos/id/1035/800/600" }
];

export default function App() {
  const [search, setSearch] = useState("");
  const [view, setView] = useState("grid");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = images.filter((img) =>
    img.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleView = () => {
    setView((prev) => (prev === "grid" ? "list" : "grid"));
  };

  return (
    <div style={{ padding: 20, maxWidth: 900, margin: "auto" }}>
      <h2>Public Image Search</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by filename..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: 8, width: "100%", marginBottom: 15 }}
      />

      {/* Toggle */}
      <div style={{ marginBottom: 20 }}>
        <label className="toggle">
          <input
            type="checkbox"
            checked={view === "list"}
            onChange={toggleView}
          />
          <span className="slider"></span>
          <span className="label-text">
            {view === "grid" ? "Grid View" : "List View"}
          </span>
        </label>
      </div>

      {/* Images */}
      <div className={view}>
        {filteredImages.map((img) => (
          <div
            key={img.id}
            className="card"
            onClick={() => setSelectedImage(img)}
          >
            <img src={img.src} alt={img.name} />
            <p>{img.name}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.name}
            />
            <p>{selectedImage.name}</p>
          </div>
        </div>
      )}
    </div>
  );
}
