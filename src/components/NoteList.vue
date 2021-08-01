<template>
  <ul>
    <NoteItem
      v-for="note in notes"
      v-bind:key="note.id"
      v-bind:note="note"
      @remove-note="removeNote"
    />
  </ul>
</template>

<script>
import NoteItem from "@/components/NoteItem"
export default {
  props: ['notes'],
  components: {
    NoteItem
  },
  methods: {
    removeNote(id) {
      this.$emit('remove-note', id)
    }
  }
}
</script>

<style>

.main ul {
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

</style>