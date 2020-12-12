<template lang="pug">
    button.material-btn(
        :class="btn_class"
        v-if="type==='wave'"
        ref='button'
        @mousedown="mousedown")
        span.wave(ref="wave")
        |         {{text}}
    button.slide-btn(v-else-if="type==='slide'")
        span.text SLIDE

</template>

<script>
export default {
    name: "ButtonWave",
    props: {
        type: {
            type: String,
            default: 'wave'
        },
        text: {
            type: String,
            default: 'wave'
        },
        btn_class: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            button: null,
            wave: null,
        }
    },
    methods: {
        mousedown: function (event) {
            let className = 'material-btn--active';
            if (this.button.classList.contains(className)) {
                this.button.classList.remove(className);
            }

            this.wave.style.left = event.clientX - this.button.getBoundingClientRect().left + 'px';
            this.wave.style.top = event.clientY - this.button.getBoundingClientRect().top + 'px';

            void this.button.offsetWidth;
            this.button.classList.add(className);
        }

    },
    mounted() {
        this.button = this.$refs.button;
        this.wave = this.$refs.wave;
    }
}
</script>

<style scoped
       lang="scss">

.material-btn {
    position: relative;
    overflow: hidden;
    padding: 10px 25px;
    border-radius: 4px;
    border: none;
    background: #6A1B9A;
    font-weight: 500;
    color: #fff;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
    cursor: pointer;

    &--active .wave {
        animation: wave-animation .8s;
    }
}

.wave {
    position: absolute;
    top: 10px;
    left: 20px;

    width: 25px;
    height: 25px;

    border-radius: 100%;
    transform: scale(0);
    background: rgba(255, 255, 255, .4);
}


.slide-btn {
    overflow: hidden;
    padding: 10px 25px;
    border-radius: 4px;
    border: none;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
    color: #fff;
    background: #1565C0;
    cursor: pointer;

    &--active .text {
        animation: slide-animation 0.4s;
    }
}


@keyframes wave-animation {
    from {
        opacity: 1;
        transform: scale(0);
    }
    to {
        transform: scale(10);
        opacity: 0;
    }
}

@keyframes slide-animation {
    0% {
        opacity: 1;
        transform: translateX(0%);
    }
    50% {
        transform: translateX(150%);
        opacity: 0;
    }
    51% {
        transform: translate(-100%);
    }
    100% {
        transform: translate(0%);
        opacity: 1;
    }
}

</style>
