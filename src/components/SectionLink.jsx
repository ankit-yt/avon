"use client";

import Link from "next/link";

export default function SectionLink({ href, targetId, children, ...props }) {
  const handleClick = () => {
    sessionStorage.setItem("avon-scroll-target", targetId);
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
