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
  name: "asset-grant-group",
  data() {
    return {
      params: {
        asset_id: ""
      },
      fields: [
        {
          key: "group_ids",
          label: "Groups",
          type: "tree",
          list: [],
          custom_attrs: {
            label: "title"
          },
          tree_attrs: {
            "check-strictly": true
          }
        }
      ],
      default_value: {
        group_ids: []
      },
      toolbar: {
        default: [
          "save",
          "savenclose",
          "savenadd",
          "cancel",
          "delete",
          "preview"
        ],
        custom: []
      }
    };
  },
  methods: {
    onSubmit({ data, info, type }) {
      if (this.params.asset_id) {
        data.asset_id = this.params.asset_id;
      }
      this.$$api_asset_grantGroup({
        data,
        fn: ({ data, msg }) => {
          this.$message.success(msg);
          switch (type) {
            case "save":
              this.$router.push({
                path: this.$route.path,
                query: {
                  id: data.items.id
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
      this.$router.push(this.$route.path.replace("grant", ""));
    },
    onGetView() {
      this.$$api_asset_group({
        pathVar: this.params.asset_id,
        fn: ({ data }) => {
          this.default_value.group_ids = data.items.map(item => item.id);

          // for select options
          this.$$api_asset_listGroup({
            fn: ({ data }) => {
              this.fields[0].list = data.items;
            }
          });
        }
      });
    },
    onUpdateParams() {
      this.params.asset_id = parseInt(this.$route.query.id) || "";
    },
    init() {
      this.onUpdateParams();

      if (this.params.asset_id) {
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

<style>
</style>
