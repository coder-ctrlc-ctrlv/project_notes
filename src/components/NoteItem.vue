<template>
  <li>
    <div class="note">
      <span class="icons"><router-link tag="i" class="fa fa-pencil" aria-hidden="true"
        :to="{name: 'Redactor', params: {id: note.id, date_create: note.date_create, title: note.title, text: note.text}}" />
      <i class="fa fa-minus-circle" aria-hidden="true" @click="$emit('remove-note', note.id)"></i></span>
      <span class="title">{{ note.title }}</span> <br>
      <span class="text">{{ note.text }}</span> <br>
      <span class="date">Дата создания: {{ d_create }}<br>
      Дата изменения: {{ d_change }}</span> <br>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
      d_create: new Date(this.note.date_create).toLocaleString(),
      d_change: new Date(this.note.date_change).toLocaleString()
    }
  },
  props: ['note']
}
</script>

<style>

.main li {
  padding: 1rem;
  font-size: 16px;
  width: 100%;
}

.main li .note {
  position: relative;
  border: 2px solid black;
  border-radius: 0.5rem;
  background: #ffffff;
  padding: .5rem .5rem 3rem .5rem;
  height: 100%;
  box-shadow: 1px 1px 7px #9577c2;
}

.main li .title {
  font-weight: bold;
  display: inline-block;
  margin-bottom: .6rem;
  border-bottom: 2px solid #9577c2;
  max-width: 50%;

}

.main li .date {
  font-size: 13px;
  color: #767579;
  position: absolute;
  bottom: .3rem;
}

.main li .icons {
  position: absolute;
  right: .3rem;
  top: .3rem;
  font-size: 25px;
  color: #9577c2;
  cursor: pointer;
}

.main li .fa-pencil {
  color: #9577c2;
  margin-right: .3rem;
}

.main li .fa-pencil:hover, .main li .fa-minus-circle:hover {
  color: #000;
}

</style>