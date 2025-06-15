import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    email: '',
    comercials: false,
  }),
  actions: {
    setEmail(email, acepta) {
      this.email = email
      this.comercials = acepta
    },
  },
})
