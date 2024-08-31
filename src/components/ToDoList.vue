<script setup>
    import ToDoForm from './ToDoForm.vue';
    import ToDoItems from './ToDoItems.vue';
</script>

<template>
    <div class="w-[500px] h-[600px] bg-slate-300 mx-auto my-5 font-['Outfit'] py-5 px-4">
        <h1 class="text-center text-2xl">Todo Lists</h1>
        <ToDoForm/>
        <div class="w-full h-[1px] bg-white"></div>
        <ToDoItems/>
    </div>
</template>