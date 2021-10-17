import { useEffect, useState } from "react"
import { interval } from 'rxjs'
import './clock.scss'

function Clock() {

  const [date, setDate] = useState(new Date())
  const [dayOfWeek, setDayOfWeek] = useState(0)
  useEffect(() => {
    const subscription = interval(1000).subscribe(() => {
      setDate(new Date())
      setDayOfWeek(date.getDay())

    })
    return () => {
      subscription.unsubscribe()
    }
  }, [date])


  function getDayOfWeekStr(dayOfWeek: number): string {
    return ["日", "月", "火", "水", "木", "金", "土"][dayOfWeek]
  }


  return (
    <div className='clock'>
      <p className='time'>{`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`}</p>
      <p className='day'>{`${date.getFullYear()}年 ${date.getMonth() + 1}月 ${date.getDate()}日 (${getDayOfWeekStr(dayOfWeek)})`}</p>
    </div>
  );
}

export default Clock;