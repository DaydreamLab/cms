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
  name: "asset-group-edit",
  data() {
    return {
      params: {
        id: "",
        pid: 1
      },
      fields: [
        {
          key: "title",
          desc: "請輸入資源群組名稱",
          label: "資源群組名稱"
        },
        {
          key: "state",
          label: "是否啟用",
          desc: "",
          type: "radio",
          list: [
            {
              text: "禁用",
              value: "0"
            },
            {
              text: "啟用",
              value: "1"
            }
          ]
        }
      ],
      toolbar: {
        type: "edit"
      },
      default_value: {
        title: "",
        state: 1
      }
    };
  },
  methods: {
    onSubmit({ data, info, type }) {
      if (this.params.id) {
        data.id = this.params.id;
      }
      this.$$api_asset_saveGroup({
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
      this.$router.push({
        path: this.$route.path.replace("/edit", ""),
        query: this.$router.go(-1)
      });
    },
    onGetView() {
      this.$$api_asset_getGroup({
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