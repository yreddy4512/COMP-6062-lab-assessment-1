//Assigning name and number
const studentFullName= 'Yeswanth Reddy';
const studentNumber='1193171';

//To print the output to the console
console.log('${studentFullName} - ${studentNumber}');
 
//to access h1 and assign variables in header content
const headerContent=document.querySelector("h1");

//innerhtml to update the name and number
headerContent.innerHTML= `${studentFullName} - ${studentNumber}`;

headerContent.classList.add('headingPrimary');
