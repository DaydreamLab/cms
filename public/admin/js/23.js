webpackJsonp([23],{

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(448)
/* template */
var __vue_template__ = __webpack_require__(455)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/admin/views/content/category/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c511e820", Component.options)
  } else {
    hotAPI.reload("data-v-c511e820", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return schema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalize$1; });
/* unused harmony export denormalize */
/**
 * Helpers to enable Immutable compatibility *without* bringing in
 * the 'immutable' package as a dependency.
 */

/**
 * Check if an object is immutable by checking if it has a key specific
 * to the immutable library.
 *
 * @param  {any} object
 * @return {bool}
 */
function isImmutable(object) {
  return !!(object && typeof object.hasOwnProperty === 'function' && (object.hasOwnProperty('__ownerID') || // Immutable.Map
  object._map && object._map.hasOwnProperty('__ownerID'))); // Immutable.Record
}

/**
 * Denormalize an immutable entity.
 *
 * @param  {Schema} schema
 * @param  {Immutable.Map|Immutable.Record} input
 * @param  {function} unvisit
 * @param  {function} getDenormalizedEntity
 * @return {Immutable.Map|Immutable.Record}
 */
function denormalizeImmutable(schema, input, unvisit) {
  return Object.keys(schema).reduce(function (object, key) {
    // Immutable maps cast keys to strings on write so we need to ensure
    // we're accessing them using string keys.
    var stringKey = '' + key;

    if (object.has(stringKey)) {
      return object.set(stringKey, unvisit(object.get(stringKey), schema[stringKey]));
    } else {
      return object;
    }
  }, input);
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var getDefaultGetId = function getDefaultGetId(idAttribute) {
  return function (input) {
    return isImmutable(input) ? input.get(idAttribute) : input[idAttribute];
  };
};

var EntitySchema = function () {
  function EntitySchema(key) {
    var definition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, EntitySchema);

    if (!key || typeof key !== 'string') {
      throw new Error('Expected a string key for Entity, but found ' + key + '.');
    }

    var _options$idAttribute = options.idAttribute,
        idAttribute = _options$idAttribute === undefined ? 'id' : _options$idAttribute,
        _options$mergeStrateg = options.mergeStrategy,
        mergeStrategy = _options$mergeStrateg === undefined ? function (entityA, entityB) {
      return _extends({}, entityA, entityB);
    } : _options$mergeStrateg,
        _options$processStrat = options.processStrategy,
        processStrategy = _options$processStrat === undefined ? function (input) {
      return _extends({}, input);
    } : _options$processStrat;


    this._key = key;
    this._getId = typeof idAttribute === 'function' ? idAttribute : getDefaultGetId(idAttribute);
    this._idAttribute = idAttribute;
    this._mergeStrategy = mergeStrategy;
    this._processStrategy = processStrategy;
    this.define(definition);
  }

  EntitySchema.prototype.define = function define(definition) {
    this.schema = Object.keys(definition).reduce(function (entitySchema, key) {
      var _babelHelpers$extends;

      var schema = definition[key];
      return _extends({}, entitySchema, (_babelHelpers$extends = {}, _babelHelpers$extends[key] = schema, _babelHelpers$extends));
    }, this.schema || {});
  };

  EntitySchema.prototype.getId = function getId(input, parent, key) {
    return this._getId(input, parent, key);
  };

  EntitySchema.prototype.merge = function merge(entityA, entityB) {
    return this._mergeStrategy(entityA, entityB);
  };

  EntitySchema.prototype.normalize = function normalize(input, parent, key, visit, addEntity) {
    var _this = this;

    var processedEntity = this._processStrategy(input, parent, key);
    Object.keys(this.schema).forEach(function (key) {
      if (processedEntity.hasOwnProperty(key) && _typeof(processedEntity[key]) === 'object') {
        var schema = _this.schema[key];
        processedEntity[key] = visit(processedEntity[key], processedEntity, key, schema, addEntity);
      }
    });

    addEntity(this, processedEntity, input, parent, key);
    return this.getId(input, parent, key);
  };

  EntitySchema.prototype.denormalize = function denormalize(entity, unvisit) {
    var _this2 = this;

    if (isImmutable(entity)) {
      return denormalizeImmutable(this.schema, entity, unvisit);
    }

    Object.keys(this.schema).forEach(function (key) {
      if (entity.hasOwnProperty(key)) {
        var schema = _this2.schema[key];
        entity[key] = unvisit(entity[key], schema);
      }
    });
    return entity;
  };

  createClass(EntitySchema, [{
    key: 'key',
    get: function get$$1() {
      return this._key;
    }
  }, {
    key: 'idAttribute',
    get: function get$$1() {
      return this._idAttribute;
    }
  }]);
  return EntitySchema;
}();

var PolymorphicSchema = function () {
  function PolymorphicSchema(definition, schemaAttribute) {
    classCallCheck(this, PolymorphicSchema);

    if (schemaAttribute) {
      this._schemaAttribute = typeof schemaAttribute === 'string' ? function (input) {
        return input[schemaAttribute];
      } : schemaAttribute;
    }
    this.define(definition);
  }

  PolymorphicSchema.prototype.define = function define(definition) {
    this.schema = definition;
  };

  PolymorphicSchema.prototype.getSchemaAttribute = function getSchemaAttribute(input, parent, key) {
    return !this.isSingleSchema && this._schemaAttribute(input, parent, key);
  };

  PolymorphicSchema.prototype.inferSchema = function inferSchema(input, parent, key) {
    if (this.isSingleSchema) {
      return this.schema;
    }

    var attr = this.getSchemaAttribute(input, parent, key);
    return this.schema[attr];
  };

  PolymorphicSchema.prototype.normalizeValue = function normalizeValue(value, parent, key, visit, addEntity) {
    var schema = this.inferSchema(value, parent, key);
    if (!schema) {
      return value;
    }
    var normalizedValue = visit(value, parent, key, schema, addEntity);
    return this.isSingleSchema || normalizedValue === undefined || normalizedValue === null ? normalizedValue : { id: normalizedValue, schema: this.getSchemaAttribute(value, parent, key) };
  };

  PolymorphicSchema.prototype.denormalizeValue = function denormalizeValue(value, unvisit) {
    var schemaKey = isImmutable(value) ? value.get('schema') : value.schema;
    if (!this.isSingleSchema && !schemaKey) {
      return value;
    }
    var id = isImmutable(value) ? value.get('id') : value.id;
    var schema = this.isSingleSchema ? this.schema : this.schema[schemaKey];
    return unvisit(id || value, schema);
  };

  createClass(PolymorphicSchema, [{
    key: 'isSingleSchema',
    get: function get$$1() {
      return !this._schemaAttribute;
    }
  }]);
  return PolymorphicSchema;
}();

var UnionSchema = function (_PolymorphicSchema) {
  inherits(UnionSchema, _PolymorphicSchema);

  function UnionSchema(definition, schemaAttribute) {
    classCallCheck(this, UnionSchema);

    if (!schemaAttribute) {
      throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');
    }
    return possibleConstructorReturn(this, _PolymorphicSchema.call(this, definition, schemaAttribute));
  }

  UnionSchema.prototype.normalize = function normalize(input, parent, key, visit, addEntity) {
    return this.normalizeValue(input, parent, key, visit, addEntity);
  };

  UnionSchema.prototype.denormalize = function denormalize(input, unvisit) {
    return this.denormalizeValue(input, unvisit);
  };

  return UnionSchema;
}(PolymorphicSchema);

var ValuesSchema = function (_PolymorphicSchema) {
  inherits(ValuesSchema, _PolymorphicSchema);

  function ValuesSchema() {
    classCallCheck(this, ValuesSchema);
    return possibleConstructorReturn(this, _PolymorphicSchema.apply(this, arguments));
  }

  ValuesSchema.prototype.normalize = function normalize(input, parent, key, visit, addEntity) {
    var _this2 = this;

    return Object.keys(input).reduce(function (output, key, index) {
      var _babelHelpers$extends;

      var value = input[key];
      return value !== undefined && value !== null ? _extends({}, output, (_babelHelpers$extends = {}, _babelHelpers$extends[key] = _this2.normalizeValue(value, input, key, visit, addEntity), _babelHelpers$extends)) : output;
    }, {});
  };

  ValuesSchema.prototype.denormalize = function denormalize(input, unvisit) {
    var _this3 = this;

    return Object.keys(input).reduce(function (output, key) {
      var _babelHelpers$extends2;

      var entityOrId = input[key];
      return _extends({}, output, (_babelHelpers$extends2 = {}, _babelHelpers$extends2[key] = _this3.denormalizeValue(entityOrId, unvisit), _babelHelpers$extends2));
    }, {});
  };

  return ValuesSchema;
}(PolymorphicSchema);

var validateSchema = function validateSchema(definition) {
  var isArray = Array.isArray(definition);
  if (isArray && definition.length > 1) {
    throw new Error('Expected schema definition to be a single schema, but found ' + definition.length + '.');
  }

  return definition[0];
};

var getValues = function getValues(input) {
  return Array.isArray(input) ? input : Object.keys(input).map(function (key) {
    return input[key];
  });
};

var normalize = function normalize(schema, input, parent, key, visit, addEntity) {
  schema = validateSchema(schema);

  var values = getValues(input);

  // Special case: Arrays pass *their* parent on to their children, since there
  // is not any special information that can be gathered from themselves directly
  return values.map(function (value, index) {
    return visit(value, parent, key, schema, addEntity);
  });
};

var denormalize = function denormalize(schema, input, unvisit) {
  schema = validateSchema(schema);
  return input && input.map ? input.map(function (entityOrId) {
    return unvisit(entityOrId, schema);
  }) : input;
};

var ArraySchema = function (_PolymorphicSchema) {
  inherits(ArraySchema, _PolymorphicSchema);

  function ArraySchema() {
    classCallCheck(this, ArraySchema);
    return possibleConstructorReturn(this, _PolymorphicSchema.apply(this, arguments));
  }

  ArraySchema.prototype.normalize = function normalize(input, parent, key, visit, addEntity) {
    var _this2 = this;

    var values = getValues(input);

    return values.map(function (value, index) {
      return _this2.normalizeValue(value, parent, key, visit, addEntity);
    }).filter(function (value) {
      return value !== undefined && value !== null;
    });
  };

  ArraySchema.prototype.denormalize = function denormalize(input, unvisit) {
    var _this3 = this;

    return input && input.map ? input.map(function (value) {
      return _this3.denormalizeValue(value, unvisit);
    }) : input;
  };

  return ArraySchema;
}(PolymorphicSchema);

var _normalize = function _normalize(schema, input, parent, key, visit, addEntity) {
  var object = _extends({}, input);
  Object.keys(schema).forEach(function (key) {
    var localSchema = schema[key];
    var value = visit(input[key], input, key, localSchema, addEntity);
    if (value === undefined || value === null) {
      delete object[key];
    } else {
      object[key] = value;
    }
  });
  return object;
};

var _denormalize = function _denormalize(schema, input, unvisit) {
  if (isImmutable(input)) {
    return denormalizeImmutable(schema, input, unvisit);
  }

  var object = _extends({}, input);
  Object.keys(schema).forEach(function (key) {
    if (object[key]) {
      object[key] = unvisit(object[key], schema[key]);
    }
  });
  return object;
};

var ObjectSchema = function () {
  function ObjectSchema(definition) {
    classCallCheck(this, ObjectSchema);

    this.define(definition);
  }

  ObjectSchema.prototype.define = function define(definition) {
    this.schema = Object.keys(definition).reduce(function (entitySchema, key) {
      var _babelHelpers$extends;

      var schema = definition[key];
      return _extends({}, entitySchema, (_babelHelpers$extends = {}, _babelHelpers$extends[key] = schema, _babelHelpers$extends));
    }, this.schema || {});
  };

  ObjectSchema.prototype.normalize = function normalize() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _normalize.apply(undefined, [this.schema].concat(args));
  };

  ObjectSchema.prototype.denormalize = function denormalize() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _denormalize.apply(undefined, [this.schema].concat(args));
  };

  return ObjectSchema;
}();

