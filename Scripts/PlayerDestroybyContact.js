#pragma strict
var playerExplosion: GameObject;
var playerdead: boolean;
var playerhealth: int=100;
var playerhealthslider: UnityEngine.UI.Slider;
var playerhealthcent: UnityEngine.UI.Text;
playerhealthslider.value = playerhealth;
playerhealthcent.text = playerhealth + '%';
function OnTriggerEnter2D (other : Collider2D) {
    if(other.tag == "enemyfire"){
      playerhealth -= 10;
      playerhealthslider.value = playerhealth;
      playerhealthcent.text = playerhealth + '%';
      Destroy(other.gameObject);
      if(playerhealth<=0){
        Instantiate(playerExplosion, transform.position, transform.rotation);
    		Destroy(other.gameObject);
        Destroy(gameObject);
        playerdead=true;
      }
    }
	}
