import { useState } from "react"

const Contact = () => {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const [users, setUsers] = useState([])

    function submitHandle() {
        const newUser = {name, number}
        setUsers([...users, newUser])

        setName("")
        setNumber("")

    }



  return (

    <div className='h-80 w-50 border-4 border-red-400 flex flex-col items-center p-4 gap-2'>
        <input className='h-6 w-30 border-1' onChange={(e) => {
            setName(e.target.value)
        }} type="input" placeholder='name' value={name} />

        <input className='h-6 w-30 border-1' onChange={(e) => {
            setNumber(e.target.value)
        }} type="text" placeholder='number' value={number} />

        <button className='h-6 w-20 border-1' onClick={submitHandle}>save</button>

        

        <div className="space-y-2 max-h-40 overflow-y-auto">
            {users.map((user,idx)=> 
            <div key={idx} className="border rounded-md px-2 py-1">
                <h3 className="font-medium">{user.name}</h3>
              <p className="text-sm text-gray-600">{user.number}</p>
            </div>
            
        )}
        </div>
    </div>
  )
}

export default Contact