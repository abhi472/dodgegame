#pragma strict

var speed : float = 100.0;
// var rotation: float;
// var turnSpeed: float = 100.0;
var rb: Rigidbody2D;
function Start(){
    rb = GetComponent.<Rigidbody2D>();
}

function FixedUpdate(){
  var moveHorizontal : float = Input.GetAxis ("Horizontal");
  var moveVertical : float = Input.GetAxis ("Vertical");
  var movement = Vector2(0.0f, 0.0f);
  rb.velocity = movement * speed;
  if (Input.GetKeyDown ("left")){
    rb.rotation =  180;
    if(Input.GetKeyDown ("up")){
      rb.rotation =  135;
    }else if(Input.GetKeyDown ("down")){
      rb.rotation = 225;
    }
  }else if (Input.GetKeyDown ("up")){
    rb.rotation =  90;
    if(Input.GetKeyDown ("left")){
      rb.rotation =  135;
    }else if(Input.GetKeyDown ("right")){
      rb.rotation = 45;
    }
  }else if (Input.GetKeyDown ("down")){
    rb.rotation =  270;
    if(Input.GetKeyDown ("left")){
      rb.rotation = 225;
    }else if(Input.GetKeyDown ("right")){
      rb.rotation = 315;
    }
  }else if (Input.GetKeyDown ("right")){
    rb.rotation =  0;
    if(Input.GetKeyDown ("up")){
      rb.rotation = 45;
    }else if(Input.GetKeyDown ("down")){
      rb.rotation = 315;
    }
  }
  if (Input.GetKey ("left")){
    rb.rotation =  180;
    movement = Vector2(moveHorizontal, 0.0f);
    rb.velocity = movement * speed;
    if(Input.GetKey ("up")){
      rb.rotation =  135;
      movement = Vector2(moveHorizontal, moveVertical);
      rb.velocity = movement * speed;
    }else if(Input.GetKey ("down")){
      rb.rotation = 225;
      movement = Vector2(moveHorizontal, moveVertical);
      rb.velocity = movement * speed;
    }
  }else if (Input.GetKey ("up")){
    rb.rotation =  90;
    movement = Vector2(0.0f, moveVertical);
    rb.velocity = movement * speed;
    if(Input.GetKey ("left")){
      rb.rotation =  135;
      movement = Vector2(moveHorizontal, moveVertical);
      rb.velocity = movement * speed;
    }else if(Input.GetKey ("right")){
      rb.rotation = 45;
      movement = Vector2(moveHorizontal, moveVertical);
      rb.velocity = movement * speed;
    }
  }else if (Input.GetKey ("down")){
    rb.rotation =  270;
    movement = Vector2(0.0f, moveVertical);
    rb.velocity = movement * speed;
    if(Input.GetKey ("left")){
      rb.rotation = 225;
      movement = Vector2(moveHorizontal, moveVertical);
      rb.velocity = movement * speed;
    }else if(Input.GetKey ("right")){
      rb.rotation = 315;
      movement = Vector2(moveHorizontal, moveVertical);
      rb.velocity = movement * speed;
    }
  }else if (Input.GetKey ("right")){
    rb.rotation =  0;
    movement = Vector2(moveHorizontal, 0.0f);
    rb.velocity = movement * speed;
    if(Input.GetKey ("up")){
      rb.rotation = 45;
      movement = Vector2(moveHorizontal, moveVertical);
      rb.velocity = movement * speed;
    }else if(Input.GetKey ("down")){
      rb.rotation = 315;
      movement = Vector2(moveHorizontal, moveVertical);
      rb.velocity = movement * speed;
  }
}
}