import Navbar from "../src/Components/Navbar/index";
import Navitems from "../src/Components/Navbar/Nav_items/index";
import { SiAcademia } from "react-icons/si";
import { SiCodeigniter } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCaretDown } from "react-icons/ai";
import DropdownMenu from "../src/Components/Navbar/Nav_items/dropdown";
import "./index.css";

function App() {
	return (
		<Navbar>
			<Navitems icon={<SiAcademia />} />
			<Navitems icon={<SiCodeigniter />} />
			<Navitems icon={<GiHamburgerMenu />} />

			<Navitems icon={<AiFillCaretDown />}>
				<DropdownMenu />
			</Navitems>
		</Navbar>
	);
}

export default App;
