<template>
  <div class="ckeditor">
    <div :id="id">{{ this.submit_data[this.field] }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      editor: null
    };
  },
  computed: {
    field() {
      return this.Field;
    },
    submit_data() {
      return this.SubmitData;
    }
  },
  props: {
    id: {
      type: String,
      default:
        "editor-" + +new Date() + ((Math.random() * 1000).toFixed(0) + "")
    },
    Field: {
      type: String
    },
    SubmitData: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    initCKEditor() {
      ClassicEditor.create(document.querySelector(`#${this.id}`), {
        autosave: {
          save: editor => {
            return (this.submit_data[this.field] = editor.getData());
          }
        }
      })
        .then(editor => {
          this.editor = editor;
        })
        .catch(error => {});
    }
  },

  mounted() {
    this.initCKEditor();
  },
  watch: {
    submit_data: {
      deep: true,
      handler(v) {
        this.editor.setData(this.submit_data[this.field]);
      }
    }
  }
};
</script>
