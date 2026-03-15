"use client";

export default function ScrollTopButton({ children, className }) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button onClick={scrollTop} className={className}>
      {children}
    </button>
  );
}