var strData = "02/12/2020";
var partesData = strData.split("/");
var data = new Date(partesData[2], partesData[1] - 1, partesData[0]);
if(data > new Date())
   document.body.innerHTML = '';