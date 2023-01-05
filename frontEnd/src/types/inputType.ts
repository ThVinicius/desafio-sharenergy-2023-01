import { ChangeEvent, Dispatch, SetStateAction } from 'react'

export type IEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

export type ISetInput = Dispatch<SetStateAction<string>>
