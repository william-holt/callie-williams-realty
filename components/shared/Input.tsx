import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  name: string
  label: string
  mode?: 'light' | 'dark'
}

export const Input = ({
  className,
  name,
  label,
  mode,
  ...rest
}: InputProps) => {
  const isRequired = rest.required ? '*' : ''

  return (
    <div className={twMerge(`input-wrapper`, className)}>
      <label htmlFor={name} className={twMerge(`label-text`, mode)}>
        {label} {isRequired}
      </label>
      <input
        name={name}
        id={name}
        className={twMerge(`chat text-input`, mode)}
        {...rest}
      />
      {rest.title && (
        <span className={twMerge(`whisper helper-text`, mode)}>
          {rest.title}
        </span>
      )}
    </div>
  )
}
