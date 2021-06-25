import React from 'react';
import LoginEngineer from '../components/LoginEngineer';
import RegEngineer from '../components/RegEngineer';

const EngLoginReg = () => {
    return (
        <div  className="appbackground">
            <LoginEngineer />
            <hr />
            <RegEngineer />
        </div>
    )
}

export default EngLoginReg;
