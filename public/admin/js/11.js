webpackJsonp([11],{

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(516)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(518)
/* template */
var __vue_template__ = __webpack_require__(519)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-08fbaeac"
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
Component.options.__file = "resources/assets/admin/views/module/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-08fbaeac", Component.options)
  } else {
    hotAPI.reload("data-v-08fbaeac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export denormalize */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalize$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return schema; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

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
    var stringKey = "" + key;

    if (object.has(stringKey)) {
      return object.set(stringKey, unvisit(object.get(stringKey), schema[stringKey]));
    } else {
      return object;
    }
  }, input);
}

var getDefaultGetId = function getDefaultGetId(idAttribute) {
  return function (input) {
    return isImmutable(input) ? input.get(idAttribute) : input[idAttribute];
  };
};

var EntitySchema = /*#__PURE__*/function () {
  function EntitySchema(key, definition, options) {
    if (definition === void 0) {
      definition = {};
    }

    if (options === void 0) {
      options = {};
    }

    if (!key || typeof key !== 'string') {
      throw new Error("Expected a string key for Entity, but found " + key + ".");
    }

    var _options = options,
        _options$idAttribute = _options.idAttribute,
        idAttribute = _options$idAttribute === void 0 ? 'id' : _options$idAttribute,
        _options$mergeStrateg = _options.mergeStrategy,
        mergeStrategy = _options$mergeStrateg === void 0 ? function (entityA, entityB) {
      return _extends({}, entityA, entityB);
    } : _options$mergeStrateg,
        _options$processStrat = _options.processStrategy,
        processStrategy = _options$processStrat === void 0 ? function (input) {
      return _extends({}, input);
    } : _options$processStrat,
        _options$fallbackStra = _options.fallbackStrategy,
        fallbackStrategy = _options$fallbackStra === void 0 ? function (key, schema) {
      return undefined;
    } : _options$fallbackStra;
    this._key = key;
    this._getId = typeof idAttribute === 'function' ? idAttribute : getDefaultGetId(idAttribute);
    this._idAttribute = idAttribute;
    this._mergeStrategy = mergeStrategy;
    this._processStrategy = processStrategy;
    this._fallbackStrategy = fallbackStrategy;
    this.define(definition);
  }

  var _proto = EntitySchema.prototype;

  _proto.define = function define(definition) {
    this.schema = Object.keys(definition).reduce(function (entitySchema, key) {
      var _extends2;

      var schema = definition[key];
      return _extends({}, entitySchema, (_extends2 = {}, _extends2[key] = schema, _extends2));
    }, this.schema || {});
  };

  _proto.getId = function getId(input, parent, key) {
    return this._getId(input, parent, key);
  };

  _proto.merge = function merge(entityA, entityB) {
    return this._mergeStrategy(entityA, entityB);
  };

  _proto.fallback = function fallback(id, schema) {
    return this._fallbackStrategy(id, schema);
  };

  _proto.normalize = function normalize(input, parent, key, visit, addEntity, visitedEntities) {
    var _this = this;

    var id = this.getId(input, parent, key);
    var entityType = this.key;

    if (!(entityType in visitedEntities)) {
      visitedEntities[entityType] = {};
    }

    if (!(id in visitedEntities[entityType])) {
      visitedEntities[entityType][id] = [];
    }

    if (visitedEntities[entityType][id].some(function (entity) {
      return entity === input;
    })) {
      return id;
    }

    visitedEntities[entityType][id].push(input);

    var processedEntity = this._processStrategy(input, parent, key);

    Object.keys(this.schema).forEach(function (key) {
      if (processedEntity.hasOwnProperty(key) && typeof processedEntity[key] === 'object') {
        var schema = _this.schema[key];
        var resolvedSchema = typeof schema === 'function' ? schema(input) : schema;
        processedEntity[key] = visit(processedEntity[key], processedEntity, key, resolvedSchema, addEntity, visitedEntities);
      }
    });
    addEntity(this, processedEntity, input, parent, key);
    return id;
  };

  _proto.denormalize = function denormalize(entity, unvisit) {
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

  _createClass(EntitySchema, [{
    key: "key",
    get: function get() {
      return this._key;
    }
  }, {
    key: "idAttribute",
    get: function get() {
      return this._idAttribute;
    }
  }]);

  return EntitySchema;
}();

var PolymorphicSchema = /*#__PURE__*/function () {
  function PolymorphicSchema(definition, schemaAttribute) {
    if (schemaAttribute) {
      this._schemaAttribute = typeof schemaAttribute === 'string' ? function (input) {
        return input[schemaAttribute];
      } : schemaAttribute;
    }

    this.define(definition);
  }

  var _proto = PolymorphicSchema.prototype;

  _proto.define = function define(definition) {
    this.schema = definition;
  };

  _proto.getSchemaAttribute = function getSchemaAttribute(input, parent, key) {
    return !this.isSingleSchema && this._schemaAttribute(input, parent, key);
  };

  _proto.inferSchema = function inferSchema(input, parent, key) {
    if (this.isSingleSchema) {
      return this.schema;
    }

    var attr = this.getSchemaAttribute(input, parent, key);
    return this.schema[attr];
  };

  _proto.normalizeValue = function normalizeValue(value, parent, key, visit, addEntity, visitedEntities) {
    var schema = this.inferSchema(value, parent, key);

    if (!schema) {
      return value;
    }

    var normalizedValue = visit(value, parent, key, schema, addEntity, visitedEntities);
    return this.isSingleSchema || normalizedValue === undefined || normalizedValue === null ? normalizedValue : {
      id: normalizedValue,
      schema: this.getSchemaAttribute(value, parent, key)
    };
  };

  _proto.denormalizeValue = function denormalizeValue(value, unvisit) {
    var schemaKey = isImmutable(value) ? value.get('schema') : value.schema;

    if (!this.isSingleSchema && !schemaKey) {
      return value;
    }

    var id = this.isSingleSchema ? undefined : isImmutable(value) ? value.get('id') : value.id;
    var schema = this.isSingleSchema ? this.schema : this.schema[schemaKey];
    return unvisit(id || value, schema);
  };

  _createClass(PolymorphicSchema, [{
    key: "isSingleSchema",
    get: function get() {
      return !this._schemaAttribute;
    }
  }]);

  return PolymorphicSchema;
}();

var UnionSchema = /*#__PURE__*/function (_PolymorphicSchema) {
  _inheritsLoose(UnionSchema, _PolymorphicSchema);

  function UnionSchema(definition, schemaAttribute) {
    if (!schemaAttribute) {
      throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');
    }

    return _PolymorphicSchema.call(this, definition, schemaAttribute) || this;
  }

  var _proto = UnionSchema.prototype;

  _proto.normalize = function normalize(input, parent, key, visit, addEntity, visitedEntities) {
    return this.normalizeValue(input, parent, key, visit, addEntity, visitedEntities);
  };

  _proto.denormalize = function denormalize(input, unvisit) {
    return this.denormalizeValue(input, unvisit);
  };

  return UnionSchema;
}(PolymorphicSchema);

var ValuesSchema = /*#__PURE__*/function (_PolymorphicSchema) {
  _inheritsLoose(ValuesSchema, _PolymorphicSchema);

  function ValuesSchema() {
    return _PolymorphicSchema.apply(this, arguments) || this;
  }

  var _proto = ValuesSchema.prototype;

  _proto.normalize = function normalize(input, parent, key, visit, addEntity, visitedEntities) {
    var _this = this;

    return Object.keys(input).reduce(function (output, key, index) {
      var _extends2;

      var value = input[key];
      return value !== undefined && value !== null ? _extends({}, output, (_extends2 = {}, _extends2[key] = _this.normalizeValue(value, input, key, visit, addEntity, visitedEntities), _extends2)) : output;
    }, {});
  };

  _proto.denormalize = function denormalize(input, unvisit) {
    var _this2 = this;

    return Object.keys(input).reduce(function (output, key) {
      var _extends3;

      var entityOrId = input[key];
      return _extends({}, output, (_extends3 = {}, _extends3[key] = _this2.denormalizeValue(entityOrId, unvisit), _extends3));
    }, {});
  };

  return ValuesSchema;
}(PolymorphicSchema);

var validateSchema = function validateSchema(definition) {
  var isArray = Array.isArray(definition);

  if (isArray && definition.length > 1) {
    throw new Error("Expected schema definition to be a single schema, but found " + definition.length + ".");
  }

  return definition[0];
};

var getValues = function getValues(input) {
  return Array.isArray(input) ? input : Object.keys(input).map(function (key) {
    return input[key];
  });
};

var normalize = function normalize(schema, input, parent, key, visit, addEntity, visitedEntities) {
  schema = validateSchema(schema);
  var values = getValues(input); // Special case: Arrays pass *their* parent on to their children, since there
  // is not any special information that can be gathered from themselves directly

  return values.map(function (value, index) {
    return visit(value, parent, key, schema, addEntity, visitedEntities);
  });
};
var denormalize = function denormalize(schema, input, unvisit) {
  schema = validateSchema(schema);
  return input && input.map ? input.map(function (entityOrId) {
    return unvisit(entityOrId, schema);
  }) : input;
};

var ArraySchema = /*#__PURE__*/function (_PolymorphicSchema) {
  _inheritsLoose(ArraySchema, _PolymorphicSchema);

  function ArraySchema() {
    return _PolymorphicSchema.apply(this, arguments) || this;
  }

  var _proto = ArraySchema.prototype;

  _proto.normalize = function normalize(input, parent, key, visit, addEntity, visitedEntities) {
    var _this = this;

    var values = getValues(input);
    return values.map(function (value, index) {
      return _this.normalizeValue(value, parent, key, visit, addEntity, visitedEntities);
    }).filter(function (value) {
      return value !== undefined && value !== null;
    });
  };

  _proto.denormalize = function denormalize(input, unvisit) {
    var _this2 = this;

    return input && input.map ? input.map(function (value) {
      return _this2.denormalizeValue(value, unvisit);
    }) : input;
  };

  return ArraySchema;
}(PolymorphicSchema);

var _normalize = function normalize(schema, input, parent, key, visit, addEntity, visitedEntities) {
  var object = _extends({}, input);

  Object.keys(schema).forEach(function (key) {
    var localSchema = schema[key];
    var resolvedLocalSchema = typeof localSchema === 'function' ? localSchema(input) : localSchema;
    var value = visit(input[key], input, key, resolvedLocalSchema, addEntity, visitedEntities);

    if (value === undefined || value === null) {
      delete object[key];
    } else {
      object[key] = value;
    }
  });
  return object;
};

var _denormalize = function denormalize(schema, input, unvisit) {
  if (isImmutable(input)) {
    return denormalizeImmutable(schema, input, unvisit);
  }

  var object = _extends({}, input);

  Object.keys(schema).forEach(function (key) {
    if (object[key] != null) {
      object[key] = unvisit(object[key], schema[key]);
    }
  });
  return object;
};

var ObjectSchema = /*#__PURE__*/function () {
  function ObjectSchema(definition) {
    this.define(definition);
  }

  var _proto = ObjectSchema.prototype;

  _proto.define = function define(definition) {
    this.schema = Object.keys(definition).reduce(function (entitySchema, key) {
      var _extends2;

      var schema = definition[key];
      return _extends({}, entitySchema, (_extends2 = {}, _extends2[key] = schema, _extends2));
    }, this.schema || {});
  };

  _proto.normalize = function normalize() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _normalize.apply(void 0, [this.schema].concat(args));
  };

  _proto.denormalize = function denormalize() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _denormalize.apply(void 0, [this.schema].concat(args));
  };

  return ObjectSchema;
}();

