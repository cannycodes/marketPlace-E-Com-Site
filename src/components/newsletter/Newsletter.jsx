
const Newsletter = () => {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center text-center items-center space-y-8">
      <h3 className="text-4xl text-gray-800 font-bold">
        Subscribe Our Newsletter
      </h3>
      <div className="relative flex justify-center items-center z-10">
        <p className= "absolute text-6xl lg:text-8xl -z-10 text-gray-200 font-extrabold tracking-widest text-center -top-8">
          Newsletter
        </p>
        <p className="text-gray-700 text-center text-xl">
        Get the latest information and promo offers directly
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between space-x-5 z-10">
        <input type="text"
        className="text-gray-500 w-64 px-5 border-gray-800 ring-1 ring-gray-600 mb-5"
        placeholder="Input your email address here"
        />
      <button className="bg-black text-white px-10 py-2 lg:px-3 border-gray-500 lg:py-2">
        Get Started
      </button>
      </div>

    </div>
  )
}

export default Newsletter