<template>
  <div class="h-screen">
    <navbar />

    <div class="flex" id="gallery">

      <div class="font-Quicksand m-16 bg-gray-400 rounded-t-3xl rounded-b-3xl w-1/5"        >
          <h2 class="text-xl p-2 ml-3">Title</h2>
          <div class="bg-gray-300 rounded-3xl p-2 text-lg">
            <div class="m-2 ">
              <img class="rounded-3xl w-full max-h-80"  src="https://media.discordapp.net/attachments/836733077098070056/859119202681094164/image0.gif" />
              <a> up </a>
              <a> down </a>
            </div>
          </div>
      </div>

      <div class="font-Quicksand m-16 bg-gray-400 rounded-t-3xl rounded-b-3xl w-1/5">
        <h2 class="text-xl p-2 ml-3">Title</h2>
        <div class="bg-gray-300 rounded-3xl p-2 text-lg">
          <div class="m-2 ">
            <img class="rounded-3xl w-full max-h-80"  src="https://media.discordapp.net/attachments/734746581324267640/734820396842483732/48uuuw.jpg"/>
            <a> up </a>
            <a> down </a>
          </div>
        </div>
      </div>

      <div class="font-Quicksand m-16 bg-gray-400 rounded-t-3xl rounded-b-3xl w-1/5" >
        <h2 class="text-xl p-2 ml-3">Title</h2>
        <div class="bg-gray-300 rounded-3xl p-2 text-lg">
          <div class="m-2 ">          
            <img class="rounded-3xl w-full max-h-80"  src="https://media.discordapp.net/attachments/836733077098070056/857592198132006932/unknown.png" />
          </div>
            <a> up </a>
            <a> down </a>
          </div>
      </div>

      <div class="font-Quicksand m-16 bg-gray-400 rounded-t-3xl rounded-b-3xl w-1/5" >
        <h2 class="text-xl p-2 ml-3">Title</h2>
        <div class="bg-gray-300 rounded-3xl p-2 text-lg">
          <div class=" m-2">          
            <img class="rounded-3xl w-full max-h-80"  src="https://media.discordapp.net/attachments/836733077098070056/857592198132006932/unknown.png" />
          </div>
            <a> up </a>
            <a> down </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>     //TODO: Get x IMG and display
import gql from 'graphql-tag'
export default {
  methods: {
  getImage() {
      let request = ` 
            query images{
                characters {
                  results {
                      Id
                      userId
                      image
                  }
              }
            }`
      this.$apollo.query({query: gql(request)}).then(({ data }) => {
          let gallery = document.getElementById("gallery")
          for( let i = 0; i < data.characters.results.size(); i++){
              gallery.innerHTML +=
                `<div class="font-Quicksand m-16 bg-gray-400 rounded-t-3xl rounded-b-3xl w-1/5" id="${data.characters.results[i].id}">
                  <h2 class="text-xl p-2 ml-3">Title</h2>
                  <div class="bg-gray-300 rounded-3xl p-2 text-lg">
                    <div class=" m-2">          
                      <img class="rounded-3xl w-full max-h-80"  src="${data.characters.results[i].getImage}" />
                    </div>
                    <a> up </a>
                    <a> down </a>
                  </div>
                </div>`
          }
      })
  },
},
}
</script>





<style>
   * {
  margin: 0;
  padding: 0;
}
body {
  background-color: #eeeeee;
  overflow: auto;
} 
</style>