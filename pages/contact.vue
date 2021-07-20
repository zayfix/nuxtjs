<template>
  <div class="h-screen">
    <navbar />
    <div
      class="Content font-Quicksand justify-center text-center items-center m-16 text-gray-700"
    >
      <h1 class="title font-medium text-6xl mb-2 tracking-wider">Contact</h1>
    </div>
    <div
      class="Article font-Quicksand m-16 rounded-t-3xl rounded-b-3xl"
    >
      <div class=" rounded-3xl p-2 text-lg">
        <div class="m-3 ">
            <form @submit.prevent="contact" class="rounded-3xl text-gray-600 bg-gray-300 pt-6 pb-6 p-4">

                <label for="email" class="block ml-2 text-left ">Email :</label>
                <input
                id="email"
                name="email"
                type="mail"
                v-model="email"
                class="h-5 outline-none rounded-2xl border bg-gray-100 pl-2 mb-2 w-full"
                /><br />

                <label for="mail" class="block ml-2 text-left ">Sujet :</label>
                <input
                id="sujet"
                name="sujet"
                type="text"
                v-model="sujet"
                class="h-5 outline-none rounded-2xl border bg-gray-100 pl-2 mb-2 w-full"
                /><br />

                <label for="password" class="block ml-2 text-left"
                >Contenu :</label
                >
                <input
                id="contenue"
                name="contenue"
                type="text-area"
                v-model="contenue"
                class="h-5 outline-none rounded-2xl border bg-gray-100 pl-2 mb-2 w-full"
                /><br />
                <div class='justify-center text-center items-center flex'>
                <button
                class="w-4 justify-center rounded-3xl outline-none bg-gray-200 border border-gray-500  w-1/5 m-2 transition duration-150 ease-in-out hover:shadow-lg transform hover:scale-105"
                >
                Contacter</button
                ><br />
                </div>

            </form>
        </div>
      </div>
    </div>
  </div>
</template>