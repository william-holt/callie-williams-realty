import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  name: string
  label: string
  mode?: 'light' | 'dark'
}

export const DarkInput = ({
                        className,
                        name,
                        label,
                        mode,
                        ...rest
                      }: InputProps) => {
  const isRequired = rest.required ? '*' : ''

  return (
    <div className={twMerge(`input-wrapper`, className)}>
      <label htmlFor={name} className={twMerge(`label-text`, 'dark')}>
        {label} {isRequired}
      </label>
      <input
        name={name}
        id={name}
        className={twMerge(`chat text-input`, 'dark')}
        {...rest}
      />
      {rest.title && (
        <span className={twMerge(`whisper helper-text`, 'dark')}>
          {rest.title}
        </span>
      )}
    </div>
  )
}
