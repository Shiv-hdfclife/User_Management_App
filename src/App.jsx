import { useEffect, useLayoutEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './components/UserList'
import AddUserForm from './components/AddUserForm'
import EditUserForm from './components/EditUserForm'

function App() {
  const data = [
    { id: 1, name: "Alice", role: "Admin" },
    { id: 2, name: "Bob", role: "Editor" }
  ]
  const [openEdit, setOpenEdit] = useState(false);
  const [id, setId] = useState();
  const [userList, setUserList] = useState(data);

  function handleForm(user) {

    console.log("the user :", user)

    let newUser = { id: userList.length + 1, ...user }
    console.log("the newUsrL:", newUser)
    // console.log("The list:", userList);
    setUserList((userList) => [...userList, newUser])
  }

  function handleEditform(user) {
    console.log("the eidted user:", user)
    setOpenEdit(false);
    let updatedList = userList.map((u) => {
      if (u.id === user.id) {
        return { ...u, name: user.name, role: user.role }
      }
      return u;
    })
    setUserList(updatedList);
    console.log("the updated list:", updatedList)
  }

  function handleEdit(id) {
    console.log("user to edit from userlist", id);
    setOpenEdit(true);
    setId(id);
  }

  useEffect(() => {
    console.log("The list:", userList);
  }, [userList])


  return (
    <>
      <div className='text-black text-center p-10 '>User Managment App</div>
      <UserList data={userList} onSubmit={handleEdit} />
      <AddUserForm onSubmit={handleForm} />
      {openEdit && <EditUserForm id={id} onSubmit={handleEditform} />}
    </>
  )
}

export default App
