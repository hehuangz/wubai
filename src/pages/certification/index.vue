<template>
  <div class="contents">
    <com-header title="资格认证" />
    <mt-cell title="身份证认证" to="/certification/idCard">
      <span
        v-if="authState[userAuth.idState]"
        :class="authState[userAuth.idState].class"
      >
        {{authState[userAuth.idState].title}}
      </span>
      <span v-else class="g-c-orange">未认证</span>
    </mt-cell>
    <mt-cell title="芝麻分认证">
      <span
        v-if="authState[userAuth.sesameState]"
        :class="authState[userAuth.sesameState].class"
      >
        {{authState[userAuth.sesameState].title}}
      </span>
      <span v-else class="g-c-orange">未认证</span>
    </mt-cell>
    <mt-cell title="银行卡认证" to="/certification/bank">
      <span
        v-if="authState[userAuth.bankState]"
        :class="authState[userAuth.bankState].class"
      >
        {{authState[userAuth.bankState].title}}
      </span>
      <span v-else class="g-c-orange">未认证</span>
    </mt-cell>
    <mt-cell title="紧急联系人认证" to="/certification/contact">
      <span
        v-if="authState[userAuth.contactsState]"
        :class="authState[userAuth.contactsState].class"
      >
        {{authState[userAuth.contactsState].title}}
      </span>
      <span v-else class="g-c-orange">未认证</span>
    </mt-cell>
    <div class="g-m-10">补充信息</div>
     <mt-cell title="微信认证">
      <span
        v-if="authState[userAuth.weChatState]"
        :class="authState[userAuth.weChatState].class"
      >
        {{authState[userAuth.weChatState].title}}
      </span>
      <span v-else class="g-c-orange">未认证</span>
    </mt-cell>
     <mt-cell title="淘宝账号认证">
      <span
        v-if="authState[userAuth.tbState]"
        :class="authState[userAuth.tbState].class"
      >
        {{authState[userAuth.tbState].title}}
      </span>
      <span v-else class="g-c-orange">未认证</span>
    </mt-cell>
    <div class="g-flex g-jc-c">
      <button class="g-btn-orange-l g-m-t-40">完成认证</button>
    </div>
  </div>
</template>

<script>
import comHeader from '@/components/header/header'
import { getAll } from '@/api/certification'
export default {
  name: 'certification',
  components: {
    comHeader
  },
  beforeMount () {
    this._onData()
  },
  data () {
    return {
      userAuth: {
        idState: 0,
        sesameState: 0,
        bankState: 0,
        contactsState: 0,
        weChatState: 0,
        tbState: 0
      },
      authState: {
        '0': {title: '未认证', class: 'g-c-orange'},
        '1': {title: '认证中', class: 'g-c-orange'},
        '2': {title: '认证成功', class: 'g-c-888888'},
        '3': {title: '认证失败', class: 'g-c-red'}
      }
    }
  },
  methods: {
    async _onData () {
      getAll().then(({ data: { code, data, msg } }) => {
        if (code === 1 && data.userAuth) {
          this.userAuth = data.userAuth
        }
      }).catch((error) => {
        console.log('error', error)
      })
    }
  }
}
</script>
<style lang="less">
</style>
