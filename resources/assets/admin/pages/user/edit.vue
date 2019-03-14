<template>
  <el-container>
    <el-main>
      <el-tabs type="border-card">
        <el-tab-pane :label="$t('USER_TAB_DETAIL')/*會員資料*/">
          <el-form label-position="top" ref="form-data" :model="default_value">
            <el-form-item prop="first_name" :label="$t('USER_FIELD_FIRST_NAME'/*姓*/)">
              <el-input v-model="default_value.first_name"></el-input>
            </el-form-item>
            <el-form-item prop="last_name" :label="$t('USER_FIELD_LAST_NAME')/*名*/">
              <el-input v-model="default_value.last_name"></el-input>
            </el-form-item>
            <el-form-item prop="email" :label="$t('USER_FIELD_EMAIL')/*Email*/">
              <el-input v-model="default_value.email"></el-input>
            </el-form-item>
            <el-form-item prop="password" :label="$t('USER_FIELD_PASSWORD')/*密碼*/">
              <el-input v-model="default_value.password"></el-input>
            </el-form-item>
            <el-form-item
              prop="password_confirmation"
              :label="$t('USER_FIELD_PASSWORD_CONFIRMATION')/*再次輸入密碼*/"
            >
              <el-input v-model="default_value.password_confirmation"></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane :label="$t('USER_TAB_ASSIGN_GROUP')/*指定會員群組*/">
          <el-form label-position="top" ref="form-data" :model="default_value">
            <el-tree
              :data="fields.group_ids.list"
              show-checkbox
              node-key="id"
              :default-checked-keys="default_value.group_ids"
              :default-expanded-keys="default_value.group_ids"
              :props="fields.group_ids.custom_attrs"
              check-strictly
            ></el-tree>
          </el-form>
        </el-tab-pane>
        <el-tab-pane v-can="'grant_role'" :label="$t('USER_TAB_ASSIGN_ROLE')/*指定會員角色*/">
          <el-form label-position="top" ref="form-data" :model="default_value">
            <el-tree
              :data="fields.role_ids.list"
              show-checkbox
              node-key="id"
              :default-checked-keys="default_value.role_ids"
              :props="fields.group_ids.custom_attrs"
              check-strictly
            ></el-tree>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: "user-edit",
  data() {
    return {
      params: {
        id: ""
      },
      toolbar: {
        type: "edit"
      },
      fields: {
        group_ids: {
          list: [],
          custom_attrs: {
            children: "children",
            label: "title"
          }
        },
        role_ids: {
          list: [],
          custom_attrs: {
            children: "children",
            label: "title"
          }
        }
      },

      toolbar: {
        type: "edit"
      },
      default_value: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        block: "",
        reset_password: "0",
        role_ids: [],
        group_ids: []
      }
    };
  },
  methods: {
    onSubmit({ data, info, type }) {
      console.log(data);
      if (this.params.id) {
        data.id = this.params.id;
      }
      this.$$api_user_save({
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
      this.$$api_user_get({
        pathVar: this.params.id,
        fn: ({ data }) => {
          Object.keys(this.default_value).forEach(field => {
            if (field === "group_ids") {
              this.default_value[field] = data.items["groups"].map(
                item => item.id
              );
            } else if (field === "role_ids") {
              this.default_value[field] = data.items["roles"].map(
                item => item.id
              );
            } else {
              this.default_value[field] = data.items[field];
            }
          });
        }
      });
    },

    onUpdateParams() {
      this.params.id = parseInt(this.$route.query.id) || "";

      this.$set(this.toolbar, "type", this.params.id ? "edit" : "add");

      this.$$api_user_listTreeGroup({
        fn: ({ data }) => {
          this.fields.group_ids.list = data.items;
        }
      });

      this.$$api_role_listTree({
        fn: ({ data }) => {
          this.fields.role_ids.list = data.items;
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
    this.$$eventBus.$on("onClickUSERFormDataToolbar", opts => {
      switch (opts.type) {
        case "cancel":
          this.onCancel();
          break;
        case "save":
        case "savenclose":
        case "savenadd":
          this.onSubmit({
            ref: "form-data",
            type: opts.type,
            data: this.default_value
          });
          break;
        case "trash":
          this.onTrash();
          break;
      }
    });
    this.init();
  },
  mounted() {
    this.$$eventBus.$emit("onInitToolbar", {
      name: "USERFormData",
      data: this.toolbar
    });
  },
  beforeDestroy() {
    this.$$eventBus.$off("onClickUSERFormDataToolbar");
  },
  watch: {
    $route() {
      this.init();
    }
  }
};
</script>