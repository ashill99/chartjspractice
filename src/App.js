import logo from './logo.svg';
import './App.css';
import './script.js';
import {Chart} from 'react-chartjs-2';

function App() {
  
  const ctx = document.getElementById('myChart');

const stars = [135850, 52122, 148825, 16939, 9763];
const frameworks = ['React', 'Angular', 'Vue', 'Hyperapp', 'Omi'];

let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
       labels: frameworks,
       datasets: [{
           label: 'Popular JavaScript Frameworks',
           data: stars
           }]
    },
   });
  
   myChart.destroy();

  return (

<body>
<canvas id="myChart" width="800" height="400"></canvas>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"></script>
  <script src="script.js"></script>
</body>

  );
}

export default App;
