import { useNavigate } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import appLogo from '../assets/app-logo.png';
import '../Common.css';


const AboutPage = () => {
  const navigate = useNavigate();

  return (
		<div>
			<h1>About page</h1>
			<h3>v 0.0.001</h3>
			
			<button
				onClick={() => {
					navigate("/home");
				}}
			>
				Home
			</button>
		</div>
  );
}
//
export default AboutPage;