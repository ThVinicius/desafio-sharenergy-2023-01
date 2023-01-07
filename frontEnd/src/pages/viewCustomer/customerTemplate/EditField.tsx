import { ChangeEventHandler, FC } from 'react'
import Input from '../../../components/input/Input'

interface IProps {
  edit: boolean
  type?: string
  focus?: boolean
  disabled?: boolean
  label: string
  value: string
  onChange?:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined
  dataCy?: string
}

const EditField: FC<IProps> = props => {
  return props.edit ? (
    <Input
      label={props.label}
      value={props.value}
      onChange={props.onChange}
      focus={props.focus}
      disabled={props.disabled}
      dataCy={props.dataCy}
    />
  ) : (
    <h6>{props.value}</h6>
  )
}

export default EditField
