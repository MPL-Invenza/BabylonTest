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
/* Babylon Mesh Component Template */
var PROJECT;
/* Babylon Mesh Component Template */
(function (PROJECT) {
    var MeshDetails = /** @class */ (function (_super) {
        __extends(MeshDetails, _super);
        function MeshDetails(owner, scene, tick, propertyBag) {
            if (tick === void 0) { tick = true; }
            if (propertyBag === void 0) { propertyBag = {}; }
            return _super.call(this, owner, scene, tick, propertyBag) || this;
        }
        MeshDetails.prototype.ready = function () {
            // Scene execute when ready
        };
        MeshDetails.prototype.start = function () {
            this.mesh.metadata = "button";
        };
        MeshDetails.prototype.update = function () {
            // Update render loop function
        };
        MeshDetails.prototype.after = function () {
            // After render loop function
        };
        MeshDetails.prototype.destroy = function () {
            // Destroy component function
        };
        return MeshDetails;
    }(BABYLON.MeshComponent));
    PROJECT.MeshDetails = MeshDetails;
})(PROJECT || (PROJECT = {}));
/* Babylon Scene Controller Template */
var PROJECT;
/* Babylon Scene Controller Template */
(function (PROJECT) {
    var SceneController = /** @class */ (function (_super) {
        __extends(SceneController, _super);
        function SceneController(owner, scene, tick, propertyBag) {
            if (tick === void 0) { tick = true; }
            if (propertyBag === void 0) { propertyBag = {}; }
            return _super.call(this, owner, scene, tick, propertyBag) || this;
        }
        SceneController.prototype.ready = function () {
            // Scene execute when ready
        };
        SceneController.prototype.start = function () {
            var hello = this.getProperty("hello", "Hello World");
            //console.log(hello);
        };
        SceneController.prototype.update = function () {
            // Update render loop function
        };
        SceneController.prototype.after = function () {
            // After render loop function
        };
        SceneController.prototype.destroy = function () {
            // Destroy component function
        };
        return SceneController;
    }(BABYLON.MeshComponent));
    PROJECT.SceneController = SceneController;
})(PROJECT || (PROJECT = {}));
