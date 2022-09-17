<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <button className="prettier-class" id="prettier-id">Click Here</button>
</template>

<script setup lang="ts">
    import { defineComponent, ref, watchEffect } from "vue";
    import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
    // const props = defineProps({
    //   name: String,
    // });
</script>
