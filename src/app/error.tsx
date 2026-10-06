"use client";
export default function ErrorPage({reset}:{error:Error&{digest?:string};reset:()=>void}){return <main className="section"><div className="container"><h1>पृष्ठ लोड नहीं हो सका</h1><p>कृपया फिर से प्रयास करें।</p><button className="button" onClick={()=>reset()}>फिर से प्रयास करें</button></div></main>}
