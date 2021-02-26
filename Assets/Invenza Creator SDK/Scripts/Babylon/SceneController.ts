/* Babylon Scene Controller Template */

module PROJECT {
    export class SceneController extends BABYLON.MeshComponent {
        public constructor(owner: BABYLON.AbstractMesh, scene: BABYLON.Scene, tick: boolean = true, propertyBag: any = {}) {
            super(owner, scene, tick, propertyBag);
        }

        protected ready() :void {
            // Scene execute when ready
        }

        protected start() :void {
          let hello:string = this.getProperty("hello","Hello World");
          //console.log(hello);

        }

        protected update() :void {
            // Update render loop function
        }

        protected after() :void {
            // After render loop function
        }

        protected destroy() :void {
            // Destroy component function
        }
    }
}