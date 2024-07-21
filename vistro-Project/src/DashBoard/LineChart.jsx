import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import PieChartWithCenterLabel from './RoundChart';

export default function ChartsOverviewDemo() {
  return (

    <>

    <div className="chart">

        <div className="box">
            <p>Revenue</p>
            <p>Total Profits <span>15,000</span></p>
        <BarChart
      series={[
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
      ]}
      height={290}
      width={1000}
      xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
        </div>
    <div className="box">
    < PieChartWithCenterLabel/>
    </div>
   
    
    </div>


    </>
    
  );
}
