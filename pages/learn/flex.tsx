import { useState } from "react";

export default function Flex() {
    const [word, setWord] = useState("");

    
        const addWord: AddWord = (text: string) => {
            const newWord = text;
            setWord(newWord);
          };


  return (
    <>

<button className="m-2 p-10 text-white rounded-xl transition-all duration-500 bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-400 bg-size-200 bg-pos-0 hover:bg-pos-100">Hover me Here</button>
        <div>
        <input
          type="text"
          className="input input-bordered input-secondary w-full max-w-lg border-r-0"
         
         
        />
        <div className="dropdown ">
        <button tabIndex={0} className="btn bg-white text-red-400 border-secondary " >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </button>
        <a href="#my-modal-2" className="btn"><svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg></a>
          </div>




<div className="modal" id="my-modal-2">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Congratulations random Interner user!</h3>
    <p className="py-4">been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
     <a href="#" className="btn">Yay!</a>
    </div>
  </div>
</div>
        </div>



      <div>
        <div className="h-20 w-20 bg-blue-500">Learn position</div>
        <p>This is a normal paragraph</p>
        <p className="border-2 border-red-600">Absolute below</p>
        <div className="absolute h-20 w-20 bg-yellow-500">Green!!</div>
        <div className="h-20 w-20 bg-green-500"></div>
      </div>

      <div className="grid border-2 boder-gray-600">
        <div className=" h-20 w-20 bg-blue-500">This is a grid</div>
        <div className=" h-20 w-20 bg-yellow-500"></div>
        <div className="h-20 w-20 bg-green-500"></div>
      </div>

      <div>
        <input type="datetime-local" className="select-bordered" />
      </div>

      <div>
        <label htmlFor="my-modal" className="btn btn-outline">
          Create a new Todo
        </label>
        <input
          type="checkbox"
          id="my-modal"
          className="modal-toggle bg-slate-300"
        />
        <div className="modal">
          <div className="modal-box bg-red-300">
            <input type="text" placeholder="Type here" className="input " />
            <div className="modal-action">
              {/* <label htmlFor="my-modal" className="btn">
                Yay!
              </label> */}
              <button type="button" onClick={(e) => {
                  e.preventDefault()
                  addWord(word)
              }}>Clicke me</button>
            </div>
          </div>
        </div>
      </div>
]
            

      <div className="md:flex md:justify-between border-2 boder-gray-600">
        <div className="flex-1 flex justify-center items-center h-56 w-56 bg-blue-500">
          <span>This is a flexbox</span>
        </div>
        <div className="flex-1 h-56 w-56 bg-yellow-500"></div>
        <div className="flex-1 h-56 w-56 bg-green-500"></div>
      </div>

      <div className="flex">
        <div className="flex flex-col items-center border-2 border-red-200">
          <h1>Learn about block</h1>
          <div className="bg-yellow-500 w-72 h-72 mt-4  border-2 border-red-600 ">
            <h1 className="inline-block border-red-100 border-2">
              Inline block
            </h1>
            <h2 className="inline border-red-100 border-2">inline</h2>
            <h1 className="block border-red-100 border-2">block</h1>
            <p className="border-red-100 border-2">
              This is a paragraph (A paragraph is a block-element)
            </p>
            <p>This is another paragraph</p>
            <ul>
              <li>List is an block level element</li>
              <li>List is an block level element</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-500 w-72 h-72 m-10  border-2 border-red-600 ">
          <h1 className="inline-block border-red-100 border-2">123123</h1>
          <h2 className="block border-red-100 border-2">123123</h2>
          <h1 className="inline border-red-100 border-2">123213s</h1>
        </div>
        <div className="bg-blue-500 w-72 h-72 relative">2</div>
      </div>
    </>
  );
}
