#pragma strict
var playerExplosion: GameObject;
function OnTriggerEnter2D (other : Collider2D) {
    if(other.tag == "enemyfire"){
      Instantiate(playerExplosion, transform.position, transform.rotation);
  		Destroy(other.gameObject);
      Destroy(gameObject);
    }
	}
