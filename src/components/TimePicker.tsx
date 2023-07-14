import ClockIcon from '@/assets/clock.svg'
import CalendarIcon from '@/assets/calendar.svg'

export default function TimePicker() {
    return (
        <div className="mb-10 w-full bg-foreground">
            <div className="mx-auto flex w-[90%] translate-y-[40%] justify-between rounded-t-md bg-background px-4 py-4 text-[12px] font-bold shadow-md">
                <div className="flex gap-2">
                    <img src={CalendarIcon} alt="Calendar icon" />
                    <span>21 May 2021</span>
                </div>
                <div className="flex gap-2">
                    <img src={ClockIcon} alt="clock icon" />
                    <span>10:30pm - 12:30pm</span>
                </div>
            </div>
        </div>
    )
}
