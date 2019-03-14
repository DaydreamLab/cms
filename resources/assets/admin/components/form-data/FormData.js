import Fields from "./fields/";

export default {
    components: Fields,
    name: "form-data",
    data() {
        return {
            setting: this.Setting,
            primary_key: this.PrimaryKey,
            fields: this.FieldList,
            components: {
                input: "DdlInput",
                textarea: "DdlTextarea",
                select: "DdlSelect",
                radio: "DdlRadio",
                switch: "DdlSwitch",
                cascader: "DdlCascader",
                checkbox: "DdlCheckbox",
                date: "DdlDate",
                daterange: "DdlDateRange",
                year: "DdlDateYear",
                month: "DdlDateMonth",
                week: "DdlDateWeek",
                time: "DdlTime",
                timerange: "DdlTimeRange",
                timefixed: "DdlTimeFixed",
                timefixedrange: "DdlTimeFixedRange",
                datetime: "DdlDateTime",
                datetimerange: "DdlDateTimeRange",
                editor: "DdlEditor",
                tree: "DdlTree"
            },
            cur_component: "",
            temp_field_obj: {},
            submit_data: this.DefaultValue,
            submit_info: {},
            rules: this.Rules || {},
            toolbar: this.Toolbar // 工具列
        };
    },
    methods: {
        /**
         * 表单提交事件
         */
        onSubmit({ ref, type }) {
            var data = {
                data: this.submit_data,
                info: this.submit_info,
                type
            };
            if (this.rules) {
                this.$refs[ref].validate(valid => {
                    if (valid) {
                        this.$emit("onSubmit", data);
                    }
                });
            } else {
                this.$emit("onSubmit", data);
            }
        },
        onReset(ref) {
            this.$refs[ref].resetFields();
            this.$emit("onReset");
        },
        onCancel() {
            this.$emit("onCancel");
        },
        onBtnEvent(opts) {
            switch (opts.type) {
                case "cancel":
                    this.onCancel();
                    break;
                case "save":
                case "savenclose":
                case "savenadd":
                    this.onSubmit({ ref: "form-data", type: opts.type });
                    break;
            }
        },
        initToolbar() {
            this.$$eventBus.$emit("onInitToolbar", {
                name: "FormData",
                data: this.toolbar
            });
        }
    },
    mounted() {
        this.initToolbar();
        if (this.setting && this.setting.type !== "search") {
            this.$$eventBus.$on("onClickFormDataToolbar", opts => {
                this.onBtnEvent(opts);
            });
        }
    },
    beforeDestroy() {
        if (this.setting && this.setting.type !== "search") {
            this.$$eventBus.$off("onClickFormDataToolbar");
        }
    },
    props: {
        FieldList: {
            type: Array,
            required: true,
            default() {
                return [];
            }
        },
        Editor: {
            type: Object,
            default() {
                return {};
            }
        },
        Rules: {
            type: Object,
            default() {
                return {};
            }
        },
        DefaultValue: {
            type: Object,
            default() {
                return {};
            }
        },
        Setting: {
            type: Object,
            default() {
                return {};
            }
        },
        PrimaryKey: {
            type: String,
            default: "id"
        },
        Toolbar: {
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
        FieldList: {
            deep: true,
            handler(v) {
                if (v) {
                    this.fields = v;
                }
            }
        },
        submit_data: {
            deep: true,
            handler(v) {}
        },
        DefaultValue: {
            deep: true,
            handler(v) {
                this.default_value = v;
            }
        },

        wangeditor_update(v) {},
        Setting(v) {
            this.setting = v;
        },
        PrimaryKey(v) {
            this.primary_key = v;
        },
        Toolbar(v) {
            this.toolbar = v;
            this.initToolbar();
        }
    }
};
