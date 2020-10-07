<template>
  <div class="px-10 my-4 py-6 bg-white rounded-lg shadow-md">
    <div class="flex justify-between items-center">
      <span class="font-light text-gray-600">{{ item.timestamp | formatDate }}</span>
<!--      <a class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500" href="#">Design</a>-->
    </div>
    <div class="mt-2">
      <p class="mt-2 text-gray-600">{{item.editedText}}</p>
    </div>
    <div class="flex justify-between items-center mt-4">
      <a class="text-blue-600 hover:underline" href="#">{{item.pageID}}</a>
    </div>
  </div>
</template>

<script>


export default {
  props: {
    item: Object
  }
}
</script>