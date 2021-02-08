const App = Vue.createApp({
  data: function() {
    return {
      bits: Array(8).fill(undefined).map(_ => Array(8).fill(undefined).map(_ => false))
    };
  },
  methods: {
    toggle: function(i, j) {
      this.bits[i][j] = !this.bits[i][j];
    },
    rowSum: function(i) {
      return this.bits[i].reduce((sum, acc, j) => sum + (acc ? 2 ** (7 - j) : 0), 0);
    }
  },
  computed: {
    binary: function() {
      return this.bits.map(row => row.map(bit => bit ? '1' : '0').join('')).join('\n');
    },
    decimal: function() {
      return this.bits.map((_, i) => this.rowSum(i)).join(', ');
    }
  }
});

App.mount('#app');