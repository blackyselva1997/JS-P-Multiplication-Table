let a = Number(prompt("enter a Multible"));
let b = Number(prompt("enter Number"));
let i = 1;

do {
    let result = i*a;
     document.write(i,"x",a,"=",result);
     document.write("<br>"); 
     i++;
} while (i<=b);