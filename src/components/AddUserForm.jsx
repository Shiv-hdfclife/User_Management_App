import { useState } from "react"

export default function AddUserForm({ onSubmit }) {

    const [addUser, setAddUser] = useState(false)
    const [name, setName] = useState("");
    const [role, setRole] = useState("");


    const onValSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name: name, role: role })
        setName("");
        setRole("");
    }
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="text-center"> Add user Form  </div>
                <div>
                    <button className=" p-4 bg-[#a7b7d3]" onClick={() => setAddUser(true)}>Add user</button>
                </div>
                {addUser &&
                    <form className="p-4 border-2 m-20 flex flex-col items-center justify-center" action="submit" onSubmit={onValSubmit}>Input of the form <br />
                        <input className="p-2 ml-2 border-none" type="text" placeholder="name" value={name} onChange={(e) => { setName(e.target.value) }} />
                        <input className="p-2 ml-2 border-none" type="text" placeholder="role" value={role} onChange={(e) => { setRole(e.target.value) }} />
                        <button >Submit</button>
                    </form>
                }
            </div>

        </>

    )
}