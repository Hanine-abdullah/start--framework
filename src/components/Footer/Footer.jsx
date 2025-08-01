import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-navColor text-white text-center ">
        <div className="container py-7">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 py-10 gap-10">
            <div className="location p-4">
              <h2 className="text-3xl font-semibold mb-2">LOCATION</h2>
              <p className="text-base mb-4">2215 John Daniel Drive</p>
              <p className="text-base mb-4">Clark, MO 65243</p>
            </div>
            <div className="social p-4">
              <h2 className="text-3xl font-semibold mb-2">AROUND THE WEB</h2>
              <div className="icons flex justify-center items-center flex-wrap">
                <div className="me-2 size-8 border rounded-full center-div cursor-pointer duration-500 hover:text-mainColor">
                  <i className="fa-brands fa-facebook"></i>
                </div>
                <div className="me-2 size-8 border rounded-full center-div cursor-pointer duration-500 hover:text-mainColor">
                  <i className="fa-brands fa-twitter"></i>
                </div>
                <div className="me-2 size-8 border rounded-full center-div cursor-pointer duration-500 hover:text-mainColor">
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
                <div className="me-2 size-8 border rounded-full center-div cursor-pointer duration-500 hover:text-mainColor">
                  <i className="fa-solid fa-globe"></i>
                </div>
              </div>
            </div>
            <div className="about p-4">
              <h2 className="text-3xl font-semibold mb-2">ABOUT FREELANCER</h2>
              <p className="text-base mb-4">Hanin Abdullah </p>
            </div>
          </div>
        </div>
        <div className="bg-[#1A252F] py-4 ">Copyright © Your Website 202</div>
      </footer>
    </>
  );
}
