import React, { useState } from "react";

import "./items.css";

function Navitem(props) {
	const [open, setOpen] = useState(false);

	return (
		<li className='nav-item'>
			<a href='#' className='icon-button' onClick={() => setOpen(!open)}>
				{props.icon}
			</a>
			{open && props.children}
		</li>
	);
}

export default Navitem;
