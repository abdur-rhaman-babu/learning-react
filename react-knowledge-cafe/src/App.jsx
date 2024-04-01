import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <Header/>
      <div className='md:flex md:justify-between md:w-3/4 md:mx-auto'>
        <Blogs/>
        <Bookmarks/>
      </div>
    </>
  )
}

export default App
