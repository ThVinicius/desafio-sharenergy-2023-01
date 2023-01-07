import { Dispatch, FC, SetStateAction } from 'react'
import Button from '@mui/material/Button/Button'
import { ButtonsBox } from './customerTemplateStyle'

interface IProps {
  edit: boolean
  setEdit: Dispatch<SetStateAction<boolean>>
  setOpen: Dispatch<SetStateAction<boolean>>
  save: () => void
  cancel: () => void
}

const Buttons: FC<IProps> = ({ edit, setEdit, setOpen, save, cancel }) => {
  const handleCancel = () => {
    cancel()

    setEdit(false)
  }

  return (
    <ButtonsBox>
      {edit ? (
        <>
          <Button variant="contained" onClick={save} data-cy="btn-save">
            Salvar
          </Button>
          <Button onClick={handleCancel} variant="contained" color="error">
            Cancelar
          </Button>
        </>
      ) : (
        <>
          <Button
            variant="contained"
            onClick={() => setEdit(true)}
            data-cy="btn-edit"
          >
            Editar
          </Button>
          <Button
            onClick={() => setOpen(true)}
            variant="contained"
            color="error"
          >
            Deletar
          </Button>
        </>
      )}
    </ButtonsBox>
  )
}

export default Buttons
