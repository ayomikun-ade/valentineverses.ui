import { useState } from "react";
import Copyright from "../components/Copyright";
import Header from "../components/Header";

const LoveLetter = () => {
  const [senderName, setSenderName] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ senderName, receiverName, additionalInfo });
  };
  return (
    <>
      <section className="relative font-soft bg-[url('/src/assets/letters.jpg')] bg-no-repeat bg-right-top bg-cover md:bg-center min-h-screen w-full flex flex-col justify-center items-center">
        <Header />
        <form
          onSubmit={handleSubmit}
          className="bg-pink-200 bg-opacity-50 backdrop-blur overflow-auto flex flex-col w-[93%] max-w-[600px] md:w-full h-[500px] px-6 md:px-10 py-8 justify-evenly items-center shadow-lg rounded-lg"
        >
          <h2 className="font-hard text-pink-700 text-3xl text-center font-bold">
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
            className="bg-pink-600 rounded-md text-white px-3 py-2 hover:bg-pink-700 transition duration-300 hover:ease-in-out"
          >
            Generate Letter
          </button>
        </form>

        <Copyright />
      </section>
    </>
  );
};

export default LoveLetter;
