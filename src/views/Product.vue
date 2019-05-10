<template>
  <div class="product">
    <h2>
      Metronome
      <span></span>
    </h2>
    <img alt src="../assets/logo.png">
    <br>
    <input type="text" v-model="tempo" val="60">
    <br>
    <br>
    <img v-bind:src="playBtn" v-if="!playing" @click="startMetronome">
    <img v-bind:src="pauseBtn" v-if="playing" @click="stopMetronome">
  </div>
</template>

<script>
import { Howl, Howler } from "howler";
import lowTick from "../assets/ping_low.wav";
import hiTick from "../assets/ping_hi.wav";
import playBtn from "../assets/play-btn.svg";
import pauseBtn from "../assets/pause-btn.svg";
import { setInterval, clearInterval } from "timers";

export default {
  name: "product",
  data: () => {
    return {
      tempo: 60,
      playing: false,
      playBtn: playBtn,
      pauseBtn: pauseBtn,
      interval: null
    };
  },
  components: {},
  computed: {
    product() {
      return this.$store.state.product;
    },
    inventoryTotal() {
      return this.$store.getters.inventoryTotal;
    }
  },
  methods: {
    startMetronome() {
      var low = new Howl({
        src: [lowTick]
      });

      var hi = new Howl({
        src: [hiTick]
      });

      var count = 4;
      var tempo = this.$data.tempo;
      var int = (60 / tempo) * 1000;

      this.$data.playing = true;

      this.$data.interval = setInterval(() => {
        soundClick();
      }, int);

      let soundClick = () => {
        if (count === 4) {
          hi.play();
          count = 1;
        } else {
          low.play();
          count++;
        }
      };
    },
    stopMetronome() {
      clearInterval(this.$data.interval);
      this.$data.playing = false;
    }
  }
};
</script>
