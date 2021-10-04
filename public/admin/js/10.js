webpackJsonp([10],{

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(533)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(535)
/* template */
var __vue_template__ = __webpack_require__(537)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6758c0a9"
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
Component.options.__file = "resources/assets/admin/views/user/group/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6758c0a9", Component.options)
  } else {
    hotAPI.reload("data-v-6758c0a9", Component.options)
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

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(534);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(250)("23e4e4a6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6758c0a9\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/dist/cjs.js?indentedSyntax!../../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"D:\\\\code\\\\cms-frontend\\\\resources\\\\assets\\\\admin\\\\styles\\\\_variables.sass\"}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6758c0a9\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/dist/cjs.js?indentedSyntax!../../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"D:\\\\code\\\\cms-frontend\\\\resources\\\\assets\\\\admin\\\\styles\\\\_variables.sass\"}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(249)(false);
// imports


// module
exports.push([module.i, "\n.page-item[data-v-6758c0a9]{padding:12px 0;border-top:1px solid #e4e7ed\n}\n.subpage-item[data-v-6758c0a9]{padding-bottom:12px\n}\n.subpage-item[data-v-6758c0a9]:not(:last-child){border-bottom:1px solid #e4e7ed;margin-bottom:12px\n}\n", ""]);

// exports


/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utils_permission__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixins_options__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mixins_edit__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mixins_edit_cms__ = __webpack_require__(282);
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

 // 權限判斷 function




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UserGroupEdit",
  mixins: [__WEBPACK_IMPORTED_MODULE_1_mixins_options__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2_mixins_edit__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3_mixins_edit_cms__["a" /* default */]],
  data: function data() {
    return {
      fields: {
        parent_id: {
          list: this.$store.getters.user_group_list,
          custom_attrs: {
            label: "tree_list_title",
            value: "id"
          }
        },
        redirect: {
          list: this.$store.getters.asset_list,
          custom_attrs: {
            label: "tree_list_title",
            value: "path"
          }
        },
        asset_ids: {
          list: [],
          custom_attrs: {
            label: "tree_list_title",
            value: "id"
          }
        },
        api_ids: {
          list: [],
          custom_attrs: {
            label: "method",
            value: "id"
          }
        }
      },
      defaultValue: {
        parent_id: 1,
        title: "",
        redirect: "",
        state: 1,
        asset_ids: [],
        api_ids: []
      }
    };
  },
  created: function created() {
    this.$_optionMixin_updateFieldList({
      user_group: "parent_id",
      asset: "redirect"
    });
  },

  methods: {
    updateUserPage: function updateUserPage() {
      var _this = this;

      this.$$api_user_getPages({
        fn: function fn(_ref) {
          var data = _ref.data;
          var assets = data.items.assets;

          _this.$store.dispatch("update_user_routes", { routes: assets }).then(function () {
            _this.$router.push({
              path: _this.$route.path.replace("/edit", "")
            });
          });
        }
      });
    },
    isUsersGroup: function isUsersGroup() {
      var userGroupIds = this.$store.state.user.user_info.groups.map(function (_ref2) {
        var id = _ref2.id;
        return id;
      });
      return userGroupIds.includes(this.params.id);
    },
    handleSubmit: function handleSubmit(_ref3) {
      var _this2 = this;

      var submit_data = _ref3.submit_data,
          btn_type = _ref3.btn_type;

      if (this.params.id) {
        submit_data.id = this.params.id;
      }
      this.$$api_user_saveGroup({
        data: submit_data,
        fn: function fn(_ref4) {
          var data = _ref4.data,
              msg = _ref4.msg;

          if (isUsersGroup) {
            _this2.updateUserPage();
          } else {
            _this2.$_editMixin_onSubmitFinish({
              msg: msg,
              btn_type: btn_type,
              query: { id: data ? data.items.id : submit_data.id }
            });
          }
        }
      });
    },
    handleGetFieldList: function handleGetFieldList() {
      var _this3 = this;

      this.$$api_user_groupPages({
        pathVar: this.params.pid,
        fn: function fn(_ref5) {
          var data = _ref5.data;
          var _data$items = data.items,
              assets = _data$items.assets,
              apis = _data$items.apis;

          _this3.fields.asset_ids.list = assets;
          _this3.fields.api_ids.list = apis;
        }
      });
    },
    handleGetData: function handleGetData() {
      var _this4 = this;

      this.$$api_user_getGroup({
        pathVar: this.params.id,
        fn: function fn(_ref6) {
          var data = _ref6.data;

          _this4.defaultValue = _extends({}, _this4.defaultValue, data.items, {
            api_ids: data.items.apis,
            asset_ids: data.items.assets
          });
          if (Object(__WEBPACK_IMPORTED_MODULE_0_utils_permission__["a" /* default */])("assignAccess")) _this4.handleGetFieldList();
        }
      });
    }
  }
});

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = checkPermission;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_store___ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_router___ = __webpack_require__(18);


