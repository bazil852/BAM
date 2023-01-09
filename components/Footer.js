import React from "react";

const Footer = () => {
  return (
    <footer className="relative">
      <section className="max-w-[1240px] mt-20 mb-10 mx-auto  gap-2 font-body top-7 md:p-10">
        <div className="grid footer justify-between gap-[88px] md:grid-cols-2 md:gap-6 ">
          <div className="col-span-1">
            <div className="flex items-center justify-start gap-1">
              <img src="logo.png" alt="logo" className="w-[40px] h-[40px]" />
              <h4 className="">BAM</h4>
            </div>
            
            
          </div>
          <div>
            
          </div>
          <div>
           
          </div>
          <div>
           
          </div>
        </div>
        <div>
         
        </div>
      </section>

      <div className="bg-[#1242ef] absolute left-[-380px] top-[222.18px] h-[352px] w-[652px] blur-[350px] rounded-full"></div>
    </footer>
  );
};

export default Footer;
