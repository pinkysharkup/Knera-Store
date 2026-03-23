"use client";

import Image from "next/image";
import { Instagram, Facebook, Twitter } from "lucide-react";

const team = [
  {
    name: "Michael Huber",
    role: "Craftsman",
    img: "/images/p6-team-img-1.jpg",
  },
  {
    name: "Anne Smith",
    role: "CEO/Artisan",
    img: "/images/p6-team-img-2.jpg",
  },
  {
    name: "Tuulia Hakola",
    role: "Mentor",
    img: "/images/p6-team-img-3.jpg",
  },
  {
    name: "John Carter",
    role: "Designer",
    img: "/images/p6-team-img-4-768x1006.jpg",
  },
  {
    name: "Emily Stone",
    role: "Artist",
    img: "/images/p6-team-img-5-768x1006.jpg",
  },
  {
    name: "Liam Brown",
    role: "Developer",
    img: "/images/p6-team-img-6-768x1006.jpg",
  },
  {
    name: "Sophia Lee",
    role: "Manager",
    img: "/images/p6-team-img-7-768x1006.jpg",
  },
  {
    name: "Noah Wilson",
    role: "Marketer",
    img: "/images/p6-team-img-8-768x1006.jpg",
  },
  {
    name: "Olivia White",
    role: "Photographer",
    img: "/images/p6-team-img-9-768x1006.jpg",
  },
];

export default function TeamGrid() {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-[#f5f3ef]">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-12">

        {team.map((member, index) => (
          <div key={index} className="flex flex-col">

            {/* IMAGE */}
            <div className="relative w-full aspect-[3/4] overflow-hidden">
           
            <Image
            src={member.img}
            alt={member.name}
            fill
            className="object-cover object-top"
            />
            </div>
            {/* INFO */}
            <div className="mt-5 flex items-center justify-between">

              {/* NAME + ROLE */}
              <div>
                <h3 className="text-[18px] font-medium text-[#2b2b2b]">
                  {member.name}
                </h3>
                <p className="text-[13px] text-[#6a6a6a] mt-1">
                  {member.role}
                </p>
              </div>

              {/* SOCIAL */}
              <div className="flex items-center gap-3 text-[#2b2b2b]">
                <Twitter size={14} />
                <Instagram size={14} />
                <Facebook size={14} />
              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}