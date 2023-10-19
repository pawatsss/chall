import './App.css'
import { useState, useEffect } from 'react'

import Header from './com/head/i'
import UserList from './com/user/i'

import userData from './userData'

function App() {
  const [showData, setShowData] = useState(userData)
  const [keyword, setKeyword] = useState('')

  const onSetKeyword = (e) => {
    setKeyword(e.target.value)
  }

  useEffect(() => {
    let newData = userData.filter((item) => {
      return item.first_name
        .toLowerCase()
        .includes(keyword.toLocaleLowerCase())
    })
    setShowData(newData)
  }, [keyword])

  return (
    <div className='container'>
      <Header keyword={keyword} setKeyword={onSetKeyword} />
      <UserList showData={showData} />
    </div>
  )
}

export default App

