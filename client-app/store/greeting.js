import greetingsService from '../services/greeting'
import makeCrudModule from './crud'

export default makeCrudModule({
  service: greetingsService,
})
