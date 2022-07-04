class Met {
  method: string = ''

  super(method) {
    this.method = method
  }
  get(route: string, callback: Function) {
    
  }
  post() {

  }
  delete() {

  }
  put() {

  }
}
const routing = new Met()

export const router = async (method, url) => {
  try {
    console.log('lo veo')
    routing.get('/frontend', () => {
      console.log('hola')
    })
    return 'hola mundo'
  } catch (error) {
    
  }
}