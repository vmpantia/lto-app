import { SidebarButtons } from "../config"
import SidebarButton from "./Buttons/SidebarButton"

const Sidebar = () => {
  return (
    <div className='w-52 m-3'>
        <ul>
            {
                SidebarButtons.map(btn => {
                    return (
                        <SidebarButton Icon={btn.Icon} Text={btn.Text} Url={btn.Url} />
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Sidebar