import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Rechart = () => {
    const data = [
        {
          "over": "1",
          "BD": 10,
          "IND": 8,
          "amt": 3
        },
        {
          "over": "2",
          "BD": 16,
          "IND": 14,
          "amt": 1
        },
        {
          "over": "3",
          "BD": 20,
          "IND": 15,
          "amt": 2290
        },
        {
          "over": "4",
          "BD": 10,
          "IND": 12,
          "amt": 2000
        },
        {
          "over": "5",
          "BD": 13,
          "IND": 15,
          "amt": 2181
        },
        {
          "over": "6",
          "BD": 18,
          "IND": 23,
          "amt": 2500
        },
        {
          "over": "7",
          "BD": 10,
          "IND": 7,
          "amt": 2100
        }
      ]
    return (
        <div className="md:w-3/4  mx-auto">
            <LineChart width={730} height={250} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="over" />
            <YAxis />
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="IND" stroke="#8884d8" />
            <Line type="monotone" dataKey="BD" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default Rechart;