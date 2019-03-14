export default {
    methods: {
        /**
         * Searchbar
         */
        onSearch({ data }) {
            var sd = {};

            var query = this.$route.query;

            for (var p in query) {
                sd[p] = query[p];
            }
            for (var s in data) {
                sd[s] = data[s];
                if (!sd[s]) {
                    delete sd[s];
                }
            }

            this.$router.push({
                path: this.$route.path,
                query: sd
            });
        },
        onSearchReset() {
            this.$router.push({
                path: this.$route.path
            });
        },
        initSearchbarParams() {
            const params = ["category", "language", "viewlevel"];
            if (
                !this.$store.getters.category_list ||
                !this.$store.getters.language_list ||
                !this.$store.getters.viewlevel_list
            ) {
                this.$$api_option_list({
                    data: {
                        types: params
                    },
                    fn: ({ data }) => {
                        params.forEach(param => {
                            if (param === "language") {
                                data.items[param].unshift({
                                    sef: "*",
                                    title: this.$t("ALL_LANGUAGE")
                                });
                            }
                            this.$store.dispatch("update_option_related_list", {
                                type: param,
                                data: data.items[param]
                            });

                            this.searchbar.fields[2].list = this.$store.getters.viewlevel_list;
                            this.searchbar.fields[3].list = this.$store.getters.language_list;
                            this.searchbar.fields[4].list = this.$store.getters.category_list;
                        });
                    }
                });
            }
        },
        init() {
            this.$set(
                this.toolbar,
                "type",
                this.$route.query.state === "-2" ? "trash" : "list"
            );
            this.onGetList();
        }
    }
};
