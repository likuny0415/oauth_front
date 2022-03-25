interface Props {
  timeUnit: number;
  unitType: string;
}

export default function CountDown({ timeUnit, unitType }: Props) {
  return (
    <div className="flex items-center justify-center flex-col mr-1 rounded-box">
      <span className="font-mono font-bold text-sm">{timeUnit}</span>
      <span>{unitType}</span>
    </div>
  );
}
