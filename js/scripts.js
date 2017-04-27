$(document).ready(function() {
  $("form.triangle").submit(function(event) {
    var side1 = $("input#side1").val();
    var side2 = $("input#side2").val();
    var side3 = $("input#side3").val();


      if ((side1  === side2) && (side2 === side3)) {
    	// equilateral;
      alert("equilateral!");
      }

      else if (
      ((side1  === side2) && (side2 !== side3)) ||
      ((side2  === side3) && (side3 !== side1)) ||
      ((side1  === side3) && (side3 !== side2))
      ) {
        alert("isosceles!");
      }

      else if (side1  !== side2 || side2 !== side3 || side1 !== side3) {
      	// scalene;
        alert("scalene!");
      }
      else if (
        side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2
      ){
        alert("not a triangle");
      }

    event.preventDefault();
  });
});