/**
 * @param {String} method API 對應代碼
 * @returns {Boolean}
 */
function checkPermission(method) {
    var userAssetAccess = __WEBPACK_IMPORTED_MODULE_0_store___["a" /* default */].state.user.user_access[__WEBPACK_IMPORTED_MODULE_1_router___["a" /* default */].currentRoute.meta.id];

    var hasPermission = userAssetAccess ? userAssetAccess.includes(method) : true;

    if (!hasPermission) {
        return false;
    }
    return true;
}

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-form",
    {
      ref: "form-data",
      staticClass: "form-data",
      attrs: { "label-position": "top", model: _vm.defaultValue }
    },
    [
      _c(
        "el-form-item",
        {
          attrs: { prop: "title", label: _vm.$t("FIELD_TITLE_LABEL" /*標題*/) }
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
            prop: "parent_id",
            label: _vm.$t("OPTION_PARENT_GROUP") /*上層群組*/
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
                  label: option[_vm.fields.parent_id.custom_attrs.label],
                  value: option[_vm.fields.parent_id.custom_attrs.value]
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
            prop: "redirect",
            label: _vm.$t("OPTION_USER_REDIRECT") /*登入後頁面*/
          }
        },
        [
          _c(
            "el-select",
            {
              model: {
                value: _vm.defaultValue.redirect,
                callback: function($$v) {
                  _vm.$set(_vm.defaultValue, "redirect", $$v)
                },
                expression: "defaultValue.redirect"
              }
            },
            _vm._l(_vm.fields.redirect.list, function(option) {
              return _c("el-option", {
                key: option[_vm.fields.redirect.custom_attrs.value],
                attrs: {
                  label: option[_vm.fields.redirect.custom_attrs.label],
                  value: option[_vm.fields.redirect.custom_attrs.value]
                }
              })
            }),
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm._l(_vm.fields.asset_ids.list, function(page) {
        return [
          _c(
            "el-row",
            { key: page.id, staticClass: "page-item" },
            [
              _c(
                "el-col",
                { attrs: { span: 3 } },
                [
                  _c(
                    "el-checkbox",
                    {
                      attrs: { label: page.id },
                      model: {
                        value: _vm.defaultValue.asset_ids,
                        callback: function($$v) {
                          _vm.$set(_vm.defaultValue, "asset_ids", $$v)
                        },
                        expression: "defaultValue.asset_ids"
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t(page.title)))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 21 } },
                _vm._l(page.children, function(subpage) {
                  return _c(
                    "el-row",
                    { key: subpage.id, staticClass: "subpage-item" },
                    [
                      _c(
                        "el-col",
                        { attrs: { span: 6 } },
                        [
                          _c(
                            "el-checkbox",
                            {
                              attrs: { label: subpage.id },
                              model: {
                                value: _vm.defaultValue.asset_ids,
                                callback: function($$v) {
                                  _vm.$set(_vm.defaultValue, "asset_ids", $$v)
                                },
                                expression: "defaultValue.asset_ids"
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t(subpage.title)))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.fields.api_ids.list[subpage.id]
                        ? _c(
                            "el-col",
                            { attrs: { span: 18 } },
                            _vm._l(
                              _vm.fields.api_ids.list[subpage.id],
                              function(api) {
                                return _c(
                                  "el-checkbox",
                                  {
                                    key: subpage.id + "-" + api.id,
                                    attrs: { label: api.id },
                                    model: {
                                      value: _vm.defaultValue.api_ids,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.defaultValue,
                                          "api_ids",
                                          $$v
                                        )
                                      },
                                      expression: "defaultValue.api_ids"
                                    }
                                  },
                                  [_vm._v(_vm._s(api.method))]
                                )
                              }
                            ),
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  )
                }),
                1
              )
            ],
            1
          )
        ]
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6758c0a9", module.exports)
  }
}

/***/ })

});