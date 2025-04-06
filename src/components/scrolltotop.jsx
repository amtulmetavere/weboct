import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // Import the ArrowUp icon from lucide-react

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll position
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true); // Show button after scrolling 300px
    } else {
      setIsVisible(false); // Hide button when scroll is above 300px
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };

  // Adding event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        backgroundColor: "#e3b843",
        padding: " 20px",
        borderRadius: "50%",
        border: "none",
        display: isVisible ? "block" : "none", // Show button if scroll is more than 300px
        cursor: "pointer",
        fontSize: "20px",
        color: "white", // Make the arrow white
        transition: "transform 0.3s ease", // Smooth transition for scale effect
      }}
      onMouseEnter={(e) => e.target.style.transform = "scale(1.2)"} // Scale effect on hover
      onMouseLeave={(e) => e.target.style.transform = "scale(1)"} // Reset scale when hover ends
    >
      <ArrowUp size={24} color="white" /> {/* White arrow icon */}
    </button>
  );
};

export default ScrollToTopButton;
