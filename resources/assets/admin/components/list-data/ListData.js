import DdlTableHeader from "./DdlTableHeader.vue";

import Sortable from "sortablejs";

export default {
    name: "list-data",
    components: { DdlTableHeader },
    data() {
        return {
            table_id:
                "table-" +
                +new Date() +
                ((Math.random() * 1000).toFixed(0) + ""), //拖曳表格ID 避免全部的表格都是相同
            batch: {
                flag: false,
                datas: [],
                ids: []
            },
            list: this.List, //列表数组
            list_loading: this.ListLoading, //列表載入
            fields: this.FieldList, //字段数组
            expand: this.Expand, //折叠
            sort: this.Sort, //拖曳排序

            btn_info: this.BtnInfo, //按钮信息

            toolbar: this.Toolbar, //工具列
            searchbar: this.Searchbar, //搜尋、篩選列
            list_actions: this.ListActions, //資料表內自訂按鈕

            pagination: this.Pagination // 分页
        };
    },
    methods: {
        handelRowClass({ row, rowIndex }) {
            if (this.sort.data) {
                console.log("this.sort.data handelRowClass");
                return row.parent_id === this.sort.data.parent_id
                    ? "sortable-enabled"
                    : "sortable-disabled";
            } else {
                return "sortable-enabled";
            }
        },
        /**
         * 表格列表触发CheckBox的事件
         * @param  {array} val 当前选中的用户信息数组，每个元素是用户信息对象
         */
        onSelectionChange(val) {
            this.batch.datas = val;
            this.batch.ids = [];
            if (val.length) {
                this.batch.flag = true;
                for (var i = 0; i < val.length; i++) {
                    this.batch.ids.push(val[i].id);
                }
            } else {
                this.batch.flag = false;
            }

            /**
             * 改变CheckBox事件，第一个参数是ID数组，第二个参数二维数组，每个数组是选中的对象
             */
            this.$emit("onSelectionChange", {
                ids: this.batch.ids,
                datas: this.batch.datas
            });
            this.$emit("onSelectionChangeObj", {
                ids: this.batch.ids,
                datas: this.batch.datas
            });
        },

        /**
         * 搜索事件
         * @param data    搜索表单的值
         */
        onSearch(opts) {
            this.$emit("onSearch", opts);
        },
        onSearchReset() {
            this.$emit("onSearchReset");
        },
        /**
         * 删除事件
         * @param  {object || boolean} user  当前信息对象或者为布尔值,为布尔值时，代表是批量删除
         * @param  {number} index 当前列表索引
         */

        onBatchDelete() {
            this.$emit("onClickBtnBatchDelete", {
                ids: this.batch.ids,
                datas: this.batch.datas
            });
        },
        onBatchTrash() {
            this.$emit("onClickBtnBatchTrash", {
                ids: this.batch.ids,
                state: -2
            });
        },
        onBatchRestore() {
            this.$emit("onClickBtnBatchRestore", {
                ids: this.batch.ids,
                state: 1
            });
        },
        /**
         * 点击按钮事件
         * @param opts  组装的返回参数
         * @param.attr  opts.type   string      按钮类型，内置四个(添加，查看，修改，删除)
         * @param.attr  opts.index  number      当点击列表中的按钮时，此值为当前行的索引
         * @param.attr  opts.data   object      当点击列表中的按钮时，此值为当前行数据
         * @param.attr  opts.list   array       当点击列别中的按钮时，此值为当前列表数据
         */
        onBtnEvent(opts) {
            switch (opts.type) {
                case "add":
                    this.$emit("onClickBtnAdd", opts);
                    break;
                case "edit":
                    const data = this.batch.flag
                        ? {
                              ...opts,
                              data: this.batch.datas[0]
                          }
                        : opts;
                    this.$emit("onClickBtnEdit", data);
                    break;

                case "trash":
                    this.onBatchTrash();
                    break;
                case "delete":
                    this.onBatchDelete();
                    break;
                case "restore":
                    this.onBatchRestore();
                    break;
                case "checkout":
                    this.$emit("onClickBtnCheckout", opts);
                    break;
                case "custom":
                    this.onCustomBtnEvent(opts);
                    break;
                default:
                    this.$emit("onClickBtn", opts);
            }
        },

        /**
         * 自定义按钮事件
         * @param opts
         */
        onCustomBtnEvent(opts) {
            if (opts.btn.fn) {
                opts.btn.fn({
                    ...opts,
                    ids: this.batch.ids,
                    datas: this.batch.datas
                });
            } else {
                this.$emit("onClickBtn", opts);
            }
        },

        /**
         * 改变当前页码事件
         * @param  {number} page 当前页面
         */
        onChangeCurrentPage(page) {
            this.$emit("onChangeCurrentPage", page);
        },

        /**
         * 改变每页显示的数量事件
         * @param  {number} page_size 每页显示的数量
         */
        onChangePageSize(pageSize) {
            this.$emit("onChangePageSize", pageSize);
        },
        initToolbar() {
            this.$$eventBus.$emit("onInitToolbar", {
                name: "ListData",
                data: this.toolbar
            });
        },
        /**
         * 表格列表觸發 sortable-handler 的事件
         * @param id 當前移動的對象 id
         * @param index_diff 當前移動的對象 index 的變化
         */
        initSortable() {
            const el = document.querySelectorAll(
                `#${this.table_id} .el-table__body-wrapper > table > tbody`
            )[0];
            Sortable.create(el, {
                handle: ".sortable-handler",
                filter: ".sortable-disabled",
                draggable: ".sortable-enabled",
                preventOnFilter: true,
                onChoose: ({ oldIndex }) => {
                    console.log("onChoose");
                },
                onStart: ({ oldIndex }) => {
                    console.log("onStart");
                    this.sort.data = this.list[oldIndex];
                    console.log(this.sort.data);
                },
                onEnd: ({ newIndex, oldIndex }) => {
                    const targetRow = this.list.splice(oldIndex, 1)[0];
                    this.list.splice(newIndex, 0, targetRow);
                    console.log("onEnd");
                    console.log(this.list[newIndex].id);
                    this.$emit("onOrderChange", {
                        id: this.list[newIndex].id,
                        index_diff: newIndex - oldIndex
                    });

                    this.sort.data = "";
                },
                onMove: event => {
                    return !event.related.classList.contains(
                        "sortable-disabled"
                    );
                }
            });
        }
    },
    beforeDestroy() {
        this.$$eventBus.$off("onClickListDataToolbar");
    },
    mounted() {
        this.initToolbar();
        this.initSortable();
        this.$$eventBus.$on("onClickListDataToolbar", opts => {
            this.onBtnEvent(opts);
        });
    },
    /**
     * 接收参数
     * @type {Object}
     */
    props: {
        List: {
            type: Array,
            required: true
        },
        ListLoading: {
            type: Object,
            default() {
                return {
                    flag: false,
                    text: ""
                };
            }
        },
        FieldList: {
            type: Array,
            required: true
        },
        BtnInfo: {
            type: Object,
            default() {
                return {};
            }
        },
        Toolbar: {
            type: Object,
            default() {
                return {};
            }
        },
        Searchbar: {
            type: Object,
            default() {
                return {};
            }
        },
        ListActions: {
            type: Object,
            default() {
                return {};
            }
        },
        Selection: {
            type: Boolean,
            default: false
        },
        Expand: {
            type: Object,
            default() {
                return {
                    show: false,
                    position: "left"
                };
            }
        },
        Sort: {
            type: Object,
            default() {
                return {
                    show: false,
                    data: ""
                };
            }
        },
        Pagination: {
            type: Object,
            default() {
                return {};
            }
        }
    },

    /**
     * 监控参数
     * @type {Object}
     */
    watch: {
        "batch.flag"(v) {
            this.$$eventBus.$emit("onSelectListDataChange", v);
        },
        List(v) {
            if (v) {
                this.list = v;
            }
        },
        ListLoading: {
            deep: true,
            handler(v) {
                this.list_loading = v;
            }
        },
        FieldList(v) {
            if (v) {
                this.fields = v;
            }
        },
        Selection(v) {
            this.selection = v;
        },
        Expand(v) {
            this.expand = v;
        },
        Sort(v) {
            this.sort = v;
        },
        BtnInfo(v) {
            this.btn_info = v;
        },
        Toolbar: {
            deep: true,
            handler(v) {
                this.toolbar = v;
                this.initToolbar();
            }
        },
        Searchbar(v) {
            this.searchbar = v;
        },
        ListActions(v) {
            this.list_actions = v;
        },
        Pagination(v) {
            this.pagination = v;
        }
    }
};
