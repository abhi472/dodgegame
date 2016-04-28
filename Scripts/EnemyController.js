#pragma strict

var shot : GameObject;
var shotSpawn : Transform;
var fireRate : float;
var nextFire : float;
private var player: Transform;
function Awake(){
var playerObject : GameObject = GameObject.FindWithTag ("Player");
player = playerObject.GetComponent(Transform);
}
function Update () {
  var dir: Vector3 = player.position - transform.position;
  var angle: float = Mathf.Atan2(dir.y,dir.x) * Mathf.Rad2Deg;
  transform.rotation = Quaternion.AngleAxis(angle-90, Vector3.forward);
  if(Random && Time.time > nextFire)
  {
    nextFire = Time.time + fireRate;
    Instantiate (shot, shotSpawn.position, shotSpawn.rotation);
    GetComponent.<AudioSource>().Play();
  }
}
