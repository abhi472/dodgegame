#pragma strict
var enemy: GameObject;
var player: GameObject;
var spawnValues: Vector3;
var enemyCount: int;
var spawnWait: float;
var startWait: float;
var waveWait: float;
var scoreText: UnityEngine.UI.Text;
var score: int;
var spacevar: Transform;
var playerDestroyScript: PlayerDestroybyContact = spacevar.GetComponent(PlayerDestroybyContact);
function Start () {
  SpawnWaves();
  if(!playerDestroyScript.playerdead){
    Debug.Log('Alive');
    InvokeRepeating('updateScore', 1.0, 1.0);
  }
}
function Update(){
  Debug.Log(playerDestroyScript.playerdead);
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

function updateScore(){
  score += 10;
  scoreText.text = "Score: " + score;
}
