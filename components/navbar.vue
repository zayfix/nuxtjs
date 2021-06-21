<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-300 mb-3 font-Quicksand">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <a class="text-sm leading-relaxed inline-block mr-4 py-2 text-xl font-medium whitespace-nowrap text-white text-gray-700" href="#pablo">
          FernIA
        </a>
        <button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-lg font-medium leading-snug text-white hover:opacity-75" href="#pablo">
              <i class="text-lg leading-lg text-white opacity-75" /><span class="ml-2 text-gray-700">Galerie</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-lg font-medium leading-snug text-white hover:opacity-75" href="#pablo">
              <i class="text-lg leading-lg text-white opacity-75" /><span class="ml-2 text-gray-700">Contact</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-lg font-medium leading-snug text-white hover:opacity-75" href="#pablo">
              <i class="text-lg leading-lg text-white opacity-75" /><span class="ml-2 text-gray-700">Fernie</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-lg font-medium leading-snug text-white hover:opacity-75" href="#pablo">
              <i class="text-lg leading-lg text-white opacity-75" /><span class="ml-2 text-gray-700">Administration</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-lg font-medium leading-snug text-white hover:opacity-75" href="#pablo">
              <i class="text-lg leading-lg text-white opacity-75" /><span class="ml-2 text-gray-700">Profil</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>