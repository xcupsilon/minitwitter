import React, { useState } from 'react'

const Voter = () => {
  const [voteCount, setVoteCount] = useState(0)

  return (
    <span className="float-right w-5">
      <button type="button" className="block" onClick={() => setVoteCount(voteCount + 1)}>
        🔺
      </button>
      <div className="ml-1 mr-1">{voteCount}</div>
      <button type="button" className="block" onClick={() => setVoteCount(voteCount - 1)}>
        🔻
      </button>
    </span>
  )
}

export default Voter
