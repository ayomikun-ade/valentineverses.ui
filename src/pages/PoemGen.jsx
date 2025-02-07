import Copyright from "../components/Copyright";
import Header from "../components/Header";

const PoemGen = () => {
  return (
    <>
      <section className="relative font-soft bg-[url('/src/assets/letters.jpg')] bg-no-repeat bg-left-bottom bg-cover md:bg-center min-h-screen w-full flex flex-col justify-center items-center">
        <Header />
        <form className="bg-pink-200 bg-opacity-50 backdrop-blur flex flex-col w-[93%] max-w-[600px] md:w-full min-h-[500px] px-6 md:px-10 py-8 justify-evenly items-center shadow-lg rounded-lg">
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
              className="rounded-lg px-3 py-2 outline-none border focus:border-pink-300 focus:shadow-md focus:shadow-pink-400/60 transition duration-300 hover:ease-in-out"
              type="text"
              name="requests"
              id="requests"
              rows={4}
            />
          </div>
          <button className="bg-pink-600 rounded-md text-white px-3 py-2 hover:bg-pink-700 transition duration-300 hover:ease-in-out">
            Generate Poem
          </button>
        </form>
        <Copyright />
      </section>
    </>
  );
};

export default PoemGen;
