using UnityEngine;
using System.Collections;
using UnityStandardAssets.CrossPlatformInput;

public class PlayerControllerCS : MonoBehaviour
{


public float minX, maxX, minY, maxY;
public float moveForce = 10, boostMultiplier = 2, speed = 10.0f, rotationSpeed = 10.0f ;//, xMin=-10.0f,xMax=10.0f,yMin=-10.0f,yMax=10.0f;

Rigidbody2D myBody;

void Start ()
{
	myBody = this.GetComponent<Rigidbody2D>();
	
	
	 float camDistance = Vector3.Distance(transform.position, Camera.main.transform.position);
         Vector2 bottomCorner = Camera.main.ViewportToWorldPoint(new Vector3(0,0, camDistance));
         Vector2 topCorner = Camera.main.ViewportToWorldPoint(new Vector3(1,1, camDistance));
         
         minX = bottomCorner.x;
         maxX = topCorner.x;
         minY = bottomCorner.y;
         maxY = topCorner.y;
     
	
}


void outofbounds()
{
	 
}

 void Update(){
 
         // Get current position
         Vector3 pos = transform.position;
 
         // Horizontal contraint
         if(pos.x < minX) pos.x = minX;
         if(pos.x > maxX) pos.x = maxX;
 
         // vertical contraint
         if(pos.y < minY) pos.y = minY;
         if(pos.y > maxY) pos.y = maxY;
 
         // Update position
         transform.position = pos;
     }
void FixedUpdate()
{
	//float x = CrossPlatformInputManager.GetAxis ("Horizontal");
    //float y = CrossPlatformInputManager.GetAxis ("Vertical");
        
     // Vector3 movement = new Vector3 (moveHorizontal, moveVertical,0f);
	//myBody.velocity = movement * speed;
	
	
  float translation = CrossPlatformInputManager.GetAxis("Vertical")*speed*1.5f;
  //float translation2 = CrossPlatformInputManager.GetAxis("Horizontal")*speed*1.5f;
  float rotation = CrossPlatformInputManager.GetAxis("Horizontal") * rotationSpeed*5;
  
 
 
 translation *= Time.deltaTime;
  //translation2 *= Time.deltaTime;
  rotation *= Time.deltaTime;
  transform.Translate (rotation, translation, 0);
  // if (x != 0.0f || y != 0.0f) {
    // float angle = Mathf.Atan2(y, x) * Mathf.Rad2Deg;
     //transform.rotation = Quaternion.AngleAxis(90.0f - angle, Vector3.up);
 //}
  transform.Rotate (0, 0, -rotation);
  
 //  Vector3 pos = transform.position;
 //transform.Translate(new Vector3(CrossPlatformInputManager.GetAxis("Horizontal"), CrossPlatformInputManager.GetAxis("Vertical"), 0.0f), 0);
 //Vector3 controllerTargetPos = transform.position;
 //Vector3 fwd = controllerTargetPos - pos;
 //fwd.Normalize();
 //transform.up = fwd;
 //transform.position = pos;
 //transform.rotation = Quaternion.Euler(0.0f, 0.0f, transform.eulerAngles.z);
  
 Vector2 moveVec = new Vector2(CrossPlatformInputManager.GetAxis("Horizontal"),CrossPlatformInputManager.GetAxis("Vertical"))*moveForce;
  

	 

	myBody.position = new Vector3(Mathf.Clamp(myBody.position.x,minX,maxX),Mathf.Clamp(myBody.position.y,minY,maxY),0);
	
	//myBody.AddForce(moveVec);
	
	}
}
