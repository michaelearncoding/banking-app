"use client";

import React from 'react';
import CountUp from "react-countup";

interface AnimatedCounterProps {
    amount: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ amount }) => {
    return (
        <div>
            <CountUp
                duration={2}
                decimal={","}
                prefix={"$"}
                end={amount}
            />
        </div>
    );
};

export default AnimatedCounter;