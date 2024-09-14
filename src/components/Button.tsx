import { ComponentProps } from 'react'
import {
  Button as GlueStackButton,
  ButtonText as GlueStackButtonText,
  Spinner,
} from '@gluestack-ui/themed'
import { Else, If, Then } from 'react-if'

interface ButtonTextProps extends ComponentProps<typeof GlueStackButtonText> {}

interface ButtonProps extends ComponentProps<typeof GlueStackButton> {
  children: string
  ButtonTextStyle?: ButtonTextProps
  isPending?: boolean
}

export const Button = ({
  isDisabled,
  children,
  ButtonTextStyle,
  isPending,
  ...props
}: ButtonProps) => {
  return (
    <GlueStackButton isDisabled={isDisabled} {...props}>
      <If condition={isPending}>
        <Then>
          <Spinner color="$white" />
        </Then>
        <Else>
          <GlueStackButtonText {...ButtonTextStyle}>
            {children}
          </GlueStackButtonText>
        </Else>
      </If>
    </GlueStackButton>
  )
}
