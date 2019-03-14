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
import cms_mixin from "mixins/list_mixin.js"

export default {
  name: "site-list",
  mixins: [cms_mixin],
  data() {
    return {
      list: [],
      list_loading: {
        flag: false
      },
      fields: [
        {
          key: "title",
          label: this.$t("FIELD_TITLE_LABEL"),
          type: "editable"
        },
        {
          key: "url",
          label: this.$t("SITE_FIELD_URL_LABEL")
        },
        {
          key: "language",
          label: this.$t("OPTION_LANGUAGE")
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
          }
        ],
        default_value: {
          search: "",
          state: ""
        }
      }
    };
  },
  methods: {
    /**
     * Toolbar
     */
    onClickBtnBatchDelete({ ids, datas }) {
      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(() => {
        this.$$api_site_delete({
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
      this.$$api_site_list({
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
