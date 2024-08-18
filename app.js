let output=document.getElementById("outputbox");
let buttons=document.querySelectorAll("button");
let btnArray=Array.from(buttons);
let outputVAL="";
btnArray.forEach(btn => {
    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="DEL"){
            outputVAL=outputVAL.substring(0,outputVAL.length-1);
            output.value=outputVAL;
        }
        else if(e.target.innerHTML=="AC"){
        //    outputVAL=outputVAL.substring(0,output.length-1)
        //    output.value=outputVAL;
        outputVAL=""
        output.value=outputVAL;
        }
        else if(e.target.innerHTML=="="){
              outputVAL=eval(outputVAL);
              output.value=outputVAL;
        }
        else{
        outputVAL+=e.target.innerHTML;
        output.value=outputVAL;
        }
    })
});