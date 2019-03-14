
<template>
  <div>
    <el-card>
      <div slot="header" class="clearfix">
        <span>帳號密碼列表</span>
      </div>
      <el-table
        :data="user_list"
        stripe
        style="width: 100%">
        <el-table-column
          prop="email"
          label="帳號">
        </el-table-column>
        <el-table-column
          prop="password"
          label="密碼">
        </el-table-column>
        <el-table-column
          prop="group"
          label="群組">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user_list: [
        {
          email: "superadmin@orangeshabu.com",
          password: "superadmin",
          group: "橘色集團超級管理者"
        },
        {
          email: "admin@orangeshabu.com",
          password: "orangeshabu",
          group: "橘色集團網站管理者"
        },

        {
          email: "admin@orangeshabushabu.com",
          password: "orangeshabushabu",
          group: "橘色涮涮屋網站管理者"
        },
        {
          email: "admin@extension1byorange.com",
          password: "extension1byorange",
          group: "Extension 1 by 橘色網站管理者"
        }
      ]
    };
  }
};
</script>

<style>
</style>
