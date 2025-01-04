"use client"

import React from 'react';
import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required components
Chart.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
    accounts: any[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ accounts }) => {
    const data = {
        datasets: [
            {
                label: 'Bank',
                data: [123, 4567, 89012],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3']
    }

    return (
        <Doughnut
            data={data}
            options={{
                cutout: '70%',
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom'
                    }
                }
            }}
        />
    );
};

export default DoughnutChart;