const parkinglot = {
    id: 'parkinglot',
    name: 'Parking Lot',
    map: {
        top: '10%',
        left: '10%',
    },
    image: '',
    description: 'After parking your car, you make your way across the parking lot toward the building. Suddenly, you hear screeching tires, and look back to see Meredith in her van, careening right at you.',
    choices: [{
        id: 'choice-1',
        description: 'You jump out of the way.',
        result: 'Result of choice',
        points: 10,
    }, {
        id: 'choice-2',
        description: 'You stare her down, willing her with your mind to stop.',
        result: 'Result of choice',
        points: 5,
    }, {
        id: 'choice-2',
        description: 'You accept your fate, and curl up on the ground in a fetal position',
        result: 'Result of choice',
        points: 0,
    }]
};

const conference = {
    id: 'conference',
    name: 'Conference Room',
    map: {
        top: '10%',
        left: '10%',
    },
    image: '',
    description: '"Ok, everybody! Conference room, now!" Michael yells. Oh boy, not another boring conference. You wonder what ridiculous topic Michael has to go over today.',
    choices: [{
        id: 'choice-1',
        description: 'You bring your crossword puzzle book in case it\'s boring',
        result: 'Result of choice',
        points: 0,
    }, {
        id: 'choice-2',
        description: 'Michael is the best boss, you\'ll support him whatever the meeting topic is.',
        result: 'Result of choice',
        points: 10,
    }, {
        id: 'choice-2',
        description: 'You look to see where Jim is sitting.',
        result: 'Result of choice',
        points: 0,
    }]
};

export const levels = [
    parkinglot,
    conference
];