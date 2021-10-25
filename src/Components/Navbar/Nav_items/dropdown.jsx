import { FaUserCog } from "react-icons/fa";
import { CgPushChevronLeftR } from "react-icons/cg";
import { BiChevronRightSquare } from "react-icons/bi";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./items.css";

function DropdownMenu() {
	const [activeMenu, setActiveMenu] = useState("main");
	const [menuHeight, setMenuHeight] = useState(null);

	function calcheight(el) {
		const height = el.offsetHeight;
		setMenuHeight(height);
	}

	function DropdownItem(props) {
		return (
			<a
				href='#'
				className='drop'
				onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
				<span className='icon-button'>{props.leftIcon}</span>
				{props.children}
				<span className='right-icon'>{props.rightIcon}</span>
			</a>
		);
	}

	return (
		<div className='dropdown' style={{ height: menuHeight }}>
			<CSSTransition
				in={activeMenu === "main"}
				unmountOnExit
				timeout={500}
				classNames='menu-primary'
				onEnter={calcheight}>
				<div className='menu'>
					<DropdownItem>My Profile</DropdownItem>
					<DropdownItem
						leftIcon={<FaUserCog />}
						rightIcon={<BiChevronRightSquare />}
						goToMenu='settings'>
						Settings
					</DropdownItem>
				</div>
			</CSSTransition>

			<CSSTransition
				in={activeMenu === "settings"}
				unmountOnExit
				timeout={500}
				classNames='menu-secondary'>
				<div className='menu'>
					<DropdownItem
						leftIcon={<CgPushChevronLeftR />}
						goToMenu='main'></DropdownItem>
					<DropdownItem>Many</DropdownItem>
					<DropdownItem>Many</DropdownItem>
					<DropdownItem>Many</DropdownItem>
					<DropdownItem>Many</DropdownItem>
					<DropdownItem>Many</DropdownItem>
					<DropdownItem>Many</DropdownItem>
				</div>
			</CSSTransition>
		</div>
	);
}

export default DropdownMenu;
