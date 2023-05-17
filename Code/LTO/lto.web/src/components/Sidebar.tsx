import { SidebarButtons } from "../config"
import SidebarButton from "./Buttons/SidebarButton"

const Sidebar = () => {
  return (
    <div className='w-52 m-3'>
        <ul>
            {
                SidebarButtons.map(btn => {
                    return (
                        <SidebarButton icon={btn.icon} text={btn.text} url={btn.url} />
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Sidebar