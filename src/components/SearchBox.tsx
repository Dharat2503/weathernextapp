import { cn } from '@/utils/cn';
import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
type Props = {
    className?: string, // this is for somtimes we need classname or sometimes we don't that's why ?
    value: string
    onChange:React.ChangeEventHandler<HTMLInputElement> ;
    onSubmit:React.FormEventHandler<HTMLFormElement> ;

}

export default function SearchBox(props: Props) {
  return (
    <form onSubmit={props.onSubmit}
    //aa rite classname aapva thi override nai thay only aa j class ne changes thase  
    className={cn("flex relative items-center justify-center h-10",props.className)}> 
        
        <input type='text' onChange={props.onChange} value={props.value} placeholder='Search location' className="px-4 py-2 w-[220px] border border-gray-300 rounded-l-md focus:outline-none  focus:border-blue-600 h-full" />
        <button className="px-4 py-[9px] bg-blue-500 text-white rounded-r-md focus:outline-none hover:bg-blue-600  h-full">
        <IoSearchSharp />
        </button>
        </form>
  )
}