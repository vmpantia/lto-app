type Props = {
  email:string;
}

const Layout = (props:Props) => {
  const {email} = props;
  return (
    <div>
      {email}
      <button onClick={() => {
        sessionStorage.clear();
      }}>logout</button>
    </div>
  )
}

export default Layout