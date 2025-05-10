function wordsTable() {
  return {
    entries: [],
    sortKey: 'entry',
    sortIsAscending: true,

    init() {
      this.entries = ENTRIES;
    },

    metaText(entry) {
      return entry.meta;
    },

    metaURL(entry) {
      return entry.meta;
    },

    sortBy(key) {
      if (key === this.sortKey) {
        this.sortIsAscending = !this.sortIsAscending;
      } else {
        this.sortKey = key;
        this.sortIsAscending = true;
      }
    },

    sortedEntries() {
      let comparator = null;
      const key = this.sortKey;
      const asc = this.sortIsAscending;

      if (key == 'definition') {
        comparator = (x, y) => {
          // TODO: use informal sort order.
          let val = x.definition.localeCompare(y.definition);
          return (asc) ? val : -val;
        }
      } else if (key == 'frequency') {
        comparator = (x, y) => {
          // TODO: use informal sort order.
          let val = x.order - y.order;
          return (asc) ? val : -val;
        }
      } else {
        comparator = (x, y) => {
          // TODO: use informal sort order.
          let val = x.key_formal.localeCompare(y.key_formal);
          return (asc) ? val : -val;
        }
      }
      const entries = this.entries.toSorted(comparator);
      return entries;
    },
  };
}
