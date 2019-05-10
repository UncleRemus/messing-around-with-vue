<template>
  <div class="product">
    <h2>
      Product Page
      <span></span>
    </h2>
    <img alt src="../assets/logo.png">
    <div class="product-information">
      {{ product.title }}
      <ul>
        <li>IMAP: {{ product.imap | money }}</li>
        <li>Cost: {{ product.bnc | money }}</li>
      </ul>
      Inventory: {{ inventoryTotal }}
    </div>
    <input type="text" v-model="tempo" val="60">
    <button disabled="!!interval" @click="startMetronome">Start</button>
    <button @click="stopMetronome(interval)">Stop</button>
  </div>
</template>

<script>
import { Howl, Howler } from "howler";
import lowTick from "../assets/ping_low.wav";
import hiTick from "../assets/ping_hi.wav";
import { setInterval, clearInterval } from "timers";

export default {
  name: "product",
  data: () => {
    return {
      tempo: 60,
      interval: false
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
    startMetronome(tempo) {
      var low = new Howl({
        src: [lowTick]
      });

      var hi = new Howl({
        src: [hiTick]
      });

      var count = 4;
      var tempo = tempo | 60;
      var int = (60 / tempo) * 1000;

      console.log("tempo", tempo);
      console.log("interval", int);

      this.interval = setInterval(() => {
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
    stopMetronome(interval) {
      clearInterval(interval);
    }
  }
};
</script>
