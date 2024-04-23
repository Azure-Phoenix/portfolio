import { Dialog, Transition } from "@headlessui/react";
import { AiFillHtml5 } from "react-icons/ai";
import { BsFiles } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import { MdTerrain } from "react-icons/md";
import { GrReactjs } from "react-icons/gr";
import { TbWorldWww, TbStar } from "react-icons/tb";
import { IoGameControllerOutline, IoAppsOutline } from "react-icons/io5";
import {
  SiGreensock,
  SiTailwindcss,
  SiBlender,
  SiNextdotjs,
  SiThreedotjs,
} from "react-icons/si";
import { motion } from "framer-motion";
import { Fragment, useState } from "react";
import datas from "../data/ProjectData.json";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [group1, setGroup1] = useState(true);
  const [group2, setGroup2] = useState(true);
  return (
    <motion.div
      className="h-full relative"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
    >
      {/* <div className="grid grid-cols-9">
        <div className="lg:col-span-2 col-span-0 border-b border-r border-[#1E2D3D]"></div>
        <div className="lg:col-span-7 md:col-span-9 col-span-full border-b border-[#1E2D3D] flex items-center justify-center text-[#26BCFF] row-start-1 md:row-start-auto py-2.5 lg-py-0">
          {filter} Projects
        </div>
      </div> */}

      <div className="grid grid-cols-9 h-full ">
        <div className="lg:col-span-2 col-span-full md:col-span-3 md:border-r border-[#1E2D3D] px-0 md:px-5 md:py-4 py-0 flex flex-col gap-2.5 overflow-hidden">
          <button
            className="md:col-span-2 lg:col-span-2 col-span-full border-b border-[#1E2D3D] text-[#26BCFF] flex gap-2.5 items-center py-2.5"
            onClick={() => setGroup1(!group1)}
          >
            <GoTriangleDown
              className={`${group1 ? "" : "-rotate-90"} transition-all`}
            />
            <span>Tech Stack</span>
          </button>
          <Transition
            show={group1}
            enter="transition ease-in duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-out duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
            className="flex flex-col gap-2 overflow-hidden absolute md:static z-10 top-[6rem] md:top-0 py-2.5 md:py-0 px-4 md:px-0 w-full md:w-auto left-0 bg-[#011627] md:bg-transparent ml-5"
          >
            <div className="flex items-center gap-6 ">
              <button
                className={`flex items-center gap-2.5 cursor-pointer transition-colors hover:text-[#26BCFF] w-full text-left ${
                  filter === "All" ? "text-[#26BCFF]" : "text-white"
                }`}
                onClick={() => setFilter("All")}
              >
                <BsFiles />
                <span>All Projects</span>
              </button>
            </div>
            <div className="flex items-center gap-6">
              <button
                className={`flex items-center gap-2.5 cursor-pointer transition-colors hover:text-[#26BCFF] w-full ${
                  filter === "Three.js" ? "text-[#26BCFF]" : "text-white"
                }`}
                onClick={() => setFilter("Three.js")}
              >
                <SiThreedotjs />
                <span>Three.js</span>
              </button>
            </div>
            <div className="flex items-center gap-6 ">
              <button
                className={`flex items-center gap-2.5 cursor-pointer transition-colors hover:text-[#26BCFF] w-full ${
                  filter === "React" ? "text-[#26BCFF]" : "text-white"
                }`}
                onClick={() => setFilter("React")}
              >
                <GrReactjs />
                <span>React</span>
              </button>
            </div>
            <div className="flex items-center gap-6">
              <button
                className={`flex items-center gap-2.5 cursor-pointer transition-colors hover:text-[#26BCFF] w-full ${
                  filter === "NextJS" ? "text-[#26BCFF]" : "text-white"
                }`}
                onClick={() => setFilter("NextJS")}
              >
                <SiNextdotjs />
                <span>NextJS</span>
              </button>
            </div>
            <div className="flex items-center gap-6">
              <button
                className={`flex items-center gap-2.5 cursor-pointer transition-colors hover:text-[#26BCFF] w-full ${
                  filter === "Tailwind" ? "text-[#26BCFF]" : "text-white"
                }`}
                onClick={() => setFilter("Tailwind")}
              >
                <SiTailwindcss />
                <span>TailwindCSS</span>
              </button>
            </div>
            <div className="flex items-center gap-6 ">
              <button
                className={`flex items-center gap-2.5 cursor-pointer transition-colors hover:text-[#26BCFF] w-full ${
                  filter === "HTML" ? "text-[#26BCFF]" : "text-white"
                }`}
                onClick={() => setFilter("HTML")}
              >
                <AiFillHtml5 />
                <span>HTML5</span>
              </button>
            </div>
            <div className="flex items-center gap-6">
              <button
                className={`flex items-center gap-2.5 cursor-pointer transition-colors hover:text-[#26BCFF] w-full ${
                  filter === "GSAP" ? "text-[#26BCFF]" : "text-white"
                }`}
                onClick={() => setFilter("GSAP")}
              >
                <SiGreensock />
                <span>GSAP</span>
              </button>
            </div>
            <div className="flex items-center gap-6">
              <button
                className={`flex items-center gap-2.5 cursor-pointer transition-colors hover:text-[#26BCFF] w-full ${
                  filter === "Blender" ? "text-[#26BCFF]" : "text-white"
                }`}
                onClick={() => setFilter("Blender")}
              >
                <SiBlender />
                <span>Blender</span>
              </button>
            </div>
          </Transition>
          <button
            className="md:col-span-2 lg:col-span-2 col-span-full border-b border-[#1E2D3D] text-[#26BCFF] flex gap-2.5 items-center py-2.5"
            onClick={() => setGroup2(!group2)}
          >
            <GoTriangleDown
              className={`${group2 ? "" : "-rotate-90"} transition-all`}
            />
            <span>Category</span>
          </button>
          <Transition
            show={group2}
            enter="transition ease-in duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-out duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
            className="flex flex-col gap-2 overflow-hidden absolute md:static z-10 top-[6rem] md:top-0 py-2.5 md:py-0 px-4 md:px-0 w-full md:w-auto left-0 bg-[#011627] md:bg-transparent ml-5"
          >
            <div className="flex items-center gap-6 ">
              <button
                className={`flex items-center gap-2.5 cursor-pointer transition-colors hover:text-[#26BCFF] w-full text-left ${
                  filter === "All" ? "text-[#26BCFF]" : "text-white"
                }`}
                onClick={() => setFilter("All")}
              >
                <BsFiles />
                <span>All Projects</span>
              </button>
            </div>
            <div className="flex items-center gap-6 ">
              <button
                className={`flex items-center gap-2.5 cursor-pointer transition-colors hover:text-[#26BCFF] w-full ${
                  filter === "Website" ? "text-[#26BCFF]" : "text-white"
                }`}
                onClick={() => setFilter("Website")}
              >
                <TbWorldWww />
                <span>Website</span>
              </button>
            </div>
            <div className="flex items-center gap-6 ">
              <button
                className={`flex items-center gap-2.5 cursor-pointer transition-colors hover:text-[#26BCFF] w-full ${
                  filter === "Game" ? "text-[#26BCFF]" : "text-white"
                }`}
                onClick={() => setFilter("Game")}
              >
                <IoGameControllerOutline />
                <span>Game</span>
              </button>
            </div>
            <div className="flex items-center gap-6 ">
              <button
                className={`flex items-center gap-2.5 cursor-pointer transition-colors hover:text-[#26BCFF] w-full ${
                  filter === "Metaverse" ? "text-[#26BCFF]" : "text-white"
                }`}
                onClick={() => setFilter("Metaverse")}
              >
                <GrReactjs />
                <span>Metaverse</span>
              </button>
            </div>
            <div className="flex items-center gap-6">
              <button
                className={`flex items-center gap-2.5 cursor-pointer transition-colors hover:text-[#26BCFF] w-full ${
                  filter === "Application" ? "text-[#26BCFF]" : "text-white"
                }`}
                onClick={() => setFilter("Application")}
              >
                <IoAppsOutline />
                <span>Application</span>
              </button>
            </div>
            <div className="flex items-center gap-6">
              <button
                className={`flex items-center gap-2.5 cursor-pointer transition-colors hover:text-[#26BCFF] w-full ${
                  filter === "3D" ? "text-[#26BCFF]" : "text-white"
                }`}
                onClick={() => setFilter("3D")}
              >
                <MdTerrain />
                <span>3D Design</span>
              </button>
            </div>
            <div className="flex items-center gap-6">
              <button
                className={`flex items-center gap-2.5 cursor-pointer transition-colors hover:text-[#26BCFF] w-full ${
                  filter === "Other" ? "text-[#26BCFF]" : "text-white"
                }`}
                onClick={() => setFilter("Other")}
              >
                <TbStar />
                <span>Other</span>
              </button>
            </div>
          </Transition>
        </div>

        <div className="lg:col-span-7 md:col-span-9 col-span-full flex items-start justify-center lg:p-16 md:p-8 p-4 overflow-y-auto scrollbar-none">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 h-max w-full">
            {filter === "All" ? (
              datas.map((data, index) => {
                return <Card data={data} key={index} />;
              })
            ) : datas.filter((tech) => tech.technology.includes(filter))
                .length === 0 ? (
              <div className="w-full flex items-center justify-center col-span-4 h-full text-[#26BCFF]">
                Not yet, comeback again later!
              </div>
            ) : (
              datas
                .filter((tech) => tech.technology.includes(filter))
                .map((data, index) => {
                  return <Card data={data} key={index} />;
                })
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const Card = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        className="rounded-2xl border border-[#1E2D3D] bg-[#001221]/50 flex items-center flex-col overflow-hidden hover:shadow-sm hover:shadow-white transition-colors h-[400px]"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="overflow-hidden h-[80%] w-full relative ">
          <img
            src={data.image}
            alt={data.title}
            className="object-cover h-full w-full"
          />

          <div>
            <div className="absolute top-5 right-5 text-lg rounded-[2px] flex gap-2.5">
              <div className="bg-[#86E1F9] p-1 rounded-md"></div>
            </div>
          </div>
        </div>

        <div className="py-6 px-8 text-white w-full flex flex-col justify-center h-[30%]">
          <div>
            <h6 className="mb-3 text-[#88DDFF] justify-center flex">
              {data.title}
            </h6>
          </div>
          <div className="flex items-center justify-center">
            <a
              href={data.link}
              target="_blank"
              className="bg-[#1b2b3a] text-[#26BCFF] px-[12px] py-[8px] rounded-[7px] hover:bg-[#686868] hover:transition-[0.3] hover:scale-[1.07]"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </motion.div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-20"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 backdrop-blur-0"
            enterTo="opacity-100 backdrop-blur-sm"
            leave="ease-in duration-300"
            leaveFrom="opacity-100 backdrop-blur-sm"
            leaveTo="opacity-0 backdrop-blur-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-40" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-[#1d2a3a] text-left align-middle shadow-xl transition-all">
                  <div className="h-96">
                    <img
                      src={data.image}
                      alt={data.title}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <article className="p-5 ">
                    <Dialog.Title
                      as="h3"
                      className="text-xl font-semibold leading-6 mb-2.5 text-[#26BCFF]"
                    >
                      {data.title}
                    </Dialog.Title>
                    <div className="flex items-center justify-center">
                      <a
                        href={data.link}
                        target="_blank"
                        className="text-[#26BCFF]/80 bg-[#575757] px-[12px] py-[8px] rounded-[7px] hover:bg-[#686868] hover:transition-[0.3] hover:scale-[1.07]"
                        rel="noreferrer"
                      >
                        View Project
                      </a>
                    </div>
                  </article>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
