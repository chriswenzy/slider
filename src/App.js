import "./App.css";
import SimpleImageSlider from "react-simple-image-slider";
import M1 from "./Img/1.jpeg";
import M2 from "./Img/2.jpeg";
import M3 from "./Img/3.jpeg";
import M4 from "./Img/4.jpeg";
import M5 from "./Img/5.jpeg";

function App() {
  const images = [
    { url: M1 },
    { url: M2 },
    { url: M3 },
    { url: M4 },
    { url: M5 },
  ];
  return (
    <div>
      <div class="flex items-center justify-center absolute z-10 search-field">
        <form method="GET">
          <div class="relative text-gray-600 focus-within:text-gray-400">
            <input
              type="search"
              name="q"
              class="py-2 text-sm text-white w-96 h-12  bg-gray-900 rounded-md pl-10 focus:outline-none bg-white focus:text-gray-900"
              placeholder="Search..."
              autocomplete="off"
            />
            <span class="absolute inset-y-0 right-0 flex items-center bg-gray-900 m-1">
              <button
                type="submit"
                class="p-1 focus:outline-none focus:shadow-outline"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-6 h-6"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </span>
          </div>
        </form>
      </div>
      <SimpleImageSlider
        width={1280}
        height={700}
        images={images}
        showBullets={true}
        autoPlay={true}
      />
      {/* <div className="  ">
        <div className="m-auto">
          <form>
            <input
              type="text"
              placeholder="Search.."
              name="search"
              className=" border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
            />
          </form>
        </div>
      </div> */}
    </div>
  );
}

export default App;
