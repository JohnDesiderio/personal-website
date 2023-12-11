import React from 'react';
import Experience from '../experience';
import { IExperience } from '../types';

const company = 'Splash in the ’Boro Water Park';
const position = 'Server/Cashier';
const time_served = 'June 2019 – August 2019';
const details = [
    'Addressed customer needs with food orders and currency transactions',
    'Handled the deliver of food in a timely manner for the customer’s satisfaction',
    'Worked with customers to understand their needs and their family needs with regard to health limitations',
    'Responsible for managing a cash register where I kept the correct amount of money every time',
]

const ServerCashier:React.FC<{}> = () => {
    const props: IExperience = {
        company: company, 
        position: position,
        time_served: time_served,
        details: details,
        sh: 'server-cashier',
    }

    return (<Experience {...props}/>)
}

export default ServerCashier;