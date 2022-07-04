import { router } from './base'

export default {
  port: 3000,
  async fetch(request: Request) {
    const { method, url } = request

    const capture = await router(url, method)
    return new Response(capture)
  },
  error(error: Error) {
    return new Response("Uh oh!!\n" + error.toString(), { status: 500 });
  },
};