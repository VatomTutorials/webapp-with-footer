import {	NavBarProps
					// ,
					// NavItemProps,
					// NavItemConfig
} from "./NavTypes"
import React from "react";



export function Header() {
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
			<p> header </p>
    </div>
  )
}



/***

	const footerNavBarProps: NavBarProps = {
		itemConfigs: [
			{ id: "0", label: "Home", route: "/home" },
			{ id: "1", label: "About", route: "/about" },
		],
		onNavChange:	handleNavChange
	};
	
	if (currentItemId){
	}
	if (footerNavBarProps.itemConfigs.length){
	}

***/