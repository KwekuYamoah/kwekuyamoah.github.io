import Frame from "@/assets/device-frame.svg";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
    description: string;
    link: string;
}

const ResLap = ({description, link}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
 
    <div className="relative mb-20">
        <img src={Frame} className=" w-full h-full"/>
        {
            isAboveMediumScreens ?(
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <p className="text-white text-center text-sm w-44 md:w-2/3 leading-relaxed ">{description}</p>
                    <a className="px-7 py-4 border rounded-full text-white text-xs hover:cursor-pointer hover:bg-white hover:text-black" href={link} target="_blank">Read Paper</a>
                </div>

            )
            :
            (
                <div className="absolute inset-0 flex items-center justify-center">
                    <a className="px-7 py-4 border rounded-full text-white text-xs hover:cursor-pointer hover:bg-white hover:text-black" href={link} target="_blank">Read Paper</a>
                </div>
            )
            /* Note: this card sits on top of the device-frame.svg photographic
               mockup (dark bezel), which is intentionally exempt from theming
               (see plan), so its text/button stay literal white/black. */
        }
        
    </div>


  )
}

export default ResLap