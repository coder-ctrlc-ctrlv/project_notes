<template>
  <header>
    <h1 v-if="id">Редактор</h1>
    <h1 v-else>Новая заметка</h1>
  </header>
  <div class="redactor">
    <NoteForm
      v-bind:id="id"
      v-bind:date_create="date_create"
      v-bind:prev_title="title"
      v-bind:prev_text="text"
      @on-submit="onSubmit"
    />
  </div>
</template>

<script>
import NoteForm from "@/components/NoteForm"

export default {
  props: ['id', 'date_create', 'title', 'text'],
  components: {
    NoteForm
  },
  methods: {
    onSubmit(id, title, text, date_create) {
      this.$emit('on-submit', id, title, text, date_create);
    }
  }
}
</script>

<style>

.redactor {
  max-width: 1200px;
  margin: 0 auto;
}

</style>