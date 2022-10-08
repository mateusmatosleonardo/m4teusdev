import { Btn } from "./styles";
import { ButtonProps } from "./types";
import { IoSend } from 'react-icons/io5';


const Button = ({ style, title }: ButtonProps) => {
  return (
    <Btn style={{ ...style }}
      href="https://api.whatsapp.com/send?1=pt_BR&phone=5588981890344">
      {title}
      <IoSend />
    </Btn>
  )
}

export default Button;