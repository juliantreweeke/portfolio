

$(document).ready(function(){

  var myp5 = new p5(blocko, 'sketch1');

  $('.circles').click(function(){
    $('#sketch1').empty();

    var myp5 = new p5(s, 'sketch1');
    $(window).scrollTop($('#home').offset().top);
  })

  $('.blocks').click(function(){
    $('#sketch1').empty();
    var myp5 = new p5(blocko, 'sketch1');
    $(window).scrollTop($('#home').offset().top);
  })

  $('.triangles').click(function(){
    $('#sketch1').empty();
    var myp5 = new p5(triangle, 'sketch1');
    $(window).scrollTop($('#home').offset().top);
  })

  $('.off').click(function(){
    $('#sketch1').empty();
  })

  $('a').click(function(){
    $('#sketch1').empty();
    var myp5 = new p5(blocko, 'sketch1');
  })

  $('.ui.dropdown')
  .dropdown();

  $('.drm-link').click(function(){
    $('.drm-modal').modal('show');
  });
  $(".drm-modal").modal({
  closable: true
  });

  $('.fraga-link').click(function(){
    $('.fraga-modal').modal('show');
  });
  $(".fraga-modal").modal({
  closable: true
  });

  $('.soundslap-link').click(function(){
    $('.soundslap-modal').modal('show');
  });
  $(".soundslap-modal").modal({
  closable: true
  });

  $('.tictactoe-link').click(function(){
    $('.tictactoe-modal').modal('show');
  });
  $(".tictactoe-modal").modal({
  closable: true
  });

  $(window).scroll(function(){
    if  ($(window).scrollTop() > 620 ){
      $('#sketch1').empty();
    }

    if  ($(window).scrollTop() < 1 ){
      $('#sketch1').empty();
      var myp5 = new p5(blocko, 'sketch1');

    }



  });



});


// function setup() {
//   var c = createCanvas(windowWidth, windowHeight);
//   c.parent('p5Div');
// };
//
//
// function draw() {
//   background('#1B1B1E');
//   var shapes = 10;
//
//   for (var i = 0; i < shapes ; i++){
//      stroke(random(50));
//      fill(0,0,random(50));
//      triangle(random(150),random(150),random(150),random(2),random(5),random(5));
//      rotate(200);
//    }
//
//    for (var i = 0; i < shapes; i++){
//      noStroke();
//      fill(0,0,random(250));
//      ellipse(random(shapes) , random(500,1000), shapes * 100, 500);
//    };
//
//    ellipse(0,0,5,[20])
//
// }

var s = function( p ) { // note...p could be any variable name
  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight * 2);
  };

  p.draw = function() {

    for (var i = 0; i < 200; i++) {

      p.stroke(0,0,p.random(25))
      p.fill(p.random(1 + i ));
      p.ellipse(p.random(p.mouseX) + i ,p.mouseY - i ,p.random(15),p.random(10));
    }
  };

};

var blocko = function( p ) {
  var y = 100;
  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight * 2);
  };

  p.draw = function() {
    // p.background("#1B1B1E");
    p.stroke(0,0,p.random(25))
    p.fill(p.random(25));
    for (var i = 0; i < 3; i++) {
      p.rect(p.mouseX,y + p.random(p.mouseY),p.random(200),p.random(50));
      p.rotate(p.random(200));
    }

  };

};


var triangle = function( p ) {
  var y = 100;
  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight * 2);
  };

  p.draw = function() {
    p.background("#1B1B1E");
    p.stroke(p.random(250))
    // p.stroke(0,0,p.random(250))
    p.fill(p.random(25));

    for (var i = 0; i < 1000 ; i++){
         p.stroke(p.random(25));
         p.fill(0,0,p.random(150));
         p.triangle(p.mouseX,p.random(p.mouseY),p.random(15) + p.mouseX,p.random(2),p.random(200,500),p.random(5));
         p.rotate(200);
       }


  };

};







// var myp5 = new p5(s, 'sketch1');


//
// var s2 = function( p ) { // p could be any variable name
//   var x = 1000;
//   var y = 100;
//   p.setup = function() {
//     p.createCanvas(p.windowWidth, p.windowHeight * 2);
//   };
//
//   p.draw = function() {
//     p.background("#FFFFFF");
//     p.stroke(0,0,p.random(25))
//     p.fill(p.random(25));
//     for (var i = 0; i < 3; i++) {
//       p.rect(p.random(300),y + p.random(1000),p.random(200),p.random(50));
//       p.rotate(p.random(200));
//     }
//
//   };
// };
// var myp5 = new p5(s2, 'sketch2');
