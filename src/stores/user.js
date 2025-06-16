import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    email: '',
    comercials: false,
    user_id: 0,
  }),
  actions: {
    setEmail(email, comercials) {
      this.email = email
      this.comercials = comercials
    },
    setUser_id(user_id) {
      this.user_id = user_id
    },
  },
})
