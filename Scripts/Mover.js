#pragma strict
var delay = 10.0;

function Update () {
  SeekAndDestroy();
}

function SeekAndDestroy(){
  yield WaitForSeconds(delay);
  Destroy (gameObject);
}
