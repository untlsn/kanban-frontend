import * as React from 'react';

type NativeButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

interface ButtonProps extends NativeButtonProps {

}

function Button(props: ButtonProps) {
  return (
    <button type={props.onClick ? 'button' : 'submit'} {...props} />
  );
}

export default Button;
