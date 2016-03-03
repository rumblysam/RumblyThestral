var mousePosition = {};

    function move(currentPosition, direction) {
        var newPosition = {};
  
        // TODO: check for direction up
        if(direction == up) {
            newPosition = {
                top: currentPosition.top -= 23,   // change 23 to adjust how far the box is moved
                left: currentPosition.left
            };
        // TODO: check for direction down
        } else if(direction == down) {
            newPosition = {
                top: currentPosition.top += 23,  // change 23 to adjust how far the box is moved
                left: currentPosition.left
            };
        // TODO: check for direction right
        } else if(direction == right) {
            newPosition = {
                top: currentPosition.top,
                left: currentPosition.left += 23  // change 23 to adjust how far the box is moved
            };
        // TODO: check for direction left
        } else if(direction == left) {
            newPosition = {
                top: currentPosition.top,
                left: currentPosition.left -= 23,  // change 23 to adjust how far the box is moved
            };
        }

        return newPosition
    }


    // do not change code
    // this is what listens for direction keys
    $(document).keydown(function(event) {
        console.log(event.keyCode);
        // sends keycode to be changed to string of up, down, left or right
        parseKeyCode(event);
    });


// only change TODOs within this function
// this is what changes keycode to string of up, down, left or right
function parseKeyCode() {
    // grabs the box on the page
    var currentPosition = $('div').offset();

    // TODO: compare event.keyCode to be equal to 38
    if (event.keyCode == 38) {
        $('div').offset(move(currentPosition, 'up'));
    // TODO: compare event.keyCode to be equal to 40
    } else if (event.keyCode == 40) {
        $('div').offset(move(currentPosition, 'down'));
    // TODO: compare event.keyCode to be equal to 37
    } else if (event.keyCode == 37) {
        $('div').offset(move(currentPosition, 'left'));
    // TODO: compare event.keyCode to be equal to 39
    } else if (event.KeyCode == 39) {
        $('div').offset(move(currentPosition, 'right'));
    }
}

// DO NOT CHANGE
// this is the code that will change the size of the box when we click the enlarge button
$("#enlarge").click(function(){
    $("div").animate({
        left: '250px',    // if you change the number this will move the box to a different position
        opacity: '0.5',   // this value can be between 0 and 1, the lower the number the more the box will fade
        height: '150px',  // if you change the number this will increase or decrease the height of the box
        width: '150px'    // if you change the number this will increase or decrease the width of the box
    });
}); 

// DO NOT CHANGE
// this is the code that will make the box follow the mouse when we click on the 'track the mouse' button
$('#mouse').click(function() {
  $(document).mousemove(function(e){
    $("div").css({
      'top': (e.pageY + 10) + 'px',
      'left': (e.pageX + 10) + 'px'
    });
  });
});

$("#mouse_off").click(function() {
    $(document).off('mousemove');
});