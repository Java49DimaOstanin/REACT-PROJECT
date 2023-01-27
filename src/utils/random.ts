
 export function getRandomNumber(min:number ,max:number,isMinInclusive:boolean=true,isMaxInclusive:boolean=false):number{
    if(min == max){
        throw new Error('min may not be equaled to max');
    }
    if(max < min){
        let temp:number;
        temp = max;
        max =  min;
        min = temp;
    }
    let minInclusive:number = isMinInclusive? 0:1;
    let maxInclusive:number = isMaxInclusive? 1:0;
    max+=maxInclusive;
    min+=minInclusive;
    let randomN:number = Math.floor(Math.random()*(max - min) + min)
    
    return randomN;
}
export function getRandomMatrix(rows:number,colums:number,min:number,max:number):number[][]{
    // let matrixArr:number[] = [Math.floor(Math.random()*(rows - colums) + colums)];
    // let numberArr:number[] = [Math.floor(Math.random()*(max - min) + min)];
    
    let multArr:number[][] = [[Math.floor(Math.random()*(rows - colums) + colums)],[Math.floor(Math.random()*(max - min) + min)]];

    return multArr;
}
export function getRandomArrayElement(array:any[]):any{
    return array[Math.floor(Math.random()*array.length)];
}
export function getRandomDate(minYear:number,maxYear:number):Date{
    const minDate:Date = new Date(minYear,0);
    const maxDate:Date = new Date(maxYear,0);
    return new Date(Math.random() * (maxDate.getTime() -  minDate.getTime()) + minDate.getTime());
}