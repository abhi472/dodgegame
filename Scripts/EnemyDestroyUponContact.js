#pragma strict
var enemyExplosion: GameObject;
function OnTriggerEnter2D (other : Collider2D) {
    if(other.tag == "enemyfire"){
      Instantiate(enemyExplosion, transform.position, transform.rotation);
  		Destroy(other.gameObject);
      Destroy(gameObject);
    }
}
