<script setup lang="ts">
import { Sunny, Moon } from '@element-plus/icons-vue'
const color = useColorMode()

const themeValue = ref()
useHead({
  meta: [
    {
      id: 'theme-color',
      name: 'theme-color',
      content: () => (color.value === 'dark' ? '#222222' : '#ffffff'),
    },
  ],
})

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}

onMounted(() => {
  themeValue.value = color.value === 'dark'
})
</script>
<template>
  <ElSwitch
    v-model="themeValue"
    inline-prompt
    :active-icon="Moon"
    :inactive-icon="Sunny"
    class="ml-auto mr-[20px]"
    @change="toggleDark"
  />
</template>

<style>
.el-switch__core {
  border: 0;
  background-color: #eeeeee;
  min-width: 85px;
  height: 40px;
  border-radius: 30px;
}

.el-switch__core .el-switch__inner {
  padding: 0 7px 0 18px;
  justify-content: end;
  height: 40px;
}

.el-switch__core .el-switch__inner .is-icon,
.el-switch__core .el-switch__inner .is-text {
  font-size: 24px;
  color: #ff3b00;
}

.el-switch__core .el-switch__action {
  left: 7px;
  width: 30px;
  height: 30px;
  flex: none;
}

.el-switch__core .el-switch__action::before {
  position: absolute;
  top: 4px;
  right: 4px;
  content: '';
  border-left: 2px solid #ff3b00;
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 30px;
}

/* checked */
.el-switch.is-checked .el-switch__core {
  background-color: #1a1a1a;
}

.el-switch.is-checked .el-switch__core .el-switch__inner {
  padding: 0 18px 0 7px;
  justify-content: start;
}

.el-switch.is-checked .el-switch__core .el-switch__action {
  left: calc(100% - 37px);
  background-color: #333333;
  transform: rotate(180deg);
}
</style>
