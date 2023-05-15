type Props = {
    type:'submit' | 'reset' | 'button' | undefined;
    text:string;
    isDisabled:boolean;
}

const Button = (props:Props) => {
    const { type, text, isDisabled } = props;
    return (
        <button type={type}
                className='w-full py-2 text-sm text-white
                            rounded bg-blue-600
                            hover:bg-blue-700
                            disabled:bg-blue-500'
                disabled={isDisabled}>
                {text}
        </button>
    )
}

export default Button