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
  name: "role-edit",
  data() {
    return {
      params: {
        id: "",
        pid: 1
      },
      fields: [
        {
          key: "parent_id",
          type: "select",
          label: "上層角色",
          list: this.$store.getters.role_list,
          custom_attrs: {
            label: "tree_title",
            value: "id"
          }
        },
        {
          key: "title",
          label: "標題"
        },
        {
          key: "redirect",
          type: "select",
          label: "登入後頁面",
          list: [],
          custom_attrs: {
            label: "full_path",
            value: "full_path"
          }
        },
        {
          key: "state",
          label: "是否啟用",
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
        parent_id: 1,
        title: "",
        redirect: "",
        state: 1
      }
    };
  },
  methods: {
    onSubmit({ data, info, type }) {
      if (this.params.id) {
        data.id = this.params.id;
      }
      this.$$api_role_save({
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
      this.$$api_role_pages({
        pathVar: this.params.id,
        fn: ({ data }) => {
          this.fields[2].list = data.items;
        }
      });

      this.$$api_role_get({
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
