import { Link } from 'react-router-dom'; 
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div>
      <div className="navbar">
        <Link to="/" className="route">
          Insert
        </Link>
        <Link to="/update" className="route">
          Update/Delete
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
