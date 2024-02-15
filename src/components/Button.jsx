import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className="px-5 rounded-md font-semibold mr-3 text-sm py-1.5 bg-zinc-800">
       {name}
      </button>
    </div>
  )
}

export default Button
