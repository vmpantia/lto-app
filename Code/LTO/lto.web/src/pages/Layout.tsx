
//Icons
import { Bars3Icon, ClipboardDocumentIcon, ClipboardDocumentListIcon, CreditCardIcon, TruckIcon, UserCircleIcon } from '@heroicons/react/24/solid'

//Components
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import LinkButton from '../components/Buttons/LinkButton';

const Layout = () => {
  return (
    <>
      <Header />
      <div className='inline-flex w-full'>
        <div className='w-60 m-3'>
          <ul>
            <li><LinkButton Text='Profile' IconComponent = {<UserCircleIcon />} URL='/' /></li>
            <li><LinkButton Text='Licensing' IconComponent = {<CreditCardIcon />} URL='/' /></li>
            <li><LinkButton Text='Vehicles' IconComponent = {<TruckIcon />} URL='/' /></li>
            <li><LinkButton Text='Transactions' IconComponent = {<ClipboardDocumentListIcon />} URL='/' /></li>
            <li><LinkButton Text='Documents' IconComponent = {<ClipboardDocumentIcon />} URL='/' /></li>
          </ul>
        </div>
        <div className='m-3'>
          Content
        </div>
      </div>
    </>
  )
}

export default Layout