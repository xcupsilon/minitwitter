import { useState } from 'react'
import Input from './Input'
import Comment from './Comment'

const Post = () => {
  const [comments, setComments] = useState([])

  const addComment = (comment, index) => {
    const { name, post } = comment
    return <Comment name={name} post={post} depth={0} key={index}/>
  }

  return (
    <>
      <div className='container mx-auto w-3/5 h-full p-3 shadow-lg mb-4'>
        <div className='font-semibold'> 
          Post About Your Rolls xd!
        </div>
        <Input comments={comments} setComment={setComments} />
      </div>

      <div className='container mx-auto w-3/5'>
        {comments.map((comment, index)=> addComment(comment, index))}
      </div>
    </>


  )
}

export default Post