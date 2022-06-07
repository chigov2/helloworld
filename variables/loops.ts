let review : number[] = [3,4,5,6,7,12];
let total:number = 0;

for (let i=0; i < review.length; i++){
    console.log(review[i]);
    total += review[i];
}
let average : number = total / review.length;
console.log(total);
console.log(average);

let sports: string[] = ["Golf","Football", "tennis",'swimming']

for (let sport of sports){
    if(sport == "Football"){
        console.log(sport + " like it")
    }else
    console.log(sport);
}