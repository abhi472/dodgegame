#pragma strict
var enemy: GameObject;
var player: GameObject;
var spawnValues: Vector3;
var enemyCount: int = 3;
var spawnWait: float = 4;
var startWait: float = 2;
var waveWait: float = 10;
var waveCount: int = 0;
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
    if(waveCount>2){
      enemyCount=5;
      spawnWait=3;
      waveWait=9;
    }else if(waveCount>5){
      enemyCount= 10;
      spawnWait=2;
      waveWait=5;
    }else if(waveCount>10){
      enemyCount= 20;
      waveWait=2;
    }else if(waveCount>15){
      enemyCount= 30;
    }
    for(var i=0; i<enemyCount;i++)
    {
      var spawnPosition = Vector3(Random.Range(-spawnValues.x,spawnValues.x),Random.Range(-spawnValues.y,spawnValues.y),spawnValues.z);
      var spawnRotation: Quaternion;
      Instantiate(enemy, spawnPosition, spawnRotation);
      yield WaitForSeconds(spawnWait);
    }
    yield WaitForSeconds(waveWait);
    ++waveCount;
    Debug.Log(waveCount);
    if(gameover){
      restartText.text="Press R for Restart";
	  restart=true;
	  if (Input.touchCount > 0)
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
