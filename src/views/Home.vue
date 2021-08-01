<template>
  <header>
    <h1>ЗАМЕТКИ</h1>
  </header>
  <div class="main">
    <div class="sort">
      <p v-if="notes.length">Cортировка:</p>
      <select v-if="notes.length" v-model="sort">
        <option value="id">Нет</option>
        <option value="date_create">по дате создания</option>
        <option value="date_change">по дате изменения</option>
      </select>
    </div>
    <NoteList
        v-if="notes.length"
        v-bind:notes="sortedNotes"
        @remove-note="removeNote"
    />
    <div class="empty" v-else>
      <p>На данный момент заметок нет</p>
      <img src="../images/empty.gif" alt="Пусто">
    </div>
    <a class="btn-create-note" href="/redactor-note">СОЗДАТЬ ЗАМЕТКУ</a>
  </div>
</template>

<script>
import NoteList from "@/components/NoteList"

export default {
  data () {
    return {
      sort: 'id',
    }
  },
  props: ['notes'],
  computed: {
    sortedNotes() {
      switch (this.sort) {
        case 'date_create':
          return this.sortDateCreate(this.notes);
        case 'date_change':
          return this.sortDateChange(this.notes);
        case 'id':
          return this.sortId(this.notes);
        default: return this.notes;
      }
    }
  },
  methods: {
    sortDateCreate(arr) {
      return arr.sort((a,b) => new Date(b.date_create) - new Date(a.date_create));
    },
    sortDateChange(arr) {
      return arr.sort((a,b) => new Date(b.date_change) - new Date(a.date_change));
    },
    sortId(arr) {
      return arr.sort((a,b) => new Date(b.id) - new Date(a.id));
    },
    removeNote(id) {
      this.$emit('remove-note', id)
    }
  },
  components: {
    NoteList
  }
}
</script>

<style>

h1 {
  font-size: 2rem;
  text-align: center;
  padding: 4rem 0;
  letter-spacing: .8rem;
}

header {
  background: linear-gradient(to bottom, #fff 90%, #000 91%, #000 91.5%, #f5f5f5 95%);
}

.main {
  max-width: 1200px;
  margin: 0 auto;
}

.main .sort {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem auto 2rem;
  font-size: 18px;
}

.main .sort>p {
  margin-right: 1rem;
  font-weight: bold;
  letter-spacing: .1rem;
  margin-bottom: 1rem;
}

.main .sort select {
  margin-left: 1rem;
  font-family: Ruda, sans-serif;
  letter-spacing: .1rem;
  background: linear-gradient(to bottom, #fff 50%,  #f5f5f5 100%);;
  font-weight: bold;
  border-radius: .5em;
  padding: 0 .5rem;
  cursor: pointer;
}

.main .sort>select option {
  font-weight: bold;
}

.main .btn-create-note {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #9577c2;
  color: #fff;
  letter-spacing: .1rem;
  transition: background-color .4s;
  margin: 2rem auto 4rem;
  width: 90%;
  border-radius: 0.5rem;
  font-family: Ruda, sans-serif;
  font-size: 18px;;
  font-weight: bold;
}

.main .btn-create-note:hover {
  cursor: pointer;
  background-color: #f5f5f5;
  border: 2px solid #000;
  color: #000;
}

.main .empty {
  text-align: center;
  font-size: 2rem;
}

.main img {
  max-width: 100%;
}

</style>