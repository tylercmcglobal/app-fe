import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

interface ChartProps {
  labels: string[];
  datasets: {
    label: string,
    backgroundColor: string[],
    borderColor: string,
    borderWidth: number,
    data: number[]
  }[]
}

const BarChart = (props: { chartData: ChartProps }) => {
  const { chartData } = props;
  return (
    <div className="chart-container" style={{width: '1200px'}}>
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Number of click on button",
              font: {
                size: 20
              }
            },
            legend: {
              display: false
            },
          },
          scales: {
            x: {
              ticks: {
                font: {
                  size: 16
                }
              }
            },
            y: {
              min: 0,
              max: 30,
              ticks: {
                stepSize: 1,
                font: {
                  size: 16
                }
              } 
            }
          }
        }}
      />
    </div>
  );
};

export default BarChart