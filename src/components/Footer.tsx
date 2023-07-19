import {	NavBarProps
					// ,
					// NavItemProps,
					// NavItemConfig
} from "./NavTypes"
import { NavBar } from "./NavBar"
import React from "react";


export function Footer() {
  //const [navBarProps, setNavBarProps] = React.useState<NavBarProps>();
	const defaultItemId: string = "0";
	const footerNavBarProps: NavBarProps = {
		itemConfigs: [
			{ id: defaultItemId,	label: "Home",	route: "/home" },
			{ id: "1",						label: "About",	route: "/about" },
		],
		currentId:		defaultItemId,
		onNavChange:	undefined
	};
  const [navBarProps, setNavBarProps] = React.useState<NavBarProps>(footerNavBarProps);
	const handleNavChange = (id: string) => {
		setNavBarProps({...navBarProps, currentId: id});
	}// handleNavChange()
	
	setNavBarProps({...navBarProps, onNavChange: handleNavChange});

  return (
    <>
			<NavBar navBarProps={navBarProps} />
    </>
  )
}
