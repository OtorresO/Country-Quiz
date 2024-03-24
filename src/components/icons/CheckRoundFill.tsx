export default function CheckRoundFill({checkColor='#3E9FFF',bgColor='#E2E4F3'}:{checkColor?:string,bgColor?:string}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><rect width="20" height="20" fill={bgColor} rx="10"/><path fill={checkColor} fillRule="evenodd" d="M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm4.102-9.36a1 1 0 0 0-1.537-1.28L9.8 10.177c-.346.416-.541.647-.697.788l-.006.006-.006-.005c-.168-.127-.383-.339-.766-.722l-.951-.951a1 1 0 0 0-1.414 1.414l.95.951.042.041c.326.327.64.641.933.862.327.248.756.48 1.305.456.55-.025.955-.296 1.259-.572.271-.247.555-.588.851-.943l.037-.044 2.765-3.318Z" clipRule="evenodd"/></svg>
  )
}
