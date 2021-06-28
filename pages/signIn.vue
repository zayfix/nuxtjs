<template>
  <div
    class="font-Quicksand min-h-screen flex max-w-none justify-center text-center items-center item mr-0 m-0"
  >
    <div>
      <h1 class="text-gray-700 font-medium text-6xl mb-2 tracking-wider ">
        FernIA
      </h1>

      <div class="rounded-3xl text-gray-600 bg-gray-300 w-96 pt-4 pb-4">
        <h2 class="text-2xl font-medium pb-5 mt-0">Inscription</h2>

        <label for="id" class="block ml-12 text-left ">Identifiant:</label>
        <input
          id="id"
          name="id"
          type="text"
          class="h-5 outline-none rounded-2xl border bg-gray-100 pl-2 mb-2 focus:bg-gray-100 w-4/5 transition duration-150 ease-in-out focus:shadow-lg transform focus:scale-105 "
        /><br />

        <label for="mail" class="block ml-12 text-left ">Email:</label>
        <input
          id="mail"
          name="mail"
          type="mail"
          class="h-5 outline-none rounded-2xl border bg-gray-100 pl-2 mb-2 focus:bg-gray-100 w-4/5 transition duration-150 ease-in-out focus:shadow-lg transform focus:scale-105 "
        /><br />

        <label for="password" class="block ml-12 text-left"
          >Mot de passe:</label
        >
        <input
          id="password"
          name="password"
          type="password"
          class="h-5 outline-none rounded-2xl border bg-gray-100 pl-2 mb-2 focus:bg-gray-100 w-4/5 transition duration-150 ease-in-out focus:shadow-lg transform focus:scale-105 "
        /><br />

        <label for="password2" class="block ml-12 text-left"
          >Confirmation de votre mot de passe:</label
        >
        <input
          id="password2"
          name="password2"
          type="password"
          class="h-5 outline-none rounded-2xl border bg-gray-100 pl-2 mb-2 focus:bg-gray-100 w-4/5 transition duration-150 ease-in-out focus:shadow-lg transform focus:scale-105 "
        /><br />

        <button
          class="rounded-3xl outline-none bg-gray-200 border border-gray-500  w-3/5 m-2 transition duration-150 ease-in-out hover:shadow-lg transform hover:scale-105 "
        >
          S'inscrire</button
        ><br />

        <a class="text-base">Vous avez déja un compte?</a>
        <nuxtLink to="/login" class="underline">Connectez-vous</nuxtLink>
      </div>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #eeeeee;
}
</style>
