// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const Banner = () => {
  return (
    <div className="mt-10">
      <div className="w-full h-[70vh] justify-center bg-[url(https://i.ibb.co/4NKSGn9/e8133600bb77a83b6bfe83f7bfa40be8.jpg)] bg-no-repeat bg-cover bg-center">
        <div className="text-center bg-[#1f07255e] h-full w-full flex items-center justify-center">
          <div className="flex flex-col-reverse  md:flex-row justify-between items-center gap-5 p-2">
            <div className=" space-y-3">
              <h2 className="text-3xl md:text-5xl font-bold inline-block p-2 rounded-md  text-white ">
              Streamline Attendance and Leave Management with Our Web Solution.
              </h2>
              <p className="text-white text-lg">
              Simplify workforce management with our web-based attendance and leave system. Boost productivity, enhance accuracy, and streamline operations effortlessly for your business success.
              </p>
              <button className="text-white border border-white bg-dark-01 text-xl py-2 px-4 rounded flex justify-center items-center mb-6 mx-auto md:text-block">
                Explore More
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
