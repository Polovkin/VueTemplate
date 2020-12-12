<template>
    <div class="test2"
         :style="cssVars">
        <button @click="translate2">My button</button>
        <div class="test"></div>
    </div>

</template>

<script>
export default {
    name: 'SimpleButton',

    data() {
        return {
            translate: 0,
            bgColor: '#cc0041',
            height: 100,
        }
    },
    computed: {
        cssVars() {
            return {
                '--bg-color': this.bgColor,
                '--height': this.height + 'px',
                '--translate': this.translate + 'px',
                '--width': window.innerWidth * .5 + 'px'
            }
        }
    },
    methods: {
        translate2() {
            this.translate += 10;
        }
    },
};
</script>
<style lang="scss"
       scoped>
button {
    color: var(--text-color);
    background-color: var(--bg-color);
    height: var(--height);
}

.test2 {
    width: var(--width) ;
}

.test {
    transition: all .2s;
    @include size(50px);
    background-color: green;
    transform: translateX(var(--translate));
}

</style>
