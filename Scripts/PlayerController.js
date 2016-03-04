#pragma strict

var speed : float = 100.0;
var rotation: float;
var rb: Rigidbody2D;
function Start(){
    rb = GetComponent.<Rigidbody2D>();
}

function FixedUpdate(){
  var moveHorizontal : float = Input.GetAxis ("Horizontal");
  var moveVertical : float = Input.GetAxis ("Vertical");
  var movement = Vector2(moveHorizontal, moveVertical);
  rb.AddForce (movement * speed);

}
