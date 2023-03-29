<template>
  <div class="tags-input-container">
    <div class="flex gap-3 items-center flex-wrap ">
      <div class="tag bg-blue-400 rounded-lg px-2 py-2 flex justify-between text-white" v-for="(tag, index) in tags" :key="'tag' + index">
        <div v-if="activeTag !== index" @click="activeTag = index">{{
          tag
        }}</div>
        <input
          v-else
          v-model="tags[index]"
          placeholder="Enter recovery Phrase"
          v-focus
          :style="{ width: tag.length + 'ch' }"
          @keyup.enter="activeTag = null"
          @keyup.space="activeTag = null"
          @blur="activeTag = null"
        />
        <div style="line-height: 1.50rem;" class="text-sm ml-2" @click="removeTag(index)">x</div>
      </div>
    </div>
    <input v-model="tagValue" @keyup.enter="addTag"  @keyup.space="addTag" />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      tagValue: '',
      tags: [],
      activeTag: null,
    }
  },
  methods: {
    addTag() {
      if (!this.tagValue == '') {
        const newValue = this.tagValue.split(' ')
        const filtered = newValue.filter(function (el) {
          return el !== ''
        })
        this.tags.push(...filtered)
        this.$emit('tags', this.tags)
      }
      this.tagValue = ''
    },
    removeTag(index) {
      this.tags.splice(index, 1)
      this.$emit('tags', this.tags)
    },
  },
  directives: {
    focus: {
      inserted: (el) => {
        el.focus()
      },
    },
  },
  watch: {
    // whenever question changes, this function will run
    tagValue(newQuestion, oldQuestion) {
      if (newQuestion) {
        this.addTag()
      }
    }
  },
}
</script>

<style scoped>
.tags-input-container {
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  background-color: white;
}
.tags-input-container input {
  width: 100%;
  padding: 0;
  margin: 0;
  border: 0;
  outline: none;
  background-color: transparent;
  font-size: 1rem;
}

.tags-input-container input .tag {
  float: left;
  padding: 3px 5px;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.tags-input-container input .tag:hover {
  background-color: #57c340;
  border-radius: 5px;
}

/* span:first-child {
        margin-right: 8px;
      }  
      svg {
        color: #666;
        &:hover {
          color: #333;
        }
      }   */
</style>
