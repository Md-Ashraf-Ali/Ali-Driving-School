import React from 'react';
import DrivingSafe from '../../../Images/driver.png';
import steering from '../../../Images/steering.png';
import DrivingLicense from '../../../Images/driving-license.png';
import DrivingMetarial from '../../../Images/driving-metarial.jpg';
import InfoCard from '../InfoCard/InfoCard';
import './DrivingInfo.css';

const infoData = [
    {
        
        title:'Learn Basics Of Driving Safely',
        description:'Nunc quam ar pretium quis lobortis sel consequat conse tetur diam nuc bibend.',
        backgroundColor:'primary',
        img : DrivingSafe
    },
    {
        img : steering,
        title:'Virtual Classroom Training Facility',
        description:'Nunc quam ar pretium quis lobortis sel consequat conse tetur diam nuc bibend.',
        backgroundColor:'success'
    },
    {
        img : DrivingLicense,
        title:'Fully Insured,Licensed & Bonded',
        description:'Nunc quam ar pretium quis lobortis sel consequat conse tetur diam nuc bibend.',
        backgroundColor:'primary'
    },
    {
        img : DrivingMetarial,
        title:'Free Informational Videos & Materials',
        description:'Nunc quam ar pretium quis lobortis sel consequat conse tetur diam nuc bibend.',
        backgroundColor:'success'
    }
]

const DrivingInfo = () => {
    return (
        <section className="row infoDesign">
            {
                infoData.map(info=><InfoCard info={info}></InfoCard>)
            }
            
        </section>
    );
};

export default DrivingInfo;