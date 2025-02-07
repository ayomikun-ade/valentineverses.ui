import { Link } from "react-router";
import Copyright from "../components/Copyright";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <section className="relative font-soft bg-[url('/src/assets/letters.jpg')] bg-no-repeat bg-cover bg-center min-h-screen w-full flex flex-col justify-center items-center">
        <Header />
        <div className="backdrop-brightness-95 backdrop-blur flex flex-col mx-3 max-w-[600px] min-h-[500px] px-6 py-8 justify-evenly items-center bg-transparent shadow-md rounded-lg">
          <h2 className="font-hard font-bold text-center text-pink-500 text-3xl">
            Speak from the Heart
          </h2>
          <p className="text-center font-medium text-neutral-900">
            The art of love is a timeless and universal language. <br />
            Expressing your love and affection can be nerve-wracking, but it
            doesn&apos;t have to be. Our love letter and poem generator is here
            to help you speak from the heart and convey your deepest feelings.
            Whether you&apos;re looking for a romantic gesture or a thoughtful
            gift, we&apos;ve got you covered!
          </p>
          <div className="flex gap-3 text-center my-2">
            <Link
              to="/love-letter"
              className="bg-pink-600 text-white rounded-md px-3 py-2 transition duration-300 hover:ease-in-out hover:bg-pink-500"
            >
              Love Letter Generator
            </Link>
            <Link
              to="/poem-generator"
              className="bg-pink-300 text-black rounded-md px-3 py-2 transition duration-300 hover:ease-in-out hover:bg-pink-400"
            >
              Poem Generator
            </Link>
          </div>
        </div>
        <Copyright />
      </section>
    </>
  );
};

export default Home;
