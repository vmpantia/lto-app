//Component Properties
import { SidebarButtonProps } from "./model/Poperties/ComponentProperties";

//Icons
import { UserCircleIcon, CreditCardIcon, TruckIcon, ClipboardDocumentIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/solid'

export const SidebarButtons:SidebarButtonProps[] = [
    {
        icon: <UserCircleIcon />,
        text: "Profile",
        url: "/Profile",
    },
    {
        icon: <CreditCardIcon />,
        text: "Licensing",
        url: "/Licensing",
    },
    {
        icon: <TruckIcon />,
        text: "Vechicles",
        url: "/Vechicles",
    },
    {
        icon: <ClipboardDocumentListIcon />,
        text: "Transactions",
        url: "/Transactions",
    },
    {
        icon: <ClipboardDocumentIcon />,
        text: "Documents",
        url: "/Documents",
    },
] 
