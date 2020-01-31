import { getUser } from '../common/utils.js';
const user = getUser();

const badResult = {
    id: 'bad',
    description: `Due to your balance of ${user.points} Schrute Bucks, Dwight and Jim both think you're pathetic. They team up to play an awesome prank on you.`,
    image: '../assets/penalties/bad-penalty.gif',
};

const worseResult = {
    id: 'worse',
    description: `Due to your balance of ${user.points} Schrute Bucks, Dwight forces you into indentured servitude at Schrute Farms`,
    image: '../assets/penalties/worse-penalty.gif',
};

export const penaltiesData = [
    badResult,
    worseResult
];