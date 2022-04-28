<script setup lang="ts">
import PageA from "./components/PageA.vue";
import PageB from "./components/PageB.vue";
import PageC from "./components/PageC.vue";
import PageD from "./components/PageD.vue";
import PageE from "./components/PageE.vue";
</script>

<template>
	<PageA />
	<div class="mt50"></div>
	<PageB />
	<PageC />
	<PageD />
	<PageE />
</template>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
ul li {
	list-style: none;
}
.mt50 {
	margin-top: 50px;
}
</style>
