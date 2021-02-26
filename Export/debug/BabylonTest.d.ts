declare module PROJECT {
    class CamComp extends BABYLON.CameraComponent {
        constructor(owner: BABYLON.Camera, scene: BABYLON.Scene, tick?: boolean, propertyBag?: any);
        protected ready(): void;
        protected start(): void;
        protected update(): void;
        protected after(): void;
        protected destroy(): void;
    }
}
