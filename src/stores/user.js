import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    email: '',
    comercials: false,
  }),
  actions: {
    setEmail(email, comercials) {
      this.email = email
      this.comercials = comercials
    },
  },
})
