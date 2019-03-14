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
  name: "asset-edit",
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
          desc: "請選擇",
          label: "父级資源",
          list: this.$store.getters.asset_list,
          custom_attrs: {
            label: "tree_title",
            value: "id"
          },
          events: {
            change: ({ value }) => {
              // update path prepend_value
              const result = this.$store.getters.asset_list.filter(asset => {
                return asset.id === value;
              });
              this.fields[2].prepend_value = result[0].path;

              // update component prepend_value
              if (value === 1) {
                this.fields[3].prepend_value = "src/layout";
              } else {
                this.fields[3].prepend_value = "pages/";
              }
            }
          }
        },
        {
          key: "title",
          desc: "請輸入資源名稱，名稱不可重複",
          label: "資源名稱"
        },
        {
          key: "path",
          desc: "開頭須為 /；若為上層預設頁面，請留空",
          label: "資源訪問路徑",
          prepend: true,
          prepend_value: ""
        },
        {
          key: "component",
          desc: "若上層為根，請勿填寫",
          label: "資源文件路徑",
          prepend: true,
          prepend_value: "",
          append: true,
          append_value: ".vue"
        },
        {
          key: "type",
          desc: "請輸入資源類型",
          label: "資源類型",
          type: "radio",
          list: [
            {
              text: "別名",
              value: "alias"
            },
            {
              text: "選單",
              value: "menu"
            },
            {
              text: "選單標頭",
              value: "separator"
            },
            {
              text: "功能",
              value: "function"
            },
            {
              text: "外部連結",
              value: "url"
            }
          ],
          events: {
            change: ({ value }) => {
              if (value === "alias") {
                this.default_value.redirect = "noredirect";
              } else {
                this.default_value.redirect = "";
              }
            }
          }
        },
        {
          key: "redirect",
          desc: "請輸入重新導向路徑。若類型為 url 請輸入要連結的網址",
          label: "重新導向路徑"
        },
        {
          key: "icon",
          label: "icon",
          desc: "請輸入icon class"
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
        },
        {
          key: "showNav",
          label: "顯示在選單",
          desc: "",
          type: "radio",
          list: [
            {
              text: "隱藏",
              value: "0"
            },
            {
              text: "顯示",
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
        path: "",
        type: "menu",
        icon: "",
        component: "",
        redirect: "",
        state: 1,
        showNav: 1
      }
    };
  },
  methods: {
    onSubmit({ data, info, type }) {
      if (this.params.id) {
        data.id = this.params.id;
      }
      this.$$api_asset_save({
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
      // update user routes
      this.$$api_user_getRoutes({
        fn: ({ data }) => {
          this.$store
            .dispatch("update_user_routes", { routes: data.items })
            .then(() => {
              this.$router.push({
                path: this.$route.path.replace("/edit", ""),
                query: this.$router.go(-1)
              });
            });
        }
      });
    },
    onGetView() {
      this.$$api_asset_get({
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
      this.params.pid = parseInt(this.$route.query.pid) || 1;

      // parent_id list

      if (this.params.pid === 1) {
        this.fields[3].prepend_value = "src/layout";
      } else {
        this.fields[3].prepend_value = "pages/";
      }

      if (!this.$store.getters.asset_list) {
        this.$$api_asset_listOption({
          fn: ({ data }) => {
            this.$store.dispatch("update_option_related_list", {
              type: "asset",
              data: data.items
            });
          }
        });
      }
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