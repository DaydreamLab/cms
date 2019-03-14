
<template>
  <div>
    <ListData
      ref="list-data"
      @onClickBtnAdd="onClickBtnAdd"
      @onClickBtnEdit="onClickBtnEdit"
      @onClickBtnBatchDelete="onClickBtnBatchDelete"
      @onClickBtnBatchTrash="onClickBtnBatchTrash"
      @onClickBtnBatchRestore="onClickBtnBatchRestore"
      @onClickBtnCheckout="onClickBtnCheckout"
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
  name: "item-list",
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
          key: "title",
          label: this.$t("FIELD_TITLE_LABEL"),
          type: "editable",
          width: 300
        },
        {
          key: "featured",
          label: this.$t("OPTION_FEATURED"),
          type: "icon",
          width: "120",
          formatter: item => {
            return {
              style: {
                color: item === 1 ? "#fdd034" : "#cfd3da"
              },
              icon: ["fas", "star"]
            };
          }
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
          key: "category_title",
          label: this.$t("OPTION_CATEGORY"),
          width: "120"
        },
        {
          key: "creator",
          label: this.$t("LIST_DATA_AUTHOR_LABEL")
        },
        {
          key: "updater",
          label: this.$t("LIST_DATA_MODIFIED_BY_LABEL"),
          width: "100"
        },
        {
          key: "created_at",
          label: this.$t("LIST_DATA_CREATED_DATE_LABEL")
        },
        {
          key: "updated_at",
          label: this.$t("LIST_DATA_MODIFIED_DATE_LABEL")
        },
        {
          key: "hits",
          label: this.$t("LIST_DATA_HITS_LABEL")
        },
        {
          key: "introimage",
          label: this.$t("LIST_DATA_INTRO_IMAGE_LABEL"),
          type: "icon",
          sort: false,
          formatter: item => {
            return {
              icon: item ? ["fal", "image"] : ""
            };
          }
        },
        {
          key: "image",
          label: this.$t("LIST_DATA_IMAGE_LABEL"),
          type: "icon",
          sort: false,
          formatter: item => {
            return {
              icon: item ? ["fal", "image"] : ""
            };
          }
        },
        {
          key: "language",
          label: this.$t("OPTION_LANGUAGE"),
          width: "100",
          formatter: item => {
            if (item.language === "*") return this.$t("ALL_LANGUAGE");
          }
        },
        {
          key: "id",
          label: this.$t("LIST_DATA_HEADING_ID"),
          width: "60"
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
            fn: ({ ids }) => {
              this.onClickBtnUpdateState({ ids, state: 1 });
            }
          },
          {
            text: this.$t("TOOLBAR_UNPUBLISH"),
            method: "updateState",
            fn: ({ ids }) => {
              this.onClickBtnUpdateState({ ids, state: 0 });
            }
          },
          {
            text: this.$t("TOOLBAR_FEATURED"),
            method: "updateFeatured",
            fn: ({ ids }) => {
              this.onClickBtnUpdatFeatured({ ids, featured: 1 });
            }
          },
          {
            text: this.$t("TOOLBAR_UNFEATURED"),
            method: "updateFeatured",
            fn: ({ ids }) => {
              this.onClickBtnUpdatFeatured({ ids, featured: 0 });
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
            key: "category_id",
            type: "select",
            desc: this.$t("OPTION_CATEGORY"),
            list: this.$store.getters.category_list,
            custom_attrs: {
              label: "tree_list_title",
              value: "id"
            }
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
          }
        ],
        default_value: {
          search: "",
          state: "",
          category_id: "",
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
      this.$$api_item_checkout({
        data: { ids: checkout_data },
        fn: ({ msg }) => {
          this.$message.success(msg);
          this.onGetList();
        }
      });
    },
    onOrderChange({ id, index_diff }) {
      this.$$api_item_ordering({
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
    onClickBtnUpdatFeatured({ ids, featured }) {
      this.$$api_item_updateFeatured({
        data: {
          ids,
          featured
        },
        fn: ({ msg }) => {
          this.$message.success(msg);
          this.onGetList();
        }
      });
    },
    onClickBtnBatchTrash({ ids, state }) {
      this.onClickBtnUpdateState({ ids, state });
    },
    onClickBtnBatchRestore({ ids, state }) {
      this.onClickBtnUpdateState({ ids, state });
    },
    onClickBtnUpdateState({ ids, state }) {
      this.$$api_item_updateState({
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
        this.$$api_item_delete({
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
        this.searchbar.default_value[field] = query[field];
        data[field] = query[field];
      });

      this.$$api_item_list({
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