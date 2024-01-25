/* eslint-disable react/no-unescaped-entities */
"use client";
import Swal from "sweetalert2";
import Link from "next/link";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useGlobalState } from "@/context/GlobalStateProvider";
function GetInTouch() {
  const { register, handleSubmit } = useForm();
  const { updateShowLogoLoader } = useGlobalState();
  const handleFormSubmit = (data) => {
    updateShowLogoLoader(true);
    axios.post('/contact-us/send-mail', {
        from: "forpythononlymanavshah@gmail.com",
        to:"forpythononlymanavshah@gmail.com",
        subject:"Get In Touch",
        html:`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font-family:Arial,sans-serif;margin:0;padding:0;background-color:#f4f4f4}.container{max-width:600px;margin:0 auto;padding:20px;background-color:#d3d3d3;border-radius:8px;box-shadow:0 0 10px rgba(0,0,0,.1)}h1{color:#333}p{color:#555}.contact-info{margin-top:20px}.contact-info p{margin:8px 0}</style></head><body><div class="container"><h1>Hello There</h1><p>You've received a new inquiry from the contact form on your website.</p><div class="contact-info"><p><strong>Email:</strong>${data.email}</p><p><strong>Phone:</strong>${data.phone}</p><p><strong>Subject:</strong>${data.subject}</p><p><strong>Company:</strong>${data.company}</p><p><strong>Message:</strong>${data.message}</p></div></div></body></html>`        
    },{
        timeout: 20000, // Set the timeout to 5000 milliseconds (adjust as needed)
    })
    .then(function (response) {
        updateShowLogoLoader(false);
        if(response.data.error === false){
            Swal.fire({
                title: "Rest assured!!",
                text: "Your request has been sent",
                icon: "success"
            });
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: response.data.message,            
            });
        }
    })
    .catch(function (error) {
        updateShowLogoLoader(false);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,            
        });
    });
  };
  return (
    <div className="pt-5 px-4 mx-auto lg:w-2/3">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-500">
        Let's Connect
      </h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Let's start a conversation! Reach out to us htmlFor any inquiries,
        partnerships, or simply to say hello. We value your input and look
        forward to connecting with you.
      </p>
      <form className="space-y-3" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="sm:flex w-full">
          <div className="sm:w-1/2 sm:me-2">
            <label
              htmlFor="email"
              className="mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
              {...register("email")}
            />
          </div>
          <div className="sm:w-1/2 sm:ms-2">
            <label
              htmlFor="phone"
              className="mb-2 text-sm font-medium text-gray-900"
            >
              Your phone
            </label>
            <input
              type="phone"
              id="phone"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Your Phone Number....."
              required
              {...register("phone")}
            />
          </div>
        </div>
        <div className="sm:flex w-full">
          <div className="sm:w-1/2 sm:me-2">
            <label
              htmlFor="subject"
              className="mb-2 text-sm font-medium text-gray-900"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Write a subject"
              required
              {...register("subject")}
            />
          </div>
          <div className="sm:w-1/2 sm:ms-2">
            <label
              htmlFor="company"
              className="mb-2 text-sm font-medium text-gray-900"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Your Company Name....."
              required
              {...register("company")}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="6"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Leave a comment..."
            {...register("message")}
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-3 px-5 w-full text-sm font-medium text-center rounded-lg bg-slate-300 text-black sm:w-full hover:bg-blue-200"
        >
          Send message
        </button>
      </form>
      <p className="mt-4 text-gray-500 text-sm">
        Excited about bringing your personal projects to life? Our team is here
        to help...
        <Link
          href="/contact-us/get-a-quote"
          className="text-blue-500"
          aria-current="page"
        >
          Get a quote from us!
        </Link>
      </p>
    </div>
  );
}

export default GetInTouch;
