import { Class } from "../Class";

export type GameContextType = {
    classes:Class[]
    rollNumber:number;
    numberToGet:string | undefined;
    setNumberToGet: React.Dispatch<React.SetStateAction<string | undefined>>,
    roll: (setOpened:React.Dispatch<React.SetStateAction<boolean>>) => void;
    resetGame:() => void;
    finishedGame:boolean;
}