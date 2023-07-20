import { NavItemProps } from "./NavTypes"
//import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';


interface PropsContainer {
  navItemProps:		NavItemProps;
}


export function NavItem({ navItemProps }: PropsContainer) {
  return (
    <>
      <Button
      	key={navItemProps.config.id}
				color="cyan"
      	className="btn"
      >
      	{navItemProps.config.label}
      </Button>
    </>
  )
}


//				appearance="primary"
