
<template>
  <div>

    <!-- 基础用法 -->
    <div style="margin-top:30px">
      <mt-field label="用户名" placeholder="请输入用户名" :attr="{ maxlength: 10 }"></mt-field>
      <mt-field label="邮箱" placeholder="请输入邮箱" type="email"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" state=""></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
      <mt-field label="网站" placeholder="请输入网址" type="url"></mt-field>
      <!-- readonly 只读 -->
      <mt-field label="数字" placeholder="请输入数字" type="number" readonly></mt-field>
      <mt-field label="生日" placeholder="请输入生日" type="date" ></mt-field>
      <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></mt-field>
    </div>

    <div style="margin-top:30px">
      <!-- attr设置原生属性 -->
      <mt-field placeholder="登录邮箱" type="email" ></mt-field>
      <mt-field placeholder="密码" type="password" :attr="{ maxlength: 10 }"></mt-field>
    </div>

    <!-- 设置校验状态 -->
    <div style="margin-top:30px">
      <!-- disableClear 禁用 clear 按钮 -->
      <mt-field label="邮箱" placeholder="成功状态" disableClear state="success"></mt-field>
      <mt-field label="邮箱" placeholder="失败状态" state="error"></mt-field>
      <mt-field label="邮箱" placeholder="警告状态" state="warning"></mt-field>
    </div>

   <!-- 自定义内容 -->
    <div style="margin-top:30px">
      <mt-field label="验证码" placeholder="输入验证码">
        <!-- <img src="../assets/100x100.png" height="48px" width="100px"> -->
      </mt-field>
    </div>

  </div>
</template>
