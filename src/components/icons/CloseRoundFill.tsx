
export default function CloseRoundFill({closeColor='#DD524C',bgColor='#E2E4F3'}:{closeColor?:string,bgColor?:string}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><rect width="20" height="20" fill={bgColor} rx="10"/><path fill={closeColor} fillRule="evenodd" d="M17.5 10a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0ZM5.96 14.04a1 1 0 0 1 0-1.414L8.586 10 5.96 7.374A1 1 0 1 1 7.374 5.96L10 8.586l2.626-2.626a1 1 0 1 1 1.414 1.414L11.414 10l2.626 2.626a1 1 0 1 1-1.414 1.414L10 11.414 7.374 14.04a1 1 0 0 1-1.414 0Z" clipRule="evenodd"/></svg>
  )
}
