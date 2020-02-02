import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    // For testing purpose
    // if (true) {
    //     throw new Error('You DIED')
    // }
    console.log('CardList');
    return (
        <>
            {robots.map(robot => <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />)}
        </>
    );
}

export default CardList;