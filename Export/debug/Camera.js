/* Babylon Javascript Template */

var createScene = function () {

    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
    var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);

    // Move the sphere upward 1/2 its height
    sphere.position.y = 1;

    // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
    var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);

    // Let's remove default keyboard:
    camera.inputs.removeByType("FreeCameraKeyboardMoveInput");

    // Create our own manager:
    var FreeCameraKeyboardRotateInput = function () {
            this._keys = [];
            this.keysLeft = [37];
            this.keysRight = [39];
            this.sensibility = 0.01;
    }

    // Hooking keyboard events
    FreeCameraKeyboardRotateInput.prototype.attachControl = function (noPreventDefault) {
        var _this = this;
        var engine = this.camera.getEngine();
            var element = engine.getInputElement();
        if (!this._onKeyDown) {
            element.tabIndex = 1;
            this._onKeyDown = function (evt) {
                if (_this.keysLeft.indexOf(evt.keyCode) !== -1 ||
                    _this.keysRight.indexOf(evt.keyCode) !== -1) {
                    var index = _this._keys.indexOf(evt.keyCode);
                    if (index === -1) {
                        _this._keys.push(evt.keyCode);
                    }
                    if (!noPreventDefault) {
                        evt.preventDefault();
                    }
                }
            };
            this._onKeyUp = function (evt) {
                if (_this.keysLeft.indexOf(evt.keyCode) !== -1 ||
                    _this.keysRight.indexOf(evt.keyCode) !== -1) {
                    var index = _this._keys.indexOf(evt.keyCode);
                    if (index >= 0) {
                        _this._keys.splice(index, 1);
                    }
                    if (!noPreventDefault) {
                        evt.preventDefault();
                    }
                }
            };

            element.addEventListener("keydown", this._onKeyDown, false);
            element.addEventListener("keyup", this._onKeyUp, false);
            BABYLON.Tools.RegisterTopRootEvents(canvas, [
                { name: "blur", handler: this._onLostFocus }
            ]);
        }
    };

    // Unhook
    FreeCameraKeyboardRotateInput.prototype.detachControl = function () {
        if (this._onKeyDown) {
            var engine = this.camera.getEngine();
            var element = engine.getInputElement();
            element.removeEventListener("keydown", this._onKeyDown);
            element.removeEventListener("keyup", this._onKeyUp);
            BABYLON.Tools.UnregisterTopRootEvents(canvas, [
                { name: "blur", handler: this._onLostFocus }
            ]);
            this._keys = [];
            this._onKeyDown = null;
            this._onKeyUp = null;
        }
    };

    // This function is called by the system on every frame
    FreeCameraKeyboardRotateInput.prototype.checkInputs = function () {
        if (this._onKeyDown) {
            var camera = this.camera;
            // Keyboard
            for (var index = 0; index < this._keys.length; index++) {
                var keyCode = this._keys[index];
                if (this.keysLeft.indexOf(keyCode) !== -1) {
                    camera.cameraRotation.y += this.sensibility;
                }
                else if (this.keysRight.indexOf(keyCode) !== -1) {
                    camera.cameraRotation.y -= this.sensibility;
                }
            }
        }
    };
    FreeCameraKeyboardRotateInput.prototype.getTypeName = function () {
        return "FreeCameraKeyboardRotateInput";
    };
    FreeCameraKeyboardRotateInput.prototype._onLostFocus = function (e) {
        this._keys = [];
    };
    FreeCameraKeyboardRotateInput.prototype.getSimpleName = function () {
        return "keyboardRotate";
    };

    // Connect to camera:
    camera.inputs.add(new FreeCameraKeyboardRotateInput());

    return scene;

};
