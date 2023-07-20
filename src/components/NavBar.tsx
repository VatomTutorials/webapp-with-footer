import {	NavBarProps,
					NavItemProps,
					//NavItemConfig,
					getNavItemProps_FromNavBar
} from "./NavTypes"
//import React from "react";
import { NavItem } from "./NavItem"


// ({ navBarProps }: NavBarProps)


interface PropsContainer {
  navBarProps:		NavBarProps;
}


export function NavBar({ navBarProps }: PropsContainer) {
/***/
	let itemArray: JSX.Element[] = [];
	let itemProps: NavItemProps;
	
	for (let i = 0; i < navBarProps.itemConfigs.length; i++) {
		itemProps = getNavItemProps_FromNavBar(navBarProps, i);
		itemArray.push(<NavItem
			navItemProps={itemProps}
		/>);
	}
/***/
	


  return (
    <div>
    	{itemArray}
    </div>
  )
}


	// = navBarProps.itemConfigs.map(
	//	({ id, label, route }) => ()
	// );


//       {itemArray}
// <p> footer </p>