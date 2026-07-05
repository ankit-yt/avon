'use client'
import React, { useState } from "react";
import Image from "next/image";
import { HiOutlineArrowRight, HiOutlinePlay } from "react-icons/hi";

import img1 from "@/assets/images/Blog/Blog-Images-1.webp";
import img2 from "@/assets/images/Blog/Blog-Images-2.webp";
import img3 from "@/assets/images/Blog/Blog-Images-3.webp";
import img4 from "@/assets/images/Blog/Blog-Images-4.webp";
import img5 from "@/assets/images/Blog/Blog-Images-5.webp";
import img6 from "@/assets/images/Blog/Blog-Images-6.webp";
import img7 from "@/assets/images/Blog/Blog-Images-7.webp";
import img8 from "@/assets/images/Blog/Blog-Images-8.webp";

const VIDEO_SRC = "/videos/8.mp4";

const getCurrentDate = () => {
  const today = new Date();
  return today.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

const date = getCurrentDate();

const POSTS = [
  {
    image: img4,
    alt: "Latest Blog",
    author: "Avon Express",
    date,
    title: "Do not hire packers and movers through a broker website for packing and moving services.",
    excerpt:
      "We do not recommend hiring packers and movers through broker websites, as they often list fraudulent vendors out of greed for money, which can subject you to significant financial and mental distress.",
  },
  {
    image: img3,
    alt: "Fraud Help",
    author: "Avon Express",
    date,
    title: "What should you do if you fall victim to fraud?",
    excerpt:
      "Keep the original booking receipt, bill, photographs, and proof of payment with you. Call the police—dial 112. File a complaint with the National Consumer Helpline at 1915.",
  },
  {
    image: img2,
    alt: "Packing Advice",
    author: "Avon Express",
    date,
    title: "Do not pack the items yourself.",
    excerpt:
      "When you avail of the services of packers and movers, we do not advise you to pack your belongings yourself.",
  },
  {
    image: img5,
    alt: "Wooden Crate",
    author: "Avon Express",
    date,
    title: "Wooden Crate Available – Professional Packing",
    excerpt:
      "We have an in-house carpentry workshop for manufacturing customized wooden crates. Wooden crates are used to house fragile items that require additional protection. The crates are customized based on the specific dimensions of the goods; the items are packed and then placed inside the crates.",
  },
  {
    image: img1,
    alt: "Sell Items",
    author: "Avon Express",
    date,
    title: "We help you sell your old things.",
    excerpt: "We have some resources that can help you with this.",
  },
  {
    image: img6,
    alt: "Restricted Items",
    author: "Avon Express",
    date,
    title: "What items are not transported during shifting?",
    excerpt:
      "Items such as flammable substances, pets, gases, liquids, etc., will not be permitted to be loaded onto the transport vehicle.",
  },
  {
    image: img7,
    alt: "Services Availability",
    author: "Avon Express",
    date,
    title: "What would happen if you couldn't find an electrician, a plumber, or a carpenter?",
    excerpt:
      "We are not responsible for electrical, carpentry, or plumbing work. If required, and subject to staff availability, we will provide these services for an additional fee.",
  },
  {
    image: img8,
    alt: "Damage Policy",
    author: "Avon Express",
    date,
    title: "What happens if the goods get damaged during insurance?",
    excerpt:
      "Avon Express Packers and Movers adopt all necessary safety measures to protect your belongings from any kind of damage. Nevertheless, in the event of any unforeseen accident, we ensure the prompt settlement of claims with the insurance company.",
  },
];

// ─── BLOG CARD ────────────────────────────────────────────────
function BlogCard({ post }) {
  return (
    <div className="group flex flex-col bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-orange-100 transition-all duration-300 border border-slate-200">

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={post.image}
          alt={post.alt}
          fill
         
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 space-y-3">
        <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.4em]">
          {post.author} &nbsp;—&nbsp; {post.date}
        </p>
        <h3 className="text-sm font-extrabold text-slate-900 leading-snug tracking-tighter">
          {post.title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed font-medium flex-1">
          {post.excerpt}
        </p>
        <button className="group/btn self-start flex items-center gap-2 text-orange-600 text-[10px] font-black uppercase tracking-[0.4em] pt-1 hover:gap-3 transition-all duration-300">
          Read More
          <HiOutlineArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

// ─── MAIN EXPORT ──────────────────────────────────────────────
function Blog() {
  return (
    <section
      id="blog"
      className="relative py-6 md:py-5 bg-[#FAFAF8] overflow-hidden border-t border-slate-200"
    >

      {/* ── Warm blob ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-125 h-125 rounded-full bg-orange-200/30 blur-[120px]"
      />
        <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 w-125 h-125 rounded-full bg-orange-200/30 blur-[120px]"
      />

      <div className="relative z-10 max-w-330 mx-auto px-5 sm:px-8 lg:px-14">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4 flex items-center gap-2">
              <span className="w-10 h-px bg-orange-600" />
              Resources
              <span className="w-10 h-px bg-orange-600" />
            </h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter leading-tight">
              Latest
              <span className="text-orange-500"> Blog</span>
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-6 xl:grid-rows-2">

          {/* Portrait video — col 1, row 1 */}
          <div className="xl:row-span-1 xl:col-span-1 md:col-span-1 h-full">
            <div className="group h-full flex flex-col bg-slate-900 rounded-[20px] overflow-hidden shadow-2xl border border-slate-200 relative min-h-64">
              <video
                autoPlay
                muted
                controls
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                src={VIDEO_SRC}
              />
            </div>
          </div>

          {/* 8 blog cards */}
          {POSTS.map((post, i) => (
            <BlogCard key={i} post={post} />
          ))}

        </div>
      </div>
    </section>
  );
}

export default Blog;