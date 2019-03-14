const env = process.env;

const setting = {
    host: "/api",
    response_status_code_field: "code",
    response_status_code_success_value: 200,
    response_data_field: "data",
    response_message_field: "message"
};

const error_handler = {
    statusError: {
        // 未登錄
        401: function() {},
        // token 過期
        403: function() {}
    },
    requestError(err) {
        this.$message({
            showClose: true,
            message:
                "Request Error: " +
                (err ? err.code : "") +
                "," +
                (err ? err.message : ""),
            type: "error"
        });
    }
};

export { setting, error_handler };
