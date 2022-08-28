
export type GameContextType = {
    classes:string[]
    rollNumber:number;
    numberToGet:string | undefined;
    setNumberToGet: React.Dispatch<React.SetStateAction<string | undefined>>,
    roll: () => void;
}