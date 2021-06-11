import React, {  useState } from "react";

import Desktop from './Desktop';
import Mobile from './Mobile';

export default function Sale() {
    const [width, setWidth] = useState(window.innerWidth);

    return width > 640 ?  <Desktop/> : <Mobile/>
}
