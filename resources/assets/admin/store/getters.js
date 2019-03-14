const getters = {
    language: state => state.sys.language,
    site_list: state => state.sys.site_list,
    asset_list: state => state.sys.asset_list,
    role_list: state => state.sys.role_list,
    viewlevel_list: state => state.sys.viewlevel_list,
    category_list: state => state.sys.category_list,
    language_list: state => state.sys.language_list
};
export default getters;
