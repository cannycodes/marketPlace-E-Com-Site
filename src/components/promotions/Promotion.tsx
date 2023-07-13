import React from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "../Wrapper";
import proimg1 from "./images/promo1.webp";
import proimg2 from "./images/promo2.webp";
import proimg3 from "./images/promo3.webp";

const Promotion = () => {
  return (
    <Wrapper>
      <div className="bg-[#FFFFFF] min-w-full">
        <div className="flex flex-col gap-1 justify-center items-center">
          <p className="text-lg font-semibold text-[#0062F5]">PROMOTIONS</p>
          <h3 className="text-[#212121] font-extrabold text-3xl">
            Our Promotions Events
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 w-full mt-7 h-fit">
          {/* left- dev */}
            <div className="flex flex-col justify-between gap-2 sm:w-full lg:w-2/5">
            <div className="bg-[#D6D6D8] flex flex-col sm:flex-row justify-center sm:justify-around items-center">
                <div className="flex flex-col flex-1 pt-8 sm:p-8">
                  <h2 className="text-[#212121] font-extrabold text-4xl block max-w-xs">
                    GET UP TO 60%
                  </h2>
                  <p className="text-xl text-[#212121]">
                    For the summer season
                  </p>
                </div>
        <div className="flex flex-1 min-h-full">
          <Image src={proimg1}
          className="object-cover"
           alt={"Promotion Image 1"} 
           />
        </div>
          </div>
          {/* Lower card */}
          <div className="bg-[#212121] gap-5 flex flex-col py-5 items-center justify-evenly p-10">
            <h2 className="text-4xl font-extrabold text-[#FFFFFF] mt-4">
              GET 30% Off
            </h2>
            <div className="text-[#FFFFFF] flex flex-col items-center justify-between mt-5">
              <p>USE PROMO CODE</p>
              <button className="px-10 py-1 bg-[#474747] text-xl rounded-md mt-2 tracking-widest">
                DINEWEEKENDSALE
              </button>
            </div>
          </div>
     </div>


       {/* right dev */}

            <div className="flex flex-col sm:flex-row sm:w-full lg:w-3/5 gap-5 h-full">
               {/* Left Card */}
              <div className="sm:w-1/2 bg-[#EFE1C7]  text-[#000000] min-h-full ">
                          <div className="pl-5 pt-5">
                              <p>Flex Sweatshirt</p>
                              <p>
                                <del>$100.00</del>{" "}
                                <b className="text-lg font-semibold"> $75.00</b>
                              </p>
                            </div>
                            <div className="flex justify-center lg:relative">
                              <Image
                                className="object-cover lg:absolute"
                                src={proimg2}
                                // height={300}  
                                alt="proimg2"
                              />
                            </div>
              </div>

              {/* Right Card */}
              <div className="sm:w-1/2 h-full text-gray-800 bg-[#D7D7D9]">
              <div>
                            <div className="pl-5 pt-5">
                              <p>Flex Sweatshirt</p>
                              <p>
                                <del>$225.00</del>{" "}
                                <b className="text-lg font-semibold"> $190.00</b>
                              </p>
                            </div> 
                            <div className="flex justify-center min-h-full">
                              <Image
                                className="object-cover min-h-full"
                                src={proimg3}
                                // height={300}
                                alt="proimg3"
                              />
                            </div>
                          </div>
              </div>
              
            </div>
        </div>


      </div>
    </Wrapper>
  );
};

export default Promotion;
