webpackJsonp([21],{

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(473)
/* template */
var __vue_template__ = __webpack_require__(474)
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
Component.options.__file = "resources/assets/admin/views/content/item/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61a40bfb", Component.options)
  } else {
    hotAPI.reload("data-v-61a40bfb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 273:
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

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr__ = __webpack_require__(273);
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
                    //Checkout
                    if (this.checkRouteNeedCheckout(this.$route.path) && query.id) {
                        this.handleCheckout(query.id);
                    }
                    this.$router.push({
                        path: this.$route.path
                    });
                    this.$router.go(0);
                    break;
                case "savenclose":
                    //Checkout
                    this.$_editMixin_onCancel(query.id);
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
            var checkoutArray = ["item", "category", "menu", "site"];
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

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    created: function created() {
        var _this = this;

        this.$$eventBus.$on("onClickCMSFormDataToolbar", function (btnOpts) {
            var type = btnOpts.type;

            switch (type) {
                case "cancel":
                    _this.$_editMixin_onCancel(_this.$route.query.id);
                    break;
                case "save":
                case "savenclose":
                case "savenadd":
                    _this.handleSubmit({
                        btn_type: type,
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

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixins_options__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mixins_edit__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mixins_edit_cms__ = __webpack_require__(282);
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
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ItemEdit",
  components: {
    Editor: function Editor() {
      return __webpack_require__.e/* import() */(70/* duplicate */).then(__webpack_require__.bind(null, 405));
    },
    MediaInput: function MediaInput() {
      return __webpack_require__.e/* import() */(67/* duplicate */).then(__webpack_require__.bind(null, 358));
    },
    FieldForm: function FieldForm() {
      return __webpack_require__.e/* import() */(69/* duplicate */).then(__webpack_require__.bind(null, 359));
    }
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_1_mixins_options__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2_mixins_edit__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3_mixins_edit_cms__["a" /* default */]],
  data: function data() {
    return {
      fields: {
        category_id: {
          list: this.$store.getters.item_article_category_list,
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
        }
      },
      defaultValue: {
        title: "",
        alias: "",
        link: "",
        introtext: "",
        description: "",
        tags: [],
        category_id: "",
        state: 1,
        featured: 0,
        language: "",
        access: 1,
        metadesc: "",
        metakeywords: "",
        introimage: "",
        image: "",
        ordering: "",
        publish_up: "",
        publish_down: "",
        extrafield_group_id: "",
        extrafields: {}
      },
      new_tag_value: ""
    };
  },
  created: function created() {
    this.$_optionMixin_updateFieldList({
      item_article_category: "category_id",
      extrafield_group: "extrafield_group_id",
      language: "language",
      viewlevel: "access"
    });
  },

  methods: {
    queryTagSearch: function queryTagSearch(queryString, callback) {
      this.$$api_tag_list({
        data: {
          search: queryString
        },
        fn: function fn(_ref) {
          var data = _ref.data;

          callback(data.items);
        }
      });
      this.queryString;
    },
    handleTagClose: function handleTagClose(tag) {
      this.defaultValue.tags.splice(this.defaultValue.tags.indexOf(tag), 1);
    },
    handleTagConfirm: function handleTagConfirm(item) {
      var _this = this;

      if (item.type === "keyup") {
        this.$$api_tag_save({
          data: {
            title: this.new_tag_value,
            state: 1
          },
          fn: function fn(_ref2) {
            var data = _ref2.data;

            _this.defaultValue.tags.push(data.items);
            _this.new_tag_value = "";
          }
        });
      } else {
        this.defaultValue.tags.push(item);
        this.new_tag_value = "";
      }
    },
    handleTrash: function handleTrash() {
      var _this2 = this;

      this.$$api_item_updateState({
        data: {
          ids: [this.params.id],
          state: "-2"
        },
        fn: function fn(_ref3) {
          var msg = _ref3.msg;

          _this2.$message.success(msg);
          _this2.$_editMixin_onCancel(_this2.params.id);
        }
      });
    },
    handleCheckout: function handleCheckout(id) {
      this.$$api_item_checkout({
        data: { ids: [id] },
        fn: function fn() {}
      });
    },
    handleSubmit: function handleSubmit(_ref4) {
      var _this3 = this;

      var submit_data = _ref4.submit_data,
          btn_type = _ref4.btn_type;

      var submitData = Object.assign({}, submit_data);

      if (this.params.id) {
        submitData.id = this.params.id;
      }
      submitData.publish_up = this.$options.filters.storeDateFormat(submitData.publish_up);

      submitData.publish_down = this.$options.filters.storeDateFormat(submitData.publish_down);
      this.$$api_item_save({
        data: submitData,
        fn: function fn(_ref5) {
          var data = _ref5.data,
              msg = _ref5.msg;

          _this3.$_editMixin_onSubmitFinish({
            msg: msg,
            btn_type: btn_type,
            query: { id: data ? data.items.id : submit_data.id }
          });
        }
      });
    },
    handleGetData: function handleGetData() {
      var _this4 = this;

      this.$$api_item_get({
        pathVar: this.params.id,
        fn: function fn(_ref6) {
          var data = _ref6.data;

          Object.keys(_this4.defaultValue).forEach(function (key) {
            if (key in data.items) {
              _this4.defaultValue[key] = data.items[key];

              if (key === 'publish_up') {
                _this4.defaultValue[key] = _this4.$options.filters.displayDateFormat(data.items[key]);
              }

              if (key === 'publish_down') {
                _this4.defaultValue[key] = _this4.$options.filters.displayDateFormat(data.items[key]);
              }
            }
          });

          /* this.defaultValue = Object.assign(
            {},
            {
              ...data.items,
              publish_up: this.$options.filters.displayDateFormat(
                data.items["publish_up"]
              ),
              publish_down: this.$options.filters.displayDateFormat(
                data.items["publish_down"]
              )
            }
          ); */
        }
      });
    }
  }
});

/***/ }),

/***/ 474:
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
                            prop: "tags",
                            label: _vm.$t("OPTION_TAG") /*標籤*/
                          }
                        },
                        [
                          _c("div", { staticClass: "form-item__inner" }, [
                            _c(
                              "div",
                              { staticClass: "form-item-tags__wrapper" },
                              [
                                _vm._l(_vm.defaultValue.tags, function(tag) {
                                  return _c(
                                    "el-tag",
                                    {
                                      key: tag.id,
                                      attrs: {
                                        "disable-transitions": false,
                                        closable: ""
                                      },
                                      on: {
                                        close: function($event) {
                                          return _vm.handleTagClose(tag)
                                        }
                                      }
                                    },
                                    [_vm._v(_vm._s(tag.title))]
                                  )
                                }),
                                _vm._v(" "),
                                _c("el-autocomplete", {
                                  attrs: {
                                    "value-key": "title",
                                    "fetch-suggestions": _vm.queryTagSearch,
                                    "trigger-on-focus": false
                                  },
                                  on: { select: _vm.handleTagConfirm },
                                  nativeOn: {
                                    keyup: function($event) {
                                      if (
                                        !$event.type.indexOf("key") &&
                                        _vm._k(
                                          $event.keyCode,
                                          "enter",
                                          13,
                                          $event.key,
                                          "Enter"
                                        )
                                      ) {
                                        return null
                                      }
                                      return _vm.handleTagConfirm($event)
                                    }
                                  },
                                  model: {
                                    value: _vm.new_tag_value,
                                    callback: function($$v) {
                                      _vm.new_tag_value = $$v
                                    },
                                    expression: "new_tag_value"
                                  }
                                })
                              ],
                              2
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "introtext",
                            label: _vm.$t("FIELD_INTRO_TEXT_LABEL") /*摘要文字*/
                          }
                        },
                        [
                          _c("el-input", {
                            attrs: { type: "textarea", rows: 2 },
                            model: {
                              value: _vm.defaultValue.introtext,
                              callback: function($$v) {
                                _vm.$set(_vm.defaultValue, "introtext", $$v)
                              },
                              expression: "defaultValue.introtext"
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
                              "FIELD_ITEM_DESCRIPTION_LABEL"
                            ) /*內容文字*/
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
                            label:
                              _vm.$t("CONTENT_FIELD_INTRO_IMAGE_LABEL") +
                              " " /*(新訊尺寸: 600*400)摘要圖片*/
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
                        { attrs: { prop: "image" } },
                        [
                          _c(
                            "template",
                            { slot: "label" },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(
                                    _vm.$t(
                                      "CONTENT_FIELD_MAIN_IMAGE_LABEL"
                                    ) /*主要圖片*/
                                  ) +
                                  "\n              "
                              ),
                              _c(
                                "el-button",
                                {
                                  attrs: {
                                    size: "small",
                                    type: "info",
                                    plain: ""
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.$set(
                                        _vm.defaultValue,
                                        "image",
                                        _vm.defaultValue.introimage
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t(
                                        "FIELD_MAIN_IMAGE_SAME_AS_INTRO_IMAGE_LABEL"
                                      ) /*與摘要圖片相同*/
                                    )
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
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
                        2
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
                            ),
                            1
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
                              return _vm.$set(
                                _vm.defaultValue,
                                "extrafields",
                                $event
                              )
                            }
                          }
                        })
                      ]
                    : _vm._e()
                ],
                2
              )
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
                        }),
                        _vm._v(" "),
                        _c("el-option", {
                          attrs: {
                            label: _vm.$t("TRASHED") /*刪除至回收桶中*/,
                            value: -2
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
                      prop: "category_id",
                      label: _vm.$t("OPTION_CATEGORY") /*分類*/
                    }
                  },
                  [
                    _c(
                      "el-select",
                      {
                        model: {
                          value: _vm.defaultValue.category_id,
                          callback: function($$v) {
                            _vm.$set(_vm.defaultValue, "category_id", $$v)
                          },
                          expression: "defaultValue.category_id"
                        }
                      },
                      _vm._l(_vm.fields.category_id.list, function(option) {
                        return _c("el-option", {
                          key:
                            option[_vm.fields.category_id.custom_attrs.value],
                          attrs: {
                            label:
                              option[_vm.fields.category_id.custom_attrs.label],
                            value:
                              option[_vm.fields.category_id.custom_attrs.value]
                          }
                        })
                      }),
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
                      prop: "featured",
                      label: _vm.$t("OPTION_FEATURED") /*精選*/
                    }
                  },
                  [
                    _c(
                      "el-radio-group",
                      {
                        model: {
                          value: _vm.defaultValue.featured,
                          callback: function($$v) {
                            _vm.$set(_vm.defaultValue, "featured", $$v)
                          },
                          expression: "defaultValue.featured"
                        }
                      },
                      [
                        _c("el-radio-button", { attrs: { label: "1" } }, [
                          _vm._v(_vm._s(_vm.$t("YES") /*是*/))
                        ]),
                        _vm._v(" "),
                        _c("el-radio-button", { attrs: { label: "0" } }, [
                          _vm._v(_vm._s(_vm.$t("NO") /*否*/))
                        ])
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
                      }),
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
                          key: option[_vm.fields.language.custom_attrs.value],
                          attrs: {
                            label:
                              option[_vm.fields.language.custom_attrs.label],
                            value:
                              option[_vm.fields.language.custom_attrs.value]
                          }
                        })
                      }),
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
                      prop: "publish_up",
                      label: _vm.$t("FIELD_PUBLISH_UP_DATE")
                    }
                  },
                  [
                    _c("el-date-picker", {
                      attrs: {
                        "value-format": "yyyy-MM-dd HH:mm:ss",
                        type: "datetime"
                      },
                      model: {
                        value: _vm.defaultValue.publish_up,
                        callback: function($$v) {
                          _vm.$set(_vm.defaultValue, "publish_up", $$v)
                        },
                        expression: "defaultValue.publish_up"
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
                      prop: "publish_down",
                      label: _vm.$t("FIELD_PUBLISH_DOWN_DATE")
                    }
                  },
                  [
                    _c("el-date-picker", {
                      attrs: {
                        "value-format": "yyyy-MM-dd HH:mm:ss",
                        type: "datetime"
                      },
                      model: {
                        value: _vm.defaultValue.publish_down,
                        callback: function($$v) {
                          _vm.$set(_vm.defaultValue, "publish_down", $$v)
                        },
                        expression: "defaultValue.publish_down"
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
    require("vue-hot-reload-api")      .rerender("data-v-61a40bfb", module.exports)
  }
}

/***/ })

});