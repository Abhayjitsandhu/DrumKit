var i=document.querySelectorAll(".drum").length-1;
while(i>=0)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
  alert("I got clicked");
});
i--;
}
