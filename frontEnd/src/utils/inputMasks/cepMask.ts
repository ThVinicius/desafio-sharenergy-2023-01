import { IEvent, ISetInput, ISetInputObj } from '../../types/inputType'

export function cepMaskOnChange(event: IEvent, setCep: ISetInput) {
  let aux = event.target.value.replace(/\D/g, '')

  if (aux.length > 8) return

  aux = aux.replace(/(\d{5})(\d+)/, '$1-$2')

  setCep(aux)
}

export function cepMaskObjOnChange(event: IEvent, setCep: ISetInputObj) {
  let aux = event.target.value.replace(/\D/g, '')

  if (aux.length > 8) return

  aux = aux.replace(/(\d{5})(\d+)/, '$1-$2')

  setCep(prev => ({ ...prev, newValue: aux }))
}
