import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  name: string
  label: string
}

export const Input = ({ className, name, label, ...rest }: InputProps) => {
  const isRequired = rest.required ? '*' : ''

  return (
    <div className={twMerge(`input-wrapper`, className)}>
      <label htmlFor={name} className={twMerge(`label-text`)}>
        {label} {isRequired}
      </label>
      <input
        name={name}
        id={name}
        className={twMerge(`chat text-input`)}
        {...rest}
      />
      {rest.title && (
        <span className={twMerge(`whisper helper-text`)}>{rest.title}</span>
      )}
    </div>
  )
}
