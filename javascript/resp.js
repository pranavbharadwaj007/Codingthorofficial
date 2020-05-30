
var d=new Date();
let foot=document.getElementById('foot');
let footercon=`<small>&copy; Copyright ${d.getFullYear()}, Coding Thor</small>`;
foot.innerHTML=footercon;




burger =document.querySelector('.burger');
navbar =document.querySelector('.navbar');
navlist =document.querySelector('.nav-list');
rightnav =document.querySelector('.right-nav');
burger.addEventListener('click',()=>{
rightnav.classList.toggle('v-class-resp');
navlist.classList.toggle('v-class-resp');
navbar.classList.toggle('h-nav-resp');
})