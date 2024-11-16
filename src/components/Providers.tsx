import * as React from "react";

// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/system";
import { ReactNode } from "react";

export default function Providers({
    children,
}:{
    children:ReactNode;
}){
    return (
        <NextUIProvider>{children}</NextUIProvider>
    )
}