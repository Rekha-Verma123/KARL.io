// var x = document.getElementById('demo1');
// console.log(x);
// console.log(x.innerHTML);
// alert(x.innerHTML);
// ........................................
// function fun1(){
//     var z = document.getElementById('demo1');
//     console.log(z);
//     alert(z.innerHTML);
// }
// function fun2(){
//     document.getElementById('demo2').innerHTML = "new_para";
// }


function swap_data(){
    var data1 = document.getElementById('div1').innerHTML;
    var data2 = document.getElementById('div2').innerHTML;
    document.getElementById('div1').innerHTML =data2;
    document.getElementById('div2').innerHTML =data1;
}

// ................................
// function read_input_value(){
//     var user_input = document.getElementById('name_input').value;
//     alert(user_input);  
// }
// ...................................
/* function stri_concat(){
    var user_input_name = document.getElementById('name_input_s').value;
    var user_input_age = document.getElementById('age_input').value;
    document.getElementById('xyz').innerHTML = "my name is "+user_input_name+" and age is "+user_input_age;

 }*/
 