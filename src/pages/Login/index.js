import React from "react";
import Mobile from './mobile';
import Desktop from './desktop';

export default function Login(){
    const width = window.innerWidth;
    const breakpoint = 620;

    return width < breakpoint ? <Mobile/> : <Desktop/>
}