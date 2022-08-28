
export const getRandomNumber = (old:number,min:number,max:number) => {
min = Math.ceil(min);
max = Math.ceil(max);
const result = Math.floor(Math.random() * (max - min) + min);
if(result !== old){
    return result;
}else {
    //Need to use recursion there if number of dice is same need to call function again.
    getRandomNumber(old,min,max);
}
}

export const rollDice = (oldClass:string) => {
    const oldNumber = Number(oldClass.replace('show-',''));
    const randomNumber = getRandomNumber(oldNumber,1,7);
    const className = `show-${randomNumber}`;
    return className; 
}