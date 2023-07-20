import {	NavBarProps
					// ,
					// NavItemProps,
					// NavItemConfig
} from "./NavTypes"
import { NavBar } from "./NavBar"
import React from "react";


export function Footer() {
  const [currentItemId, setCurrentItemId] = React.useState<string>("0");
	const handleNavChange = (newId: string) => { setCurrentItemId(newId); }
	const itemConfigArray = [
		{ id: "0", label: "Home", route: "/home" },
		{ id: "1", label: "About", route: "/about" },
	];

	const footerNavBarProps: NavBarProps = {
		itemConfigs: itemConfigArray,
		currentId: currentItemId,
		onNavChange:	handleNavChange
	};
	
	if (footerNavBarProps.itemConfigs.length){
	}

  return (
    <div>
			<NavBar navBarProps={footerNavBarProps} />
    </div>
  )
}



/***


//import {	NavBarProps
					// ,
					// NavItemProps,
					// NavItemConfig
//} from "./NavTypes"
//import { NavBar } from "./NavBar"
//import React from "react";



  //const [navBarPropsState, setNavBarPropsState] = React.useState();
	const defaultItemId: string = "0";
	const footerNavBarProps: NavBarProps = {
		itemConfigs: [
			{ id: defaultItemId,	label: "Home",	route: "/home" },
			{ id: "1",						label: "About",	route: "/about" },
		],
		currentId:		defaultItemId,
		onNavChange:	(newId: string) => {if (!!newId) return}
	};
  const [navBarPropsState, setNavBarPropsState] = React.useState<NavBarProps>(footerNavBarProps);
	
	const handleNavChange = (newId: string) => {
		setNavBarPropsState({...navBarPropsState, currentId: newId});
	}// handleNavChange()

	setNavBarPropsState({...navBarPropsState, onNavChange: handleNavChange});



// <NavBar navBarProps={navBarPropsState} />
// <p> footer </p>


***/