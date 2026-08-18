import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
    date: string;
    year: string;
    location: string;
}

const ResTimeLine = ({date, year, location}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className={`my-10 flex gap-y-12 ${isAboveMediumScreens ? 'gap-x-14' : 'flex-col'}`}>
        <div>
            <div className="uppercase pb-6 text-ink-muted border-b border-ink-muted text-xs">Date</div>
            <p className="mt-6 text-ink-soft">{date}</p>
        </div>
        <div>
            <div className="uppercase pb-6 text-ink-muted border-b border-ink-muted text-xs">Year</div>
            <p className="mt-6 text-ink-soft">{year}</p>
        </div>
        <div>
            <div className="uppercase pb-6 text-ink-muted border-b border-ink-muted text-xs">Location</div>
            <p className="mt-6 text-ink-soft">{location}</p>
        </div>
    </div>
  )
}

export default ResTimeLine