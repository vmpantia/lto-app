interface Props {
    type:'submit' | 'reset' | 'button' | undefined;
    text:string;
    isDisabled:boolean;
}

const Button:React.FC<Props> = ({ type, text, isDisabled }) => {
    return (
        <button type={type}
                className='w-full py-2 text-sm text-white
                            rounded bg-blue-700
                            hover:bg-blue-800
                            disabled:bg-blue-500'
                disabled={isDisabled}>
                {text}
        </button>
    )
}

export default Button