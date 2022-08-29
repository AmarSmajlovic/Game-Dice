import rollDiceSound from '../../sounds/rollDiceSound.mp3';

export const getRandomNumber = (old:number,min:number,max:number) => {
min = Math.ceil(min);
max = Math.ceil(max);
const num = Math.floor(Math.random() * (max - min + 1)) + min;
//Checking if old number is same like new one, in case user click roll and dice not changing.
const final:any = num == old ? getRandomNumber(old,min,max) : num;
return final;
}

export const rollDice = (oldClass:string) => {
    const oldNumber = Number(oldClass.replace('show-',''));
    const randomNumber = getRandomNumber(oldNumber,1,6);
    const className = `show-${randomNumber}`;
    const audio = new Audio(rollDiceSound)
    audio.play();
    return className; 
}