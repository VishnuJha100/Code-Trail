import { create } from 'zustand'
import { axiosInstance } from '../lib/axios.js'

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/"

export const useAuthStore = create((set, get) => ({
    authUser: null,

    signup: async (data) => {
        try {
            const res = await axiosInstance.post('/auth/signup', data)
            set({ authUser: res.data })
        } catch (error) {
            console.log('Error in signup useAuthStore' + error)
        }
    },

    login: async (data) => {
        try {
            const res = await axiosInstance.post('/auth/login', data)
            set({ authUser: res.data })
        } catch (error) {
            console.log('Error in login useAuthStore' + error)
        }
    }
}))