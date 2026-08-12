

function Card({username,button="learn more"}) {
    console.log(username);
    
    
    
  return (
    <div className="w-80 p-6 rounded-xl shadow-xl bg-black border border-gray-700">

      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-xs bg-white text-black rounded-full mb-3">
          Featured
        </span>

        <h2 className="text-xl font-bold text-white mb-2">
          {username}  Modern Design Solutions
        </h2>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        Discover cutting-edge design patterns and UI components.
      </p>

      <div className="flex items-center justify-between">
        <button className="px-4 py-2 bg-white text-black text-sm rounded-lg">
          {button}
        </button>

        <span className="text-gray-500 text-xs">
          234 views
        </span>
      </div>

    </div>
  )
}

export default Card