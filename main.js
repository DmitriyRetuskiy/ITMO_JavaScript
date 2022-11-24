
strHi = window.prompt("Введите ваше имя: ","ваше имя");
 
function f_Lode()
{
 document.getElementById('pHi').innerHTML = strHi;
} 

function f_Click()
{
 // alert('asd');
 var
  blAnsver = confirm("Начать заново?");
  
  if(blAnsver == true)
  {
   blAnsver = confirm("Не надоело?"); 
  }	  
  
  if(blAnsver == true)
  {
   location.reload();
  }	
   
}
