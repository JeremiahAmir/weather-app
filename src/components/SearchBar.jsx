import { useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";

const SearchBar = () => {
  const getItem = localStorage.getItem("city");
  const [city, setCity] = useState(getItem ? getItem : "Lahore");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("city", city);
    toast.success("Location Updated Successfully!", {
      theme: "dark",
      autoClose: 2000,
      transition: Slide,
    });
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-white w-full rounded-full mb-3">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            className="bg-white w-full text-black rounded-full px-5 py-2"
            placeholder="Enter a city"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </form>
      </div>
    </>
  );
};

export default SearchBar;