var visit = function visit(value, parent, key, schema, addEntity) {
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' || !value) {
    return value;
  }

  if ((typeof schema === 'undefined' ? 'undefined' : _typeof(schema)) === 'object' && (!schema.normalize || typeof schema.normalize !== 'function')) {
    var method = Array.isArray(schema) ? normalize : _normalize;
    return method(schema, value, parent, key, visit, addEntity);
  }

  return schema.normalize(value, parent, key, visit, addEntity);
};

var addEntities = function addEntities(entities) {
  return function (schema, processedEntity, value, parent, key) {
    var schemaKey = schema.key;
    var id = schema.getId(value, parent, key);
    if (!(schemaKey in entities)) {
      entities[schemaKey] = {};
    }

    var existingEntity = entities[schemaKey][id];
    if (existingEntity) {
      entities[schemaKey][id] = schema.merge(existingEntity, processedEntity);
    } else {
      entities[schemaKey][id] = processedEntity;
    }
  };
};

var schema = {
  Array: ArraySchema,
  Entity: EntitySchema,
  Object: ObjectSchema,
  Union: UnionSchema,
  Values: ValuesSchema
};

var normalize$1 = function normalize$$1(input, schema) {
  if (!input || (typeof input === 'undefined' ? 'undefined' : _typeof(input)) !== 'object') {
    throw new Error('Unexpected input given to normalize. Expected type to be "object", found "' + (typeof input === 'undefined' ? 'undefined' : _typeof(input)) + '".');
  }

  var entities = {};
  var addEntity = addEntities(entities);

  var result = visit(input, input, null, schema, addEntity);
  return { entities: entities, result: result };
};

