<template>
  <router-view
    v-bind:notes="notes"
    @on-submit="onSubmit"
    @remove-note="removeNote"
  />
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      notes:[ ]
    }
  },
  mounted() {
    if (localStorage.getItem('notes')) {
      try {
        this.notes = JSON.parse(localStorage.getItem('notes'));
      } catch(e) {
        localStorage.removeItem('notes');
      }
    }
  },
  methods: {
    saveNotes() {
      const parsed = JSON.stringify(this.notes);
      localStorage.setItem('notes', parsed);
    },
    removeNote(id) {
      let index = this.notes.indexOf(this.notes.filter(note => note.id == id)[0])
      this.notes.splice(index, 1);
      this.saveNotes();
    },
    generateId() {
      return Date.now();
    },
    addNote(id, title, text, date_create, time) {
      if (title === undefined || text === undefined ||  !title.trim() || !text.trim()) {
        alert('Необходимо заполнить все поля!')
        return false;
      }
      if (id !== undefined)
        this.removeNote(id);
      let new_note = {
        id: id !== undefined ? id : this.generateId(),
        title: title.trim(),
        text: text.trim(),
        date_create: date_create !== undefined ? date_create : time.toString(),
        date_change: time.toString()
      }
      this.notes.push(new_note);
      this.saveNotes();
      return true
    },
    onSubmit(id, title, text, date_create) {
      if (this.addNote(id, title, text, date_create, new Date()))
        this.$router.push('/');
    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Spectral:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ruda&display=swap');

/* reset browser styles */

* { box-sizing: border-box; }
html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym,
address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp,small, strike, strong, sub, sup, tt,
var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1.2;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
ol {
  padding-left: 1.4em;
  list-style: decimal;
}
ul {
  padding-left: 1.4em;
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
}

a {
  text-decoration: none;
}

/* end of reset */

body {
  background-color: #f5f5f5;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
}

h1, h2, h3 {
  font-family: Spectral, serif;
}

p, ul {
  font-family: Ruda, sans-serif;
}

header {
  width: 100%;
}

</style>
