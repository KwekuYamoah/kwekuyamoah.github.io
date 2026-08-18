type Props = {
    title: string;
}

const RHeadText = ({title}: Props) => {
  const highlightWords = ["NLP", "Deep Fake Speech", "ASV Systems", "Twi", "Speech Prosody", "Kpelle"];
  const parts = title.split(new RegExp(`(${highlightWords.join("|")})`));
  return (
    <>
      <h1 className={`font-satoshi text-3xl leading-snug text-white font-black md:text-6xl md:w-[408px] md:leading-snug`}>
        {parts.map((part, index) =>
          highlightWords.includes(part) ? (
            <span key={index} className="text-primary-500">
              {part}
            </span>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </h1>
    </>

  )
}

export default RHeadText