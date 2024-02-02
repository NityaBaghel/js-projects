const input=document.getElementById("input");
const list=document.getElementById("ullist");
 //addTask function is executed each time when we write something in input box
function addTask(){
    //when we click on enter without writing anything it will display this alert
    if(input.value===''){
        alert("You must write something");
    }
    //when we write something and then click on add button this code gets executed
    else{
        //a list element is created each item 
        let li=document.createElement("li");
        //its text will be what we write in input box
        li.innerHTML=input.value;
        //then this element is appended to the ul list we created in html
        ullist.appendChild(li);
        //a span is created
        let span=document.createElement("span");
        //a cross symbol is added to this span this\u007 is code of cross
        span.innerHTML="\u00d7"
        //this cross is appended to li so whenever we add a new task  a cross symbol is added at last to delete it.
        li.appendChild(span);
        }
    input.value="";
    saveData();
}

list.addEventListener("click",function(e){
      if(e.target.tagName===  "LI"){
        e.target.classList.toggle("checked");
      }
      else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        saveData();

      }

},false);

function saveData(){
    localStorage.setItem("data",list.innerHTML);
}
function showTask(){
    list.innerHTML=localStorage.getItem("data");
}
showTask();