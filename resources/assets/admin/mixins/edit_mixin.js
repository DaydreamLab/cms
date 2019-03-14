export default {
    created() {
        this.$$eventBus.$on("onClickCMSFormDataToolbar", opts => {
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
    },
    mounted() {
        this.$$eventBus.$emit("onInitToolbar", {
            name: "CMSFormData",
            data: this.toolbar
        });
    },
    beforeDestroy() {
        this.$$eventBus.$off("onClickCMSFormDataToolbar");
    },
    methods: {
        // onAfterSubmit({ type, pid }){
        // }
        onCancel() {
            this.$router.push(this.$route.path.replace("/edit", ""));
        }
    }
};
