import UserCircleIcon from "@heroicons/react/24/solid/UserCircleIcon";
import { SidebarButtonProps } from "./model/Poperties/ComponentProperties";
import CreditCardIcon from "@heroicons/react/24/solid/CreditCardIcon";
import TruckIcon from "@heroicons/react/24/solid/TruckIcon";
import ClipboardDocumentListIcon from "@heroicons/react/24/solid/ClipboardDocumentListIcon";
import ClipboardDocumentIcon from "@heroicons/react/24/solid/ClipboardDocumentIcon";

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
        text: "Vechicle",
        url: "/Vechicle",
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