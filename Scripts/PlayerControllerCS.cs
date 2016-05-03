using UnityEngine;
using System.Collections;
using UnityStandardAssets.CrossPlatformInput;
public class PlayerControllerCS : MonoBehaviour
{


public float moveForce = 10, boostMultiplier = 2, speed = 10.0f, rotationSpeed = 10.0f , xMin=-10.0f,xMax=10.0f,yMin=-10.0f,yMax=10.0f;

Rigidbody2D myBody;

void Start ()
{
	myBody = this.GetComponent<Rigidbody2D>();
	
}


void outofbounds()
{
	 
}
void FixedUpdate()
{
  float translation = CrossPlatformInputManager.GetAxis("Vertical") * speed;
  float rotation = CrossPlatformInputManager.GetAxis("Horizontal") * rotationSpeed;
  translation *= Time.deltaTime;
  rotation *= Time.deltaTime;
  transform.Translate (0, translation, 0);
  transform.Rotate (0, 0, -rotation);
  Vector2 moveVec = new Vector2(CrossPlatformInputManager.GetAxis("Horizontal"),CrossPlatformInputManager.GetAxis("Vertical"))* moveForce*100;
  
 
	 

	myBody.position = new Vector3(Mathf.Clamp(transform.position.x,xMin,xMax),Mathf.Clamp(transform.position.y,yMin,yMax),0);
	
	myBody.AddForce(moveVec);
	
	}
}
