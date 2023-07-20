import {	NavBarProps } from "./NavTypes"
import { NavBar } from "./NavBar"
import React from "react";
import { useNavigate } from "react-router-dom";
import '../Common.css';


export function Footer() {
  const [currentRoute, setCurrentRoute] = React.useState<string>("/home");
  const navigate = useNavigate();
	const handleNavChange = (newRoute: string) => {
		setCurrentRoute(newRoute);
		navigate(newRoute);
	}
	const itemConfigArray = [
		{ label: "Home", route: "/home" },
		{ label: "About", route: "/about" },
	];

	const footerNavBarProps: NavBarProps = {
		itemConfigs: itemConfigArray,
		currentItemRoute: currentRoute,
		onNavChange:	handleNavChange
	};
	
	if (footerNavBarProps.itemConfigs.length){
	}

  return (
    <div  className="page_footer border-box">
			<NavBar navBarProps={footerNavBarProps} />
    </div>
  )
}
