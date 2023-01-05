import { IEvent, ISetInput } from '../../types/inputType'

export default function phoneMaskOnChange(event: IEvent, setPhone: ISetInput) {
  let aux = event.target.value.replace(/\D/g, '')

  if (aux.length > 11) return

  aux = aux.replace(/(\d{1})(\d*)/, '($1$2').replace(/(\d{2})(\d+)/, '$1) $2')

  if (aux.length === 14) {
    aux = aux.replace(/(.{5}\d{1})(\d{4})(\d{4})/, '$1.$2-$3')
  } else {
    aux = aux.replace(/(.{5}\d{4})(\d+)/, '$1-$2')
  }

  setPhone(aux)
}
