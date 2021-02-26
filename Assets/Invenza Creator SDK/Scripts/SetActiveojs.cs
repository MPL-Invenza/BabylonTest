using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SetActiveojs : MonoBehaviour
{
    public GameObject obj1, obj2, obj3, obj4;


    public void hideobjs()
    {
        obj1.SetActive(false);
        obj2.SetActive(false);
        obj3.SetActive(false);
        obj4.SetActive(true);
    }

    public void showobjs()
    {
        obj1.SetActive(true);
        obj2.SetActive(true);
        obj3.SetActive(true);
        obj4.SetActive(true);
    }


}
