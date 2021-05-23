<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div
      class="
        min-h-screen
        bg-gray-100
        py-6
        flex flex-col
        justify-center
        sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          class="
            absolute
            inset-0
            bg-gradient-to-r
            from-cyan-400
            to-light-blue-500
            shadow-lg
            transform
            -skew-y-6
            sm:skew-y-0
            sm:-rotate-6
            sm:rounded-3xl">
        </div>
        <div
          class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div class="max-w-md mx-auto">
            <div>
              <img src="../assets/logo.png" />
            </div>
            <div class="divide-y divide-gray-200">
              <div
                class="
                  py-8
                  text-base
                  leading-6
                  space-y-4
                  text-gray-700
                  sm:text-lg
                  sm:leading-7">
                  <p class="text-2xl font-bold font-body text-green-600">This is Configure Vue apps with Tailwind framework css</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  // components: {
  //   HelloWorld,
  // },
};
</script>
