import { ReactNode } from "react";

export interface SidebarButtonProps {
    icon:ReactNode;
    text:string;
    url:string;
}

export interface PrivateRouteProps {
    children:ReactNode;
}

export interface PageTitleProps {
    icon:ReactNode;
    title:string;
    description:string;
}

export interface BadgeProps {
    description:string;
    type:string;
}