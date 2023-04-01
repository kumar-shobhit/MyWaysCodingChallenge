

function fizzBuzz(){
    const ph = prompt("Enter the phone number:");
    const phsum =[...ph].reduce((sum,digit)=>{
        if(!isNaN(digit)){
        return sum+Number(digit);
    }
    return sum;
    },0);
    let output="";
    for(let i=1;i<=phsum;i++){
        if(i%3===0 && i%4===0)
           output+="FizzBuzz ";
        
        else if(i%3===0)
            output+="Fizz ";
            
        
        else if (i%4==0)
            output+="Buzz ";
        
        else
            output+=i+" ";
        
    }
    console.log(output.trim());
}
fizzBuzz();
