/* eslint-disable react/no-unescaped-entities */
"use client";
import Swal from "sweetalert2";
import Link from "next/link";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useGlobalState } from "@/context/GlobalStateProvider";
function GetAQUote() {  
    const { register, handleSubmit } = useForm();
    const { updateShowLogoLoader } = useGlobalState();
    updateShowLogoLoader(true);
    const handleFormSubmit = (data) => {
        updateShowLogoLoader(true);
        axios.post('/contact-us/get-a-quote/send-mail', {
            from: "forpythononlymanavshah@gmail.com",
            to:"forpythononlymanavshah@gmail.com",
            subject:"Customer Inquiry",
            html:`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font-family:Arial,sans-serif;margin:0;padding:0;background-color:#f4f4f4}.container{max-width:600px;margin:0 auto;padding:20px;background-color:#d3d3d3;border-radius:8px;box-shadow:0 0 10px rgba(0,0,0,.1)}h1{color:#333}p{color:#555}.contact-info{margin-top:20px}.contact-info p{margin:8px 0}</style></head><body><div class="container"><h1>Hello There</h1><p>New Customer Inquiry</p><div class="contact-info"><p><strong>Name:</strong>${data.first_name} ${data.last_name}</p><p><strong>Email:</strong>${data.email}</p><p><strong>Phone:</strong>${data.phone}</p><p><strong>Requirement:</strong>${data.requirement}</p><p><strong>Message:</strong>${data.message}</p></div></div></body></html>`
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
    }
    return (
        <div className="pt-5 px-4 mx-auto lg:w-2/3">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-500">Get A Quote</h2>
            <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Ready to take the next step? Request a personalized quote today. Our team will provide you with a detailed estimate tailored to your project requirements.</p>
            <form action="#" className="space-y-3" onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="sm:flex w-full">
                    <div className="sm:w-1/2 sm:me-2">
                        <label htmlFor="first_name" className="mb-2 text-sm font-medium text-gray-900">First Name</label>
                        <input type="text" id="firstName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="John" required {...register("first_name")}/>
                    </div>
                    <div className="sm:w-1/2 sm:ms-2">
                        <label htmlFor="last_name" className="mb-2 text-sm font-medium text-gray-900">Last Name</label>
                        <input type="text" id="lastName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Doe" required {...register("last_name")}/>
                    </div>
                </div>
                <div className="sm:flex w-full">
                    <div className="sm:w-1/2 sm:me-2">
                        <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required {...register("email")}/>
                    </div>
                    <div className="sm:w-1/2 sm:ms-2">
                        <label htmlFor="phone" className="mb-2 text-sm font-medium text-gray-900">Your phone</label>
                        <input type="phone" id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Phone No....." required {...register("phone")}/>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <label htmlFor="subject" className="mb-2 text-sm font-medium text-gray-900">Requirement</label>
                        <input type="text" id="subject" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter Your Requirements....." required {...register("requirement")}/>
                    </div>                
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                    <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." {...register("message")}></textarea>
                </div>
                <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center rounded-lg bg-slate-300 text-black sm:w-full hover:bg-blue-200">Send message</button>
            </form>
        </div>
  )
}

export default GetAQUote