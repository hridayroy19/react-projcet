/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Bloge from './components/Bloges/Bloge'
import Bookmark from './components/Booksmark/Bookmark'
import Header from './components/Header/Header'
function App() {
 const [ bookmarks, setBookmarks] = useState([])
  const handelAddBookmark = blog =>{
  console.log("all click");
  }

  return (


    <>

    <Header></Header>
    <div className=' md:flex justify-between max-w-7xl mx-auto'  >
    <Bloge handelAddBookmark={handelAddBookmark} ></Bloge>
<Bookmark></Bookmark>

    </div>
    

   


    </>

  )
}

export default App
