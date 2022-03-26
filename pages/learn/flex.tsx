export default function Flex() {
  return (
    <>
      <div >
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
          <input type="datetime-local" />
      </div>





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
