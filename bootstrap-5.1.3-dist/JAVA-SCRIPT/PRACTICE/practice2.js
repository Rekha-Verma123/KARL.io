// ...............fun1......swap data onclick.........
// function swap_fun() {
//     var box = document.getElementById('box1').innerHTML;
//     var xob = document.getElementById('box2').innerHTML;
//     document.getElementById('box1').innerHTML = xob;
//     document.getElementById('box2').innerHTML = box;
// }
//  ..................p tag................. 

/*function input(){
  user_name = document.getElementById('name_name').value;
  user_age = document.getElementById('age_age').value;
  document.getElementById('xyz').innerHTML = "my name is "+ user_name+" and age is "+user_age;
}*/

/*.................html selection by tag................*/

/*var data1 = document.getElementsByTagName("p");
// document.getElementById('demo').innerHTML = "this is the inside data of p tag " + data1[0].innerHTML;

document.getElementById('demo').innerHTML = "this is the inside data of p tag " + data1[1].innerHTML;*/

// <!-- .................html selection by tag and id................ -->

const x = document.getElementById('demo');
const y = x.getElementsByTagName("p");
document.getElementById('trial').innerHTML = "this is the trial "+ y[2].innerHTML;