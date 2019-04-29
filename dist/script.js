let section5 = document.querySelector("#section-5")
console.log(section5);

function display(){
  Velocity(section5,{"opacity":1},{duration:1000,complete:hide()});
}

function hide(){
  Velocity(section5,{"opacity":0},{duration:1000,complete:display()});
}

Velocity(section5,{"opacity":[1,0]},{duration:1500,delay:2000,loop:true});


