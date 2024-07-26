import { ButtonHTMLAttributes, FC } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  color: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'ink' | 'paper'
  size: 'sm' | 'md' | 'lg'
  variant: 'outlined' | 'solid' | 'ghost'
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  color,
  size,
  variant,
  ...rest
}) => {
  return (
    <div className={twMerge(`button-wrapper`, className)}>
      <button
        className={twMerge(`button-text`, size, color, variant)}
        {...rest}
      >
        <div className="button-container w-fit h-fit flex items-center justify-center">
          {children}
        </div>
      </button>
    </div>
  )
}
