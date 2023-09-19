import { useState, React } from 'react'

const ShopTimingsForm = () => {
  const initialTiming = '00:00'

  const [timings, setTimings] = useState({
    openingTime: initialTiming,
    closingTime: initialTiming
  })

  const [closedDays, setClosedDays] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false
  })

  const handleTimingChange = (field, value) => {
    setTimings({
      ...timings,
      [field]: value
    })
  }

  const handleDayClosedChange = (day) => {
    setClosedDays({
      ...closedDays,
      [day]: !closedDays[day]
    })
  }

  return (
    <div className="mb-24 flex flex-col items-center justify-center">
      <h1 className="px-4 py-5 text-2xl font-semibold">Your Business Days & Hours</h1>
      {Object.keys(closedDays).map((day) => (
        <div className="flex gap-5" key={day}>
          <p className="mt-1 flex w-[130px] px-4 py-2">{day}:</p>
          <select
            className="mt-1 w-48 rounded-md border px-3 py-2"
            value={timings.openingTime}
            onChange={(e) => handleTimingChange('openingTime', e.target.value)}
            disabled={closedDays[day]}>
            {/* Options for opening time */}

            <option value="00:00">12:00 AM</option>
            <option value="01:00">1:00 AM</option>
            <option value="02:00">2:00 AM</option>
            <option value="03:00">3:00 AM</option>
            <option value="04:00">4:00 AM</option>
            <option value="05:00">5:00 AM</option>
            <option value="06:00">6:00 AM</option>
            <option value="07:00">7:00 AM</option>
            <option value="08:00">8:00 AM</option>
            <option value="09:00">9:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="13:00">1:00 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="15:00">3:00 PM</option>
            <option value="16:00">4:00 PM</option>
            <option value="17:00">5:00 PM</option>
            <option value="18:00">6:00 PM</option>
            <option value="19:00">7:00 PM</option>
            <option value="20:00">8:00 PM</option>
            <option value="21:00">9:00 PM</option>
            <option value="22:00">10:00 PM</option>
            <option value="23:00">11:00 PM</option>
          </select>
          <select
            className="mt-1 w-48 rounded-md border px-3 py-2"
            value={timings.closingTime}
            onChange={(e) => handleTimingChange('closingTime', e.target.value)}
            disabled={closedDays[day]}>
            {/* Options for closing time */}
            <option value="00:00">12:00 AM</option>
            <option value="01:00">1:00 AM</option>
            <option value="02:00">2:00 AM</option>
            <option value="03:00">3:00 AM</option>
            <option value="04:00">4:00 AM</option>
            <option value="05:00">5:00 AM</option>
            <option value="06:00">6:00 AM</option>
            <option value="07:00">7:00 AM</option>
            <option value="08:00">8:00 AM</option>
            <option value="09:00">9:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="13:00">1:00 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="15:00">3:00 PM</option>
            <option value="16:00">4:00 PM</option>
            <option value="17:00">5:00 PM</option>
            <option value="18:00">6:00 PM</option>
            <option value="19:00">7:00 PM</option>
            <option value="20:00">8:00 PM</option>
            <option value="21:00">9:00 PM</option>
            <option value="22:00">10:00 PM</option>
            <option value="23:00">11:00 PM</option>
          </select>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 rounded-md border"
              checked={closedDays[day]}
              onChange={() => handleDayClosedChange(day)}
            />
            <label htmlFor={`checkboxOption-${day}`} className="ml-2">
              Closed
            </label>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ShopTimingsForm
