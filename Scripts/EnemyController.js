#pragma strict

var shot : GameObject;
var shotSpawn : Transform;
var fireRate : float;
var nextFire : float;
function Update () {
  if(Input.GetButton("Fire1") && Time.time > nextFire)
  {
    nextFire = Time.time + fireRate;
    Instantiate (shot, shotSpawn.position, shotSpawn.rotation);
  }
}
