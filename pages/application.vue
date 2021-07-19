<template>
  <div class='font-Quicksand'>
    <navbar />
    <div class='justify-center text-center items-center text-gray-700'>
        <div
        class="Content"
        >
            <p class="mt-5 text-xl mb-2 tracking-wider">
                Choisir le type d'image
            </p>
        </div>
        <div class='justify-center w-full table'>
            <div class='table-row-group'>
                <div class='table-row justify-center text-center items-center'>
                    <button class='table-cell outline-none bg-gray-200 border border-gray-500  w-1/4 rounded-l-xl' v-on:click="toggleImage()">
                        Image
                    </button>
                    <button id='buttonCamera' class='Camera table-cell outline-none bg-gray-200 border border-gray-500  w-1/4 rounded-r-xl' v-on:click="toggleCamera()">
                        Caméra
                    </button>
                </div>
            </div>
        </div>
        <div id='image' class='justify-center text-center items-center m-16 flex flex-col' v-bind:class="{ hidden: !image, flex: image }">
            <input type="file"
            id="fichier" name="fichier"
            accept="image/png, image/jpeg">
            <button class='w-4 justify-center rounded-3xl outline-none bg-gray-200 border border-gray-500  w-1/5 m-2 transition duration-150 ease-in-out hover:shadow-lg transform hover:scale-105' v-on:click="sendImageFile()">Envoyer Image</button>
        </div>
        <div id='camera' class='justify-center text-center items-center m-16 flex flex-col' v-bind:class="{ hidden: !camera, flex: camera }">
            <video autoplay>Start streaming</video>
            <button class='w-4 justify-center rounded-3xl outline-none bg-gray-200 border border-gray-500  w-1/5 m-2 transition duration-150 ease-in-out hover:shadow-lg transform hover:scale-105' v-on:click="toggleTest()">Envoyer Image</button>
        </div>
        <div class='mt-5 justify-center text-center items-center' v-bind:class="{ hidden: !result, flex: result }">
            <h1 class='text-xl tracking-wider'>Resultat :</h1>
            <img src="http://placekitten.com/g/320/261" id="photo" alt="photo">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fonction',
  data() {
    return {
      image: false,
      camera: false,
      envoyer: false,
      result: true,
    }
  },
  mounted: function() {
      this.activationCamera()
  },
  methods: {
    activationCamera: function() {
        document.querySelector('#buttonCamera').addEventListener('click', async (e) => {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true
        })
        document.querySelector('video').srcObject = stream
    })
    },
    toggleImage: function() {
        this.image = !this.image
        this.camera = false
        this.toggleButton()
    },
    toggleCamera: function() {
        this.camera = !this.camera
        this.image = false
        this.toggleButton()
    },
    toggleButton: function() {
        if(this.camera == false && this.image == false)
            this.envoyer = false
        else if(this.camera == true || this.image == true)
            this.envoyer = true
    },
    sendImageFile: function() {
        let fichier = document.getElementById("fichier").value
        let ficherEncoder = btoa(fichier)
    },
    activeResult: function() {
        this.result = true
    }
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