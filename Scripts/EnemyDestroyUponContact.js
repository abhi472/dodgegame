#pragma strict
var enemyExplosion: GameObject;
var enemyhealth: int= 30;
function OnTriggerEnter2D (other : Collider2D) {
    if(other.tag == "enemyfire"){
      enemyhealth -= 10;
      Destroy(other.gameObject);
      if(enemyhealth<=0){
        Instantiate(enemyExplosion, transform.position, transform.rotation);
    		Destroy(other.gameObject);
        Destroy(gameObject);
      }
    }
}
