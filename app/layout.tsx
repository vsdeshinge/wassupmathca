import type {Metadata} from "next";import "./globals.css";import {SmoothScroll} from "@/components/layout/SmoothScroll";
const siteUrl=process.env.NEXT_PUBLIC_SITE_URL;
export const metadata:Metadata={
 ...(siteUrl?{metadataBase:new URL(siteUrl)}:{}),
 title:{default:"Wassup Matcha | Matcha Café in HSR Layout, Bengaluru",template:"%s | Wassup Matcha"},
 description:"Explore Wassup Matcha in HSR Layout, Bengaluru. Discover vanilla, strawberry, white chocolate, date pistachio and signature matcha drinks, coffee favourites, café stories and directions.",
 alternates:siteUrl?{canonical:"/"}:undefined,
 keywords:["Wassup Matcha","matcha cafe Bengaluru","matcha café Bangalore","matcha HSR Layout","matcha near me","strawberry matcha Bengaluru","vanilla matcha","matcha drinks","coffee shop HSR Layout","matcha bar Bengaluru"],
 openGraph:{type:"website",siteName:"Wassup Matcha",title:"Wassup Matcha | Matcha Café Bengaluru",description:"Matcha drinks, coffee favourites, stories and directions in HSR Layout, Bengaluru.",images:["/logo/wassup-matcha-combination.png"]},
 twitter:{card:"summary_large_image"},
 robots:{index:true,follow:true},icons:{icon:"/icon.png",shortcut:"/icon.png",apple:"/icon.png"},
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body><SmoothScroll/>{children}</body></html>}
