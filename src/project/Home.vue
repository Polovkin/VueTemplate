<template lang="pug">
    include ../pug/utils/mixins
    section.container(class="polova" id="test" data-atr="eblo")
        h1 home
        router-link(to='/about') asd

        //Button-test
        //button-wave

        .container-img
            +Img('picture/1.png','pic')
            +Img('picture/2.jpg','pic')
        .grid-12
            .wrapper
                div.item(v-for="item of RETURN_SOME_IMAGES")
                    img(:src="item.url")


</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import ButtonWave from "@/project/components/ButtonWave";
import ButtonTest from "@/project/components/Button-test";

export default {
    name: 'Home',
    components: {ButtonWave, ButtonTest},
    data() {
        return {}
    },
    computed: {
        ...mapGetters(['RETURN_SOME_IMAGES']),
    },
    methods: {
        ...mapActions(['GET_IMAGES_DATA']),
    },
    mounted() {
        this.GET_IMAGES_DATA();
    }
}
</script>
<style lang="scss">
.braipoint-test {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #fff;

    .block {
        @include size(300px);

        background-color: red;
        @include breakpoint($desktop__laptop) {
            background-color: green;
        }
        @include breakpoint($tablet__all) {
            background-color: rebeccapurple;
        }
    }
}


.container-img {
    padding-top: 100px;
    display: flex;
}

.wrapper {
    $max_elements: 30;
    $cols: 4;
    $cell-width: 1fr;
    $cell-height: 200px;
    $gird-gap: 20px;
    //@include grid-implicit($max_elements, $cols, $cell-width, $gird-gap);
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 350px;
    @include breakpoint($tablet__all) {
        @include grid-implicit($max_elements, 2, $cell-width, $gird-gap);
    }

    .item {
        width: 100%;
        height: $cell-height;
        margin-bottom: $gird-gap;
        border: 1px solid red;

        img {
            @include ie11() {
                width: auto;
                height: 100%;
            }

            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
}

</style>
