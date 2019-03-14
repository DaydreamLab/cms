<template>
  <div>
    <ListData
      ref="list-data"
      @onClickBtnAdd="onClickBtnAdd"
      @onClickBtnEdit="onClickBtnEdit"
      @onClickBtnBatchDelete="onClickBtnBatchDelete"
      @onClickBtnBatchTrash="onClickBtnBatchTrash"
      @onClickBtnBatchRestore="onClickBtnBatchRestore"
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
import cms_mixin from "mixins/list_mixin.js"

export default {
  name: "language-list",
  mixins: [cms_mixin],
  data() {
    return {
      list: [],
      list_loading: {
        flag: false
      },
      fields: [
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
        },
        {
          key: "title",
          label: this.$t("FIELD_TITLE_LABEL"),
          type: "editable"
        },
        {
          key: "code",
          label: this.$t("LANGUAGE_FIELD_LANG_TAG_LABEL")
        },
        {
          key: "sef",
          label: this.$t("LANGUAGE_FIELD_LANG_CODE_LABEL")
        },
        {
          key: "type",
          label: this.$t("LANGUAGE_FIELD_TYPE_LABEL"),
          formatter: item => {
            return item.type === "system"
              ? this.$t("LANGUAGE_FIELD_TYPE_SYSTEM")
              : this.$t("LANGUAGE_FIELD_TYPE_CONTENT");
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
            key: "type",
            type: "select",
            desc: this.$t("OPTION_TYPE"),
            list: [
              {
                value: "content",
                text: this.$t("LANGUAGE_FIELD_TYPE_CONTENT")
              },
              {
                value: "system",
                text: this.$t("LANGUAGE_FIELD_TYPE_SYSTEM")
              }
            ]
          }
        ],
        default_value: {
          search: "",
          state: "",
          type: ""
        }
      }
    };
  },
  methods: {
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
      this.$$api_language_updateState({
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
        this.$$api_language_delete({
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
          id: data.id
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
      this.$$api_language_list({
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
