import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../context/socket";
import BarChart from "./chart";

const Dashboard = () => {
    const [numberOfBlueClick, setNumberOfBlueClick] = useState(0)
    const [numberOfOrangeClick, setNumberOfOrangeClick] = useState(0)
    const socket = useContext(SocketContext);
    const chartData = {
        labels: ['Orange', 'Blue'],
        datasets: [
          {
            label: 'Click count',
            backgroundColor: ['orange', 'blue'],
            borderColor: 'rgb(0, 255, 0)',
            borderWidth: 1,
            data: [numberOfOrangeClick,numberOfBlueClick]
          }
        ]
    }

    useEffect(() => {
        socket.on('orange', (data: number) => {
            setNumberOfOrangeClick(data)
        })
        socket.on('blue', (data: number) => {
            setNumberOfBlueClick(data)
        })
        
    }, [])

    return (
        <div>
            {/* <h1>Blue: {numberOfBlueClick}</h1>
            <h1>Orange: {numberOfOrangeClick}</h1> */}
            <BarChart chartData={chartData} />
        </div>
    )
}

export default Dashboard;