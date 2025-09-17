export default function UserItem({ data, onSubmit }) {

    function handleid(id) {
        console.log("the id from userItem:", id)
        onSubmit(id)
    }
    return (
        <>
            <div className="m-20 border rounded-lg items-center items-center">
                <ul className="text-center p-10 ">
                    {data.map(user => {
                        return <div className="flex flex-row justify-between m-2 " key={user.id}>
                            <span key={user.id}> {user.name} :- {user.role}</span>
                            <button className="border rounded-md px-2 bg-emerald-500 " onClick={() => handleid(user.id)} > Edit</button>
                            {/* {openEdit && <EditUserForm id={user.id} />} */}
                        </div>
                    })}
                </ul>
            </div>
        </>
    )
}