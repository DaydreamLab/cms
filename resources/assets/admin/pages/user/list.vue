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
  name: "user-list",
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
          key: "first_name",
          label: this.$t("USER_FIELD_FIRST_NAME"),
          type: "editable"
        },
        {
          key: "last_name",
          label: this.$t("USER_FIELD_LAST_NAME"),
          type: "editable"
        },
        {
          key: "block",
          label: this.$t("USER_OPTION_ENABLED") /*已啟用*/,
          type: "icon-label",
          width: "120",
          formatter: item => {
            item = item !== 1 ? 1 : 0;
            return {
              color: `item_state_${item}_color`,
              icon: ["fal", item !== 1 ? "times" : "check"]
            };
          }
        },
        {
          key: "activation",
          label: this.$t("USER_OPTION_ACTIVE") /*啟用狀態*/,
          type: "icon-label",
          width: "120",
          formatter: item => {
            return {
              color: `item_state_${item}_color`,
              icon: ["fal", item === 1 ? "check" : "times"]
            };
          }
        },
        {
          key: "groups",
          label: this.$t("USER_OPTION_GROUP"),
          formatter: item => {
            return item.groups.length > 2
              ? "Multiple Groups"
              : item.groups.map(el => el.title).join(", ");
          }
        },
        {
          key: "email",
          label: this.$t("USER_FIELD_EMAIL")
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
          },
          {
            key: "block",
            type: "select",
            desc: this.$t("OPTION_STATE"),
            list: [
              {
                value: "0",
                text: this.$t("ENABLED")
              },
              {
                value: "1",
                text: this.$t("DISABLED")
              }
            ]
          },
          {
            key: "activation",
            type: "select",
            desc: this.$t("USER_OPTION_ACTIVE"),
            list: [
              {
                value: "1",
                text: this.$t("USER_ACTIVATED")
              },
              {
                value: "0",
                text: this.$t("USER_UNACTIVATED")
              }
            ]
          },
          {
            key: "groups",
            type: "select",
            desc: this.$t("USER_OPTION_GROUP"),
            list: [],
            custom_attrs: {
              label: "tree_list_title",
              value: "id"
            }
          }
        ],
        default_value: {
          search: "",
          block: "",
          activation: ""
        }
      },
      list_actions: {
        btns: [
          {
            text: "Assign Group",
            type: "primary",
            method: "grant_group",
            fn: ({ data }) => {
              this.$router.push({
                path: `${this.$route.path}/grant/group`,
                query: {
                  id: data.id,
                  name: data.full_name
                }
              });
            }
          },
          {
            text: "Assign Role",
            type: "primary",
            method: "grant_role",
            fn: ({ data }) => {
              this.$router.push({
                path: `${this.$route.path}/grant/role`,
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
    onClickBtnUpdateState({ ids, state }) {
      this.$$api_user_updateState({
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
        this.$$api_user_delete({
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

      this.$$api_user_list({
        data,
        fn: ({ data }) => {
          this.list_loading.flag = false;
          this.list = data.items;
          this.paginations.total = data.pagination.total;

          fn && fn();
        }
      });
    },
    onUpdateParams() {
      this.$$api_user_listOptionGroup({
        fn: ({ data }) => {
          this.searchbar.fields[3].list = data.items;
        }
      });
    },
    init() {
      this.onUpdateParams();
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
