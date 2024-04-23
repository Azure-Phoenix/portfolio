import emailjs from "@emailjs/browser"
import { Popover, Transition } from "@headlessui/react"
import { AiOutlineClose } from "react-icons/ai"
import { AiOutlineSkype } from "react-icons/ai"
import { FaTelegramPlane } from "react-icons/fa"
import { FaDiscord } from "react-icons/fa"
import { GoTriangleDown } from "react-icons/go"
import { GrLinkedinOption } from "react-icons/gr"
import { MdCall } from "react-icons/md"
import { MdEmail } from "react-icons/md"
import { Toast } from "primereact/toast"
import { motion } from "framer-motion"
import { useRef, useState } from "react"

export default function ContactMe() {
  const d = new Date()
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

  const formRef = useRef()
  const [loader, setLoader] = useState(false)
  const [showNotif, setShowNotif] = useState(false)
  const [formData, setFormData] = useState({
    form_name: "",
    message: "",
    email: "",
  })
  const form = {
    to_name: "Larry Potter",
    from_name: formData.form_name,
    message: formData.message,
    reply_to: formData.email,
  }
  const sendEmail = async (e) => {
    e.preventDefault()
    setLoader(true)
    await emailjs
      .send("service_dvhsvqx", "template_p3qmgye", form, "miNJwFihClia7sA4F")
      .then((result) => {
        console.log(result.text)
        setLoader(false)
        setShowNotif(true)
        setTimeout(() => setShowNotif(false), 3000)
        formRef.current.reset()
      })
  }

  return (
    <motion.div
      className="w-full h-full"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
    >
      <div className="grid grid-cols-9 md:h-full">
        <div className="lg:col-span-2 md:col-span-4 col-span-full">
          <div className="border-r  border-[#1E2D3D] text-[#26BCFF] gap-2.5 relative overflow-hidden h-full">
            <Contacts />
            <FindMeAlso />
          </div>
        </div>
        <div className="lg:col-span-7 md:col-span-8 col-span-full ">
          <div className="w-full h-[95%]">
            <div className="grid grid-cols-12 border-b border-t md:border-t-0 border-[#1E2D3D]">
              <div className="lg:col-span-2 md:col-span-4 col-span-5 text-[#26BCFF] border-r border-[#1E2D3D] py-2.5 relative px-4">
                <p className="truncate pr-5">Message Me</p>
              </div>
            </div>
            <div className="flex items-center justify-items-center overflow-hidden h-full">
              <div className="lg:w-3/5 w-full flex mt-48 justify-center lg:border-r border-[#1E2D3D] overflow-y-auto scrollbar-thin h-full">
                <form
                  onSubmit={sendEmail}
                  ref={formRef}
                  className="text-white md:w-[80%] w-[90%] flex flex-col gap-6 relative"
                >
                  <div className="flex flex-col gap-2.5">
                    <label htmlFor="user_name">Name :</label>
                    <input
                      name="user_name"
                      type="text"
                      placeholder="Your Name"
                      className="bg-[#011221] rounded-lg border-[#1E2D3D] focus:ring-[#607B96] focus:border-[#607B96]/30 text-[#26BCFF] placeholder:text-[#465E77]"
                      autoComplete="off"
                      required
                      onChange={(e) => {
                        setFormData({ ...formData, form_name: e.target.value })
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="user_email">Email :</label>
                    <input
                      name="user_email"
                      type="email"
                      placeholder="Your Email"
                      className="bg-[#011221] rounded-lg border-[#1E2D3D]  focus:ring-[#607B96] focus:border-[#607B96]/30 text-[#26BCFF] placeholder:text-[#465E77]"
                      autoComplete="off"
                      required
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value })
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message">Message :</label>
                    <textarea
                      name="message"
                      rows="4"
                      className="bg-[#011221] rounded-lg border-[#1E2D3D]  focus:ring-[#607B96] focus:border-[#607B96]/30 text-[#26BCFF] placeholder:text-[#465E77]"
                      placeholder="Your Message"
                      autoComplete="off"
                      required
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value })
                      }}
                    />
                  </div>
                  <button
                    className={`text-[#26BCFF] py-[10px] px-[14px] rounded-lg bg-[#1C2B3A] w-max  hover:shadow-sm hover:shadow-[#607B96] transition-all flex items-end gap-2`}
                    type="submit"
                    value="send"
                  >
                    <span>Send Email</span>
                    <div className={`flex gap-1 mb-1 ${loader ? "block" : "hidden"}`}>
                      <span className="w-[5px] h-[5px] rounded-full bg-white animate-bounce"></span>
                      <span className="w-[5px] h-[5px] rounded-full bg-white animate-bounce"></span>
                      <span className="w-[5px] h-[5px] rounded-full bg-white animate-bounce"></span>
                    </div>
                  </button>
                  {showNotif ? (
                    <p className="animate-pulse absolute -bottom-10">
                      Your email have been sent!
                    </p>
                  ) : null}
                </form>
              </div>

              <div className="hidden lg:block w-1/2 h-full mt-48 container">
                <div className="flex flex-col items-center justify-start overflow-hidden h-full text-white text-center mx-16 mt-16 gap-6 text-[18px]">
                  <span className="text-[25px] neon-name mt-[15%]">
                    Welcome to my Portfolio!
                  </span>
                  <span className="neon">
                    I warmly welcome the chance to connect with you.
                  </span>
                  <span className="neon">Please don't hesitate to reach out.</span>
                  <span className="neon">
                    I would be delighted to explore possibilities and discuss how we can
                    work together to craft something truly wonderful.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
