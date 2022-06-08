// console.log("WIP");

function alertButton(){
    function random(array, num) {
        var a = array;
        var t = [];
        var r = [];
        var l = a.length;
        var n = num < l ? num : l;
        while (n-- > 0) {
          var i = Math.random() * l | 0;
          r[n] = t[i] || a[i];
          --l;
          t[i] = t[l] || a[l];
        }
        return r;
      }
    
    var test_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] ;
    random(test_array, 16);
    var x = random(test_array, 16);
    // console.log("x = " + x);
    
    for (let i = 1; i < 17; i++) {
        const piece = document.querySelector(".order-" + i);
        piece.style.order = parseInt(x.shift());
      }  
    
}

// function random(array, num) {
//     var a = array;
//     var t = [];
//     var r = [];
//     var l = a.length;
//     var n = num < l ? num : l;
//     while (n-- > 0) {
//       var i = Math.random() * l | 0;
//       r[n] = t[i] || a[i];
//       --l;
//       t[i] = t[l] || a[l];
//     }
//     return r;
//   }

// var test_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] ;
// random(test_array, 16);
// var x = random(test_array, 16);
// // console.log("x = " + x);

// for (let i = 1; i < 17; i++) {
//     const piece = document.querySelector(".order-" + i);
//     piece.style.order = parseInt(x.shift());
//   }  
  
// const piece01 = document.querySelector(".order-1");
// piece01.style.order = parseInt(Math.random() * 16) + 1;

// const piece02 = document.querySelector(".order-2");
// piece02.style.order = parseInt(Math.random() * 16) + 1;

// const piece03 = document.querySelector(".order-3");
// piece03.style.order = parseInt(Math.random() * 16) + 1;

// const piece04 = document.querySelector(".order-4");
// piece04.style.order = parseInt(Math.random() * 16) + 1;

// const piece05 = document.querySelector(".order-5");
// piece05.style.order = parseInt(Math.random() * 16) + 1;

// const piece06 = document.querySelector(".order-6");
// piece06.style.order = parseInt(Math.random() * 16) + 1;

// const piece07 = document.querySelector(".order-7");
// piece07.style.order = parseInt(Math.random() * 16) + 1;

// const piece08 = document.querySelector(".order-8");
// piece08.style.order = parseInt(Math.random() * 16) + 1;

// const piece09 = document.querySelector(".order-9");
// piece09.style.order = parseInt(Math.random() * 16) + 1;

// const piece10 = document.querySelector(".order-10");
// piece10.style.order = parseInt(Math.random() * 16) + 1;

// const piece11 = document.querySelector(".order-11");
// piece11.style.order = parseInt(Math.random() * 16) + 1;

// const piece12 = document.querySelector(".order-12");
// piece12.style.order = parseInt(Math.random() * 16) + 1;

// const piece13 = document.querySelector(".order-13");
// piece13.style.order = parseInt(Math.random() * 16) + 1;

// const piece14 = document.querySelector(".order-14");
// piece14.style.order = parseInt(Math.random() * 16) + 1;

// const piece15 = document.querySelector(".order-15");
// piece15.style.order = parseInt(Math.random() * 16) + 1;

// const piece16 = document.querySelector(".order-16");
// piece16.style.order = parseInt(Math.random() * 16) + 1;