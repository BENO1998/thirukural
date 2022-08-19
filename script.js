var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","disney");
input.setAttribute("placeholder","குறள் எண்");

var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="தேடுக";
button.addEventListener("click",foo);

let line1=document.createElement("div");
line1.setAttribute("id","line1");
let line2=document.createElement("div");
line2.setAttribute("id","line2");
let section=document.createElement("div");
section.setAttribute("id","section");
let chapter=document.createElement("div");
chapter.setAttribute("id","chapter");
let define=document.createElement("div");
define.setAttribute("id","define");
let define1=document.createElement("div");
define1.setAttribute("id","define1");




div.append(input,button,line1,line2,section,chapter,define,define1);
document.body.append(div);

async function foo(){
    
    var number=document.getElementById("disney").value;
    var url=`https://api-thirukkural.vercel.app/api?num=${number}`;
    
    var result=await fetch(url);
    let result1=await result.json();

    console.log(result1);

    section.innerHTML=`பால்:${result1.sect_tam}`
    chapter.innerHTML=`அதிகாரம்:${result1.chap_tam}`
    line1.innerHTML=`${result1.line1}`
    line2.innerHTML=`${result1.line2}`
    define.innerHTML=`விளக்கம்:${result1.tam_exp}`
    define1.innerHTML=`Explanation:${result1.eng_exp}`
   

}