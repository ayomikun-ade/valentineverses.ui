import Copyright from "../components/Copyright";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <section className="font-soft bg-[url('/src/assets/letters.jpg')] bg-no-repeat bg-right-top bg-cover md:bg-center min-h-screen w-full flex flex-col justify-center items-center">
        <div className="backdrop-brightness-95 backdrop-blur flex flex-col max-w-[600px] min-h-[500px] px-6 py-8 justify-evenly items-center bg-transparent shadow-md rounded-lg">
          <h2 className="font-hard font-semibold text-pink-600 text-3xl">
            Hello
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
            sapiente perferendis similique eum explicabo officiis modi
            asperiores quaerat consequuntur? Consequatur!
          </p>
          <div className="flex gap-3 my-2">
            <button className="bg-pink-600 text-white rounded-md px-3 py-2 transition duration-300 hover:ease-in-out hover:bg-pink-500">
              Love Letter Generator
            </button>
            <button className="bg-pink-200 text-black rounded-md px-3 py-2 transition duration-300 hover:ease-in-out hover:bg-pink-300">
              Poem Generator
            </button>
          </div>
        </div>
      </section>
      <Copyright />
    </>
  );
};

export default Home;
