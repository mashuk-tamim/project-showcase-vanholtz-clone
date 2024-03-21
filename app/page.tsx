"use client";
import Image from "next/image";
import { inter, russo, changa, ultra } from "@/app/font/font";
import { motion } from "framer-motion";
import horse from "@/public/img/horse.avif";
import { useReducer, useState } from "react";
import Svg from "./component/Svg";
import Link from "next/link";
export default function Home() {
	const [isClicked, setIsClicked] = useState(false);
	const [clickedIndex, setClickedIndex] = useState(-1);
	const handleClick = (idx: number) => {
		setClickedIndex(idx);
		setIsClicked(true);
	};
	return (
		<main className="bg-[#d2f75a] bg-screen">
			<div className="max-w-[1500px] min-h-[100vh] mx-auto relative">
				<div className="text-start absolute top-10 left-10 items-center gap-5">
					<div className="">
						<Svg></Svg>
					</div>
					<div>
						<p
							className={`${ultra.className} text-4xl font-black text-black`}
						>
							Projects
						</p>
					</div>
				</div>
				<motion.div
					className={`${ultra.className} text-8xl font-black text-black text-end tracking-wider space-y-5 py-12 px-24`}
					style={{
						transform: "perspective(3000px) translateZ(0px)",

						transformOrigin: "right",
						transformStyle: "preserve-3d",
					}}
				>
					{textArray.map((text, idx) => (
						<motion.div
							key={idx}
							initial={{
								y: -2000,
								rotateY: -90,
								transformOrigin: "right",
								transformStyle: "preserve-3d",
							}}
							animate={{
								y: 0,
								rotateY:
									clickedIndex === idx && isClicked ? 0 : -35,
								transition: {
									duration: 1,
                                    delay: idx * -0.05,
                                    rotateY: {
                                        delay: 0.3,
                                        duration: 1
                                    }
								},
							}}
							whileHover={{
								rotateY: -10,
								transition: {
									duration: 0.3,
								},
							}}
						>
							<Link href={text.link}>
								<motion.button
									className="hover:text-stroke hover:text-[#d2f75a] transition-all duration-500 ease-in-out uppercase  text-end"
									onClick={() => handleClick(idx)}
								>
									{text.p1} {text.p2}
								</motion.button>
							</Link>
						</motion.div>
					))}
				</motion.div>
				<div
					className={`${ultra.className} text-6xl font-black text-start space-y-0 fixed bottom-5 px-10 mb-10 text-stroke text-[#d2f75a]`}
				>
					<p>Mas</p>
					<p>huk</p>
				</div>
				<div
					className={`${inter.className} font-medium text-base flex gap-3 fixed bottom-0 px-10 mb-10 text-black`}
				>
					<p className="">
						Associate Software Engineer,{" "}
						<span className="uppercase"> Uqidev</span>
					</p>
				</div>
			</div>
		</main>
	);
}

const textArray = [
	{
		p1: "Content",
		p2: "Flow",
		link: "https://content-floww-mirror.vercel.app/",
	},
	{
		p1: "FeyApp",
		p2: "",
		link: "https://feyapp-clone.vercel.app/",
	},
	{
		p1: "Card",
		p2: "Parallax",
		link: "https://card-parallax-scroll.vercel.app/",
	},
	{
		p1: "Gallery",
		p2: "Parallax",
		link: "https://gallery-scroll-parallax.vercel.app/",
	},
	{
		p1: "mouse",
		p2: "hover mask",
		link: "https://mouse-hover-mask.vercel.app/",
	},
	{
		p1: "Text",
		p2: "Reveal",
		link: "https://word-reveal-on-scroll-zs64.vercel.app/",
	},
];
