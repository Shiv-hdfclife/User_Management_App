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

  const [userList, setUserList] = useState(data);

  function handleForm(user) {

    console.log("the user :", user)

    let newUser = { id: userList.length + 1, ...user }
    console.log("the newUsrL:", newUser)
    // console.log("The list:", userList);
    setUserList((userList) => [...userList, newUser])
  }

  useEffect(() => {
    console.log("The list:", userList);
  }, [userList])


  return (
    <>
      <div className='text-black text-center p-10 '>User Managment App</div>
      <UserList data={userList} />
      <AddUserForm onSubmit={handleForm} />
      <EditUserForm />
    </>
  )
}

export default App
