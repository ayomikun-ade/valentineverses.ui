import axios from "axios";
import html2canvas from "html2canvas";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "motion/react";

const PoemGen = () => {
  const [requests, setRequests] = useState("");
  const [generatedPoem, setGeneratedPoem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://valentineverses-be.vercel.app/generate-poem",
        {
          requests,
        }
      );
      setGeneratedPoem(response.data.poem);
      toast.success("Poem generation done, scroll down.", {
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
    const element = document.getElementById("poem");
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");
    link.href = data;
    link.download = "poem.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyToClipboard = async () => {
    try {
      const textToCopy = generatedPoem.join("\n"); // Join lines with newline characters
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
      <section className="relative font-soft bg-[url('/src/assets/letters.jpg')] bg-no-repeat bg-left-bottom bg-cover bg-fixed md:bg-center min-h-screen w-full flex flex-col justify-center items-center">
        <motion.form
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          onSubmit={handleSubmit}
          className="bg-pink-200 bg-opacity-50 backdrop-blur overflow-auto mt-24 flex flex-col w-[93%] max-w-[600px] md:w-full min-h-[500px] px-6 md:px-10 py-8 justify-evenly items-center shadow-lg rounded-lg"
        >
          <h2 className="font-hard text-pink-700 text-3xl text-center font-bold">
            Poem Generator
          </h2>
          <div className="flex flex-col gap-2 mb-2 w-full">
            <label className="font-medium" htmlFor="requests">
              Any Requests{" "}
              <span className="text-neutral-600 font-light font-soft">
                (optional)
              </span>
            </label>
            <textarea
              className="rounded-lg px-3 py-2 outline-none border focus:border-pink-500 focus:shadow-pink-600/60 md:focus:border-pink-300  focus:shadow-md md:focus:shadow-pink-400/60 transition duration-300 hover:ease-in-out"
              type="text"
              name="requests"
              id="requests"
              rows={4}
              value={requests}
              onChange={(e) => setRequests(e.target.value)}
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
              "Generate Poem"
            )}
          </button>
        </motion.form>
        {generatedPoem.length > 0 && (
          <div className="flex flex-col items-center animate-fade my-16 w-[93%] max-w-[600px] md:w-full">
            <div
              id="poem"
              className="bg-pink-200 bg-opacity-95 px-6 md:px-10 py-8 "
            >
              {generatedPoem.map((line, index) => (
                <p key={index} className="mb-1">
                  {line || <React.Fragment>&nbsp;</React.Fragment>}
                </p>
              ))}
              <p className="text-right text-2xl mt-2 font-semibold">~ ❤️</p>
            </div>
            <div className="flex flex-col text-center font-medium md:flex-row gap-2 mt-4">
              <button
                className="text-black bg-white border-2 border-white hover:bg-transparent hover:text-white px-3 py-2 rounded-md transition duration-300 hover:ease-in-out"
                onClick={handleDownloadImage}
              >
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

export default PoemGen;
