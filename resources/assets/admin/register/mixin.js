export default {
    methods: {
        setListPage(field, value) {
            var path = this.$route.path;
            var query = Object.assign({}, this.$route.query);

            if (typeof field === "object") {
                query = field;
            } else {
                query[field] = value;
            }

            this.$router.push({
                path,
                query
            });
        },
        onChangeCurPage(page) {
            this.onGetList({
                page,
                fn: () => {
                    this.setListPage("page", page);
                }
            });
        },
        onChangePageSize(pageSize) {
            this.onGetList({
                pageSize,
                fn: () => {
                    this.setListPage("page_size", pageSize);
                }
            });
        }
    },
    watch: {
        "$store.getters.language"(lang) {
            this.$i18n.locale = lang;
        }
    }
};
