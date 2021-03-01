window.project = true;

// Project Shader Store


// Browser Window Services

//////////////////////////////////////////////
// Babylon Toolkit - Browser Window Services
//////////////////////////////////////////////

/** Firelight Audio Shims */
window.firelightAudio = 0;
window.firelightDebug = false;
if (window.firelightAudio === 1 || window.firelightAudio === 2) {
	var fmodjs = "scripts/fmodstudio.js";
	if (window.firelightDebug === true) {
		fmodjs = ("scripts/" + (window.firelightAudio === 1) ? "fmodstudioL.js" : "fmodL.js");
	} else {
		fmodjs = ("scripts/" + (window.firelightAudio === 1) ? "fmodstudio.js" : "fmod.js");
	}
	var script2 = document.createElement('script');
	script2.setAttribute("type","text/javascript");
	script2.setAttribute("src", fmodjs);
	if (document.head != null) {
		document.head.appendChild(script2);
	} else if (document.body != null) {
		document.body.appendChild(script2);
	}
}

/** Windows Launch Mode */
window.preferredLaunchMode = 0;
if (typeof Windows !== "undefined" && typeof Windows.UI !== "undefined" && typeof Windows.UI.ViewManagement !== "undefined" &&typeof Windows.UI.ViewManagement.ApplicationView !== "undefined") {
	Windows.UI.ViewManagement.ApplicationView.preferredLaunchWindowingMode = (window.preferredLaunchMode === 1) ? Windows.UI.ViewManagement.ApplicationViewWindowingMode.fullScreen : Windows.UI.ViewManagement.ApplicationViewWindowingMode.auto;
}

/** Xbox Full Screen Shims */
document.querySelector('style').textContent += "@media (max-height: 1080px) { @-ms-viewport { height: 1080px; } }";

/** Xbox Live Plugin Shims */
window.xboxLiveServices = false;
window.isXboxLivePluginEnabled = function() {
	var isXboxLive = (typeof Windows !== "undefined" && typeof Microsoft !== "undefined" && typeof Microsoft.Xbox !== "undefined" && typeof Microsoft.Xbox.Services !== "undefined");
	var hasToolkit = (typeof BabylonToolkit !== "undefined" && typeof BabylonToolkit.XboxLive !== "undefined" && typeof BabylonToolkit.XboxLive.Plugin !== "undefined");
	return (window.xboxLiveServices === true && isXboxLive === true && hasToolkit === true);
}

/** Generic Promise Shims */
window.createGenericPromise = function(resolveRejectHandler) {
	return new Promise(resolveRejectHandler);
}
window.resolveGenericPromise = function(resolveObject) {
    return Promise.resolve(resolveObject);
}


// BabylonTest.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* Babylon Camera Component Template */
var PROJECT;
/* Babylon Camera Component Template */
(function (PROJECT) {
    var CamComp = /** @class */ (function (_super) {
        __extends(CamComp, _super);
        function CamComp(owner, scene, tick, propertyBag) {
            if (tick === void 0) { tick = true; }
            if (propertyBag === void 0) { propertyBag = {}; }
            return _super.call(this, owner, scene, tick, propertyBag) || this;
        }
        CamComp.prototype.ready = function () {
            // Scene execute when ready
        };
        CamComp.prototype.start = function () {
            var hello = this.getProperty("Hello", "Hello World");
            var cam = this.getProperty("localCamera", this.camera);
            var inputManager = cam.inputs;
            console.log(cam.cameraRigMode.toString);
            console.log(BABYLON.Camera.RIG_MODE_VR);
            //var leftJoystick = new BABYLON.VirtualJoystick(false);
            //var rightJoystick = new BABYLON.VirtualJoystick(false);
            BABYLON.VirtualJoystick.Canvas.style.zIndex == "-1";
            var canvas = document.getElementsByTagName("canvas");
            cam.attachControl(canvas[0], true);
            //cam.inputs.add(cam.inputs.attached.PointerTouch);
            var btn = document.getElementById("babylonVRiconbtn");
            //cam.inputs.add(new BABYLON.ArcRotateCameraVRDeviceOrientationInput());
            //BABYLON.VirtualJoystick.Canvas.style.zIndex == "4";
            btn.onclick = function () {
                if (BABYLON.VirtualJoystick.Canvas.style.zIndex == "-1") {
                    cam.cameraRigMode = BABYLON.Camera.RIG_MODE_VR;
                }
                else {
                    cam.inputs.add(new BABYLON.ArcRotateCameraVRDeviceOrientationInput());
                    cam.inputs.remove(cam.inputs.attached.PointerTouch);
                    BABYLON.VirtualJoystick.Canvas.style.zIndex = "-1";
                }
            };
            console.log(cam.fov);
        };
        CamComp.prototype.update = function () {
        };
        CamComp.prototype.after = function () {
            // After render loop function
        };
        CamComp.prototype.destroy = function () {
            // Destroy component function
        };
        return CamComp;
    }(BABYLON.CameraComponent));
    PROJECT.CamComp = CamComp;
})(PROJECT || (PROJECT = {}));