var unvisitEntity = function unvisitEntity(id, schema, unvisit, getEntity, cache) {
  var entity = getEntity(id, schema);
  if ((typeof entity === 'undefined' ? 'undefined' : _typeof(entity)) !== 'object' || entity === null) {
    return entity;
  }

  if (!cache[schema.key]) {
    cache[schema.key] = {};
  }

  if (!cache[schema.key][id]) {
    // Ensure we don't mutate it non-immutable objects
    var entityCopy = isImmutable(entity) ? entity : _extends({}, entity);

    // Need to set this first so that if it is referenced further within the
    // denormalization the reference will already exist.
    cache[schema.key][id] = entityCopy;
    cache[schema.key][id] = schema.denormalize(entityCopy, unvisit);
  }

  return cache[schema.key][id];
};

var getUnvisit = function getUnvisit(entities) {
  var cache = {};
  var getEntity = getEntities(entities);

  return function unvisit(input, schema) {
    if ((typeof schema === 'undefined' ? 'undefined' : _typeof(schema)) === 'object' && (!schema.denormalize || typeof schema.denormalize !== 'function')) {
      var method = Array.isArray(schema) ? denormalize : _denormalize;
      return method(schema, input, unvisit);
    }

    if (input === undefined || input === null) {
      return input;
    }

    if (schema instanceof EntitySchema) {
      return unvisitEntity(input, schema, unvisit, getEntity, cache);
    }

    return schema.denormalize(input, unvisit);
  };
};

