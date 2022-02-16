import { useState } from 'react'

const Input = () => {
  const [name, setName] = useState('')
  const [post, setPost] = useState('')

  const isValid = () => {
    return name && post
  }

  const SubmitButton = () => {
    if (isValid()) {
      return (
        <div class='flow-root'>
          <button class='bg-blue-500 hover:bg-blue-700 text-white font-normal h-7 py-1 px-3 text-xs rounded float-right'>
            Submit
          </button>
        </div>
      )
    } else {
      return (
        <div class='flow-root'>
          <button class='bg-blue-200 text-white font-normal h-7 py-1 px-3 text-xs rounded float-right' disabled>
            Submit
          </button>
        </div>
      )
    } 
  }

  return(
    <>
      <div class='mb-4 mt-3'>
        <input onChange={(e) => setName(e.target.value)} class='shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline' id='name' type='text' placeholder='Name...'></input>
      </div>
      <div>
        <input onChange={(e) => setPost(e.target.value)} class='shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 text-sm mb-3 leading-tight focus:outline-none focus:shadow-outline' id='post' type='text' placeholder='Write a new post...'></input>
      </div>
      <SubmitButton />
    </>
  )

}

export default Input