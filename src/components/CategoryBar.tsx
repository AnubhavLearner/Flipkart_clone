
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { id: 1, name: "Top Offers", icon: "🔥" },
  { id: 2, name: "Mobiles & Tablets", icon: "📱" },
  { id: 3, name: "Electronics", icon: "💻" },
  { id: 4, name: "TVs & Appliances", icon: "📺" },
  { id: 5, name: "Fashion", icon: "👕" },
  { id: 6, name: "Beauty", icon: "✨" },
  { id: 7, name: "Home & Kitchen", icon: "🏠" },
  { id: 8, name: "Furniture", icon: "🪑" },
  { id: 9, name: "Flights", icon: "✈️" },
  { id: 10, name: "Grocery", icon: "🛒" },
  { id: 11, name: "Toys", icon: "🧸" },
  { id: 12, name: "Books", icon: "📚" },
];

const CategoryBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const container = document.getElementById("category-container");
    if (container) {
      setContainerWidth(container.clientWidth);
      setMaxScroll(container.scrollWidth - container.clientWidth);
      setShowControls(container.scrollWidth > container.clientWidth);

      const handleResize = () => {
        setContainerWidth(container.clientWidth);
        setMaxScroll(container.scrollWidth - container.clientWidth);
        setShowControls(container.scrollWidth > container.clientWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const scrollLeft = () => {
    const container = document.getElementById("category-container");
    if (container) {
      const newPosition = Math.max(scrollPosition - containerWidth, 0);
      container.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    }
  };

  const scrollRight = () => {
    const container = document.getElementById("category-container");
    if (container) {
      const newPosition = Math.min(scrollPosition + containerWidth, maxScroll);
      container.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollPosition(e.currentTarget.scrollLeft);
  };

  return (
    <div className="relative bg-white shadow-sm">
      {showControls && scrollPosition > 0 && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md z-10 p-1"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      <div
        id="category-container"
        className="flex overflow-x-auto scrollbar-hide py-3 px-4 scroll-smooth"
        onScroll={handleScroll}
      >
        {categories.map((category) => (
          <a
            key={category.id}
            href="#"
            className="flex flex-col items-center min-w-[80px] px-2 text-flipkart-text-primary"
          >
            <span className="text-2xl mb-1">{category.icon}</span>
            <span className="text-xs text-center font-medium">{category.name}</span>
          </a>
        ))}
      </div>

      {showControls && scrollPosition < maxScroll && (
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md z-10 p-1"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>
      )}
    </div>
  );
};

export default CategoryBar;
