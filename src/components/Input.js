import { useState } from 'react'

const Input = ({comments, setComment}) => {
  const [name, setName] = useState('')
  const [post, setPost] = useState('')

  const isValid = () => {
    return name && post
  }

  const SubmitButton = () => {
    if (isValid()) {
      return (
        <form className='flow-root' onSubmit={() => setComment([...comments, {name, post}])}>
          <button className='bg-purple-500 hover:bg-purple-700 text-white font-normal h-7 py-1 px-3 text-xs rounded float-right'>
            Submit
          </button>
        </form>
      )
    } else {
      return (
        <div className='flow-root'>
          <button className='bg-purple-200 text-white font-normal h-7 py-1 px-3 text-xs rounded float-right' disabled>
            Submit
          </button>
        </div>
      )
    } 
  }

  return(
    <>
      <div className='mb-4 mt-3'>
        <input onChange={(e) => setName(e.target.value)} className='shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 text-xs leading-tight focus:outline-none focus:shadow-outline focus:border-orange-200' id='name' type='text' placeholder='Name...'></input>
      </div>
      <div>
        <input onChange={(e) => setPost(e.target.value)} className='shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 text-xs mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-200' id='post' type='text' placeholder='Write a new post...'></input>
      </div>
      <SubmitButton />
    </>
  )

}

export default Input