import React from "react";
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import Navbar from "./Navbar/Navbar";

const assignmentMarks = [
    {
        name: "A-1",
        marks: 57
    },
    {
        name: "A-2",
        marks: 59,
    },
    {
        name: "A-3",
        marks: 59
    },
    {
        name: "A-4",
        marks: 60
    },
    {
        name: "A-5",
        marks: 60
    },
    {
        name: "A-6",
        marks: 60
    },
    {
        name: "A-7",
        marks: 60
    },
    {
        name: "A-8",
        marks: 60
    }
];


const Statistics = () => {
    return (
        <section className="">
            <article className='bg-[url("/public/vector.png")] bg-repeat-space bg-bottom bg-indigo-50 bg-clip-content'>
            <Navbar />
            <h2 className="text-lg md:text-2xl font-semibold text-center pt-2 pb-10">All the assignment marks that I have got so far</h2>
            </article>
            <article className="md:w-[60%] mx-auto h-[400px]">
                <ResponsiveContainer height='100%' width='100%'>
                <AreaChart
                    data={assignmentMarks}
                    syncId="anyId"
                    margin={{
                        top: 100,
                        right: 50,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
                </ResponsiveContainer>
            </article>
        </section>
    );
};

export default Statistics;