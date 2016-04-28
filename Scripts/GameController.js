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
private var playerDestroyScript : PlayerDestroybyContact;
var gameOverText: UnityEngine.UI.Text;
var finalScoreText: UnityEngine.UI.Text;
var restartText: UnityEngine.UI.Text;
var gameover: boolean;
var restart: boolean;
var finalScore: int;
function Start () {
  var playerDestroyObject : GameObject = GameObject.FindWithTag ("Player");
  if (playerDestroyObject != null)
  {
      playerDestroyScript = playerDestroyObject.GetComponent (PlayerDestroybyContact);
  }
  if (playerDestroyScript == null)
  {
      Debug.Log ("Cannot find 'PlayerDestroybyContact' script");
  }
  SpawnWaves();
  gameover=false;
  restart=false;
  gameOverText.text = "";
  finalScoreText.text = "";
  restartText.text = "";
  if(!playerDestroyScript.playerdead){
    InvokeRepeating('updateScore', 1.0, 1.0);
  }
}
function Update(){
  if(playerDestroyScript.playerdead){
    CancelInvoke('updateScore');
  }
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
