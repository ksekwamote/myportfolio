import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import avatar from "../assets/avatar.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen text-center mt-4 flex flex-col justify-center "
    >
      <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 relative overflow-hidden md:h-96 md:w-96 mb-2">
        <img src={avatar} layout="fill" objectFit="cover" />
      </div>
      <h1 className="text-3xl md:text-5xl font-medium text-teal-500">
        KODER 101
      </h1>
      <h3 className="text-xl md:text-2xl">Youtuber </h3>
      <p className="text-md py-1 text-gray-800 md:text-xl">
        Enthusiastic and motivated self-learning about information technology.
        Focused on cloud computing, devsecops, and web development. Now I am
        looking for more experience in my field.{" "}
      </p>
      <div className="text-5xl py-4 flex justify-center gap-16 text-gray-600">
        <AiFillLinkedin />
        <AiFillGithub />
        <AiFillInstagram />
      </div>
    </section>
  );
}
