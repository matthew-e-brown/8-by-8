const reset = () => Array(8).fill().map(() => Array(8).fill().map(() => false));

const App = Vue.createApp({
  data: function() {
    return { bits: reset() };
  },
  methods: {
    toggle: function(i, j) {
      this.bits[i][j] = !this.bits[i][j];
    },
    rowSum: function(i) {
      return this.bits[i]
        .reduce((sum, bit, j) => sum + (bit ? 2 ** (7 - j) : 0), 0);
    },
    clear: function() {
      this.bits = reset();
    }
  },
  computed: {
    binary: function() {
      return this.bits
        .map(row => row.map(bit => bit ? '1' : '0').join(''))
        .join('\n');
    },
    decimal: function() {
      return this.bits.map((_, i) => this.rowSum(i)).join(', ');
    }
  }
});

App.mount('#app');