var getEntities = function getEntities(entities) {
  var isImmutable$$1 = isImmutable(entities);

  return function (entityOrId, schema) {
    var schemaKey = schema.key;

    if ((typeof entityOrId === 'undefined' ? 'undefined' : _typeof(entityOrId)) === 'object') {
      return entityOrId;
    }

    return isImmutable$$1 ? entities.getIn([schemaKey, entityOrId.toString()]) : entities[schemaKey][entityOrId];
  };
};

var denormalize$1 = function denormalize$$1(input, schema, entities) {
  if (typeof input !== 'undefined') {
    return getUnvisit(entities)(input, schema);
  }
};




/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr__ = __webpack_require__(279);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }



/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        handleUpdateField: function handleUpdateField(field, data, fieldKeyOrIndex, isSearchbar) {
            this.updateStoreFieldList(field, data[field] || data);
            isSearchbar ? this.updateSearchbarFieldList(field, fieldKeyOrIndex) : this.updateFieldList(field, fieldKeyOrIndex);
        },
        updateFieldList: function updateFieldList(field, fieldKeyOrIndex) {
            this.fields[fieldKeyOrIndex]["list"] = this.$store.getters[field + "_list"];
        },
        updateSearchbarFieldList: function updateSearchbarFieldList(field, fieldIndex) {
            this.searchbar.fields[fieldIndex]["list"] = this.$store.getters[field + "_list"];
        },
        updateStoreFieldList: function updateStoreFieldList(field, value) {
            var _this = this;

            if (field === "language") {
                value = [{
                    sef: "*",
                    title: this.$t("ALL_LANGUAGE")
                }].concat(_toConsumableArray(value));
            }
            if (field === "asset") {
                value = value.map(function (el) {
                    var _el$tree_list_title$s = el.tree_list_title.split(" "),
                        _el$tree_list_title$s2 = _slicedToArray(_el$tree_list_title$s, 2),
                        prefix = _el$tree_list_title$s2[0],
                        title = _el$tree_list_title$s2[1];

                    var combinedTitle = title ? prefix + " " + _this.$t(title) : _this.$t(prefix);
                    return _extends({}, el, { tree_list_title: combinedTitle });
                });
            }
            if (field === "asset" || field === "item_category" || field === "menu_category") {
                value[0]["tree_list_title"] = value[0]["tree_list_title"].replace("ROOT", this.$t("GLOBAL_ROOT" /*根*/));
            }

            this.$store.dispatch("update_option_related_list", {
                type: field,
                data: value
            });
        },

        /**
         * 跟後端拿所需欄位類型之值
         * @param {Array} fields
         * @param {Object} typeAndTarget
         * @param {Boolean} isSearchbar
         * @returns {Object} 以 type 為 key 值的 Array
         */
        $_optionMixin_handleGetFieldList: function $_optionMixin_handleGetFieldList() {
            var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            var _this2 = this;

            var typeAndTarget = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var isSearchbar = arguments[2];

            this.$$api_option_list({
                data: {
                    types: fields
                },
                fn: function fn(_ref) {
                    var data = _ref.data;

                    fields.forEach(function (type) {
                        if (type === "extrafield_group") {
                            data.items[type] = [{
                                id: 0,
                                value: "",
                                title: _this2.$t("OPTION_NONE")
                            }].concat(_toConsumableArray(data.items[type]));
                            var groups = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["b" /* schema */].Entity("groups");
                            var normalize_list = Object(__WEBPACK_IMPORTED_MODULE_0_normalizr__["a" /* normalize */])(data.items[type], [groups]);
                            _this2.handleUpdateField(type, normalize_list.entities["groups"], typeAndTarget[type], isSearchbar);
                        } else {
                            _this2.handleUpdateField(type, data.items, typeAndTarget[type], isSearchbar);
                        }
                    });
                }
            });
        },

        /**
         * 更新下拉選單列表
         * @param {Object} typeAndTarget
         * 更新的欄位類型與其位置與fields 的相對位置
         * 當 fields 為 Object 則為 key 值
         * 當 fields 為 Array 則為 index 值
         * @param {Boolean} isSearchbar 是否為 searchbar 欄位的下拉選單
         */
        $_optionMixin_updateFieldList: function $_optionMixin_updateFieldList() {
            var _this3 = this;

            var typeAndTarget = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var isSearchbar = arguments[1];

            var fieldsNotExit = Object.keys(typeAndTarget).filter(function (key) {
                return !_this3.checkStoreField(key);
            });
            if (fieldsNotExit.length > 0) {
                this.$_optionMixin_handleGetFieldList(fieldsNotExit, typeAndTarget, isSearchbar);
            }
        },
        checkStoreField: function checkStoreField(field) {
            return Boolean(this.$store.getters[field + "_list"]);
        }
    }
});

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            params: {
                id: "",
                pid: ""
            },
            toolbar: {
                type: "edit"
            }
        };
    },

    watch: {
        $route: {
            immediate: true,
            handler: "initData"
        }
    },
    methods: {
        $_editMixin_onSubmitFinish: function $_editMixin_onSubmitFinish(_ref) {
            var msg = _ref.msg,
                btn_type = _ref.btn_type,
                query = _ref.query;

            this.$message.success(msg);
            switch (btn_type) {
                case "save":
                    this.$router.push({
                        path: this.$route.path,
                        query: query
                    });
                    break;
                case "savenadd":
                    this.$router.push({
                        path: this.$route.path
                    });
                    this.$router.go(0);
                    break;
                case "savenclose":
                    this.$_editMixin_onCancel();
                    break;
            }
        },
        $_editMixin_onCancel: function $_editMixin_onCancel() {
            var checkout_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

            if (this.checkRouteNeedCheckout(this.$route.path) && checkout_id) {
                this.handleCheckout(checkout_id);
            }
            this.$router.push({
                path: this.$route.path.replace("/edit", ""),
                query: this.$route.query.from
            });
        },
        checkRouteNeedCheckout: function checkRouteNeedCheckout(route) {
            var checkoutArray = ["item", "category", "menu"];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = checkoutArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var path = _step.value;

                    if (route.includes(path)) {
                        return true;
                        break;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        },
        updateParams: function updateParams() {
            this.params.id = Number(this.$route.query.id) || "";
            this.params.pid = Number(this.$route.query.pid) || 1;
            this.$set(this.toolbar, "type", this.params.id ? "edit" : "add");
        },
        initData: function initData() {
            this.updateParams();

            if (this.params.id) {
                this.handleGetData();
            }
        }
    }
});

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    created: function created() {
        var _this = this;

        this.$$eventBus.$on("onClickCMSFormDataToolbar", function (btnType) {
            switch (btnType) {
                case "cancel":
                    _this.$_editMixin_onCancel(_this.$route.query.id);
                    break;
                case "save":
                case "savenclose":
                case "savenadd":
                    _this.handleSubmit({
                        btn_type: btnType,
                        submit_data: _this.defaultValue
                    });
                    break;
                case "trash":
                    _this.handleTrash();
                    break;
            }
        });
    },
    mounted: function mounted() {
        this.initToolbar(this.toolbar);
    },
    beforeDestroy: function beforeDestroy() {
        this.initToolbar();
        this.$$eventBus.$off("onClickCMSFormDataToolbar");
    },

    methods: {
        initToolbar: function initToolbar() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.$$eventBus.$emit("onInitToolbar", {
                name: "CMSFormData",
                data: data
            });
        }
    }
});

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_options__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixins_edit__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mixins_edit_cms__ = __webpack_require__(288);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CategoryEdit",
  components: {
    Editor: function Editor() {
      return __webpack_require__.e/* import() */(70/* duplicate */).then(__webpack_require__.bind(null, 411));
    },
    MediaInput: function MediaInput() {
      return __webpack_require__.e/* import() */(68/* duplicate */).then(__webpack_require__.bind(null, 365));
    },
    FieldForm: function FieldForm() {
      return __webpack_require__.e/* import() */(69/* duplicate */).then(__webpack_require__.bind(null, 364));
    },
    ItemList: function ItemList() {
      return __webpack_require__.e/* import() */(6/* duplicate */).then(__webpack_require__.bind(null, 108));
    }
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_options__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1_mixins_edit__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2_mixins_edit_cms__["a" /* default */]],
  data: function data() {
    return {
      fields: {
        parent_id: {
          list: this.$store.getters.item_category_list,
          custom_attrs: {
            label: "tree_list_title",
            value: "id"
          }
        },
        extrafield_group_id: {
          list: this.$store.getters.extrafield_group_list,
          custom_attrs: {
            label: "title",
            value: "id"
          }
        },
        access: {
          list: this.$store.getters.viewlevel_list,
          custom_attrs: {
            label: "title",
            value: "id"
          }
        },
        language: {
          list: this.$store.getters.language_list,
          custom_attrs: {
            label: "title",
            value: "sef"
          }
        },
        content_type: {
          list: [{
            text: this.$t("OPTION_CONTENT_TYPE_ARTICLE") /*文章*/
            , value: "article"
          }, {
            text: this.$t("OPTION_CONTENT_TYPE_MENU") /*菜單*/
            , value: "menu"
          }, {
            text: this.$t("OPTION_CONTENT_TYPE_TIMELINE") /*時間軸*/
            , value: "timeline"
          }, {
            text: this.$t("OPTION_CONTENT_TYPE_SLIDESHOW") /*Slideshow*/
            , value: "slideshow"
          }, {
            text: this.$t("OPTION_CONTENT_TYPE_LINK") /*連結*/
            , value: "link"
          }],
          custom_attrs: {
            label: "text",
            value: "value"
          }
        }
      },
      defaultValue: {
        title: "",
        alias: "",
        description: "",
        introimage: "",
        image: "",
        parent_id: 1,
        state: 1,
        access: 1,
        language: "",
        updater: "",
        ordering: "",
        metadesc: "",
        metakeywords: "",
        extension: "item",
        content_type: "article",
        extrafield_group_id: "",
        extrafields: {},
        item_extrafield_group_id: ""
      }
    };
  },
  created: function created() {
    this.$_optionMixin_updateFieldList({
      item_category: "parent_id",
      extrafield_group: "extrafield_group_id",
      language: "language",
      viewlevel: "access"
    });
  },

  methods: {
    handleTrash: function handleTrash() {
      var _this = this;

      this.$$api_category_updateState({
        data: {
          ids: [this.params.id],
          state: "-2"
        },
        fn: function fn(_ref) {
          var msg = _ref.msg;

          _this.$message.success(msg);
          _this.$_editMixin_onCancel();
        }
      });
    },
    handleCheckout: function handleCheckout(id) {
      this.$$api_category_checkout({
        data: { ids: [id] },
        fn: function fn() {}
      });
    },
    handleSubmit: function handleSubmit(_ref2) {
      var _this2 = this;

      var submit_data = _ref2.submit_data,
          btn_type = _ref2.btn_type;

      if (this.params.id) {
        submit_data.id = this.params.id;
      }
      this.$$api_category_save({
        data: submit_data,
        fn: function fn(_ref3) {
          var data = _ref3.data,
              msg = _ref3.msg;

          _this2.$_editMixin_onSubmitFinish({
            msg: msg,
            btn_type: btn_type,
            query: {
              id: data ? data.items.id : submit_data.id,
              pid: data ? data.items.parent_id : submit_data.parent_id
            }
          });
          _this2.$_optionMixin_handleGetFieldList(["item_category"], {
            item_category: "parent_id"
          });
        }
      });
    },
    handleGetData: function handleGetData() {
      var _this3 = this;

      this.$$api_category_get({
        pathVar: this.params.id,
        fn: function fn(_ref4) {
          var data = _ref4.data;

          _this3.defaultValue = _extends({}, _this3.defaultValue, data.items);
        }
      });
    }
  }
});

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-container",
    [
      _c(
        "el-main",
        [
          _c(
            "el-tabs",
            { attrs: { type: "border-card" } },
            [
              _c(
                "el-tab-pane",
                {
                  attrs: {
                    label: _vm.$t("GLOBAL_FIELDSET_BASIC_OPTIONS") /*基本*/
                  }
                },
                [
                  _c(
                    "el-form",
                    {
                      ref: "form-data",
                      attrs: {
                        "label-width": "100px",
                        "label-position": "top",
                        model: _vm.defaultValue
                      }
                    },
                    [
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "title",
                            label: _vm.$t("FIELD_TITLE_LABEL" /*標題*/)
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.defaultValue.title,
                              callback: function($$v) {
                                _vm.$set(_vm.defaultValue, "title", $$v)
                              },
                              expression: "defaultValue.title"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "alias",
                            label: _vm.$t("FIELD_ALIAS_LABEL") /*別名*/
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.defaultValue.alias,
                              callback: function($$v) {
                                _vm.$set(_vm.defaultValue, "alias", $$v)
                              },
                              expression: "defaultValue.alias"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "description",
                            label: _vm.$t(
                              "FIELD_CATEGORY_DESCRIPTION_LABEL"
                            ) /*分類描述*/
                          }
                        },
                        [
                          _c("Editor", {
                            staticClass: "form-item__inner",
                            model: {
                              value: _vm.defaultValue.description,
                              callback: function($$v) {
                                _vm.$set(_vm.defaultValue, "description", $$v)
                              },
                              expression: "defaultValue.description"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-tab-pane",
                {
                  attrs: {
                    label: _vm.$t(
                      "GLOBAL_FIELDSET_METADATA_OPTIONS"
                    ) /*Metadata*/
                  }
                },
                [
                  _c(
                    "el-form",
                    [
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "metadesc",
                            label: _vm.$t(
                              "FIELD_META_DESCRIPTION_LABEL"
                            ) /*Meta 說明*/
                          }
                        },
                        [
                          _c("el-input", {
                            attrs: { type: "textarea", rows: 2 },
                            model: {
                              value: _vm.defaultValue.metadesc,
                              callback: function($$v) {
                                _vm.$set(_vm.defaultValue, "metadesc", $$v)
                              },
                              expression: "defaultValue.metadesc"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "metakeywords",
                            label: _vm.$t(
                              "FIELD_META_KEYWORDS_LABEL"
                            ) /*Meta 關鍵字*/
                          }
                        },
                        [
                          _c("el-input", {
                            attrs: { type: "textarea", rows: 2 },
                            model: {
                              value: _vm.defaultValue.metakeywords,
                              callback: function($$v) {
                                _vm.$set(_vm.defaultValue, "metakeywords", $$v)
                              },
                              expression: "defaultValue.metakeywords"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-tab-pane",
                {
                  attrs: {
                    label: _vm.$t("GLOBAL_FIELDSET_IMAGE_OPTIONS") /*圖片*/
                  }
                },
                [
                  _c(
                    "el-form",
                    {
                      ref: "form-data",
                      attrs: {
                        "label-position": "top",
                        model: _vm.defaultValue
                      }
                    },
                    [
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "introimage",
                            label: _vm.$t(
                              "CONTENT_FIELD_INTRO_IMAGE_LABEL"
                            ) /*摘要圖片*/
                          }
                        },
                        [
                          _c("MediaInput", {
                            model: {
                              value: _vm.defaultValue.introimage,
                              callback: function($$v) {
                                _vm.$set(_vm.defaultValue, "introimage", $$v)
                              },
                              expression: "defaultValue.introimage"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "image",
                            label: _vm.$t(
                              "CONTENT_FIELD_MAIN_IMAGE_LABEL"
                            ) /*主要圖片*/
                          }
                        },
                        [
                          _c("MediaInput", {
                            model: {
                              value: _vm.defaultValue.image,
                              callback: function($$v) {
                                _vm.$set(_vm.defaultValue, "image", $$v)
                              },
                              expression: "defaultValue.image"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-tab-pane",
                {
                  attrs: {
                    label: _vm.$t(
                      "GLOBAL_FIELDSET_EXTRAFIELD_OPTIONS"
                    ) /*附加欄位*/
                  }
                },
                [
                  _c(
                    "el-form",
                    { ref: "form-data", attrs: { model: _vm.defaultValue } },
                    [
                      _vm.defaultValue.extension === "item" &&
                      _vm.defaultValue.content_type !== "article"
                        ? _c(
                            "el-form-item",
                            {
                              attrs: {
                                prop: "extrafield_group_id",
                                label: _vm.$t(
                                  "OPTION_ITEM_EXTRAFIELD_GROUP"
                                ) /*項目欄位群組*/
                              }
                            },
                            [
                              _c(
                                "el-select",
                                {
                                  attrs: { clearable: "" },
                                  model: {
                                    value:
                                      _vm.defaultValue.item_extrafield_group_id,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.defaultValue,
                                        "item_extrafield_group_id",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "defaultValue.item_extrafield_group_id"
                                  }
                                },
                                _vm._l(
                                  _vm.fields.extrafield_group_id.list,
                                  function(option) {
                                    return _c("el-option", {
                                      key:
                                        option[
                                          _vm.fields.extrafield_group_id
                                            .custom_attrs.value
                                        ],
                                      attrs: {
                                        label:
                                          option[
                                            _vm.fields.extrafield_group_id
                                              .custom_attrs.label
                                          ],
                                        value:
                                          option[
                                            _vm.fields.extrafield_group_id
                                              .custom_attrs.value
                                          ]
                                      }
                                    })
                                  }
                                )
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "extrafield_group_id",
                            label: _vm.$t(
                              "OPTION_EXTRAFIELD_GROUP"
                            ) /*欄位群組*/
                          }
                        },
                        [
                          _c(
                            "el-select",
                            {
                              attrs: { clearable: "" },
                              model: {
                                value: _vm.defaultValue.extrafield_group_id,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.defaultValue,
                                    "extrafield_group_id",
                                    $$v
                                  )
                                },
                                expression: "defaultValue.extrafield_group_id"
                              }
                            },
                            _vm._l(
                              _vm.fields.extrafield_group_id.list,
                              function(option) {
                                return _c("el-option", {
                                  key:
                                    option[
                                      _vm.fields.extrafield_group_id
                                        .custom_attrs.value
                                    ],
                                  attrs: {
                                    label:
                                      option[
                                        _vm.fields.extrafield_group_id
                                          .custom_attrs.label
                                      ],
                                    value:
                                      option[
                                        _vm.fields.extrafield_group_id
                                          .custom_attrs.value
                                      ]
                                  }
                                })
                              }
                            )
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.fields.extrafield_group_id.list[
                    _vm.defaultValue.extrafield_group_id
                  ] &&
                  "extrafields" in
                    _vm.fields.extrafield_group_id.list[
                      _vm.defaultValue.extrafield_group_id
                    ]
                    ? [
                        _c("FieldForm", {
                          attrs: {
                            fields:
                              _vm.fields.extrafield_group_id.list[
                                _vm.defaultValue.extrafield_group_id
                              ].extrafields,
                            data: _vm.defaultValue.extrafields
                          },
                          on: {
                            "update:data": function($event) {
                              _vm.$set(_vm.defaultValue, "extrafields", $event)
                            }
                          }
                        })
                      ]
                    : _vm._e()
                ],
                2
              ),
              _vm._v(" "),
              _vm.defaultValue.extension === "item" &&
              _vm.defaultValue.content_type !== "article"
                ? _c(
                    "el-tab-pane",
                    {
                      attrs: {
                        label: _vm.$t(
                          "GLOBAL_FIELDSET_CONTENT_MANAGE_PREFIX" /*項目管理：*/,
                          {
                            name: _vm.$t(
                              "OPTION_CONTENT_TYPE_" +
                                _vm.defaultValue.content_type.toUpperCase()
                            )
                          }
                        )
                      }
                    },
                    [
                      _vm.params.id
                        ? _c("ItemList", {
                            attrs: {
                              type: _vm.defaultValue.content_type,
                              category: {
                                id: _vm.params.id,
                                language: _vm.defaultValue.language,
                                item_extrafield:
                                  _vm.defaultValue.item_extrafield_group_id
                              }
                            }
                          })
                        : _c("div", [_vm._v("請先儲存分類")])
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("el-aside", { attrs: { width: "300px" } }, [
        _c("div", { staticClass: "content-aside__header" }, [
          _vm._v(_vm._s(_vm.$t("GLOBAL_FIELDSET_OPTIONS") /*選項*/))
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "content-aside__content" },
          [
            _c(
              "el-form",
              {
                ref: "form-data",
                attrs: { "label-position": "top", model: _vm.defaultValue }
              },
              [
                _c(
                  "el-form-item",
                  {
                    attrs: {
                      prop: "state",
                      label: _vm.$t("OPTION_STATE" /*狀態*/)
                    }
                  },
                  [
                    _c(
                      "el-select",
                      {
                        model: {
                          value: _vm.defaultValue.state,
                          callback: function($$v) {
                            _vm.$set(_vm.defaultValue, "state", $$v)
                          },
                          expression: "defaultValue.state"
                        }
                      },
                      [
                        _c("el-option", {
                          attrs: {
                            label: _vm.$t("PUBLISHED") /*發佈的*/,
                            value: 1
                          }
                        }),
                        _vm._v(" "),
                        _c("el-option", {
                          attrs: {
                            label: _vm.$t("UNPUBLISHED") /*停止發佈的*/,
                            value: 0
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  {
                    attrs: {
                      prop: "parent_id",
                      label: _vm.$t("OPTION_PARENT_CATEGORY") /*上層分類*/
                    }
                  },
                  [
                    _c(
                      "el-select",
                      {
                        model: {
                          value: _vm.defaultValue.parent_id,
                          callback: function($$v) {
                            _vm.$set(_vm.defaultValue, "parent_id", $$v)
                          },
                          expression: "defaultValue.parent_id"
                        }
                      },
                      _vm._l(_vm.fields.parent_id.list, function(option) {
                        return _c("el-option", {
                          key: option[_vm.fields.parent_id.custom_attrs.value],
                          attrs: {
                            label:
                              option[_vm.fields.parent_id.custom_attrs.label],
                            value:
                              option[_vm.fields.parent_id.custom_attrs.value]
                          }
                        })
                      })
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  {
                    attrs: {
                      prop: "extension",
                      label: _vm.$t("OPTION_EXTENSION") /*擴充類型*/
                    }
                  },
                  [
                    _c(
                      "el-select",
                      {
                        model: {
                          value: _vm.defaultValue.extension,
                          callback: function($$v) {
                            _vm.$set(_vm.defaultValue, "extension", $$v)
                          },
                          expression: "defaultValue.extension"
                        }
                      },
                      [
                        _c("el-option", {
                          attrs: {
                            label: _vm.$t("OPTION_EXTENSION_MENU") /*選單*/,
                            value: "menu"
                          }
                        }),
                        _vm._v(" "),
                        _c("el-option", {
                          attrs: {
                            label: _vm.$t("OPTION_EXTENSION_MODULE") /*模組*/,
                            value: "module"
                          }
                        }),
                        _vm._v(" "),
                        _c("el-option", {
                          attrs: {
                            label: _vm.$t("OPTION_EXTENSION_ITEM") /*項目*/,
                            value: "item"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.defaultValue.extension === "item"
                  ? _c(
                      "el-form-item",
                      {
                        attrs: {
                          prop: "content_type",
                          label: _vm.$t("OPTION_CONTENT_TYPE") /*內容類型*/
                        }
                      },
                      [
                        _c(
                          "el-select",
                          {
                            model: {
                              value: _vm.defaultValue.content_type,
                              callback: function($$v) {
                                _vm.$set(_vm.defaultValue, "content_type", $$v)
                              },
                              expression: "defaultValue.content_type"
                            }
                          },
                          _vm._l(_vm.fields.content_type.list, function(
                            option
                          ) {
                            return _c("el-option", {
                              key:
                                option[
                                  _vm.fields.content_type.custom_attrs.value
                                ],
                              attrs: {
                                label:
                                  option[
                                    _vm.fields.content_type.custom_attrs.label
                                  ],
                                value:
                                  option[
                                    _vm.fields.content_type.custom_attrs.value
                                  ]
                              }
                            })
                          })
                        )
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  {
                    attrs: {
                      prop: "access",
                      label: _vm.$t("FIELD_ACCESS_LEVEL") /*存取層級*/
                    }
                  },
                  [
                    _c(
                      "el-select",
                      {
                        model: {
                          value: _vm.defaultValue.access,
                          callback: function($$v) {
                            _vm.$set(_vm.defaultValue, "access", $$v)
                          },
                          expression: "defaultValue.access"
                        }
                      },
                      _vm._l(_vm.fields.access.list, function(option) {
                        return _c("el-option", {
                          key: option[_vm.fields.access.custom_attrs.value],
                          attrs: {
                            label: option[_vm.fields.access.custom_attrs.label],
                            value: option[_vm.fields.access.custom_attrs.value]
                          }
                        })
                      })
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  {
                    attrs: {
                      prop: "language",
                      label: _vm.$t("OPTION_LANGUAGE") /*語言*/
                    }
                  },
                  [
                    _c(
                      "el-select",
                      {
                        model: {
                          value: _vm.defaultValue.language,
                          callback: function($$v) {
                            _vm.$set(_vm.defaultValue, "language", $$v)
                          },
                          expression: "defaultValue.language"
                        }
                      },
                      _vm._l(_vm.fields.language.list, function(option) {
                        return _c("el-option", {
                          key: option.id,
                          attrs: {
                            label:
                              option[_vm.fields.language.custom_attrs.label],
                            value:
                              option[_vm.fields.language.custom_attrs.value]
                          }
                        })
                      })
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c511e820", module.exports)
  }
}

/***/ })

});