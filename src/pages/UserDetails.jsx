import React, { useState, useEffect } from 'react';

const UserDetails = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Adjust as needed

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://remotebackend-2.onrender.com/api/v1/getCompany');
        const userData = await response.json();
        setData(userData.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();

    return () => {
      // Cleanup function if needed
    };
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/deleteCompany/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        // Remove the deleted item from the list
        setData(prevData => prevData.filter(item => item._id !== id));
        alert("Deleted Successfully")
        console.log(`Item with ID ${id} deleted successfully.`);
      } else {
        console.error('Failed to delete item:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  // Calculate indexes for slicing data array based on current page and items per page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <section className="py-1 bg-blueGray-50">
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4 mx-auto mt-2">
          <h1 className="text-center mt-2 text-2xl font-bold mb-4">Remote Job Details</h1>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <div className='flex flex-row'>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full  overflow-x-auto">
              <table className="items-center w-full border-collapse">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Id
                    </th>
                    <th className="px-6 text-black font-bold bg-blueGray-50  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap  text-left">
                      CompanyName
                    </th>
                    <th className="px-6 text-black font-bold bg-blueGray-50  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap  text-left">
                      JobType
                    </th>
                    <th className="px-6 text-black font-bold bg-blueGray-50  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap  text-left">
                      Expected Salary
                    </th>
                    <th className="px-6 text-black font-bold bg-blueGray-50  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap  text-left">
                      Roles
                    </th>
                    <th className="px-6 text-black font-bold bg-blueGray-50  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap  text-left">
                      Skills
                    </th>
                    <th className="px-6 text-black font-bold bg-blueGray-50  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap  text-left">
                      Experience
                    </th>
                    <th className="px-6 text-black font-bold bg-blueGray-50  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap  text-left">
                      Apply Link
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {currentItems.map((item, index) => (
                    <tr key={index + 1} style={{ cursor: 'pointer' }}>
                      <th className="border-t-0 divide-x-2  px-6 align-middle border-l-0 border-r-0 text-left text-black">
                        {indexOfFirstItem + index + 1}
                      </th>
                      <td className="border-t-0 divide-x-2  px-6 align-middle border-l-0 border-r-0 text-left text-black">
                        {item.CompanyName}
                      </td>
                      <td className="border-t-0 divide-x-2  px-6 align-middle border-l-0 border-r-0 text-left text-black">
                        {item.JobType}
                      </td>
                      <td className="border-t-0 divide-x-2  px-6 align-middle border-l-0 border-r-0 text-left text-black">
                        {item.ExpectedSalary}
                      </td>
                      <td className="border-t-0  border-collapse px-6 align-middle border-l-0 border-r-0 text-left text-black">
                        {item.Roles}
                      </td>
                      <td className="border-t-0    px-6 align-middle border-l-0 border-r-0 text-left text-black">
                        {item.Skills}
                      </td>
                      <td className="border-t-0   px-6 align-middle border-l-0 border-r-0 text-left text-black">
                        {item.Experience}
                      </td>
                      <td className="border-t-0    px-6 align-middle border-l-0 border-r-0 text-left text-black">
                        {item.ApplyLink}
                      </td>
                      <td className="border-t-0 divide-x-2 px-6 align-middle border-l-0 border-r-0 text-left text-black">
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="px-3 py-1 mx-2 bg-green-500 text-white rounded-md focus:outline-none"
                        >
                          Delete
                        </button>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Pagination controls */}
      <div className="pagination flex justify-center items-center mt-4">
        <button className='text-center ' onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, index) => (
          <button
          
            key={index}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button className='mx-1 px-4 py-2 rounded-md focus:outline-none'
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default UserDetails;
