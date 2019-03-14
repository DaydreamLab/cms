<template>
  <div>
    <FormData
      :FieldList="fields"
      :DefaultValue="default_value"
      :Toolbar="toolbar"
      @onSubmit="onSubmit"
      @onCancel="onCancel"
    />
  </div>
</template>
<script>
export default {
  name: "api-edit",
  data() {
    return {
      params: {
        id: "",
        pid: 1
      },
      fields: [
        {
          key: "asset_id",
          type: "select",
          label: "Asset",
          list: [],
          custom_attrs: {
            label: "tree_title",
            value: "id"
          }
        },
        {
          key: "url",
          label: "路徑"
        },
        {
          key: "method",
          desc: "Please enter api method",
          label: "代碼"
        }
      ],
      toolbar: {
        type: "edit"
      },
      default_value: {
        asset_id: 1,
        url: "",
        method: ""
      }
    };
  },
  methods: {
    onSubmit({ data, info, type }) {
      if (this.params.id) {
        data.id = this.params.id;
      }
      this.$$api_api_save({
        data,
        fn: ({ data, msg }) => {
          this.$message.success(msg);
          switch (type) {
            case "save":
              this.$router.push({
                path: this.$route.path,
                query: {
                  id: data.items.id,
                  pid: data.items.parent_id
                }
              });
              break;
            case "savenclose":
              this.onCancel();
              break;
            case "savenadd":
              this.$router.push({
                path: this.$route.path
              });
              this.$router.go(0);
              break;
          }
        }
      });
    },
    onCancel() {
      this.$router.push(this.$route.path.replace("/edit", ""));
    },
    onGetView() {
      this.$$api_api_get({
        pathVar: this.params.id,
        fn: ({ data }) => {
          Object.keys(this.default_value).forEach(
            field => (this.default_value[field] = data.items[field])
          );
        }
      });
    },

    onUpdateParams() {
      this.params.id = parseInt(this.$route.query.id) || "";

      this.$$api_asset_list({
        fn: ({ data }) => {
          this.fields[0].list = data.items;
        }
      });
    },

    init() {
      this.onUpdateParams();

      if (this.params.id) {
        this.onGetView();
      }
    }
  },
  created() {
    this.init();
  },
  watch: {
    $route() {
      this.init();
    }
  }
};
</script>