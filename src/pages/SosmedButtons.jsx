import React, { useState, useEffect } from "react";

function SosmedButtons() {
  const [sosmeds, setSosmeds] = useState([]);

  useEffect(() => {
    // Replace this with your API call or data fetching logic
    const dummyData = [
      { name: "Instagram", link: "https://www.instagram.com/your_instagram" },
      { name: "📔Tiktok", link: "https://www.tiktok.com/@your_tiktok" },
      { name: "🤖Github", link: "https://github.com/ryzkyam" },
      { name: "📚Email", link: "mailto:your_email@example.com" },
      { name: "🧑‍💻LinkedIn", link: "https://www.linkedin.com/in/your_linkedin" },
    ];
    setSosmeds(dummyData);
  }, []);

  return (
    <div className="mt-4 flex flex-wrap md:flex-row">
      {sosmeds.map((sosmed) => (
        <a
          key={sosmed.name} // Use a unique identifier instead of index
          href={sosmed.link}
          target="_blank"
          rel="noopener noreferrer"
          className="neu m-2 bg-[#8dd8dc] hover:bg-purple-400 text-lg px-4 py-2 rounded transition-colors duration-200"
          aria-label={`Visit my ${sosmed.name}`} // Accessibility improvement
        >
          {sosmed.name}
        </a>
      ))}
    </div>
  );
}

export default SosmedButtons;