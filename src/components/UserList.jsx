import UserItem from "./UserItem";

export default function UserList({ data }) {

    // console.log("The data inside the userList:", data)
    return (
        <>
            <div className="text-center">User list</div>
            <UserItem data={data} />
        </>
    )
}