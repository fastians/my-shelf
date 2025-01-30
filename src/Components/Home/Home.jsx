import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { FiGitlab } from "react-icons/fi";
export const Home = () => {
  return (
    <section id="home" className="h-full dark:bg-black" data-section="home">
      <div className="flexslider h-full dark:bg-black">
        <ul className="">
          <li className="relative h-[100vh] flex items-center justify-between px-20 ">
            <div className=" flex flex-col gap-6  justify-center   h-fit ">
              <h1 className="sm:text-7xl text-3xl font-bold dark:text-gray-300">
                Hi! <br className="my-4" />
                I'm Abdul
              </h1>
              <h2 className="leading-relaxed sm:text-2xl text-lg w-3/4 my-4 dark:text-gray-300">
                Building Scalable Solutions,
                <br />
                One Line of Code at a Time.
              </h2>
              <p className="">
                <a className="btn-learn dark:text-gray-300 dark:border-gray-300 dark:hover:!bg-white dark:hover:text-black">
                  Download CV <i class="fa-solid fa-download"></i>
                </a>
              </p>
            </div>
            <div className="flex flex-col  items-end justify-center gap-2   font-medium  h-fit">
              <a
                href="https://wa.me/+923222243431"
                className="btn-icons flex items-center justify-end !py-2 gap-3 w-60 group text-gray-800 hover:text-green-500"
              >
                <span className="group-hover:border-b border-gray-800 group-hover:border-green-500 dark:text-gray-300">
                  WhatsApp
                </span>
                <FaWhatsapp
                  size="30px"
                  className="text-gray-800 group-hover:text-green-500 dark:text-gray-300"
                />
              </a>

              <a
                className="btn-icons flex items-center justify-end !py-2 gap-3 w-60 group text-gray-800 hover:text-orange-500"
                target="_blank"
                href="https://mail.google.com/"
              >
                <span className="group-hover:border-b border-gray-800 group-hover:border-orange-500 dark:text-gray-300">
                  E-Mail
                </span>
                <IoMailOutline
                  size="30px"
                  className="text-gray-800 group-hover:text-orange-500 dark:text-gray-300"
                />
              </a>

              <a
                className="btn-icons flex items-center justify-end !py-2 gap-3 w-60 group text-gray-800 hover:text-blue-500"
                href="https://www.linkedin.com/in/abdul-mateen-374562333/"
                target="_blank"
              >
                <span className="group-hover:border-b border-gray-800 group-hover:border-blue-500 dark:text-gray-300">
                  LinkedIn
                </span>
                <CiLinkedin
                  size="30px"
                  className="text-gray-800 group-hover:text-blue-500 dark:text-gray-300"
                />
              </a>

              <a
                className="btn-icons flex items-center justify-end !py-2 gap-3 w-60 group text-gray-800 hover:text-yellow-500"
                href="https://github.com/abdulnextdev"
                target="_blank"
              >
                <span className="group-hover:border-b border-gray-800 group-hover:border-yellow-500 dark:text-gray-300">
                  GitHub
                </span>
                <LuGithub
                  size="30px"
                  className="text-gray-800 group-hover:text-yellow-500 dark:text-gray-300"
                />
              </a>

              <a
                className="btn-icons flex items-center justify-end !py-2 gap-3 w-60 group text-gray-800 hover:text-orange-500"
                href="https://gitlab.com/abdulnextdev"
                target="_blank"
              >
                <span className="group-hover:border-b border-gray-800 group-hover:border-orange-500 dark:text-gray-300">
                  GitLab
                </span>
                <FiGitlab
                  size="30px"
                  className="text-gray-800 group-hover:text-orange-500 dark:text-gray-300"
                />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
