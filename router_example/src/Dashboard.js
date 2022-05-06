import pic1 from "./image3.jpeg"
import './Dashboard.css'
function Dashboard() {
  function img(e){

e.target.style.background = 'green';
  }
  function changeColor(e) {
    e.target.style.background = " aquamarine";
  }
    return (
      <div>
        <h2>Dashboard</h2>
        <img src={pic1} />
        <div>
          <button onClick={img} onMouseOut={changeColor}>click me</button>
          
        </div>
      </div>
    );
  }

export default Dashboard;