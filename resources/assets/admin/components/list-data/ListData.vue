<template>
  <div class="list-data">
    <ddl-table-header
      @onSearch="onSearch"
      @onSearchReset="onSearchReset"
      @onBtnEvent="onBtnEvent"
      :Search="searchbar"
    >
      <span slot="ddl-header-after">
        <slot name="header-after"></slot>
      </span>
      <span slot="ddl-header-before">
        <h2>{{ $t($route.matched[$route.matched.length - 1].name) }}</h2>
        <slot name="header-before"></slot>
      </span>
    </ddl-table-header>

    <el-table
      border
      style="width: 100%"
      align="center"
      :data="list"
      v-loading="list_loading.flag"
      :element-loading-text="list_loading.text || $t('LIST_DATA_LOADING_TEXT')/*載入中⋯⋯*/"
      @selection-change="onSelectionChange"
      row-key="id"
      :row-class-name="handelRowClass"
      :id="table_id"
    >
      <el-table-column
        type="expand"
        v-if="expand && expand.show && expand.show===true && (!expand.position || expand.position==='left')"
      >
        <template slot-scope="scope">
          <slot name="expand" :data="scope.row" :index="scope.$index"></slot>
        </template>
      </el-table-column>

      <el-table-column v-if="sort && sort.show" width="45" prop="ordering">
        <template slot-scope="scope">
          <el-button type="text" class="caret-wrapper sortable-handler">
            <font-awesome-icon :icon="['fal', 'ellipsis-v']"></font-awesome-icon>
          </el-button>
        </template>
      </el-table-column>

      <el-table-column v-if="btn_info.batch!==false" type="selection" width="55"></el-table-column>

      <template v-for="(field, index) in fields">
        <el-table-column
          v-if="!field.type"
          :prop="field.key"
          :label="field.label"
          :align="field.align || 'left'"
          :sortable="field.sort || true"
          :formatter="field.formatter"
          :filters="field.filter_list"
          :filter-method="field.filter_method"
          :filter-multiple="field.filter_multiple"
          :style="field.style"
          :width="field.width"
        ></el-table-column>
        <el-table-column
          v-if="field.type && field.type==='image'"
          :prop="field.key"
          :label="field.label"
          :align="field.align || 'left'"
          :width="field.width"
        >
          <template slot-scope="scope">
            <img :src="(field.host || '')+scope.row[field.key]" alt>
          </template>
        </el-table-column>

        <el-table-column
          v-if="field.type && field.type==='link'"
          :prop="field.key"
          :label="field.label"
          :sortable="field.sort || true"
          :align="field.align || 'left'"
          :width="field.width"
        >
          <template slot-scope="scope">
            <a
              :target="field.link_target || '_self'"
              :href="scope.row[field.key]"
            >{{field.link_text || scope.row[field.key]}}</a>
          </template>
        </el-table-column>
        <el-table-column
          v-if="field.type && field.type==='icon'"
          :prop="field.key"
          :label="field.label"
          :align="field.align || 'center'"
          :sortable="field.sort || true"
          :formatter="field.formatter"
          :width="field.width"
        >
          {{field.sort }}
          <template slot-scope="scope">
            <font-awesome-icon
              v-if="scope.column.formatter(scope.row[field.key])['icon']"
              :style="scope.column.formatter(scope.row[field.key])['style']"
              :icon="scope.column.formatter(scope.row[field.key])['icon']"
            ></font-awesome-icon>
          </template>
        </el-table-column>
        <el-table-column
          v-if="field.type && field.type==='label'"
          :prop="field.key"
          :label="field.label"
          :align="field.align || 'center'"
          :sortable="field.sort || true"
          :formatter="field.formatter"
          :width="field.width"
        >
          <template slot-scope="scope">
            <div
              class="text-label"
              :class="scope.column.formatter(scope.row[field.key])['color']"
            >{{ scope.column.formatter(scope.row[field.key])['text'] }}</div>
          </template>
        </el-table-column>
        <el-table-column
          v-if="field.type && field.type==='icon-label'"
          :prop="field.key"
          :label="field.label"
          :align="field.align || 'center'"
          :sortable="field.sort || true"
          :formatter="field.formatter"
          :width="field.width"
        >
          <template slot-scope="scope">
            <div class="text-label" :class="scope.column.formatter(scope.row[field.key])['color']">
              <font-awesome-icon :icon="scope.column.formatter(scope.row[field.key])['icon']"></font-awesome-icon>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-if="field.type && field.type==='editable'"
          :prop="field.key"
          :label="field.label"
          :align="field.align || 'left'"
          :sortable="field.sort || true"
          :formatter="field.formatter"
          :width="field.width"
        >
          <template slot-scope="scope">
            <el-tooltip placement="top">
              <div slot="content">
                <strong>{{ $t('TOOLBAR_CHECKOUT')/*回存*/ }}</strong>
                <br>
                {{ scope.row['locker'] }}
                <br>
                {{ scope.row['locked_at'] }}
              </div>
              <el-button
                v-if="scope.row['locked_by']"
                @click="onBtnEvent({type:'checkout',data:scope.row,dataIndex:scope.$index,list:list})"
                class="btn--checkout"
                size="mini"
              >
                <font-awesome-icon :icon="['fal', 'lock-alt']"></font-awesome-icon>
              </el-button>
            </el-tooltip>
            <span
              class="editable_title"
              v-can="'edit'"
              @click="onBtnEvent({type:'edit',data:scope.row,dataIndex:scope.$index,list:list})"
              v-html="(scope.column.formatter && scope.column.formatter(scope.row[field.key])) || scope.row[field.key]"
            ></span>
            <span v-can:not="'edit'" v-html="scope.row[field.key]"></span>
          </template>
        </el-table-column>
      </template>
      <el-table-column
        v-if="'btns' in list_actions"
        :label="list_actions.label || $t('LIST_DATA_ACTIONS_LABEL')/*操作*/"
        :context="_self"
      >
        <template slot-scope="scope">
          <el-button
            v-if="list_actions.btns && ((!btn.condition || typeof btn.condition!=='function') || (typeof btn.condition==='function' && btn.condition({list:list,data:scope.row,dataIndex:scope.$index,btnIndex:index,btn:btn})===true))"
            v-for="(btn,index) in list_actions.btns"
            :key="index"
            :type="btn.type || 'info'"
            size="mini"
            @click="onCustomBtnEvent({list:list,data:scope.row,dataIndex:scope.$index,btnIndex:index,btn:btn})"
          >
            {{typeof btn.text === 'string' ? btn.text : (typeof btn.text === 'function' ? btn.text({
            list : list,
            data : scope.row,
            dataIndex: scope.$index,
            btnIndex : index,
            btn : btn
            }) : '')}}
          </el-button>
        </template>
      </el-table-column>

      <el-table-column
        type="expand"
        :context="_self"
        v-if="expand && expand.show && expand.show===true && expand.position && expand.position==='right'"
      >
        <template slot-scope="scope">
          <slot name="expand" :data="scope.row" :index="scope.$index"></slot>
        </template>
      </el-table-column>
    </el-table>
    <div class="list-pagination">
      <el-pagination
        v-if="pagination  && ( (pagination.total!==undefined && pagination.total>0) || (pagination['page-count']!==undefined && pagination['page-count']>0) )"
        :page-sizes="pagination.page_sizes"
        :page-size="pagination.page_size"
        :page-count="pagination['page-count']"
        :layout="pagination.layout"
        :total="pagination.total"
        :current-page="pagination.current_page"
        @current-change="onChangeCurrentPage"
        @size-change="onChangePageSize"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import ListDataJs from "./ListData.js";

export default ListDataJs;
</script>
<style lang="sass">
.list-pagination 
    margin-top: 20px
    text-align: center

.sortable
  &-handler
    cursor: move!important
  &-ghost td
    background-color: lighten($color-primary, 50)
  &-disabled
    opacity: 0.3
    td
        background-color: $color-gray-5
.editable_title
    cursor: pointer
    color: $color-primary
    &:hover, &:focus
        color: #596077
</style>
