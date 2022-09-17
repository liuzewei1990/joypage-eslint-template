<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" :aa="1" />
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from "vue";
    import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

    export default defineComponent({
        name: "HomeView",
        props: {
            name: String,
            age: {
                type: Number,
                default: 1000
            }
        },
        components: {
            HelloWorld
        },
        mounted() {
            console.log(this.name);
        },
        setup(this, props, ctx) {
            const state = ref();
            console.log(this, props, ctx);
        }
    });
</script>
