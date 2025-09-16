import { useState } from "react"
import EditUserForm from "./EditUserForm"

export default function UserItem({ data }) {
    const [openEdit, setOpenEdit] = useState(false);
    return (
        <>
            <div className="text-center">User Item</div>
            <div className="m-20 border rounded-lg items-center items-center">
                <ul className="text-center p-10 ">
                    {data.map(user => {
                        return <div className="flex flex-row justify-between " key={user.id}>
                            <span key={user.id}> {user.name} :- {user.role}</span>
                            {/* <button className="text-black border">Edit User</button> */}
                            <button > Edit User</button>
                            {openEdit && <EditUserForm id={user.id} />}
                        </div>
                    })}
                </ul>
            </div>
        </>
    )
}