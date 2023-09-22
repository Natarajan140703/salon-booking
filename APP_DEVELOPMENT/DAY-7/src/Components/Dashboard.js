import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import HeaderComponent from './HeaderComponent';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 200 },
  { name: 'May', value: 700 },
  { name: 'June', value: 300 },
  { name: 'July', value: 500 },
  { name: 'August', value: 450 },
  
];
const dataa = [
  { name: 'Jan', value: 10000 },
  { name: 'Feb', value: 30000 },
  { name: 'Mar', value: 45000 },
  { name: 'Apr', value: 20000 },
  { name: 'May', value: 78000 },
  { name: 'June', value: 85000 },
  { name: 'July', value: 41000 },
  { name: 'August', value: 15000 },
  
];

const Dashboard = () => {
  return (
    <div>
    <HeaderComponent/>
    <div>
      <h2>Customers in a month</h2>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <Tooltip />
        <Legend />
      </LineChart>


      <h2>Earnings in a month</h2>
      <LineChart width={600} height={300} data={dataa}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
    </div>
  );
};

export default Dashboard;