/* Babylon Editor Script Component (C# UnityScript) */

using System;
using UnityEditor;
using UnityEngine;
using Unity3D2Babylon;

namespace MyProject
{
	public class CamComp : EditorScriptComponent
	{
        [Header("-Script Properties-")]

        [BabylonProperty]
        public string hello = "Hello World";
		public float number=0;
		public Camera localCamera;




		protected CamComp()
		{
			this.babylonClass = "PROJECT.CamComp";
		}
	}
}