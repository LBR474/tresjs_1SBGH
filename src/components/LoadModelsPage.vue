<script setup lang="ts">
import { ref, shallowReactive, shallowRef, ShallowRef } from "vue";
import { Color } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { useLoader, useRenderLoop, TresObject } from "@tresjs/core";
import TresMesh from "@tresjs/core";
import { OrbitControls, GLTFModel } from "@tresjs/cientos";

import * as THREE from "three";

const bgColor = new Color("#82DBC5");

const meshPosition = [0, 3, 0];

const lightRef = ref(null);

const boxRef: ShallowRef<TresObject | null> = shallowRef(null);

const { scene } = await useLoader(GLTFLoader, "/sheep_1.glb"); //access .glb file

scene.position.y = -20;
console.log(scene.children[4].children[1], lightRef);

const { onLoop } = useRenderLoop();

const state = shallowReactive({
  clearColor: '#201919',
  shadows: true,
  alpha: false,
  physicallyCorrectLights: true,
  // shadowMapType: BasicShadowMap,
  // outputColorSpace: SRGBColorSpace,
  // toneMapping: NoToneMapping,
});




onLoop(({ delta, elapsed }) => {
  if (scene) {
    scene.children[4].children[1].rotation.y += delta;
    //boxRef.value.rotation.z = elapsed * 0.2;
  }
});
</script>

<template>
  <Suspense>
    <TresCanvas v-bind="state" ref="context"
      :clear-color="bgColor"
      shadows
      alpha
      window-size
      power-preference="high-performance"
      preserve-drawing-buffer
    >
      

      <TresPerspectiveCamera
        :position="[1, 4, 7]"
        :fov="75"
        :near="0.1"
        :far="1000"
      />
      <OrbitControls make-default/>
      <TresScene>
        <TresMesh ref="boxRef" v-bind="scene">
          <TresBoxGeometry :args="[1, 1, 1]" />
          <TresMeshNormalMaterial />
        </TresMesh>
        <TresDirectionalLight
        ref="lightRef"
          :position="[0, 0, 4]"
          :intensity="1.7"
          :look-at="[0, 0, 0]"
        />

        <TresAxesHelper />
      </TresScene>
    </TresCanvas>
  </Suspense>
</template>
