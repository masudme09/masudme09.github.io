import profile_image from "../assets/Masud_croped.jpg"

const HeroSection = () => {
  return (
    <div className="flex items-center justify-start flex-wrap flex-col px-3 my-11">

      <h1 className="text-white text-4xl font-bold">
        I&apos;m Masud Rana
      </h1>
      <h2 className="text-white text-2xl font-bold">
        Full Stack Software Developer
      </h2>
      <h3 className="text-gray-300 text-xl py-1">
        at <a href="https://www.globalreader.eu" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-500">
          GlobalReader OÜ</a>
      </h3>
      <div className="block text-center">
        <h5 className="text-gray-300 text-base py-1">
          I build beautiful, functional, and scalable web applications.
        </h5>
      </div>
      {/* add placeholder profile image with full rounded */}
      <div className="flex mt-10 items-center justify-center w-full">
        <img
          src={profile_image}
          alt="Masud Rana"
          className="w-2/4 lg:w-3/4 rounded-full shadow-lg border-2 border-gray-300 dark:border-gray-700"
        />
      </div>
    </div>
  );
};

export default HeroSection;
