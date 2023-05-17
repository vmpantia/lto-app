import { Link } from "react-router-dom"

//Component Properties
import { SidebarButtonProps } from "../../model/Poperties/ComponentProperties"

const SidebarButton = ({ Icon, Text, Url } : SidebarButtonProps) => {
    return (
        <Link to={Url} className='flex w-full p-2 mb-1 text-sm'>
            <div className='w-4 h-4 mt-0.5 mr-2'>
                {Icon}
            </div>
            {Text}
        </Link>
    )
}

export default SidebarButton