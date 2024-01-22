'use client'
 
import { useFormStatus } from 'react-dom'
import Button from './Button'
 
export function SubmitButton() {
  const { pending } = useFormStatus()
 
  return (
    <Button variant='main' type="submit" aria-disabled={pending}>
      Submit
    </Button>
  )
}