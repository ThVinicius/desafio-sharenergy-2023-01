import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Transition from '../modalTransition/Transition'
import useDeleteCustomer from '../../hooks/api/useDeleteCustomer'
import { ICustomer } from '../../types/Customers'

interface IProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  name: string
  id: string
  setCustomers?: React.Dispatch<React.SetStateAction<ICustomer[] | null>>
}

const DeleteModal: React.FC<IProps> = props => {
  const { deleteCustomer, loadingDelCustomer } = useDeleteCustomer(
    props.setOpen
  )

  const handleClose = () => {
    if (loadingDelCustomer) return

    props.setOpen(false)
  }

  return (
    <Dialog
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogTitle>{'Ação para deletar um cliente'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Essa ação ira deletar o cliente {props.name}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={() => deleteCustomer(props.id, props.setCustomers)}>
          Deletar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteModal
