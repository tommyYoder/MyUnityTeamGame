﻿#pragma strict

function Start () {
    GetComponent.<Animation>().Play(GetComponent.<Animation>().clip.name);
    yield WaitForSeconds (GetComponent.<Animation>().clip.length );
    Application.LoadLevel ("LoadingScreen 9");

}


function Update () {
	
}