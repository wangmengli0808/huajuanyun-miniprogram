<template>
    <div>
        <nav-bar :navTitle="'我的'" :backShow="false"></nav-bar>
    </div>
</template>

<script>
import NavBar from "../../components/Navbar";
export default {
    components: {
        NavBar
    },
    created() {}
};
</script>

<style lang="scss" scoped>
</style>
