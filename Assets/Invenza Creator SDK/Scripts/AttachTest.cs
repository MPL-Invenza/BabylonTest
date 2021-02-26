using System.Collections;
using System.Collections.Generic;
using Pvr_UnitySDKAPI;
using UnityEngine;


public class AttachTest : MonoBehaviour
{
    // Start is called before the first frame update

    public Animator objanim;
    public Animator butanim1;
    public Animator butanim2;
    public Animator butanim3;
    public Animator butanim4;

    public GameObject obj1, obj2, obj3, obj4;
    public GameObject panelbox;



    //Controller(left hand / right hand)
    public GameObject controller0;
    public GameObject controller1;


    //Controller in use
    private GameObject currentController;

    //The focus of the object's "attach" movement
    private Transform currentNode;

    private int mainHandNess;

    private Ray ray;
    private RaycastHit hit;



    //The key is pressed or not pressed
    private bool noClick = true;

    //The current state of motion of the object
    private bool moveState = false;


    public bool ishit;

    void Start()
    {
        ray = new Ray();
        hit = new RaycastHit();

        //attachMaterial = Resources.Load<Material>("Materials/Custom_AttachMaterial");
        //normalMaterial = Resources.Load<Material>("Materials/Custom_NormalMaterial");
    }

    // Update is called once per frame
    void Update()
    {

        //Determined whether the handle is connected
        if (Controller.UPvr_GetControllerState(0) == ControllerState.Connected || Controller.UPvr_GetControllerState(1) == ControllerState.Connected || Input.GetKey(KeyCode.Space))
        {
            //Get the current master control controller index
#if UNITY_ANDROID
            mainHandNess = Pvr_UnitySDKAPI.Controller.UPvr_GetMainHandNess();
#endif
#if UNITY_EDITOR
            mainHandNess = 1;
#endif
            if (mainHandNess == 0)
            {
                currentController = controller0;
            }

            if (mainHandNess == 1)
            {
                currentController = controller1;
            }


            ray.direction = currentController.transform.forward - currentController.transform.up * 0.25f;
            ray.origin = currentController.transform.Find("start").position;

            //Determine whether the ray interacts with this object
            if (Physics.Raycast(ray, out hit) && (hit.transform == transform) && (Pvr_UnitySDKAPI.Controller.UPvr_GetKeyUp(mainHandNess, Pvr_UnitySDKAPI.Pvr_KeyCode.TRIGGER) || Input.GetKey(KeyCode.Space)))
            {
                if (panelbox.GetComponentInChildren<BoxCollider>())
                {
                    if (panelbox.GetComponentInChildren<BoxCollider>().enabled == false)
                    {
                        panelbox.GetComponentInChildren<BoxCollider>().enabled = true;
                    }
                }


                if (ishit)
                {
                    objanim.SetBool("Open", true);
                    butanim1.SetBool("Open", true);
                    butanim2.SetBool("Open", true);
                    butanim3.SetBool("Open", true);
                    butanim4.SetBool("Open", true);
                    ishit = false;
                }
                else
                {
                    objanim.SetBool("On", false);
                    butanim1.SetBool("On", false);
                    butanim2.SetBool("On", false);
                    butanim3.SetBool("On", false);
                    butanim4.SetBool("On", false);
                }
            }
            else
            {

            }

            //Checking whether the "Trigger" is lifted or not
            if (Input.GetKeyUp(KeyCode.Space) || Pvr_UnitySDKAPI.Controller.UPvr_GetKeyUp(mainHandNess, Pvr_UnitySDKAPI.Pvr_KeyCode.TRIGGER))
            {
                if (moveState)
                {

                }

            }


        }

    }


    public void setanimoff()
    {

        objanim.SetBool("On", true);
        butanim1.SetBool("On", true);
        butanim2.SetBool("On", true);
        butanim3.SetBool("On", true);
        butanim4.SetBool("On", true);

        obj1.SetActive(false);
        obj2.SetActive(false);
        obj3.SetActive(false);
        obj4.SetActive(false);
        panelbox.GetComponentInChildren<BoxCollider>().enabled = false;

        Debug.Log("cierro el panel");


    }

}
