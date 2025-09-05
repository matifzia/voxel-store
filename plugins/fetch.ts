import { defineNuxtPlugin, useRuntimeConfig, useCookie } from 'nuxt/app'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  // Create a custom $api instance of $fetch
  const api = $fetch.create({
    baseURL: config.public.apiBase as string, // from nuxt.config.ts
    // onRequest({ options }) {
    //   const token = useCookie('token').value
    //   if (token) {
    //     if (!options.headers) {
    //       options.headers = new Headers()
    //     }
    //     if (options.headers instanceof Headers) {
    //       options.headers.set('Authorization', `Bearer ${token}`)
    //     } else {
    //       // fallback for Record<string, string>
    //       const headers = options.headers as any
    //       headers['Authorization'] = `Bearer ${token}`
    //       options.headers = headers
    //     }
    //   }
    // },
    // onResponse({ response }) {
    //   console.log('API Response:', response.status, response._data)
    // },
    // onResponseError({ response }) {
    //   console.error('API Error:', response.status, response._data)
    // },
  })

  return {
    provide: {
      api, // available as $api
    },
  }
})
