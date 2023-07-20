import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import appLogo from '../assets/app-logo.png';
import '../Common.css';


const HomePage = () => {
  const navigate = useNavigate();

  return (
		<div>
			<h1>Home page</h1>
			
			<Button
				color="cyan"
				appearance="primary"
				onClick={() => {
					navigate("/about");
				}}
			>
				About
			</Button>
		</div>
  );
}
//
export default HomePage;
