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
  name: "user-group-edit",
  data() {
    return {
      params: {
        id: ""
      },
      fields: [
        {
          key: "title",
          desc: "Please enter group title",
          label: this.$t("FIELD_TITLE_LABEL")
        },
        {
          key: "parent_id",
          type: "select",
          desc: "Please choose parent group",
          label: "Parent Group",
          list: [],
          custom_attrs: {
            label: "tree_list_title",
            value: "id"
          },
          condition({ data }) {
            return data.parent_id !== 1;
          }
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
      this.$$api_user_saveGroup({
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
      this.$router.push(this.$route.path.replace("/edit", ""));
    },
    onGetView() {
      this.$$api_user_getGroup({
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

      this.$$api_user_listOptionGroup({
        fn: ({ data }) => {
          this.fields[1].list = data.items;
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