import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip
  } from 'recharts';

const GraphComponent = (props) => {
    const stockhistory = props.stockhistory;

    return (
        <div className="GraphComponent" data-testid="GraphComponent">
          <LineChart
            width={500}
            height={300}
            data={stockhistory}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={['dataMin', 'dataMax']}/>
            <Tooltip />
            <Line type="monotone" dataKey="endPrice" stroke={props.isUp ? "#cc0000" : "#0000b3"} />
          </LineChart>
        </div>
      );
}

export default GraphComponent;