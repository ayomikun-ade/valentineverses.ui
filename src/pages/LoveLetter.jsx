import { useState } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "motion/react";

const LoveLetter = () => {
  const [senderName, setSenderName] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [generatedLoveLetter, setGeneratedLoveLetter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const req = {
      sender_name: senderName,
      receiver_name: receiverName,
      additional_info: additionalInfo,
    };

    try {
      const response = await axios.post(
        "https://valentineverses-be.vercel.app/generate-love-letter",
        req
      );
      setGeneratedLoveLetter(response.data.love_letter);
      toast.success("Letter generation done, scroll down.", {
        autoClose: 2500,
        theme: "dark",
      });
    } catch (err) {
      setError(err.message);
      toast.error(error, { autoClose: 3000, theme: "dark" });
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadImage = async () => {
    toast.info("Download in progress...", { autoClose: 3000, theme: "dark" });
    const element = document.getElementById("letter");
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");
    link.href = data;
    link.download = "love-letter.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getLineStyle = (index, lines) => {
    if (index === 0) {
      return "italic text-pink-600 font-medium mb-2 font-logo text-3xl"; // Opening salutation style
    } else if (index === lines.length - 1 || index === lines.length - 2) {
      return "font-semibold text-right"; // Closing salutation style
    } else {
      return "text-base mb-2"; // Letter body style
    }
  };

  const handleCopyToClipboard = async () => {
    try {
      const textToCopy = generatedLoveLetter.join("\n"); // Join lines with newline characters
      await navigator.clipboard.writeText(textToCopy);
      toast.success("Letter copied to clipboard!", {
        autoClose: 3000,
        theme: "dark",
      });
    } catch (err) {
      console.error("Failed to copy: ", err);
      toast.error("Failed to copy letter to clipboard.", {
        autoClose: 3000,
        theme: "dark",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="relative font-soft bg-[url('/src/assets/letters.jpg')] bg-no-repeat bg-right-top bg-cover bg-fixed md:bg-center min-h-screen w-full flex flex-col justify-center items-center">
        <motion.form
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          onSubmit={handleSubmit}
          className="bg-pink-200 bg-opacity-50 backdrop-blur overflow-auto mt-24 flex flex-col w-[93%] max-w-[600px] md:w-full h-[500px] px-6 md:px-10 py-8 justify-evenly items-center shadow-lg rounded-lg"
        >
          <h2 className="font-hard text-pink-600 text-3xl text-center font-bold">
            Love Letter Generator
          </h2>
          <div className="flex flex-col gap-2 mb-2 w-full">
            <label className="font-medium" htmlFor="sender">
              Senders Name:
            </label>
            <input
              className="rounded-lg px-3 py-2 outline-none border focus:border-pink-300 focus:shadow-md focus:shadow-pink-400/60 transition duration-300 hover:ease-in-out"
              type="text"
              name="sender"
              id="sender"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 mb-2 w-full">
            <label className="font-medium" htmlFor="Receiver">
              Receivers Name:
            </label>
            <input
              className="rounded-lg px-3 py-2 outline-none border focus:border-pink-300 focus:shadow-md focus:shadow-pink-400/60 transition duration-300 hover:ease-in-out"
              type="text"
              name="receiver"
              id="receiver"
              value={receiverName}
              onChange={(e) => setReceiverName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 mb-2 w-full">
            <label className="font-medium" htmlFor="addition">
              Additional Information:
              <span className="text-neutral-600 font-light font-soft">
                (optional)
              </span>
            </label>
            <input
              className="rounded-lg px-3 py-2 outline-none border focus:border-pink-300 focus:shadow-md focus:shadow-pink-400/60 transition duration-300 hover:ease-in-out"
              type="text"
              name="addition"
              id="addition"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className={`bg-pink-600 rounded-md text-white px-3 py-2 hover:bg-pink-700 transition duration-300 hover:ease-in-out ${
              loading ? `cursor-not-allowed opacity-50` : ``
            }`}
            disabled={loading}
          >
            {loading ? (
              <p className="flex">
                <img
                  src="/loading.svg"
                  alt="loading"
                  className="animate-spin"
                />{" "}
                Generating...
              </p>
            ) : (
              "Generate Letter"
            )}
          </button>
        </motion.form>

        {generatedLoveLetter.length > 0 && (
          <div className="flex flex-col items-center animate-fade my-16 w-[93%] max-w-[600px] md:w-full">
            <div
              id="letter"
              className="bg-pink-200 bg-opacity-95 px-6 md:px-10 py-8 "
            >
              {generatedLoveLetter.map((line, index) => (
                <p
                  key={index}
                  className={getLineStyle(index, generatedLoveLetter)}
                >
                  {line}
                </p>
              ))}
            </div>
            <div className="flex flex-col text-center font-medium md:flex-row gap-2 mt-4">
              <button
                className="text-black bg-white border-2 border-white hover:bg-transparent hover:text-white px-3 py-2 rounded-md transition duration-300 hover:ease-in-out"
                onClick={handleDownloadImage}
              >
                {/* <img src="/download.svg" alt="download" /> */}
                Download Image
              </button>
              <button
                className="flex bg-pink-700 text-white hover:bg-transparent hover:border-white border-2 border-transparent px-3 py-2 rounded-md transition duration-300 hover:ease-in-out"
                onClick={handleCopyToClipboard}
              >
                <img src="/copy.svg" alt="copy" />
                Copy to Clipboard
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default LoveLetter;
