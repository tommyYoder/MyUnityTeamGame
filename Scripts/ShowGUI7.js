﻿var ShowGUI : boolean;
var style : GUIStyle;

function OnTriggerEnter(Col : Collider)
    {
        if(Col.CompareTag("Player"))
        {

            ShowGUI = true;
        }
    }




function OnTriggerExit(Col : Collider)
    {
        if(Col.CompareTag("Player"))
        {
            ShowGUI = false;
        }
    }


function OnGUI()
{
    if(ShowGUI == true)
        GUI.Label(Rect(400,300,500,80), "You can't go this way!", style);
}