function Contacts() {
  const toast = useRef(null)
  const toast_phone = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Phone number is copied to clipboard",
      life: 3000,
    })
  }
  const toast_discord = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Discord ID is copied to clipboard",
      life: 3000,
    })
  }
  const [isOpen, setIsOpen] = useState(true)
  function openPopover() {
    setIsOpen(!isOpen)
  }

  function copyToClipboard(content) {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        console.log("Content copied to clipboard")
        // Optionally, display a success message or perform any other action
      })
      .catch((error) => {
        console.error("Failed to copy content: ", error)
        // Optionally, display an error message or perform any other action
      })
  }

  return (
    <Popover>
      <>
        <Popover.Button
          className={`
                ${isOpen ? "text-[#26BCFF] " : "text-[#26BCFF]/50 border-b-0"}
               flex items-center gap-2.5  border-b border-[#1E2D3D] py-2.5 px-4 w-full`}
          onClick={openPopover}
        >
          <GoTriangleDown className={`${isOpen ? "" : "-rotate-90"} transition-all`} />
          <span>Contacts</span>
        </Popover.Button>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 -translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-linear duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-1"
        >
          <Popover.Panel className="p-4 w-full flex flex-col gap-4 ml-5 px-6.5">
            <a
              href="mailto:larrypotter0000@gmail.com"
              className="text-white hover:text-[#26BCFF] inline-flex items-center gap-2.5 transition-colors"
              target="_blank"
            >
              <MdEmail />
              <span>larrypotter0000@gmail.com</span>
            </a>
            <a
              href="https://join.skype.com/invite/skac2yk72fjX"
              className="text-white hover:text-[#26BCFF] inline-flex items-center gap-2.5 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineSkype className="text-[19px]" />
              <span>Azure Phoenix</span>
            </a>
            <a
              href="https://t.me/AzurePhoenix000"
              className="text-white hover:text-[#26BCFF] inline-flex items-center gap-2.5 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegramPlane className="text-[19px]" />
              <span>Azure Phoenix</span>
            </a>
            <a
              href="#"
              className="text-white hover:text-[#26BCFF] inline-flex items-center gap-2.5 transition-colors"
              onClick={() => {
                copyToClipboard("nightmare14226")
                toast_discord()
              }}
              rel="noreferrer"
            >
              <FaDiscord className="text-[19px]" />
              <span>Nightmare</span>
            </a>
            <a
              href="#"
              onClick={() => {
                copyToClipboard("+15089520669")
                toast_phone()
              }}
              className="text-white hover:text-[#26BCFF] inline-flex items-center gap-2.5 transition-colors"
              rel="noreferrer"
            >
              <MdCall />
              <span>+1 (508) 952 0669</span>
            </a>
          </Popover.Panel>
        </Transition>
      </>
      <Toast ref={toast} />
    </Popover>
  )
}
function FindMeAlso() {
  const [isOpen, setIsOpen] = useState(true)

  function openModal() {
    setIsOpen(!isOpen)
  }

  return <Popover></Popover>
}
