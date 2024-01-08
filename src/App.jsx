// src\App.jsx

import Form from "./components/Form"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Table from "./components/Table"
import users from "./Data/users.json"
import { useState } from "react"

export default function App() {

  const [usersData, setUsersData] = useState(users)

  return (
    <div className="layout">
      <header>
        <Header />
      </header>
      <main>
        <img className="fox" src="./fox.png" alt="fox" />
        <div className="content">
          <Form usersData={usersData} setUsersData={setUsersData} />
          <Table usersData={usersData} />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
