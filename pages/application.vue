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
            accept="image/jpeg">
            <button class='w-4 justify-center rounded-3xl outline-none bg-gray-200 border border-gray-500  w-1/5 m-2 transition duration-150 ease-in-out hover:shadow-lg transform hover:scale-105' v-on:click="sendImageFile()">Envoyer Image</button>
        </div>
        <div id='cameras' class='justify-center text-center items-center m-16 flex flex-col' v-bind:class="{ hidden: !camera, flex: camera }">
            <div id="camera"></div>
            <div id="snapShot"></div>
            <button class='w-4 justify-center rounded-3xl outline-none bg-gray-200 border border-gray-500  w-2/5 m-2 transition duration-150 ease-in-out hover:shadow-lg transform hover:scale-105' v-on:click="screenShootFile()">Prendre capture d'écran</button>
            <button class='w-4 justify-center rounded-3xl outline-none bg-gray-200 border border-gray-500  w-2/5 m-2 transition duration-150 ease-in-out hover:shadow-lg transform hover:scale-105' v-on:click="sendImageScreenShoot()">Envoyer Image</button>

        </div>
        <div class='mt-5 justify-center text-center items-center' v-bind:class="{ hidden: !result, flex: result }">
            <h1 class='text-xl tracking-wider'>Resultat :</h1>
            <img src="" id="photo" alt="photo">
        </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Webcam from 'webcamjs'
import sendImage from '../query/sendImage.gql'
export default {
  name: 'Fonction',
  data() {
    return {
      image: false,
      camera: false,
      envoyer: false,
      result: true,
      username: "coca"
    }
  },
  mounted: function() {
      this.activationCamera()
  },
  methods: {
    activationCamera: function() {
        Webcam.set({
            width:426,
            height:240,
            dest_width: 426,
            dest_height: 240,
            image_format: 'jpeg',
            jpeg_quality: 90,
            force_flash: false   
        });
        Webcam.attach('#camera');
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
        let fichier = document.getElementById("fichier").files[0]
        console.log(fichier)
        const toBase64 = file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });

        toBase64(fichier)
        .then(res => {
            let ficherEncoder = res.slice(23);
            
            this.$apollo.mutate({mutation: sendImage, variables: {username: this.username, image: ficherEncoder, title:"sauxise"}}).then(({ data }) => {
                    window.alert("L'image a été envoyer");
                })
        })
        .catch(err => {
            console.log(err);
        })
    },
    screenShootFile: function() {
        Webcam.snap(function (data_uri) {
            document.getElementById('snapShot').innerHTML = 
                '<img id="screenShoot" class="pt-2" src="' + data_uri + '"/>';
        });

    },
    sendImageScreenShoot: function() {
        let image = document.getElementById("screenShoot").src
        let ficherEncoder = image.slice(23);
            
        this.$apollo.mutate({mutation: sendImage, variables: {username: this.username, image: ficherEncoder, title:"screen"}}).then(({ data }) => {
                window.alert("L'image a été envoyer");
            })
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