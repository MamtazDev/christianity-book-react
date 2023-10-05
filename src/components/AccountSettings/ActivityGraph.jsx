import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import './AcountSetting.css'


const ActivityGraph = () => {
  const data = [
    {
      name: "Mon",
      Price: 20,
      RSI: 30,
      amt: 2400,
    },
    {
      name: "Tue",
      Price: 40,
      RSI: 30,
      amt: 2210,
    },
    {
      name: "Wed",
      Price: 80,
      RSI: 60,
      amt: 2290,
    },
    {
      name: "Thu",
      Price: 80,
      RSI: 90,
      amt: 2000,
    },
    {
      name: "Fri",
      Price: 100,
      RSI: 90,
      amt: 2181,
    },
    {
      name: "Sat",
      Price: 100,
      RSI: 110,
      amt: 2500,
    },
    {
      name: "Sun",
      Price: 110,
      RSI: 100,
      amt: 2100,
    },
  ];
  return (
    <div className="mb_100">
      <div className="activity">
        <h3 className="mb-5">Your Activity</h3>

        <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap mb-5">
          <div>
            <div className="d-flex align-items-center graph_gap">
              <div className="blue_dot">
                <h6></h6>
                <p>Current Week</p>
              </div>
              <div className="orange_dot">
                <h6></h6>
                <p>Previous Week </p>
              </div>
            </div>
          </div>
          <div>
            <select>
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={360}>
          <LineChart data={data}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="name" tickLine={false} axisLine={true} top={5}/>
            <YAxis axisLine={false} tickLine={false} />
            <Line
              type="monotone"
              dataKey="RSI"
              stroke="#423C6A"
              strokeWidth={4}
              fillOpacity={1}
              dot={false}
              fill="url(#colorabsent)"
            />

            <Line
              type="monotone"
              dataKey="Price"
              stroke="#FFB230"
              strokeWidth={4}
              fillOpacity={1}
              dot={false}
              fill="url(#colorpresent)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityGraph;
