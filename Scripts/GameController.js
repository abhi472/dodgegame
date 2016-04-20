#pragma strict
var enemy: GameObject;
var player: GameObject;
var spawnValues: Vector3;
var enemyCount: int;
var spawnWait: float;
var startWait: float;
var waveWait: float;
function Start () {
  SpawnPlayer();
  SpawnWaves();
}

function SpawnWaves(){
  yield WaitForSeconds(startWait);
  while(true)
  {
    for(var i=0; i<enemyCount;i++)
    {
      var spawnPosition = Vector3(Random.Range(-spawnValues.x,spawnValues.x),Random.Range(-spawnValues.y,spawnValues.y),spawnValues.z);
      var spawnRotation: Quaternion;
      Instantiate(enemy, spawnPosition, spawnRotation);
      yield WaitForSeconds(spawnWait);
    }
    yield WaitForSeconds(waveWait);
  }
}

function SpawnPlayer(){
  var playerPosition = Vector3(0,0,0);
  var playerRotation: Quaternion;
  Instantiate(player, playerPosition, playerRotation);
}
