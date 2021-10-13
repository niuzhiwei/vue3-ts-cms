<template>
  <div id="nav">
    {{ $store.state.name }}
    <router-link to="/">Login</router-link> |
    <router-link to="/main">Main</router-link>
    <h2>{{ $store.state.name }}</h2>

    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </div>
  <router-view />
</template>

<style lang="less"></style>
