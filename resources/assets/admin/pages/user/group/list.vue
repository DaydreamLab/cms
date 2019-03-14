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
  name: "user-group-list",
  data() {
    return {
      list: [],
      list_loading: {
        flag: false
      },
      fields: [
        {
          key: "tree_title",
          label: this.$t("FIELD_TITLE_LABEL"),
          type: "editable"
        },
        {
          width: "60",
          key: "id",
          label: this.$t("LIST_DATA_HEADING_ID")
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
        type: "list"
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
      },
      list_actions: {
        show: true,
        btns: [
          {
            text: this.$t("ASSET_USER_ROLE_ASSIGN_ASSET_TITLE"),
            type: "primary",
            method: "grant_asset",
            fn: ({ data }) => {
              this.$router.push({
                path: `${this.$route.path}/grant/asset`,
                query: {
                  id: data.id,
                  name: data.full_name
                }
              });
            }
          },
          {
            text: this.$t("ASSET_USER_ROLE_ASSIGN_API_TITLE"),
            type: "primary",
            method: "grant_api",
            fn: ({ data }) => {
              this.$router.push({
                path: `${this.$route.path}/grant/api`,
                query: {
                  id: data.id,
                  name: data.full_name
                }
              });
            }
          }
        ]
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
    onClickBtnBatchDelete({ ids, datas }) {
      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(() => {
        this.$$api_user_deleteGroup({
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

      this.$$api_user_listGroup({
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
