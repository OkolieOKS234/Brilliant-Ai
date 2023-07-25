"use client";

import Link from "next/link";
import Image from "next/image"
import { cn } from "@/lib/utils";
import {LayoutDashboard} from "lucide-react"
import {MessageSquare} from "lucide-react"
import {ImageIcon} from "lucide-react"
import {VideoIcon} from "lucide-react"
import {MusicIcon} from "lucide-react"
import {Code} from "lucide-react"
import {StickyNoteIcon} from "lucide-react"
import {SettingsIcon} from "lucide-react"

const routes =[
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href:"/dashboard",
        color:"text-sky-500"
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href:"/conversation",
        color:"text-violet-500"

    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href:"/image",
        color:"text-pink-700"

    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href:"/video",
        color:"text-orange-700"

    },
    {
        label: "Music Generation",
        icon: MusicIcon,
        href:"/music",
        color:"text-sky-500"

    },
    {
        label: "Code Generation",
        icon: Code,
        href:"/code",
        color:"text-green-500"

    },
    {
        label: "Note Taking (Coming soon)",
        icon: StickyNoteIcon,
        href:"/notes",
        color:"text-sky-500"

    },
    {
        label: "Settings",
        icon: SettingsIcon,
        href:"/settings",
        color:"text-white"

    },
]

const Sidebar = ()=>{
    return (
<div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
<div className="px-3 py-2 flex-1">
    <Link href="/dashboard" className="flex items-center pl-3 mb-14">
     <div className="relative w-8 h-8 mr-4">
       <Image
       src="/dd.png"
       fill
       alt="s"
       />
        
     </div>
     <h1 className={cn (" font-mono font-extrabold text-3xl")}>
        Davok 
     </h1>
    </Link>
    <div>
        {routes.map((route)=>(
            <Link
            href={route.href}
            key={route.href}
            className="hover:bg-white/10 rounded-lg justify-start w-full group text-sm p-3 transition flex"
            >
                <div className="flex items-center flex-1">
<route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
{route.label}
                </div>

            </Link>
        ))}
    </div>
</div>

</div>
    );
}
export default Sidebar