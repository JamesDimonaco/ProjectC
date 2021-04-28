import { Line } from 'react-chartjs-2';


export default function LineChart({hours, chartHash}){


    return(
        <>
        
        <Line 
        height={1000}
        width={2000}
        type='Line'
        data={{
            labels: hours,
            datasets: [{
                label: 'HashRate time ',
                data: chartHash,
                borderWidth: 2,
                borderColor: "blue",
                backgroundColor: "black",
            }]
        }}
        options={{ maintainAspectRatio: false }}
        />
        
        </>
    )
}
