//Components
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Layout = () => {
  return (
    <>
      <Header />
      <div className='inline-flex w-full'>
        <Sidebar />
        <div className='m-3'>
          Content
        </div>
      </div>
    </>
  )
}

export default Layout