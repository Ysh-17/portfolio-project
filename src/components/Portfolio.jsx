import { useState } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  // Expanded Mock Database with 20 entries
  const portfolioData = [
    { id: 1, name: "Project Alpha", category: "Web Development", status: "Completed", date: "2024-01-15" },
    { id: 2, name: "Finance Pro", category: "Finance", status: "In Progress", date: "2024-02-10" },
    { id: 3, name: "E-Commerce Hub", category: "E-Commerce", status: "Pending", date: "2024-03-05" },
    { id: 4, name: "Health Tracker", category: "Health", status: "Completed", date: "2024-04-12" },
    { id: 5, name: "AI Assistant", category: "AI/ML", status: "In Progress", date: "2024-05-01" },
    { id: 6, name: "Crypto Analyzer", category: "Finance", status: "Completed", date: "2023-12-20" },
    { id: 7, name: "Smart Home", category: "IoT", status: "Pending", date: "2023-11-30" },
    { id: 8, name: "Weather App", category: "Web Development", status: "Completed", date: "2023-10-15" },
    { id: 9, name: "Social Media Tool", category: "Marketing", status: "In Progress", date: "2023-09-18" },
    { id: 10, name: "Language Translator", category: "AI/ML", status: "Completed", date: "2023-08-25" },
    { id: 11, name: "E-Learning Platform", category: "Education", status: "Pending", date: "2023-07-05" },
    { id: 12, name: "Cybersecurity Scanner", category: "Security", status: "Completed", date: "2023-06-22" },
    { id: 13, name: "Automated Reports", category: "Finance", status: "Completed", date: "2023-05-15" },
    { id: 14, name: "Fitness Tracker", category: "Health", status: "In Progress", date: "2023-04-10" },
    { id: 15, name: "Event Planner", category: "Lifestyle", status: "Completed", date: "2023-03-28" },
    { id: 16, name: "Chatbot Assistant", category: "AI/ML", status: "Pending", date: "2023-02-14" },
    { id: 17, name: "Stock Market Predictor", category: "Finance", status: "Completed", date: "2023-01-30" },
    { id: 18, name: "Travel Planner", category: "Tourism", status: "Completed", date: "2022-12-20" },
    { id: 19, name: "Job Portal", category: "Recruitment", status: "In Progress", date: "2022-11-15" },
    { id: 20, name: "Smart Traffic System", category: "IoT", status: "Completed", date: "2022-10-05" },
  ];

  // State for search, filters, and modal
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All Filters");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [documentName, setDocumentName] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  // Open & Close Modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setDocumentName("");
    setDocumentType("");
    setSelectedFile(null);
  };

  // Handle File Selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Handle File Upload
  const handleUpload = () => {
    if (!documentName || !documentType || !selectedFile) {
      alert("Please fill all fields before uploading.");
      return;
    }
    alert(`File "${documentName}" uploaded successfully!`);
    closeModal();
  };

  // Filtered data based on search
  const filteredData = portfolioData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="portfolio-container">
      <h2>Portfolio Database</h2>

      {/* Search, Filters, and Upload Button */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="filter-dropdown">
          <option value="All Filters">All Filters</option>
          <option value="ID">ID</option>
          <option value="Name">Name</option>
          <option value="Category">Category</option>
          <option value="Status">Status</option>
          <option value="Date Created">Date Created</option>
        </select>
        <button onClick={openModal} className="upload-button">Upload File</button>
      </div>

      {/* Table Display */}
      <table className="portfolio-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Status</th>
            <th>Date Created</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.status}</td>
                <td>{item.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No results found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Sliding Upload Modal */}
      <div className={`slide-modal ${isModalOpen ? "open" : ""}`}>
        <div className="modal-content">
          <h3>Upload Document</h3>
          <label>Document Name:</label>
          <input
            type="text"
            value={documentName}
            onChange={(e) => setDocumentName(e.target.value)}
            placeholder="Enter document name"
          />

          <label>Document Type:</label>
          <select value={documentType} onChange={(e) => setDocumentType(e.target.value)}>
            <option value="">Select Type</option>
            <option value="PDF">PDF</option>
            <option value="Word">Word Document</option>
            <option value="Excel">Excel Sheet</option>
            <option value="Image">Image</option>
          </select>

          <label>Select File:</label>
          <input type="file" onChange={handleFileChange} />

          <div className="modal-buttons">
            <button onClick={handleUpload}>Upload</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      </div>

      {/* Background Overlay */}
      {isModalOpen && <div className="modal-overlay" onClick={closeModal}></div>}
    </div>
  );
};

export default Portfolio;
