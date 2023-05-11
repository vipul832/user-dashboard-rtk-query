const dummayData = Array.from({ length: 10 });
const UserSkeleton = () => {
  return (
    <>
      <div className="lg:w-[50%] w-full flex justify-start overflow-x-scroll md:overflow-auto">
        <table className="lg:w-[70%] text-center items-center">
          <thead className="w-full justify-start">
            <tr>
              <th>
                <div className="w-[15rem] h-[1.2rem] rounded-3xl bg-gray-400 animate-pulse px-5"></div>
              </th>
              <th>
                <div className="w-[5rem] h-[1.2rem] rounded-3xl bg-gray-400 animate-pulse px-5"></div>
              </th>
              <th>
                <div className="w-[5rem] h-[1.2rem] rounded-3xl bg-gray-400 animate-pulse px-5"></div>
              </th>
              <th>
                <div className="w-[5rem] h-[1.2rem] rounded-3xl bg-gray-400 animate-pulse px-5"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {dummayData.map((_, index) => (
              <tr key={index}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                  <div className="flex items-center cursor-pointer">
                    <div className="h-10 w-10 flex-shrink-0 animate-pulse rounded-full bg-gray-400"></div>
                    <div className="ml-4 flex flex-col items-start">
                      <div className="font-medium text-gray-900 bg-gray-400 w-32 h-4 rounded-sm animate-pulse"></div>
                      <div className="text-gray-500 bg-gray-400 w-24 h-3 mt-1 rounded-sm animate-pulse"></div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
                  <div className="rounded-full px-2 text-sm font-semibold text-left bg-gray-400 w-12 h-4 animate-pulse"></div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <div className="rounded-full px-2 text-sm font-semibold text-left bg-gray-400 w-12 h-4 animate-pulse"></div>
                </td>
                <td className="w-8 mx-8">
                  <button>
                    <div className="w-8 h-8 animate-pulse rounded-full bg-gray-400"></div>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <div className="lg:w-[20rem] lg:h-[27rem] bg-gray-400 animate-pulse rounded-2xl"></div>
      </div>
    </>
  );
};

export default UserSkeleton;
