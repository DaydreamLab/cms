<template>
  <div>
    <ListData
      ref="list-data"
      @onClickBtnAdd="onClickBtnAdd"
      @onClickBtnEdit="onClickBtnEdit"
      @onClickBtnBatchDelete="onClickBtnBatchDelete"
      @onChangeCurrentPage="onChangeCurPage"
      @onChangePageSize="onChangePageSize"
      @onSearch="onSearch"
      @onSearchReset="onSearchReset"
      :List="list"
      :ListLoading="list_loading"
      :Pagination="paginations"
      :Toolbar="toolbar"
      :Searchbar="searchbar"
      :FieldList="fields"
    />
  </div>
</template>

<script>
export default {
  name: "asset-group-list",
  data() {
    return {
      list: [],
      list_loading: {
        flag: false
      },
      fields: [
        {
          width: "60",
          key: "id",
          label: this.$t("LIST_DATA_HEADING_ID")
        },
        {
          key: "title",
          label: this.$t("FIELD_TITLE_LABEL"),
          type: "editable"
        },
        {
          key: "state",
          label: this.$t("OPTION_STATE"),
          type: "icon-label",
          width: "90",
          formatter: item => {
            return {
              color: `item_state_${item}_color`,
              icon: ["fal", item === 1 ? "check" : "times"]
            };
          }
        }
      ],
      paginations: {
        current_page: 1,
        total: 0,
        page_size: 10,
        page_sizes: [10, 15, 20, 25],
        layout: "total, sizes, prev, pager, next, jumper"
      },
      toolbar: {
        type: "list",
        custom: [
          {
            text: this.$t("TOOLBAR_PUBLISH"),
            method: "updateState",
            condition({ data }) {
              return data.state === 0 && data.parent_id !== null;
            },
            fn: ({ ids }) => {
              this.onClickBtnUpdateState({ ids, state: 1 });
            }
          },
          {
            text: this.$t("TOOLBAR_UNPUBLISH"),
            method: "updateState",
            condition({ data }) {
              return data.state === 1 && data.parent_id !== null;
            },
            fn: ({ ids }) => {
              this.onClickBtnUpdateState({ ids, state: 0 });
            }
          }
        ]
      },
      searchbar: {
        fields: [
          {
            key: "search",
            desc: this.$t("TOOLBAR_KEYWORDS"),
            clearable: true
          }
        ],
        default_value: {
          search: ""
        }
      }
    };
  },
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
    /**
     * Toolbar
     */
    onClickBtnUpdateState({ ids, state }) {
      this.$$api_asset_updateState({
        data: {
          ids,
          state
        },
        fn: ({ msg }) => {
          this.$message.success(msg);
          this.onGetList();
        }
      });
    },
    onClickBtnBatchDelete({ ids, datas }) {
      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(() => {
        this.$$api_asset_delete({
          data: { ids },
          fn: ({ data }) => {
            this.onGetList();
          }
        });
      });
    },
    onClickBtnEdit({ data }) {
      this.$router.push({
        path: `${this.$route.path}/edit`,
        query: {
          id: data.id,
          pid: data.parent_id,
          name: data.name
        }
      });
    },
    onClickBtnAdd() {
      this.$router.push(`${this.$route.path}/edit`);
    },
    onGetList({ page, pageSize, fn } = {}) {
      this.list_loading.flag = true;

      const query = this.$route.query;

      this.paginations.current_page = page || parseInt(query.page) || 1;
      this.paginations.page_size =
        pageSize || parseInt(query.page_size) || this.paginations.page_size;

      let data = {
        page: this.paginations.current_page,
        limit: this.paginations.page_size
      };

      Object.keys(query).forEach(field => {
        this.searchbar.default_value[field] = query[field];
        data[field] = query[field];
      });

      this.$$api_asset_listGroup({
        data,
        fn: ({ data }) => {
          this.list_loading.flag = false;
          this.list = data.items;
          this.paginations.total = data.pagination.total;

          fn && fn();
        }
      });
    },
    init() {
      this.onGetList();
    }
  },
  mounted() {
    this.init();
  },
  watch: {
    $route(to, from) {
      this.init();
    }
  }
};
</script>
