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
    rowSum: function(rowIndex) {
      return this.bits[rowIndex].reduce((sum, acc, i) => sum += acc ? 2 ** (8 - i - 1) : 0);
    }
  },
  computed: {
    binary: function() {
      return this.bits.map(sub => sub.map(bit => bit ? '1' : '0').join('')).join('\n');
    },
    decimal: function() {
      return this.bits.map((_, i) => this.rowSum(i)).join(', ');
    }
  }
});

App.mount('#app');