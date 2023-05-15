interface Props {
    type:React.HTMLInputTypeAttribute;
    label:string;
    placeholder:string;
    value:any;
    isDisabled:boolean;
    onChangedHandler: (e:any) => void;
}

const InputField:React.FC<Props> = ({ type, label, placeholder, value, isDisabled, onChangedHandler }) => {
    return (
        <div className='mb-2'>
            <label className='flex text-sm mb-2'>{label}</label>
            <input className='w-full px-3 py-2 text-sm 
                                border border-gray-400 
                                rounded
                            focus:outline-blue-500
                            disabled:bg-gray-100' 
                    type={type} 
                    placeholder={placeholder}
                    value={value}
                    disabled={isDisabled}
                    onChange={(e) => onChangedHandler(e)} />
        </div>
    )
}

export default InputField