/* eslint-disable jsx-a11y/anchor-is-valid */
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";
import { AiOutlineSkype } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { Toast } from "primereact/toast";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Layout({ children, setIsNavbar, isNavbar }) {
  // For toggle navbar on mobile
  const [navbar, setNavbar] = useState(false);
  const toast = useRef(null);

  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    if (windowDimenion.winHeight > 768) {
      setNavbar(() => setNavbar(false));
    }

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);

  const toast_phone = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Phone number is copied to clipboard",
      life: 3000,
    });
  };
  const toast_discord = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Discord ID is copied to clipboard",
      life: 3000,
    });
  };

  function copyToClipboard(content) {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        console.log("Content copied to clipboard");
        // Optionally, display a success message or perform any other action
      })
      .catch((error) => {
        console.error("Failed to copy content: ", error);
        // Optionally, display an error message or perform any other action
      });
  }

  // bg-[#010c15]
  return (
    <div
      className="h-screen flex bg-[#010c15] items-center justify-center bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url("Effect.webp")` }}
    >
      <div className="custom-size bg-[#011637]/[85%] backdrop-blur-md rounded-lg border border-[#1E2D3D] flex justify-between flex-col overflow-hidden">
        <header className="grid grid-cols-9  text-white border-b border-[#1E2D3D] items-center">
          <div className="lg:col-span-2 neon-name col-span-11 lg:border-r border-[#1E2D3D] py-4 pl-4">
            <span className="ml-[20%] text-[20px]">Larry Potter</span>
          </div>

          {/* Navbar  Desktop*/}
          <div className="col-span-7 hidden lg:block">
            <nav className="flex justify-between items-center">
              <div>
                <button
                  className={`px-5 py-4 border-r border-r-[#1E2D3D] border-b-2 h-full transition-all hover:text-[#26BCFF] ${
                    isNavbar === "/"
                      ? "border-b-2 border-[#FEA55F] text-[#26BCFF]"
                      : "border-b-transparent"
                  }`}
                  onClick={() => {
                    setIsNavbar("/");
                  }}
                >
                  Home
                </button>
                <button
                  className={`px-5 py-4 border-r border-r-[#1E2D3D] border-b-2 h-full transition-all hover:text-[#26BCFF] ${
                    isNavbar === "about-me"
                      ? "border-b-2 border-[#FEA55F] text-[#26BCFF]"
                      : "border-b-transparent"
                  }`}
                  onClick={() => {
                    setIsNavbar("about-me");
                  }}
                >
                  About Me
                </button>
                <button
                  className={`px-5 py-4 border-r border-r-[#1E2D3D] border-b-2 h-full transition-all hover:text-[#26BCFF] ${
                    isNavbar === "projects"
                      ? "border-b-2 border-[#FEA55F] text-[#26BCFF]"
                      : "border-b-transparent"
                  }`}
                  onClick={() => {
                    setIsNavbar("projects");
                  }}
                >
                  Projects
                </button>
                <button
                  id="border-b"
                  className={`px-5 py-4 border-r border-r-[#1E2D3D] border-b-2 h-full transition-all hover:text-[#26BCFF] ${
                    isNavbar === "contact-me"
                      ? "border-b-2 border-[#FEA55F] text-[#26BCFF]"
                      : "border-b-transparent"
                  }`}
                  onClick={() => {
                    setIsNavbar("contact-me");
                  }}
                >
                  Contact
                </button>
              </div>
            </nav>
          </div>

          {/* Navbar Mobile */}
          {navbar ? (
            <button
              className="justify-self-center text-xl block lg:hidden"
              onClick={() => setNavbar((setNavbar) => !setNavbar)}
            >
              <AiOutlineClose />
            </button>
          ) : (
            <button
              className="justify-self-center text-xl block lg:hidden"
              onClick={() => setNavbar((setNavbar) => !setNavbar)}
            >
              <FiMenu />
            </button>
          )}
        </header>

        {/* Navbar mobile */}
        <AnimatePresence>
          {navbar ? (
            <motion.div
              className="flex flex-col h-full"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <div className="flex flex-col h-full text-white">
                <button
                  className={`px-5 py-4 border-b  transition-all w-full text-left ${
                    isNavbar === "/"
                      ? "border-b-2 border-[#FEA55F] text-white"
                      : "border-b-[#1E2D3D]"
                  }`}
                  onClick={() => {
                    setIsNavbar("/");
                    setNavbar(false);
                  }}
                >
                  Home
                </button>
                <button
                  className={`px-5 py-4 border-b  transition-all w-full text-left ${
                    isNavbar === "about-me"
                      ? "border-b-2 border-[#FEA55F] text-white"
                      : "border-b-[#1E2D3D]"
                  }`}
                  onClick={() => {
                    setIsNavbar("about-me");
                    setNavbar(false);
                  }}
                >
                  About Me
                </button>
                <button
                  className={`px-5 py-4 border-b  transition-all w-full text-left ${
                    isNavbar === "projects"
                      ? "border-b-2 border-[#FEA55F] text-white"
                      : "border-b-[#1E2D3D]"
                  }`}
                  onClick={() => {
                    setIsNavbar("projects");
                    setNavbar(false);
                  }}
                >
                  Projects
                </button>
                <button
                  className={`px-5 py-4 border-b  transition-all w-full text-left ${
                    isNavbar === "contact-me"
                      ? "border-b-2 border-[#FEA55F] text-white"
                      : "border-b-[#1E2D3D]"
                  }`}
                  onClick={() => {
                    setIsNavbar("contact-me");
                    setNavbar(false);
                  }}
                >
                  Contact
                </button>
              </div>
            </motion.div>
          ) : (
            <main className="self-center h-full w-full overflow-hidden">
              {children}
            </main>
          )}
        </AnimatePresence>
        <footer className="lg:grid grid-cols-12 text-[#26BCFF] border-t border-[#1E2D3D] hidden">
          <div className="col-span-3 flex items-center">
            <p className="px-4 py-1.5 truncate neon-contact">Find me in:</p>
            <a
              href="mailto:larrypotter0000@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="px-2.5 py-2.5 border-x border-[#1E2D3D] hover:text-white transition-colors"
              aria-label="Follow me on Email"
            >
              <MdEmail />
            </a>
            <a
              href="https://join.skype.com/invite/vo7cpZPP4LXh"
              target="_blank"
              rel="noreferrer"
              className="px-2.5 py-2.5 border-x border-[#1E2D3D] hover:text-white transition-colors"
              aria-label="Follow me on Skype"
            >
              <AiOutlineSkype />
            </a>
            <a
              href="https://t.me/DreamJet31"
              target="_blank"
              rel="noreferrer"
              className="px-2.5 py-2.5 border-r border-[#1E2D3D] hover:text-white transition-colors"
              aria-label="Follow me on Telegram"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="#"
              onClick={() => {
                copyToClipboard("for_the_truth");
                toast_discord();
              }}
              rel="noreferrer"
              className="px-2.5 py-2.5 border-r border-[#1E2D3D] hover:text-white transition-colors"
              aria-label="Follow me on Discord"
            >
              <FaDiscord />
            </a>
            <a
              href="#"
              onClick={() => {
                copyToClipboard("+15089520669");
                toast_phone();
              }}
              rel="noreferrer"
              className="px-2.5 py-2.5 border-r border-[#1E2D3D] hover:text-white transition-colors"
              aria-label="Follow me on Discord"
            >
              <MdCall />
            </a>
          </div>
          <div className="col-span-9 flex items-center justify-end ">
            <a
              href="https://github.com/Azure-Phoenix"
              className="flex items-center justify-center gap-1.5 pl-4 border-l border-[#1E2D3D] py-1.5 hover:text-white transition-colors pr-4"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow me on github"
            >
              <span>Larry Potter</span>
              <AiOutlineGithub className="text-xl" />
            </a>
          </div>
        </footer>
      </div>
      <Toast ref={toast} />
    </div>
  );
}
