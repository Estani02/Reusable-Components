/* eslint-disable react/prop-types */

import { useState } from "react";
import CartIcon from "../../assets/svg/CartIcon"

export const Button = ({ text, variant, hover_focus = false, disableShadow, disable, startIcon = false, endIcon = false, size = 'md', color = 'default' }) => {

  const [hoverFocus, setHoverFocus] = useState(false);

  const handleHoverFocus = () => {
    setHoverFocus(!hoverFocus);
  };

  if (variant === 'outline') return (
    <button
      className={`
        ${hover_focus ? 'bg-[#2962FF1A]' : 'hover:bg-[#2962FF1A] transition-colors duration-300'} 
        ${disable && 'disabled:bg-[#E0E0E0] disabled:text-[#9E9E9E]'}
        ${size === 'sm' ? 'px-3 py-[6px] text-sm' : size === 'lg' ? 'py-[11px] px-[22px] text-lg' : 'px-[16px] py-[8px]'}
        rounded-md font-medium w-fit text-[#3D5AFE] border-[#3D5AFE] border`
      }
      disabled={disable ? true : false}
    >
      {text || 'Default'}
    </button>
  )
  if (variant === 'text') return (
    <button
      className={`
        ${hover_focus ? 'bg-[#2962FF1A]' : 'hover:bg-[#2962FF1A] transition-colors duration-300'} 
        ${disable && 'disabled:text-[#9E9E9E] disabled:hover:bg-transparent'} 
        ${size === 'sm' ? 'px-3 py-[6px] text-sm' : size === 'lg' ? 'py-[11px] px-[22px] text-lg' : 'px-[16px] py-[8px]'}
        rounded-md font-medium w-fit text-[#3D5AFE]`
      }
      disabled={disable ? true : false}
    >
      {text || 'Default'}
    </button>
  )

  if (startIcon || endIcon) return (
    <button
      className={`
        ${hover_focus ? 'bg-[#3248c7]' : 'hover:bg-[#3248c7] transition-colors duration-300'} 
        ${disable && 'disabled:bg-[#E0E0E0] disabled:text-[#9E9E9E]'} 
        ${size === 'sm' ? 'px-3 py-[6px] text-sm' : size === 'lg' ? 'py-[11px] px-[22px] text-lg' : 'px-[16px] py-[8px]'}
        rounded-md font-medium w-fit text-white bg-[#3D5AFE] flex gap-1 justify-center items-center`}
      disabled={disable ? true : false}
      onMouseEnter={handleHoverFocus}
      onMouseLeave={handleHoverFocus}
    >
      {startIcon && <CartIcon className={`h-[16px] mr-[8px] ${hoverFocus && 'scale-[1.2]'} transition-all duration-300`} />}
      {text || 'Default'}
      {endIcon && <CartIcon className={`h-[16px] ml-[8px] ${hoverFocus && 'scale-[1.2]'} transition-all duration-300`} />}
    </button>
  )

  return (
    <button
      className={`
        ${hover_focus && color === 'primary' ? 'bg-[#0039CB]' : hover_focus && color === 'secondary' ? 'bg-[#1C313A]' : hover_focus && color === 'danger' ? 'bg-[#9A0007]' : hover_focus && color === 'default' ? 'bg-[#AEAEAE]' : ''}  
        ${!disableShadow && 'shadow-button'} 
        ${disable && 'disabled:bg-[#E0E0E0] disabled:text-[#9E9E9E]'} 
        ${size === 'sm' ? 'px-3 py-[6px] text-sm' : size === 'lg' ? 'py-[11px] px-[22px] text-lg' : 'px-[16px] py-[8px]'}
        ${color === 'primary' ? 'bg-[#2962FF] hover:bg-[#0039CB] text-white' : color === 'secondary' ? 'bg-[#455A64] hover:bg-[#1C313A] text-white' : color === 'danger' ? 'bg-[#D32F2F] hover:bg-[#9A0007] text-white' : 'bg-[#E0E0E0] hover:bg-[#AEAEAE] text-[#3F3F3F]'} 
        rounded-md font-medium w-fit transition-colors duration-300`
      }
      disabled={disable ? true : false}
    >
      {text || 'Default'}
    </button>
  )
}
