 

 function showTotal(){
    
        let maths = parseFloat(document.getElementById("maths").value);
        let mala  = parseFloat(document.getElementById("mala").value);
        let eng   = parseFloat(document.getElementById("eng").value);

        let sum = maths+mala+eng;

    document.getElementById("result").value =  sum +"  Marks";

    // console.log(sum);
    return sum;
 }

 function average(){
    
    let maths = parseFloat(document.getElementById("maths").value);
    let mala  = parseFloat(document.getElementById("mala").value);
    let eng   = parseFloat(document.getElementById("eng").value);

    const avg = (maths+mala+eng)/3
    document.getElementById("avrg").value = avg.toFixed(2) ;

    // console.log(avg);
    
 }

 function percentage(){
    let maths = parseFloat(document.getElementById("maths").value);
    let mala  = parseFloat(document.getElementById("mala").value);
    let eng   = parseFloat(document.getElementById("eng").value);

    const per = maths+mala+eng;

    let pTotal = per*100/150;
    document.getElementById("per").value = pTotal.toFixed(2) + "%";
   //  console.log(pTotal);
   
   
   if (pTotal > 90){
      document.getElementById("grd").value = "A+";
   }else if (pTotal <= 90 && pTotal > 80){
      document.getElementById("grd").value = "A";
   }else if(pTotal <= 80 && pTotal > 70){
      document.getElementById("grd").value = "B+";
   }else if(pTotal <= 70 && pTotal > 60){
      document.getElementById("grd").value = "B";
   }else if(pTotal <= 60 && pTotal > 50){
      document.getElementById("grd").value = "C"
   }else {
      document.getElementById("grd").value = "Need Improvement";
   }

}

 function resetBtn(){
   
   document.getElementById("maths").value="";
   document.getElementById("eng").value="";
   document.getElementById("mala").value="";
   document.getElementById("result").value="";
   document.getElementById("avrg").value="";
   document.getElementById("per").value="";
   document.getElementById("grd").value="";
 }

 

//  let a = 20;
//  let b = 30;
//  let c = 50;
//  let d = 20 + 50 + 30;

//  console.log(d);