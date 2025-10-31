import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6';

const START_HOUR = 9;   // 09:00
const END_HOUR = 20;    // 20:00
const SLOT_HEIGHT = 64; // px per hour row

const days = [
  { label: 'Mon 12' },
  { label: 'Tue 13' },
  { label: 'Wed 14' },
  { label: 'Thu 15' },
  { label: 'Fri 16' },
  { label: 'Sat 17' },
  { label: 'Sun 18' },
];

// Dummy events to showcase the layout similar to the shared screenshot
const events = [
  { day: 0, start: '09:00', end: '11:00', title: 'Shooting Stars', color: 'border-green-300 bg-green-50' },
  { day: 1, start: '11:00', end: '11:30', title: 'The Amazing Hubble', color: 'border-orange-300 bg-orange-50' },
  { day: 1, start: '13:00', end: '14:30', title: 'Choosing A Quality\nCookware Set', color: 'border-violet-300 bg-violet-50' },
  { day: 2, start: '13:00', end: '14:00', title: 'The Amazing Hubble', color: 'border-sky-300 bg-sky-50' },
  { day: 3, start: '11:00', end: '13:00', title: 'Choosing A Quality\nCookware Set', color: 'border-orange-300 bg-orange-50' },
  { day: 3, start: '15:00', end: '17:00', title: 'Astronomy Binoculars\nA Great Alternative', color: 'border-rose-300 bg-rose-50' },
  { day: 4, start: '11:30', end: '13:30', title: 'Astronomy Binoculars\nA Great Alternative', color: 'border-amber-300 bg-amber-50' },
  { day: 6, start: '11:30', end: '14:30', title: "The Universe Through A Child's\nEyes", color: 'border-orange-300 bg-orange-50' },
  { day: 6, start: '16:00', end: '18:00', title: 'Choosing A Quality Cookware\nSet', color: 'border-teal-300 bg-teal-50' },
  { day: 0, start: '17:00', end: '19:30', title: 'The Amazing Hubble', color: 'border-sky-200 bg-sky-50' },
];

function parseTimeToMinutes(time) {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

function getTopOffsetPx(time) {
  const minutesFromStart = parseTimeToMinutes(time) - START_HOUR * 60;
  const hoursFromStart = minutesFromStart / 60;
  return hoursFromStart * SLOT_HEIGHT;
}

const Page = () => {
  const hours = Array.from({ length: END_HOUR - START_HOUR + 1 }, (_, i) => START_HOUR + i);

  return (
    <div className="flex flex-col min-h-screen w-full p-2 md:p-4 gap-4 bg-gray-50">
      <div className="p-4 flex items-center h-auto md:h-16 w-full md:w-[80%] justify-between bg-white rounded-lg flex-wrap gap-4">
        <span className="text-sm md:text-md font-medium px-4 py-3 border border-gray-300 rounded-full">Today</span>
        <div className="flex items-center gap-2">
          <span className="text-md font-medium w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full cursor-pointer">
            <FaAngleLeft className="text-sm" />
          </span>
          <h3 className="text-xs">May 21 – 26, 2045</h3>
          <span className="text-md font-medium w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full cursor-pointer">
            <FaAngleRight className="text-sm text-gray-600" />
          </span>
        </div>
        <div className="w-full md:w-[20%] h-12 rounded-full overflow-hidden flex gap-1 items-center justify-center bg-gray-100 p-1">
          <span className='text-xs px-3 py-2 h-full font-medium w-full flex items-center justify-center text-gray-800/60 hover:text-gray-600 rounded-full cursor-pointer'>Year</span>
          <span className='text-xs px-3 py-2 h-full font-medium w-full flex items-center justify-center text-gray-800/60 hover:text-gray-600 rounded-full cursor-pointer bg-white text-gray-800'>Week</span>
          <span className='text-xs px-3 py-2 h-full font-medium w-full flex items-center justify-center text-gray-800/60 hover:text-gray-600 rounded-full cursor-pointer'>Month</span>
          <span className='text-xs px-3 py-2 h-full font-medium w-full flex items-center justify-center text-gray-800/60 hover:text-gray-600 rounded-full cursor-pointer'>Day</span>
        </div>
      </div>

      <div className='w-[100vw] bg-white rounded-lg p-0 max-h-[75vh] overflow-auto'>
        <div className="grid min-w-[900px] md:min-w-[1120px]" style={{ gridTemplateColumns: `60px repeat(${days.length}, 1fr)` }}>
          <div className="h-12 border-b border-gray-100 sticky top-0 z-20 bg-white" />
          {days.map((d) => (
            <div
              key={d.label}
              className="h-12 border-b border-gray-100 px-2 md:px-4 flex items-center justify-center text-[10px] md:text-xs text-gray-600 sticky top-0 z-20 bg-white"
            >
              {d.label}
            </div>
          ))}
        </div>

        <div className="relative">
          <div
            className="grid min-w-[900px] md:min-w-[1120px]"
            style={{ gridTemplateColumns: `60px repeat(${days.length}, 1fr)` }}
          >
            <div className="relative sticky left-0 z-10 bg-white border-r border-gray-100">
              {hours.map((h) => (
                <div key={h} className="h-16 flex items-start justify-end pr-2 md:pr-3 text-[10px] text-gray-400">
                  <span className="-translate-y-2">{String(h).padStart(2, '0')}:00</span>
                </div>
              ))}
            </div>

            {days.map((_, dayIndex) => (
              <div key={dayIndex} className="relative border-l border-gray-100">
                {hours.map((h) => (
                  <div key={h} className="h-16 border-b border-gray-100" />
                ))}

                <div className="absolute inset-0 px-1 md:px-3">
                  {events.filter(e => e.day === dayIndex).map((e, i) => {
                    const top = getTopOffsetPx(e.start);
                    const bottom = getTopOffsetPx(e.end);
                    const height = Math.max(28, bottom - top - 4);
                    return (
                      <div
                        key={i}
                        className={`absolute left-0 right-0 rounded-md border text-[10px] p-1 md:p-2 shadow-sm ${e.color}`}
                        style={{ top: top + 2, height }}
                      >
                        <div className="hidden md:flex items-center gap-2 text-gray-500 mb-1">
                          <span className="px-1 py-[2px] rounded bg-white/70 border border-gray-200">{e.start}</span>
                          <span className="px-1 py-[2px] rounded bg-white/70 border border-gray-200">{e.end}</span>
                        </div>
                        <div className="text-[10px] md:text-[11px] leading-tight md:leading-4 text-gray-700 whitespace-pre-line">
                          {e.title}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;