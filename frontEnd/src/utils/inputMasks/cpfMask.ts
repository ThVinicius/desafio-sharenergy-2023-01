import { IEvent, ISetInput } from '../../types/inputType'

export default function cpfMaskOnChange(event: IEvent, setCpf: ISetInput) {
  let aux = event.target.value.replace(/\D/g, '')

  if (aux.length > 11) return

  aux = aux
    .replace(/(\d{3})(\d+)/, '$1.$2')
    .replace(/(.{7})(\d+)/, '$1.$2')
    .replace(/(.{11})(\d+)/, '$1-$2')

  setCpf(aux)
}
