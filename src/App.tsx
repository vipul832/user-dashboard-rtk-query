//component import
import UserList from "./components/users/UserList";
import UserCard from "./components/users/UserCard";
import UserSkeleton from "./components/skeleton/UserSkeleton";

//react hook import
import { useState } from "react";

//icons import
import { BsSun } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

//store reducer import
import { useSelector, useDispatch } from "react-redux";
import { themeValue, changeTheme } from "./features/theme/themSlice";
import { useGetUserDataQuery } from "./api/userApi";

// paginate import
import ReactPaginate from "react-paginate";

function App() {
  const [page, setPage] = useState(0);
  const { data, isLoading } = useGetUserDataQuery(page);
  const theme = useSelector(themeValue);
  const dispatch = useDispatch();
  let TotalPages = data?.totalPages ?? 0;
  return (
    <div
      className={`${
        theme ? "bg-gray-500" : "bg-indigo-300"
      } container-lg border min-h-screen justify-center items-center flex py-5 relative flex-row`}
    >
      <div className=" w-[90%]  bg-[#ffff]/30 backdrop-blur-md rounded-[20px] shadow-lg">
        <button
          className="absolute  top-[8px] right-[8px] text-[1rem] rounded-full p-2 z-10 bg-[white]/30 border border-1"
          onClick={() => dispatch(changeTheme())}
        >
          {theme ? <BsSun /> : <MdDarkMode />}
        </button>
        <div className="flex lg:justify-evenly py-4 px-4 items-center w-auto h-auto">
          {/* <UserSkeleton /> */}
          {isLoading ? (
            <UserSkeleton />
          ) : (
            <>
              {" "}
              <UserList users={data?.users} />
              <UserCard />
            </>
          )}
        </div>
        <div className="my-3">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={TotalPages} // total number of page
            className="flex gap-3 items-center justify-center"
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            onPageChange={(e) => setPage(e.selected)}
            activeClassName={`${
              theme ? "bg-white text-black" : "bg-indigo-500"
            }`}
            pageClassName={`border ${
              theme ? "border-white" : "border-indigo-500"
            } w-10 h-10 rounded-[5px] justify-center items-center flex`}
            previousClassName={`border w-30 ${
              theme ? " border-black" : "border-indigo-500"
            } p-2 rounded-[5px] lg:mr-40`}
            nextClassName={`border w-30 ${
              theme ? "border-black" : "border-indigo-500"
            } p-2 rounded-[5px] lg:ms-40`}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
