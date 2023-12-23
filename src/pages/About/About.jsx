import { BsGraphUpArrow } from "react-icons/bs";
import { RiHotelFill } from "react-icons/ri";

const About = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="max-w-7xl mx-auto mt-20 mb-28 flex gap-12 py-16 items-center px-5 flex-col md:flex-row"
    >
      <div className="border border-dark-03 p-3 relative w-full md:w-2/5 lg:w-1/2 mr-12 ml-5 md:mr-0">
        <img src="https://i.ibb.co/KqhjTFY/36e91f564985700bcafd55af851864c9.jpg" alt="" />
       
      </div>
      <div className="w-full md:w-3/5 lg:w-1/2 mt-6">
        <h3 className="text-dark-03 tracking-[5px]">
          WELCOME TO Task Tool
        </h3>
        <h2 className="text-lg text-dark-01 md:text-xl lg:text-2xl font-semibold mb-2">
        Simplify tasks and boost productivity with our intuitive online tool for seamless management and collaboration.
        </h2>
        <div className="w-20 h-1.5 bg-dark-03 ml-2"></div>
        <p className="text-dark-02 mb-8">
        We empower efficient Time, Attendance, and Leave management by seamlessly recording data from various proximity or biometric devices. Our agent system transmits records to the cloud, offering real-time monitoring globally.
        </p>
        <div className="flex flex-wrap gap-6 md:gap-2 justify-between items-center mb-5 flex-col md:flex-row">
          <div className="flex gap-4 items-center">
            <div className="text-blue-600 text-4xl">
              <BsGraphUpArrow></BsGraphUpArrow>
            </div>
            <div>
              <h4 className=" text-dark-01 font-medium mb-1">
                20 Years of Experience
              </h4>
              <p className="text-dark-02 text-sm">
                Elevating Standards Innovation.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="text-blue-600 text-5xl">
              <RiHotelFill></RiHotelFill>
            </div>
            <div>
              <h4 className=" text-dark-01 font-medium mb-1">
                180+ Destinations
              </h4>
              <p className="text-dark-02 text-sm">
                Elevating Standards Innovation.
              </p>
            </div>
          </div>
        </div>
        <button className="py-3 px-10 text-white bg-blue-600 rounded active:scale-95">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default About;
