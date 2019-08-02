webpackJsonp([15],{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(535)
/* template */
var __vue_template__ = __webpack_require__(536)
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
Component.options.__file = "resources/assets/admin/views/system/site/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a3e5206a", Component.options)
  } else {
    hotAPI.reload("data-v-a3e5206a", Component.options)
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

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            list: [],
            listLoading: {
                flag: false
            },
            paginations: {
                current_page: 1,
                total: 0,
                page_size: 10,
                page_sizes: [10, 15, 20, 25, 50, 100],
                layout: "total, sizes, prev, pager, next, jumper"
            }
        };
    },

    watch: {
        $route: {
            handler: "$_listMixin_init",
            immediate: true
        }
    },
    methods: {
        $_listMixin_goAddRoute: function $_listMixin_goAddRoute() {
            this.$router.push(this.$route.path + "/edit");
        },

        /**
         * 組裝編輯路徑
         * @param {Object} query 編輯項目參數
         * @param.attr query.id 項目 id
         * @param.attr query.pid 項目 parent_id
         */
        $_listMixin_goEditRoute: function $_listMixin_goEditRoute(query) {
            this.$router.push({
                path: this.$route.path + "/edit",
                query: _extends({}, query, {
                    from: this.$route.query
                })
            });
        },
        $_listMixin_onSearchReset: function $_listMixin_onSearchReset() {
            this.$router.push({
                path: this.$route.path
            });
        },
        $_listMixin_onSearch: function $_listMixin_onSearch(data) {
            var query = this.$route.query;

            var searchData = _extends({}, query);

            for (var s in data) {
                searchData[s] = data[s];
                if (!searchData[s]) {
                    delete searchData[s];
                }
            }
            this.$router.push({
                path: this.$route.path,
                query: searchData
            });
        },
        $_listMixin_updateCurrentPage: function $_listMixin_updateCurrentPage(page) {
            var _this = this;

            this.$_listMixin_getList({
                page: page,
                fn: function fn() {
                    _this.$router.push({
                        path: _this.$route.path,
                        query: _this.setRouteQuery("page", page)
                    });
                }
            });
        },
        $_listMixin_updatePageSize: function $_listMixin_updatePageSize(pageSize) {
            var _this2 = this;

            this.$_listMixin_getList({
                pageSize: pageSize,
                fn: function fn() {
                    _this2.$router.push({
                        path: _this2.$route.path,
                        query: _this2.setRouteQuery("page_size", pageSize)
                    });
                }
            });
        },
        $_listMixin_getList: function $_listMixin_getList() {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                page = _ref.page,
                pageSize = _ref.pageSize,
                where = _ref.where,
                fn = _ref.fn;

            this.listLoading.flag = true;

            var query = this.$route.query;

            this.paginations.current_page = page || Number(query.page) || 1;
            this.paginations.page_size = pageSize || Number(query.page_size) || this.paginations.page_size;

            var page_data = Object.assign(this.getRouteQuery(), {
                page: this.paginations.current_page,
                limit: this.paginations.page_size
            });
            if (where) {
                page_data = Object.assign(page_data, where || {});
            }
            this.handleGetList({ page_data: page_data, fn: fn });
        },
        $_listMixin_init: function $_listMixin_init() {
            this.$_listMixin_getList(); //為了在 cms mixin 可以加參數
        },
        setRouteQuery: function setRouteQuery(field, value) {
            var query = Object.assign({}, this.$route.query);

            if ((typeof field === "undefined" ? "undefined" : _typeof(field)) === "object") {
                query = field;
            } else {
                query[field] = value;
            }

            return query;
        },
        getRouteQuery: function getRouteQuery() {
            var _this3 = this;

            var query = this.$route.query;
            var numberArray = ["id", "pid", "category_id", "access"];
            var dateArray = ["start_date", "end_date"];
            var data = {};

            Object.keys(query).forEach(function (field) {
                _this3.searchbar.defaultValue[field] = numberArray.includes(field) ? Number(query[field]) : dateArray.includes(field) ? _this3.$options.filters.storeDateFormat(query[field]) : query[field];
                data[field] = query[field];
            });
            return data;
        }
    }
});

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        $_listMixin_init: function $_listMixin_init() {
            this.$set(this.toolbar, "type", this.$route.query.state === "-2" ? "trash" : "list");
            this.$_listMixin_getList();
        }
    }
});

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_options__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixins_list__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mixins_list_cms__ = __webpack_require__(290);
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
  name: "SiteList",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_options__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1_mixins_list__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2_mixins_list_cms__["a" /* default */]],
  data: function data() {
    var _this = this;

    return {
      fields: [{
        key: "title",
        label: this.$t("FIELD_TITLE_LABEL"),
        type: "editable"
      }, {
        key: "url",
        label: this.$t("SITE_FIELD_URL_LABEL")
      }, {
        key: "language_title",
        label: this.$t("OPTION_LANGUAGE")
      }, {
        width: "60",
        key: "id",
        label: this.$t("LIST_DATA_HEADING_ID")
      }],
      toolbar: {
        type: "list"
      },
      searchbar: {
        fields: [{
          key: "search",
          desc: this.$t("TOOLBAR_KEYWORDS"),
          clearable: true
        }, {
          key: "state",
          type: "select",
          desc: this.$t("OPTION_STATE"),
          clearable: true,
          list: [{
            value: "1",
            text: this.$t("PUBLISHED")
          }, {
            value: "0",
            text: this.$t("UNPUBLISHED")
          }, {
            value: "-1",
            text: this.$t("ARCHIVED")
          }, {
            value: "-2",
            text: this.$t("TRASHED")
          }],
          events: {
            change: function change() {
              _this.$_listMixin_onSearch(_this.searchbar.defaultValue);
            }
          }
        }, {
          key: "language",
          type: "select",
          desc: this.$t("OPTION_LANGUAGE"),
          list: this.$store.getters.language_list,
          clearable: true,
          custom_attrs: {
            label: "title",
            value: "sef"
          },
          events: {
            change: function change() {
              _this.$_listMixin_onSearch(_this.searchbar.defaultValue);
            }
          }
        }],
        defaultValue: {
          search: "",
          state: "",
          language: ""
        }
      }
    };
  },
  created: function created() {
    this.$_optionMixin_updateFieldList({ language: 2 }, true);
  },

  methods: {
    /**
     * Toolbar
     */
    handleBatchDelete: function handleBatchDelete(_ref) {
      var _this2 = this;

      var ids = _ref.ids,
          datas = _ref.datas;

      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function () {
        _this2.$$api_site_delete({
          data: { ids: ids },
          fn: function fn(_ref2) {
            var data = _ref2.data;

            _this2.$_listMixin_getList();
          }
        });
      });
    },
    setEditRouteQuery: function setEditRouteQuery(_ref3) {
      var data = _ref3.data;

      this.$_listMixin_goEditRoute({
        id: data.id
      });
    },
    handleGetList: function handleGetList() {
      var _this3 = this;

      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page_data = _ref4.page_data,
          _fn = _ref4.fn;

      this.$$api_site_list({
        data: page_data,
        fn: function fn(_ref5) {
          var data = _ref5.data;

          _this3.listLoading.flag = false;
          _this3.list = data.items;
          _this3.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    }
  }
});

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ListData", {
    ref: "list-data",
    attrs: {
      list: _vm.list,
      "list-loading": _vm.listLoading,
      pagination: _vm.paginations,
      toolbar: _vm.toolbar,
      searchbar: _vm.searchbar,
      "field-list": _vm.fields
    },
    on: {
      "click-add": _vm.$_listMixin_goAddRoute,
      "click-edit": _vm.setEditRouteQuery,
      "click-batch-delete": _vm.handleBatchDelete,
      "change-current-page": _vm.$_listMixin_updateCurrentPage,
      "change-page-size": _vm.$_listMixin_updatePageSize,
      search: _vm.$_listMixin_onSearch,
      "search-reset": _vm.$_listMixin_onSearchReset
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-a3e5206a", module.exports)
  }
}

/***/ })

});