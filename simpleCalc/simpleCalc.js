const readLine=require('readline');

const r1=readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.question('Enter a math question?',(input)=>{
    let a=input.substring(8);
    a=a.substring(0,a.length-1);
    const firstName=a.split(' ')[0];
    const seconName=a.split(' ')[2];
    const operation =s.split(' ')[1];

    let result;
    if(operation==='plus'){
        result=Number(firstName)+Number(seconName);
    }else if(operation==='minus '){
        result=Number(firstName)-Number(seconName);
    }else if(operation==='multiplied'){
        result=Number(firstName)*Number(seconName);
    }else if(operation==='divided'){
        result=Number(firstName)/Number(seconName);
    }
    console.log(firstName +' '+ operation + ' '+ seconName + ' is ' +result)
})