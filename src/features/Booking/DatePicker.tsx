// import {
//   Button,
//   Calendar,
//   CalendarCell,
//   CalendarGrid,
//   CalendarGridBody,
//   CalendarGridHeader,
//   CalendarHeaderCell,
//   DateInput,
//   DatePicker,
//   DateRangePicker,
//   DateSegment,
//   Dialog,
//   Group,
//   Heading,
//   Label,
//   Popover,
//   RangeCalendar,
// } from 'react-aria-components';
// import type { ButtonProps, PopoverProps } from 'react-aria-components';
// import { useState } from 'react';
// import './datepicker.css';

// /*
// <DatePicker className="group flex flex-col gap-1 w-[120px]">
//       <Group className="flex rounded-lg bg-white/90 focus-within:bg-white group-open:bg-white transition text-gray-700 focus-visible:ring-2 ring-black">
//         <DateInput className="flex flex-1">
//           {(segment) => (
//             <DateSegment
//               segment={segment}
//               className="px-0.5 tabular-nums outline-none rounded-sm focus:bg-sky-500 focus:text-white caret-transparent placeholder-shown:italic"
//             />
//           )}
//         </DateInput>
//         <Button className="outline-none px-3 flex items-center text-gray-700 transition border-0 border-solid border-l border-l-sky-500 bg-transparent rounded-r-lg pressed:bg-sky-500 focus-visible:ring-2 ring-black">
//         // ICON HERE
//           </Button>
//           </Group>
//           <MyPopover>
//             <Dialog className="p-6 text-gray-600">
//               <Calendar>
//                 <header className="flex items-center gap-1 pb-4 px-1 font-serif w-full">
//                   <Heading className="flex-1 font-semibold text-2xl ml-2" />
//                   <RoundButton slot="previous">
//                   </RoundButton>
//                   <RoundButton slot="next">
//                   </RoundButton>
//                 </header>
//                 <CalendarGrid className="border-spacing-1 border-separate">
//                   <CalendarGridHeader>
//                     {(day) => (
//                       <CalendarHeaderCell className="text-xs text-gray-500 font-semibold">
//                         {day}
//                       </CalendarHeaderCell>
//                     )}
//                   </CalendarGridHeader>
//                   <CalendarGridBody>
//                     {(date) => (
//                       <CalendarCell
//                         date={date}
//                         className="w-9 h-9 outline-none cursor-default rounded-full flex items-center justify-center outside-month:text-gray-300 hover:bg-gray-100 pressed:bg-gray-200 selected:bg-sky-500 selected:text-white focus-visible:ring ring-sky-500/70 ring-offset-2"
//                       />
//                     )}
//                   </CalendarGridBody>
//                 </CalendarGrid>
//               </Calendar>
//             </Dialog>
//           </MyPopover>
//         </DatePicker>
// */

// export default function DatePickerExample() {
//   const [activeButton, setActiveButton] = useState(false);

//   return (
//     <DateRangePicker className="group flex flex-col gap-1 w-[120px]">
//       {/* <Label>Trip dates</Label> */}
//       <Group className="flex rounded-lg bg-white/90 focus-within:bg-white group-open:bg-white transition text-gray-700 focus-visible:ring-2 ring-black w-[120px]">
//         <DateInput slot="start" className="flex flex-1">
//           {(segment) => (
//             <DateSegment
//               segment={segment}
//               className=" text-sm tabular-nums outline-none rounded-sm focus:bg-sky-500 focus:text-white caret-transparent placeholder-shown:italic"
//             />
//           )}
//         </DateInput>
//         <span aria-hidden="true" className="text-xs">
//           –
//         </span>
//         <DateInput slot="end" className="flex flex-1">
//           {(segment) => (
//             <DateSegment
//               segment={segment}
//               className="text-sm tabular-nums outline-none rounded-sm focus:bg-sky-500 focus:text-white caret-transparent placeholder-shown:italic"
//             />
//           )}
//         </DateInput>
//         <Button className="text-xs outline-none px-3 flex items-center text-gray-700 transition border-0 border-solid border-l border-l-sky-500 bg-transparent rounded-r-lg pressed:bg-sky-500 focus-visible:ring-2 ring-black">
//           ▼
//         </Button>
//       </Group>
//       <MyPopover>
//         <Dialog className="p-6 text-gray-600">
//           <RangeCalendar>
//             <header className="flex items-center gap-1 pb-4 px-1 font-serif w-full">
//               <Heading className="flex-1 font-semibold text-2xl ml-2" />
//               <RoundButton slot="previous"></RoundButton>
//               <RoundButton slot="next"></RoundButton>
//             </header>
//             <CalendarGrid className="border-spacing-1 border-separate">
//               <CalendarGridHeader>
//                 {(day) => (
//                   <CalendarHeaderCell className="text-xs text-gray-500 font-semibold">
//                     {day}
//                   </CalendarHeaderCell>
//                 )}
//               </CalendarGridHeader>
//               <CalendarGridBody>
//                 {(date) => (
//                   <CalendarCell
//                     date={date}
//                     className="w-9 h-9 outline-none cursor-default rounded-full flex items-center justify-center outside-month:text-gray-300 hover:bg-gray-100 pressed:bg-gray-200 selected:bg-violet-700 selected:text-white focus-visible:ring ring-violet-600/70 ring-offset-2"
//                   />
//                 )}
//               </CalendarGridBody>
//             </CalendarGrid>
//           </RangeCalendar>
//         </Dialog>
//       </MyPopover>
//     </DateRangePicker>
//   );
// }

// function RoundButton(props: ButtonProps) {
//   return (
//     <Button
//       {...props}
//       className="w-9 h-9 outline-none cursor-default bg-transparent text-gray-600 border-0 rounded-full flex items-center justify-center hover:bg-gray-100 pressed:bg-gray-200 focus-visible:ring ring-sky-500/70 ring-offset-2"
//     />
//   );
// }

// function MyPopover(props: PopoverProps) {
//   return (
//     <Popover
//       {...props}
//       className={({ isEntering, isExiting }) => `
//         overflow-auto rounded-lg drop-shadow-lg ring-1 ring-black/10 bg-white
//         ${
//           isEntering
//             ? 'animate-in fade-in placement-bottom:slide-in-from-top-1 placement-top:slide-in-from-bottom-1 ease-out duration-200'
//             : ''
//         }
//         ${
//           isExiting
//             ? 'animate-out fade-out placement-bottom:slide-out-to-top-1 placement-top:slide-out-to-bottom-1 ease-in duration-150'
//             : ''
//         }
//       `}
//     />
//   );
// }