var visit = function visit(value, parent, key, schema, addEntity, visitedEntities) {
  if (typeof value !== 'object' || !value) {
    return value;
  }

  if (typeof schema === 'object' && (!schema.normalize || typeof schema.normalize !== 'function')) {
    var method = Array.isArray(schema) ? normalize : _normalize;
    return method(schema, value, parent, key, visit, addEntity, visitedEntities);
  }

  return schema.normalize(value, parent, key, visit, addEntity, visitedEntities);
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
var normalize$1 = function normalize(input, schema) {
  if (!input || typeof input !== 'object') {
    throw new Error("Unexpected input given to normalize. Expected type to be \"object\", found \"" + (input === null ? 'null' : typeof input) + "\".");
  }

  var entities = {};
  var addEntity = addEntities(entities);
  var visitedEntities = {};
  var result = visit(input, input, null, schema, addEntity, visitedEntities);
  return {
    entities: entities,
    result: result
  };
};

var unvisitEntity = function unvisitEntity(id, schema, unvisit, getEntity, cache) {
  var entity = getEntity(id, schema);

  if (entity === undefined && schema instanceof EntitySchema) {
    entity = schema.fallback(id, schema);
  }

  if (typeof entity !== 'object' || entity === null) {
    return entity;
  }

  if (!cache[schema.key]) {
    cache[schema.key] = {};
  }

  if (!cache[schema.key][id]) {
    // Ensure we don't mutate it non-immutable objects
    var entityCopy = isImmutable(entity) ? entity : _extends({}, entity); // Need to set this first so that if it is referenced further within the
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
    if (typeof schema === 'object' && (!schema.denormalize || typeof schema.denormalize !== 'function')) {
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
  var isImmutable$1 = isImmutable(entities);
  return function (entityOrId, schema) {
    var schemaKey = schema.key;

    if (typeof entityOrId === 'object') {
      return entityOrId;
    }

    if (isImmutable$1) {
      return entities.getIn([schemaKey, entityOrId.toString()]);
    }

    return entities[schemaKey] && entities[schemaKey][entityOrId];
  };
};

var denormalize$1 = function denormalize(input, schema, entities) {
  if (typeof input !== 'undefined') {
    return getUnvisit(entities)(input, schema);
  }
};




/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr__ = __webpack_require__(274);
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
                return !_this3.checkStoreField(key) || key === "item_article_category" || key === "item_category" || key === "extrafield_group";
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

/***/ 278:
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

/***/ 285:
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

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(517);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(251)("09e7f294", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-08fbaeac\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-08fbaeac\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(250)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_options__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixins_list__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mixins_list_cms__ = __webpack_require__(285);
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
  name: "ModuleList",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_options__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1_mixins_list__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2_mixins_list_cms__["a" /* default */]],
  data: function data() {
    var _this = this;

    return {
      fields: [{
        key: "title",
        label: this.$t("FIELD_TITLE_LABEL"),
        type: "editable"
      }, {
        key: "alias",
        label: this.$t("FIELD_ALIAS_LABEL")
      }, {
        key: "category_title",
        label: this.$t("OPTION_CATEGORY")
      }, {
        key: "state",
        label: this.$t("OPTION_STATE"),
        type: "icon-label",
        width: "90",
        formatter: function formatter(value) {
          return {
            color: "item_state_" + value + "_color",
            icon: ["fal", value === 1 ? "check" : "times"]
          };
        }
      }, {
        key: "access_title",
        label: this.$t("FIELD_ACCESS_LEVEL")
      }, {
        key: "language_title",
        label: this.$t("OPTION_LANGUAGE"),
        formatter: function formatter(_ref) {
          var language = _ref.language,
              language_title = _ref.language_title;

          return language === "*" ? _this.$t("ALL_LANGUAGE") : language_title;
        }
      }, {
        width: "60",
        key: "id",
        label: this.$t("LIST_DATA_HEADING_ID")
      }],
      toolbar: {
        type: "list",
        custom: [{
          text: this.$t("TOOLBAR_CHECKOUT"),
          method: "checkout",
          fn: function fn(_ref2) {
            var ids = _ref2.ids;

            _this.handleCheckout({ ids: ids });
          }
        }]
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
          key: "category_id",
          type: "select",
          desc: this.$t("OPTION_CATEGORY"),
          clearable: true,
          list: this.$store.getters.module_category_list,
          custom_attrs: {
            label: "tree_list_title",
            value: "id"
          },
          events: {
            change: function change() {
              _this.$_listMixin_onSearch(_this.searchbar.defaultValue);
            }
          }
        }, {
          key: "language",
          type: "select",
          desc: this.$t("OPTION_LANGUAGE"),
          clearable: true,
          list: this.$store.getters.language_list,
          custom_attrs: {
            label: "title",
            value: "sef"
          },
          events: {
            change: function change() {
              _this.$_listMixin_onSearch(_this.searchbar.defaultValue);
            }
          }
        }, {
          key: "access",
          type: "select",
          desc: this.$t("FIELD_ACCESS_LEVEL"),
          clearable: true,
          list: this.$store.getters.viewlevel_list,
          custom_attrs: {
            label: "title",
            value: "id"
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
          category_id: "",
          language: "",
          access: ""
        }
      }
    };
  },
  created: function created() {
    this.$_optionMixin_updateFieldList({ module_category: 2, language: 3, viewlevel: 4 }, true);
  },

  methods: {
    handleCheckout: function handleCheckout(_ref3) {
      var _this2 = this;

      var data = _ref3.data,
          ids = _ref3.ids;

      var checkout_data = ids ? ids : [data.id];
      this.$$api_module_checkout({
        data: { ids: checkout_data },
        fn: function fn(_ref4) {
          var msg = _ref4.msg;

          _this2.$message.success(msg);
          _this2.$_listMixin_getList();
        }
      });
    },
    handleBatchDelete: function handleBatchDelete(_ref5) {
      var _this3 = this;

      var ids = _ref5.ids,
          datas = _ref5.datas;

      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function () {
        _this3.$$api_module_delete({
          data: { ids: ids },
          fn: function fn(_ref6) {
            var data = _ref6.data;

            _this3.$_listMixin_getList();
          }
        });
      });
    },
    setEditRouteQuery: function setEditRouteQuery(_ref7) {
      var data = _ref7.data;

      this.$_listMixin_goEditRoute({
        id: data.id
      });
    },
    handleGetList: function handleGetList() {
      var _this4 = this;

      var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page_data = _ref8.page_data,
          _fn = _ref8.fn;

      this.$$api_module_list({
        data: page_data,
        fn: function fn(_ref9) {
          var data = _ref9.data;

          _this4.listLoading.flag = false;
          _this4.list = data.items;
          _this4.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    }
  }
});

/***/ }),

/***/ 519:
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
      "click-checkout": _vm.handleCheckout,
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
    require("vue-hot-reload-api")      .rerender("data-v-08fbaeac", module.exports)
  }
}

/***/ })

});