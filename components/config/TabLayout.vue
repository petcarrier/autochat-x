<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps<{
    tabs: { id: string; label: string }[];
}>();

const activeTab = ref(props.tabs[0].id);
</script>

<template>
    <div class="flex flex-col h-full">
        <div class="border-b border-gray-200">
            <nav class="flex -mb-px">
                <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id"
                    class="py-3 px-6 font-medium text-sm transition-colors duration-200" :class="activeTab === tab.id
                        ? 'text-blue-500 border-b-2 border-blue-500'
                        : 'text-gray-500 hover:text-gray-700'">
                    {{ tab.label }}
                </button>
            </nav>
        </div>

        <div class="p-4 flex-grow overflow-y-auto">
            <template v-for="tab in tabs" :key="tab.id">
                <div v-if="activeTab === tab.id">
                    <slot :name="tab.id"></slot>
                </div>
            </template>
        </div>
    </div>
</template>