import { Popover, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import { GoTriangleDown } from "react-icons/go";
import { CgFileDocument } from "react-icons/cg";
import { PiToolboxFill } from "react-icons/pi";
import { FaAddressCard, FaTools } from "react-icons/fa";
import { BsPersonVcardFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import gearData from "../data/GearData.json";

export default function AboutMe() {
  const [render, setRender] = useState("my-bio");

  function Render(value) {
    if (value === "/") {
      return <Root />;
    } else if (value === "my-bio") {
      return <MyBio closeBio={setRender} />;
    } else if (value === "bio") {
      return <Bio closeGear={setRender} />;
    } else if (value === "gear") {
      return <Gear closeGear={setRender} />;
    } else if (value === "work") {
      return <Work closeGear={setRender} />;
    }
  }

  return (
    <motion.div
      className="w-full h-full"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
    >
      <div className="lg:grid grid-cols-9 h-full flex flex-col ">
        <div className="col-span-2 grid lg:grid-cols-6">
          <div className="col-span-6 lg:border-r lg:border-b-0 border-b border-[#1E2D3D] text-[#26BCFF] gap-2.5 relative overflow-hidden">
            <PersonalInfo setRender={setRender} render={render} />
          </div>
        </div>
        <AnimatePresence initial={false}>{Render(render)}</AnimatePresence>
      </div>
    </motion.div>
  );
}

function Root() {
  return (
    <motion.div
      className="w-full h-full flex items-center justify-center text-[#26BCFF] col-span-10"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
    >
      Nothing here, click something
    </motion.div>
  );
}

function MyBio({ closeBio }) {
  return (
    <motion.div
      className="col-span-7 h-full flex  justify-center overflow-hidden flex-col"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
    >
      <div className="w-full">
        <div className="grid grid-cols-12 border-b border-[#1E2D3D]">
          <div className="lg:col-span-2 md:col-span-6 col-span-12 text-[#26BCFF] border-r border-[#1E2D3D] py-2.5 relative px-4">
            <button
              className="absolute top-1/2 -translate-y-1/2 right-4"
              onClick={() => {
                closeBio("/");
              }}
            >
              <AiOutlineClose />
            </button>
            <p className="pr-5 truncate">Personal</p>
          </div>
        </div>
      </div>
      <div className="overflow-y-auto scrollbar-thin h-full">
        <div className="flex flex-col justify-start overflow-hidden h-full text-white mx-16 gap-6 text-[20px]">
          <div className="flex items-center mt-24 ml-12">
            <span className="mr-2 neon-name">Name : </span>
            <span className="">Larry Potter</span>
          </div>
          <div className="flex items-center mt-2 ml-12">
            <span className="mr-2 neon-name">Country : </span>
            <span className="">Canada</span>
          </div>
          <div className="flex items-center mt-2 ml-12">
            <span className="mr-2 neon-name">Hobby : </span>
            <span className="">
              Coding, Game, Music, Football, Ping-Pong, Running
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Bio({ closeBio }) {
  return (
    <motion.div
      className="col-span-7 h-full flex  justify-center overflow-hidden flex-col"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
    >
      <div className="w-full">
        <div className="grid grid-cols-12 border-b border-[#1E2D3D]">
          <div className="lg:col-span-2 md:col-span-6 col-span-12 text-[#26BCFF] border-r border-[#1E2D3D] py-2.5 relative px-4">
            <button
              className="absolute top-1/2 -translate-y-1/2 right-4"
              onClick={() => {
                closeBio("/");
              }}
            >
              <AiOutlineClose />
            </button>
            <p className="pr-5 truncate">Bio</p>
          </div>
        </div>
      </div>
      <div className="overflow-y-auto scrollbar-thin h-full">
        <div className="flex flex-col justify-start overflow-hidden h-full text-white mx-16 gap-6 text-[20px] leading-[1.8]">
          <div className="flex items-center mt-20 ml-12 mr-24 flex-wrap">
            <span className="">
              I am a skilled
              <span className="neon-name">
                {" "}
                Frontend/WebGL developer (Metaverse/Game Developer, 3D Designer){" "}
              </span>
              with extensive experience in creating visually stunning
              <span className="neon-skill">
                {" "}
                2D/3D Websites, Games, Metaverse and Apps
              </span>
              .
              <br />
              <br />
              My expertise in
              <span className="neon-skill"> Web Frontend Development </span>and
              <span className="neon-skill"> 3D Modeling/Design </span>
              allow me to create immersive experiences that captivate users.
              <br />
              <br />
              In addition to my technical skills, I have a deep understanding of
              <span className="neon-skill"> WebAR/WebVR</span>, which enables me
              to create cutting-edge
              <span className="neon-skill">
                {" "}
                Augmented/Virtual Reality
              </span>{" "}
              experiences.
              <br />
              <br />I am also constantly expanding my knowledge in
              <span className="neon-skill"> Blockchain </span>
              technology, which I believe has the potential to revolutionize the
              gaming industry.
            </span>
          </div>
          <div className="flex items-center justify-center mt-6 mr-24 ml-12">
            <a
              href="https://drive.google.com/file/d/1e25DxrNBHU54pm0EevRj0_y95zYoQ3bE/view?usp=sharing"
              target="_blank"
              className="bg-transparent text-white border-white border px-3 py-2 rounded hover:bg-gray-500 hover:transition-all duration-200 ease-in-out hover:scale-105"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Work({ closeWork }) {
  return (
    <motion.div
      className="col-span-7 h-full flex  justify-center overflow-hidden flex-col"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
    >
      <div className="w-full">
        <div className="grid grid-cols-12 border-b border-[#1E2D3D]">
          <div className="lg:col-span-2 md:col-span-6 col-span-12 text-[#26BCFF] border-r border-[#1E2D3D] py-2.5 relative px-4">
            <button
              className="absolute top-1/2 -translate-y-1/2 right-4"
              onClick={() => {
                closeWork("/");
              }}
            >
              <AiOutlineClose />
            </button>
            <p className="pr-5 truncate">Skills</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start overflow-hidden h-full text-white mx-16 gap-2 text-[18px]">
        <div className="flex items-center ml-12 mt-24">
          <span className="mr-2 neon-name">Profession : </span>
          <span className="">
            Frontend/WebGL Developer | Metaverse Developer | Game Developer | 3D
            Designer
          </span>
        </div>
        <div className="flex items-center mt-2 ml-12">
          <span className="mr-2 neon-name">Skills : </span>
          <span className="">WebGL / THREE.js</span>
        </div>
        <span className="flex items-center ml-12 ml-[142px]">
          HTML5 / CSS3 / JavaScript
        </span>
        <span className="flex items-center ml-12 ml-[142px]">
          Python / Django
        </span>
        <span className="flex items-center ml-12 ml-[142px]">
          Node.js / Express.js
        </span>
        <span className="flex items-center ml-12 ml-[142px]">
          React / Angular / Vue.js
        </span>
        <span className="flex items-center ml-12 ml-[142px]">TypeScript</span>
        <span className="flex items-center ml-12 ml-[142px]">Next.js</span>
        <span className="flex items-center ml-12 ml-[142px]">Material UI</span>
        <span className="flex items-center ml-12 ml-[142px]">Tailwind CSS</span>
        <span className="flex items-center ml-12 ml-[142px]">Sass / SCSS</span>
        <span className="flex items-center ml-12 ml-[142px]">
          API Design / API Integration
        </span>
        <span className="flex items-center ml-12 ml-[142px]">
          MySQL / MongoDB / GraphQL / PostgreSQL
        </span>
        <span className="flex items-center ml-12 ml-[142px]">
          Blender / Maya
        </span>
        <span className="flex items-center ml-12 ml-[142px]">
          WebAR / WebVR
        </span>
      </div>
    </motion.div>
  );
}

function Gear({ closeGear }) {
  function Content({ title, list }) {
    return (
      <div className="mb-10">
        <h1 className="text-2xl font-medium text-[#26BCFF] mb-5 neon-name">
          {title}
        </h1>
        <div className="pl-10">
          <ul className="list-disc text-[#dddddd]/80">
            {list.map((data, index) => {
              return (
                <div key={index}>
                  <li className="font-medium text-lg text-white/90">
                    {data.item}
                  </li>
                  <li className="flex gap-3 mb-2 mt-5">
                    {data.type?.map((data, index) => {
                      return (
                        <div
                          className="text-xs neon bg-[#1b2b3a] text-white text-[16px] py-2 px-4 rounded-full flex items-center gap-1.5 w-max "
                          key={index}
                        >
                          <div className="w-1 h-1 rounded-full bg-white" />
                          <span>{data}</span>
                        </div>
                      );
                    })}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="col-span-7 h-full flex  justify-center overflow-hidden flex-col"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
    >
      <div className="w-full">
        <div className="grid grid-cols-12 border-b border-[#1E2D3D]">
          <div className="lg:col-span-2 md:col-span-6 col-span-12 text-[#26BCFF] border-r border-[#1E2D3D] py-2.5 relative px-4">
            <button
              className="absolute top-1/2 -translate-y-1/2 right-4"
              onClick={() => closeGear("/")}
            >
              <AiOutlineClose />
            </button>
            <p>Work Experiences</p>
          </div>
        </div>
      </div>
      <div className="overflow-y-auto scrollbar-thin h-full lg:p-16 md:p-8 p-4">
        {gearData.gearType.map((data, index) => {
          return <Content title={data.gear} key={index} list={data.gearList} />;
        })}
      </div>
    </motion.div>
  );
}

function PersonalInfo({ setRender, render }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenBio, setIsOpenBio] = useState(true);

  function openPopover() {
    setIsOpen(!isOpen);
  }

  function CollapseAll() {
    setIsOpenBio(false);
  }

  function openPopoverBio() {
    setIsOpenBio(!isOpenBio);
  }

  return (
    <Popover>
      <>
        <div className="relative">
          <Popover.Button
            className={`
                ${isOpen ? "text-[#26BCFF]" : "text-white"}
               flex items-center gap-2.5 border-b border-[#1E2D3D] py-2.5 px-4 w-full`}
            onClick={openPopover}
          >
            <GoTriangleDown
              className={`${isOpen ? "" : "-rotate-90"} transition-all`}
            />
            <span className="text-left pr-5 truncate">Personal Info</span>
          </Popover.Button>
          <button
            onClick={CollapseAll}
            className="absolute top-1/2 -translate-y-1/2 right-2"
          >
            {/* <VscCollapseAll /> */}
          </button>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-in duration-200"
          enterFrom="opacity-0 -translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-1"
        >
          <Popover.Panel className=" px-4 text-[#26BCFF] py-4">
            <Popover.Group className={`flex flex-col gap-1.5`}>
              <Popover>
                <>
                  <Transition
                    show={isOpenBio}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 -translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-linear duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-1"
                    className="flex flex-col gap-3"
                  >
                    <Popover.Panel
                      className={`px-4 my-1 ml-2.5 inline-flex items-center gap-2.5 transition-colors hover:text-[#26BCFF] ${
                        render === "my-bio" ? "text-[#26BCFF]" : "text-white"
                      }`}
                      as="button"
                      onClick={() => setRender("my-bio")}
                    >
                      <BsPersonVcardFill />
                      <span className="truncate">Personal</span>
                    </Popover.Panel>
                    <Popover.Panel
                      className={`px-4 my-1 ml-2.5 inline-flex items-center gap-2.5 transition-colors hover:text-[#26BCFF] ${
                        render === "bio" ? "text-[#26BCFF]" : "text-white"
                      }`}
                      as="button"
                      onClick={() => setRender("bio")}
                    >
                      <CgFileDocument />
                      <span className="truncate">Bio</span>
                    </Popover.Panel>
                    <Popover.Panel
                      className={`px-4 my-1 ml-2.5 inline-flex items-center gap-2.5 transition-colors hover:text-[#26BCFF] ${
                        render === "work" ? "text-[#26BCFF]" : "text-white"
                      }`}
                      as="button"
                      onClick={() => setRender("work")}
                    >
                      <FaTools />
                      <span className="truncate">Skills</span>
                    </Popover.Panel>
                    <Popover.Panel
                      className={`px-4 my-1 ml-2.5 inline-flex items-center gap-2.5 transition-colors hover:text-[#26BCFF] ${
                        render === "gear" ? "text-[#26BCFF]" : "text-white"
                      }`}
                      as="button"
                      onClick={() => setRender("gear")}
                    >
                      <PiToolboxFill />
                      <span className="truncate">Experiences</span>
                    </Popover.Panel>
                  </Transition>
                </>
              </Popover>
            </Popover.Group>
          </Popover.Panel>
        </Transition>
      </>
    </Popover>
  );
}
