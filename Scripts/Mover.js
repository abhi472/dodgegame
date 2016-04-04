#pragma strict
var speed : float;

function Start () {
  GetComponent.<Rigidbody2D>().velocity = transform.up * speed;
}
