import { useEffect, useState } from 'react'
import Input from './Input'
import Voter from './Voter'

const Comment = ({name, post}) => {
  const [replies, setReplies] = useState([])
  const [enableReply, setEnableReply] = useState(false)

  const addReply = (reply, index) => {
    const { name, post } = reply
    return <Comment name={name} post={post} key={index}/>
  }

  const Reply = () => {
    if (enableReply) {
      return (
        <div className='w-full h-full p-3 shadow-md'>
          <Input comments={replies} setComment={setReplies}/>
        </div>
      ) 
    } else {
      return (
        <></>
      )
    }
  }

  return(
    <>
      <div className='w-full h-full p-3 shadow-md'>
        <div className='text-xs'>
          <Voter />
        </div>
        <div className='text-xs mt-2 text-purple-600'> 
          {name}
        </div>
        <div className='text-sm mt-1'>
          {post}
        </div>
        
        <div>
          {replies.map((reply, index)=> addReply(reply, index))}
        </div>

        <div className='mt-1.5'>
          <button onClick={() => setEnableReply(!enableReply)} className='bg-transparent hover:bg-gray-50 rounded-md text-gray-800 font-normal py-1 w-12 text-xs'>&gt; Reply</button>
        </div>

        <Reply />
      </div>
    </>
  )
}

export default Comment