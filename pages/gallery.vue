<template>
  <div class="h-screen">
    <navbar />

    <div class="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1" id="gallery">

      <div v-for="image in images" :key="image.id">

        <div
          class="font-Quicksand m-16 bg-gray-400 rounded-t-3xl rounded-b-3xl w-10/12"
        >
          <h2 class="text-xl p-2 ml-3">  {{ image.title }} </h2>
          <div class="bg-gray-300 rounded-3xl p-2 text-lg">
            <div class="m-2 ">
              <img
                class="rounded-3xl w-full max-h-80"
                v-bind:src="'data:image/jpeg;base64,' + image.image"
              />
              <div class='flex pt-1'>
                <img alt="up" class="pr-2" src="../static/thumb-up-sign.png"></img>
                <img alt="down" src="../static/thumb-down-gesture.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import getImages from '../query/getImages.gql'
export default {
  apollo: {
    images: {
      query: getImages,
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
