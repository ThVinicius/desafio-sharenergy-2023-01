import { IEvent, ISetInput } from '../../types/inputType'

export default function cepMaskOnChange(event: IEvent, setCep: ISetInput) {
  let aux = event.target.value.replace(/\D/g, '')

  if (aux.length > 8) return

  aux = aux.replace(/(\d{5})(\d+)/, '$1-$2')

  setCep(aux)
}
