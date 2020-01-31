export function detectGameEndCondition(user, levels) {
    if (user.completedLevels.length === levels.length) {
        window.location = '../results/index.html';
    }
}