import React, { useState } from 'react';
import axios from 'axios';
// /import toast from 'react-hot-toast';
const AccountCreate = () => {
    const users = {
        CompanyName: "",
        JobType:"",
        ExpectedSalary:"",
        Roles:"",
        Skills:"",
        Experience:"",
        ApplyLink:" "
    
     
    }
     const [user, setUser] = useState(users);

    const submitForm = async(e) =>{
        e.preventDefault();
        try {
          const response = await axios.post("https://remotebackend-2.onrender.com/api/v1/createJob", user);
          alert("Data updated Successfully");
            console.log(response);
         
        } catch (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Response Error:', error.response.data);
            console.error('Status Code:', error.response.status);
          } else if (error.request) {
            // The request was made but no response was received
            console.error('Request Error:', error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error:', error.message);
          }
        }
      };

    const inputHandler = (e) =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value});
    }
    
  
    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <h2 className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">

                        Post Jobs Here
                    </h2>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Post your Jobs Here
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={submitForm}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Job Type" name="CompanyName"  onChange={inputHandler}  required="" />
                                    </div>
                                    <div>
                                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">JobType</label>
                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Job Type" name="JobType"  onChange={inputHandler}  required="" />
                                    </div>
                                    <div>
                                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ExpectedSalary</label>
                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter ExpectedSalary" name="ExpectedSalary"  onChange={inputHandler}  required="" />
                                    </div>
                                    <div>
                                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Roles</label>
                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Role"  name="Roles" onChange={inputHandler}  required="" />
                                    </div>
                                    <div>
                                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Skills</label>
                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Skills" name="Skills" onChange={inputHandler}  required="" />
                                    </div>
                                    <div>
                                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Experience</label>
                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Experience" name="Experience"  onChange={inputHandler}  required="" />
                                    </div>
                                    <div>
                                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apply link</label>
                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Apply Link" name="ApplyLink"  onChange={inputHandler}  required="" />
                                    </div>
                                    
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-500  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Post Job</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AccountCreate;
