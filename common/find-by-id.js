export function findById(someArray, someId) {
    for (let index = 0; index < someArray.length; index++) {
        const item = someArray[index];
        if (item.id === someId) {
            return item;
        }
    }
    return null;
}