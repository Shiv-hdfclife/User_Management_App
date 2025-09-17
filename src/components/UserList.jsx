import UserItem from "./UserItem";

export default function UserList({ data, onSubmit }) {
    return (
        <>
            <UserItem data={data} onSubmit={onSubmit} />
        </>
    )
}