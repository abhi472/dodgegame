#pragma strict
var speed : float = 10.0;
var rotationSpeed : float = 10.0;
var rb: Rigidbody2D;
var xMax: float;
var xMin: float;
var yMax: float;
var yMin: float;
function Start(){
    rb = GetComponent.<Rigidbody2D>();
}
function Update(){
  var translation : float = Input.GetAxis ("Vertical") * speed;
  var rotation : float = Input.GetAxis ("Horizontal") * rotationSpeed;

  translation *= Time.deltaTime;
  rotation *= Time.deltaTime;

  transform.Translate (translation, 0, 0);
  transform.Rotate (0, 0, -rotation);

  rb.position = new Vector3
  (
    Mathf.Clamp (rb.position.x, xMin, xMax),
    Mathf.Clamp (rb.position.y, yMin, yMax),
    0
  );
}
