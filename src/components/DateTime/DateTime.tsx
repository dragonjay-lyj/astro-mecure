import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';
export interface DateTimeProps {
  date: Date
}

export default function DateTime({
  date
}: DateTimeProps) {
  const dateString = format(date, 'PPP', {
    locale: enGB
  })
  return (
    <>{dateString}</>
  );
}
