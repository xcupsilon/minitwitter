import React, { useState } from 'react'
 
const Voter = () => {
  const [voteCount, setVoteCount] = useState(0)

  return (
    <div class="flex justify-center items-center h-screen">
      <button onClick={() => setVoteCount(voteCount + 1)}>
        &lt;
      </button>
      <span>{voteCount}</span>
      <button onClick={() => setVoteCount(voteCount - 1)}>
        &gt;
      </button>
    </div>
  )
}

export default Voter