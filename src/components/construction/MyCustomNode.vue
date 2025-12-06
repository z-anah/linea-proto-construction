<script setup>
import { Handle, Position } from '@vue-flow/core'

const props = defineProps({
    id: String,
    data: {
        type: Object,
        required: true
    },
    selected: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['nodeClick'])

function handleClick() {
    emit('nodeClick', props.id)
}
</script>

<template>
    <div
      class="action-node-vertical"
      :class="{ 'selected-node': selected }"
      @click="handleClick"
    >
        <div class="vertical-content">
            <div class="vertical-title">
                {{ data.title }}
            </div>
            <div class="vertical-desc">
                {{ data.description }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.action-node-vertical {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 500px;
    background: #fff;
    border: 1px solid #bbb;
    border-radius: 12px;
    box-shadow: 0 1px 2px rgba(46, 139, 87, 0.08);
    padding: 0;
    margin: 0;
    transition: border-color 0.2s;
}
.action-node-vertical.selected-node {
    border: 1px solid #1e90ff;
    box-shadow: 0 1px 8px rgba(113, 128, 188, 0.2);
}

.vertical-content {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 16px 14px 14px 14px;
    flex: 1;
}

.vertical-title {
    font-size: 0.8rem;
    font-weight: bold;
    color: #1e90ff;
    margin-bottom: 8px;
    text-align: left;
}

.vertical-desc {
    font-size: 0.75rem;
    color: #444;
    background: #f6f9ff;
    border: 1px solid #e0ecf9;
    border-radius: 6px;
    padding: 8px;
    margin-bottom: 0;
    text-align: left;
}
</style>