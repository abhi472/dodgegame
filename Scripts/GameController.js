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
var gameOverText: UnityEngine.UI.Text;
var finalScoreText: UnityEngine.UI.Text;
var restartText: UnityEngine.UI.Text;
var gameover: boolean;
var restart: boolean;
var finalScore: int;
function Start () {
  SpawnWaves();
  gameover=false;
  restart=false;
  gameOverText.text = "";
  finalScoreText.text = "";
  restartText.text = "";
  if(!playerDestroyScript.playerdead){
    Debug.Log('Alive');
    InvokeRepeating('updateScore', 1.0, 1.0);
  }
}
function Update(){
  // Debug.Log(playerDestroyScript.playerdead);
  if(restart){
    if(Input.GetKeyDown (KeyCode.R)){
      Application.LoadLevel(Application.loadedLevel);
    }
  }
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

    if(gameover){
      restartText.text="Press R for Restart";
      restart=true;
      break;
    }
  }
}

function updateScore(){
  score += 10;
  scoreText.text = "Score: " + score;
}
function GameOver(){
  finalScore=score;
  gameOverText.text = "Game Over!";
  gameover = true;
  finalScoreText.text ="Your Score: " + finalScore;
}
