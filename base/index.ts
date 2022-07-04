import { Urls, Methods } from '../types/methods'
import { assertNever } from '../util/assertNever'
const global = []
const uri = 'http://localhost:3000'
export const router = (url: string, method: string): string => {
  console.log({url})
  console.log({method})
  switch (method) {
    case 'GET':
      if (url === `${uri}/frontend`) return 'soy el frontend'
      else if (url === `${uri}/backend`) return 'soy el backend'
      else return 'no soy nadie'
    case 'POST':
      return 'post'
    case 'DELETE':
      return 'delete'
    case 'PUT':
      return 'put'
    default:
      return 'no soy ningun caso'

  }
}

class MainRouter {
  global
  constructor(global: Object) {
    this.global = global
  }
  async get(route: string, callback: Function) {
    this.newRoute(route)
    await callback()
  }
  post() {

  }
  delete() {

  }
  put() {

  }
  newRoute(route: string) {
    const isValid = this.global.includes(route)
    !isValid && this.global.push(route)
  }
}