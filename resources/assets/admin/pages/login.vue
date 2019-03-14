<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="content login-wrapper">
          <el-form
            label-position="left"
            v-loading="login_loading"
            :element-loading-text="$t('LOGIN_LOADING')/*登入中⋯⋯*/"
            :model="data"
            :rules="rule_data"
            ref="data"
            class="login-form"
          >
            <el-form-item class="text-center login-header">
              <SvgIcon icon-class="logo" style="width: 100%; height: 45px;"/>
            </el-form-item>
            <el-form-item prop="email">
              <el-input
                type="email"
                auto-complete="off"
                :placeholder="$t('GLOBAL_USERNAME')/*帳號*/"
                v-model="data.email"
              ></el-input>
            </el-form-item>

            <el-form-item prop="password">
              <el-input
                :type="(password_visible) ?  'text' : 'password'"
                auto-complete="off"
                :placeholder="$t('GLOBAL_PASSWORD')/*密碼*/"
                v-model="data.password"
                @keyup.native.enter="onLogin('data',true)"
              >
                <el-button slot="append" @click="togglePassword">
                  <font-awesome-icon :icon="['fal', (password_visible) ? 'eye' :'eye-slash']"/>
                </el-button>
              </el-input>
            </el-form-item>

            <el-form-item>
              <el-checkbox
                :checked="remember.remember_flag"
                v-model="remember.remember_flag"
              >{{ $t('GLOBAL_REMEMBER_ME')/*記住帳號*/ }}</el-checkbox>
            </el-form-item>

            <el-button
              class="is-block"
              type="primary"
              @click="onLogin('data')"
            >{{ $t('LOGIN')/*登入*/ }}</el-button>
            <!-- <el-button class="is-block btn--help" type="text"><a href="mailto:service@daydream-lab.com">Login Help</a></el-button> -->
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { formatRoutes } from "utils/";

export default {
  name: "login",
  data() {
    return {
      remember: this.$store.state.user.remember,
      password_visible: false,
      login_visibel: false,
      login_loading: false, // v-loading
      data: {
        email: "",
        password: ""
      },
      rule_data: {
        email: [
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error(this.$t("ERROR_PLEASE_ENTER_USER_NAME")));
              } else {
                callback();
              }
            },
            trigger: "blur"
          },
          {
            type: "email",
            message: this.$t("ERROR_PLEASE_ENTER_VALID_EMAIL"),
            trigger: "blur"
          }
        ],
        password: [
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error(this.$t("ERROR_PLEASE_ENTER_PASSWORD")));
              } else {
                callback();
              }
            },
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    togglePassword() {
      this.password_visible = !this.password_visible;
    },
    onLogin(ref) {
      this.$refs[ref].validate(valid => {
        if (valid) {
          this.login_loading = true;
          this.$$api_user_login({
            data: this[ref],
            fn: ({ data, msg }) => {
              this.$message.success(msg);

              if (this.remember.remember_flag === true) {
                this.$store.dispatch("update_remember", {
                  remember_flag: this.remember.remember_flag,
                  remember_login_info: {
                    email: this[ref].email,
                    token: data.items.token
                  }
                });
              } else {
                this.$store.dispatch("remove_remember");
              }
              const user_id = data.items.id;
              const user_redirect = data.items.redirect;

              // 儲存用戶 token
              this.$store.dispatch("update_userinfo", data.items).then(() => {
                // 取得後台語言設定
                this.$$api_setting_get({
                  fn: ({ data }) => {
                    this.$store.commit("set_language", data.items.locale_admin);
                  }
                });
                // 取得後台管理網站列表
                this.$$api_site_list({
                  fn: ({ data }) => {
                    this.$store.commit("update_site_list", data.items);
                  }
                });
                // 取得用戶 apis
                this.$$api_user_getAPIs({
                  fn: ({ data }) => {
                    this.$store.dispatch("update_user_apis", data.items);
                  }
                });
                // 取得用戶 routes
                this.$$api_user_getRoutes({
                  fn: ({ data }) => {
                    this.login_loading = false;

                    const user_routes = data.items;
                    this.$router.options.routes = formatRoutes(user_routes);
                    this.$router.addRoutes(this.$router.options.routes);

                    this.$store
                      .dispatch("update_user_routes", {
                        routes: user_routes,
                        redirect: user_redirect
                      })
                      .then(() => {
                        this.$router.push(user_redirect);
                      });
                  }
                });
              });
            },
            errFn: err => {
              this.$message.error(err.message);
              this.login_loading = false;
            },
            tokenFlag: true
          });
        }
      });
    }
  },
  mounted() {
    if (this.$store.state.global.is_login_refresh) {
      // setTimeout(() => {
      //   this.$router.go(0);
      // }, 50);
      this.$router.go(0);
      this.$store.commit("update_login_refresh", {
        type: false
      });
    }

    if (this.remember.remember_flag === true) {
      this.data.email = this.remember.remember_login_info.email;
    }
  }
};
</script>
<style lang="sass" scoped>
.login-wrapper
  background: linear-gradient(to right, #3f6c95 0%,  #2f3855 100%)
  height: 100vh

.login-form
  position: absolute
  max-width: 600px
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  background: $color-white
  border-radius: 4px
  padding: 30px

.btn--help
  margin-top: 10px
</style>
