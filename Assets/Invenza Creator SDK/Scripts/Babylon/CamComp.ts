/* Babylon Camera Component Template */

module PROJECT {
    export class CamComp extends BABYLON.CameraComponent {
        public constructor(owner: BABYLON.Camera, scene: BABYLON.Scene, tick: boolean = true, propertyBag: any = {}) {
            super(owner, scene, tick, propertyBag);
        }

        protected ready() :void {
            // Scene execute when ready
        }

        protected start() :void {
            var hello:String = this.getProperty("Hello","Hello World");


            var cam:BABYLON.Camera = this.getProperty("localCamera",this.camera);  
            var inputManager = cam.inputs;         

           console.log(cam.cameraRigMode.toString);

            console.log(BABYLON.Camera.RIG_MODE_VR);

            //var leftJoystick = new BABYLON.VirtualJoystick(false);
            //var rightJoystick = new BABYLON.VirtualJoystick(false);
            BABYLON.VirtualJoystick.Canvas.style.zIndex == "-1"
            var canvas = document.getElementsByTagName("canvas");
            cam.attachControl(canvas[0],true);
            //cam.inputs.add(cam.inputs.attached.PointerTouch);

            var btn= document.getElementById("babylonVRiconbtn");
            //cam.inputs.add(new BABYLON.ArcRotateCameraVRDeviceOrientationInput());

            //BABYLON.VirtualJoystick.Canvas.style.zIndex == "4";


            btn.onclick = ()=>{
                if(BABYLON.VirtualJoystick.Canvas.style.zIndex == "-1"){
                    cam.cameraRigMode=BABYLON.Camera.RIG_MODE_VR;
                }else{
                    cam.inputs.add(new BABYLON.ArcRotateCameraVRDeviceOrientationInput());
                    cam.inputs.remove(cam.inputs.attached.PointerTouch);
                    BABYLON.VirtualJoystick.Canvas.style.zIndex = "-1";
                }
            }  

            console.log(cam.fov);
        }

        protected update() :void {
            
        }

        protected after() :void {
            // After render loop function
        }

        protected destroy() :void {
            // Destroy component function
        }
    }
}