// Each section is self-contained. To change the order, move a single line below.
import {Loader} from "@/components/layout/Loader";
import {Navbar} from "@/components/layout/Navbar";
import {Hero} from "@/components/sections/01-Hero/Hero";
import {Gallery} from "@/components/sections/02-Gallery/Gallery";
import {Rewards} from "@/components/sections/03-Rewards/Rewards";
import {MenuPreview} from "@/components/sections/04-Menu/MenuPreview";
import {Blog} from "@/components/sections/05-Blog/Blog";
import {Newsletter} from "@/components/sections/06-Newsletter/Newsletter";
import {Location} from "@/components/sections/07-Location/Location";
import {Footer} from "@/components/sections/08-Footer/Footer";
const businessInfo = {
 "@context":"https://schema.org", "@type":"CafeOrCoffeeShop", "name":"Wassup Matcha",
 "description":"Matcha drinks and coffee favourites in HSR Layout, Bengaluru",
 "address":{"@type":"PostalAddress","streetAddress":"344, 6th Main Road, Sector 6, HSR Layout","addressLocality":"Bengaluru","addressRegion":"Karnataka","addressCountry":"IN"},
 "sameAs":["https://www.instagram.com/wassupmatcha_/"],
 ...(process.env.NEXT_PUBLIC_SITE_URL?{"url":process.env.NEXT_PUBLIC_SITE_URL}:{})
};
export default function Home(){return <main><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(businessInfo).replace(/</g,"\\u003c")}}/><Loader/><Navbar/><Hero/><Gallery/><Rewards/><MenuPreview/><Blog/><Newsletter/><Location/><Footer/></main>}
