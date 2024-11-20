import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const goBackHome = () => {
    navigate("/"); // Redirects to the home page
  };

  return (
    <div className="not-found">
      <h2>Sorry....!</h2>
      <p>The page you requested is not found. Please try again later.</p>
      <button onClick={goBackHome} className="back-home-btn">
        Back to Home
      </button>
    </div>
  );
};