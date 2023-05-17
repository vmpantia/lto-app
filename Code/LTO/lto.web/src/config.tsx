import UserCircleIcon from "@heroicons/react/24/solid/UserCircleIcon";
import { SidebarButtonProps } from "./model/Poperties/ComponentProperties";
import CreditCardIcon from "@heroicons/react/24/solid/CreditCardIcon";
import TruckIcon from "@heroicons/react/24/solid/TruckIcon";
import ClipboardDocumentListIcon from "@heroicons/react/24/solid/ClipboardDocumentListIcon";
import ClipboardDocumentIcon from "@heroicons/react/24/solid/ClipboardDocumentIcon";

export const SidebarButtons:SidebarButtonProps[] = [
    {
        Icon: <UserCircleIcon />,
        Text: "Profile",
        Url: "/Profile",
    },
    {
        Icon: <CreditCardIcon />,
        Text: "Licensing",
        Url: "/Licensing",
    },
    {
        Icon: <TruckIcon />,
        Text: "Vechicle",
        Url: "/Vechicle",
    },
    {
        Icon: <ClipboardDocumentListIcon />,
        Text: "Transactions",
        Url: "/Transactions",
    },
    {
        Icon: <ClipboardDocumentIcon />,
        Text: "Documents",
        Url: "/Documents",
    },
] 