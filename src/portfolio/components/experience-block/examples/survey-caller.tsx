import React from 'react';
import Experience from '../experience';
import { IExperience } from '../types';

const company = 'UGA SPIA';
const position = 'Survey Caller';
const time_served = 'October 2019 – April 2021';
const details = [
    'Corresponded with Georgia residents to gauge opinions on political issues',
    'Administered ~200 phone calls every 2 hours (1 shift) to residents of Georgia to find willing participants',
    'Uploaded survey answers for news publications (i.e. The Atlanta Journal Constitution)',
    'Communicated with participants about the survey and their participation',
]

const SurveyCaller:React.FC<{}> = () => {
    const props: IExperience = {
        company: company, 
        position: position,
        time_served: time_served,
        details: details,
        sh: 'survey-caller',
    }

    return (<Experience {...props}/>)
}

export default SurveyCaller;