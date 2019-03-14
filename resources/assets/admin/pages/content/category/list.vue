<template>
  <div>
    <ListData
      ref="list-data"
      @onClickBtnAdd="onClickBtnAdd"
      @onClickBtnEdit="onClickBtnEdit"
      @onClickBtnBatchDelete="onClickBtnBatchDelete"
      @onClickBtnCheckout="onClickBtnCheckout"
      @onClickBtnBatchTrash="onClickBtnBatchTrash"
      @onClickBtnBatchRestore="onClickBtnBatchRestore"
      @onChangeCurrentPage="onChangeCurPage"
      @onChangePageSize="onChangePageSize"
      @onSearch="onSearch"
      @onSearchReset="onSearchReset"
      @onOrderChange="onOrderChange"
      :List="list"
      :ListLoading="list_loading"
      :Sort="sort"
      :Pagination="paginations"
      :Toolbar="toolbar"
      :Searchbar="searchbar"
      :FieldList="fields"
    />
  </div>
</template>

<script>
import cms_mixin from "mixins/list_mixin.js";

export default {
  name: "category-list",
  mixins: [cms_mixin],
  data() {
    return {
      list: [],
      list_loading: {
        flag: false
      },
      sort: {
        show: true
      },
      fields: [
        {
          key: "tree_title",
          label: this.$t("FIELD_TITLE_LABEL"),
          type: "editable"
        },
        {
          key: "content_type",
          label: this.$t("OPTION_CONTENT_TYPE")
        },
        {
          key: "path",
          label: this.$t("FIELD_CATEGORY_URL_LABEL")
        },
        {
          key: "state",
          label: this.$t("OPTION_STATE"),
          type: "label",
          width: "120",
          formatter: item => {
            const item_text = {
              "1": "PUBLISHED",
              "0": "UNPUBLISHED",
              "-1": "ARCHIVED",
              "-2": "TRASHED"
            };
            return {
              text: this.$t(item_text[item]),
              color: `item_state_${item}_color`
            };
          }
        },
        {
          key: "image",
          label: this.$t("LIST_DATA_IMAGE_LABEL"),
          type: "icon",
          width: "90",
          sort: false,
          formatter: item => {
            return {
              icon: item ? ["fal", "image"] : ""
            };
          }
        },
        {
          key: "access_title",
          label: this.$t("FIELD_ACCESS_LEVEL")
        },
        {
          key: "language",
          label: this.$t("OPTION_LANGUAGE"),
          formatter: item => {
            if (item.language === "*") return this.$t("ALL_LANGUAGE");
          }
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
        type: "list",
        custom: [
          {
            text: this.$t("TOOLBAR_PUBLISH"),
            method: "updateState",
            condition({ data }) {
              return data.state === 0 && data.parent_id !== null;
            },
            fn: ({ ids }) => {
              this.onClickBtnUpdateState({
                ids,
                state: 1
              });
            }
          },
          {
            text: this.$t("TOOLBAR_UNPUBLISH"),
            method: "updateState",
            condition({ data }) {
              return data.state === 1 && data.parent_id !== null;
            },
            fn: ({ ids }) => {
              this.onClickBtnUpdateState({
                ids,
                state: 0
              });
            }
          },
          {
            text: this.$t("TOOLBAR_CHECKOUT"),
            method: "checkout",
            fn: ({ ids }) => {
              this.onClickBtnCheckout({ ids });
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
            key: "state",
            type: "select",
            desc: this.$t("OPTION_STATE"),
            list: [
              {
                value: "1",
                text: this.$t("PUBLISHED")
              },
              {
                value: "0",
                text: this.$t("UNPUBLISHED")
              },
              {
                value: "-1",
                text: this.$t("ARCHIVED")
              },
              {
                value: "-2",
                text: this.$t("TRASHED")
              }
            ]
          },

          {
            key: "access",
            type: "select",
            desc: this.$t("FIELD_ACCESS_LEVEL"),
            list: this.$store.getters.viewlevel_list,
            custom_attrs: {
              label: "title",
              value: "id"
            }
          },
          {
            key: "language",
            type: "select",
            desc: this.$t("OPTION_LANGUAGE"),
            list: this.$store.getters.language_list,
            custom_attrs: {
              label: "title",
              value: "sef"
            }
          },
          {
            key: "id",
            type: "select",
            desc: this.$t("OPTION_CATEGORY"),
            list: this.$store.getters.category_list,
            custom_attrs: {
              label: "tree_list_title",
              value: "id"
            }
          }
        ],
        default_value: {
          search: "",
          state: "",
          id: "",
          access: "",
          language: ""
        }
      }
    };
  },
  methods: {
    /**
     * list actions
     */
    onClickBtnCheckout({ data, ids }) {
      let checkout_data;
      if (ids) {
        checkout_data = ids;
      } else {
        checkout_data = [data.id];
      }
      this.$$api_category_checkout({
        data: {
          ids: checkout_data
        },
        fn: ({ msg }) => {
          this.$message.success(msg);
          this.onGetList();
        }
      });
    },
    onOrderChange({ id, index_diff }) {
      this.$$api_category_ordering({
        data: {
          id,
          index_diff
        },
        fn: ({ msg }) => {
          console.log(msg);
        }
      });
    },

    /**
     * Toolbar
     */
    onClickBtnBatchTrash({ ids, state }) {
      this.onClickBtnUpdateState({ ids, state });
    },
    onClickBtnBatchRestore({ ids, state }) {
      this.onClickBtnUpdateState({ ids, state });
    },
    onClickBtnUpdateState({ ids, state }) {
      this.$$api_category_updateState({
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
        this.$$api_category_delete({
          data: {
            ids
          },
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
          pid: data.parent_id
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
        if (field === "id" || field === "access") {
          this.searchbar.default_value[field] = parseInt(query[field]);
        } else {
          this.searchbar.default_value[field] = query[field];
        }
        data[field] = query[field];
      });

      this.$$api_category_list({
        data,
        fn: ({ data }) => {
          this.list_loading.flag = false;
          this.list = data.items;
          this.paginations.total = data.pagination.total;

          fn && fn();
        }
      });
    }
  },
  created() {
    this.initSearchbarParams();
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
