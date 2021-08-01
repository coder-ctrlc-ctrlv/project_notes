<template>
  <form @submit.prevent="$emit('on-submit', id, title, text, date_create)">
    <input placeholder="Название" type="text" v-model="title">
    <textarea placeholder="Текст заметки" rows="8" v-model="text"></textarea>
    <button type="submit">ГОТОВО</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: this.prev_title,
      text: this.prev_text
    }
  },
  props: ['id', 'date_create', 'prev_title', 'prev_text'],
}
</script>

<style>

.redactor form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  font-family: Ruda,sans-serif;
  width: 80%;
}

.redactor textarea, .redactor input {
  font-size: 22px;
  font-family: Ruda, sans-serif;
  margin-top: 3rem;
  padding: .5rem;
  border-left: none;
  border-right: none;
  background: #f5f5f5;
  border-top: 3px solid #858585;
  border-bottom: 3px solid #858585;;
}

.redactor textarea:focus, .redactor input:focus {
  outline: none;
  border-top: 3px solid #9577c2;
  border-bottom: 3px solid #9577c2;;
}

.redactor button {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #9577c2;
  border-radius: 0.5rem;
  color: #fff;
  letter-spacing: .1rem;
  transition: background-color .4s;
  margin: 3rem auto 4rem;
  width: 100%;
  font-family: Ruda, sans-serif;
  font-size: 18px;;
  font-weight: bold;
  border: 2px solid #9577c2;
}

.redactor button:hover {
  cursor: pointer;
  background-color: #f5f5f5;
  border: 2px solid #000;
  color: #000;
}

@media (min-width: 400px) {
  .main .note {
    padding-bottom: 2rem;
  }
  h1 {
    font-size: 3rem;
  }
  .redactor button {
    width: 90%;
  }
}

@media (min-width: 576px) {
  .main li {
    width: 50%;
  }
  .main .sort>p {
    margin-bottom: 0;
  }
  .main .sort {
    flex-direction: row;
  }
  h1 {
    font-size: 4rem;
  }
  .main .btn-create-note, .redactor button {
    width: 80%;
  }
}

@media (min-width: 768px) {
  .main .note {
    padding-bottom: 1.5rem;
  }
  h1 {
    font-size: 5rem;
  }
  .main .btn-create-note, .redactor button {
    width: 60%;
  }
}

@media (min-width: 1000px) {
  .main li {
    width: 33.33%;
  }
}

</style>