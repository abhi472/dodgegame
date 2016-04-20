#pragma strict

var target: Transform;
var smoothTime = 0.3;
var xOffset : float = 1.0;
var yOffset : float = 1.0;
var zOffset = 90.0;
var thisTransform : Transform;
var velocity : Vector2;
function Start(){
  thisTransform = transform;
  target = GameObject.FindGameObjectWithTag ("Player").transform;
}
function LateUpdate () {
  thisTransform.position.x = Mathf.Lerp( thisTransform.position.x, target.position.x, Time.deltaTime * smoothTime);
  thisTransform.position.y = Mathf.Lerp( thisTransform.position.y, target.position.y, Time.deltaTime * smoothTime);
}
function Update(){
  var dir: Vector3 = target.position - transform.position;
  var angle: float = Mathf.Atan2(dir.y,dir.x) * Mathf.Rad2Deg;
  transform.rotation = Quaternion.AngleAxis(angle-90, Vector3.forward);
}
