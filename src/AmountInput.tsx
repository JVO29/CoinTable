import Input, {InputProps} from "./Input.tsx";

export default function AmountInput(props:InputProps){
    return(
        <div className={"flex items-center bg-blue-950 border border-white/10 rounded-lg"}>
            <Input
                className={"border-0 w-24 pl-4 bg-transparent text-2xl"}
                placeholder={"Amount"}
                value={props.value}
                onChange={props.onChange}/>
            <span className={"text-white/70 px-4"}>USD</span>
        </div>

    );
}
