import Submit from './Submit'

const Input = () => {
  let name = ''
  let post = ''

  return(
    <>
      <div class='mb-4 mt-3'>
        <input onChange={(e) => this.name = e.target.value} class='shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline' id='name' type='text' placeholder='Name...'></input>
      </div>
      <div>
        <input onChange={(e) => this.post = e.target.value} class='shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 text-sm mb-3 leading-tight focus:outline-none focus:shadow-outline' id='post' type='text' placeholder='Write a new post...'></input>
      </div>
      <Submit isValid={name && post}/>
    </>
  )

}

export default Input