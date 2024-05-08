// "use client"
// import Container from "@/components/Container";
// import Navbar from "@/components/Navbar";
// import WeatherIcon from "@/components/WeatherIcon";
// import { convertKelvinToCelsius } from "@/utils/convertKelvinToCelsius";
// import axios from "axios";
// import { format,parseISO } from "date-fns";

// import { useQuery } from "react-query";


// //https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=87d3217a0eb352f78de87d885f843408

// interface Coord {
//   lon: number;
//   lat: number;
// }



// interface Main {
//   temp: number;
//   feels_like: number;
//   temp_min: number;
//   temp_max: number;
//   pressure: number;
//   humidity: number;
// }

// interface Wind {
//   speed: number;
//   deg: number;
// }

// interface Clouds {
//   all: number;
// }

// interface Sys {
//   type: number;
//   id: number;
//   country: string;
//   sunrise: number;
//   sunset: number;
// }

// interface WeatherData {
//   coord: Coord;
//   weather: Weather[];
//   base: string;
//   main: Main;
//   visibility: number;
//   wind: Wind;
//   clouds: Clouds;
//   dt: number;
//   sys: Sys;
//   timezone: number;
//   id: number;
//   name: string;
//   cod: number;
// }


// interface Weather {
//   id: number;
//   main: string;
//   description: string;
//   icon: string;
// }

// interface ForecastHour {
//   dt: number;
//   temp: number;
//   weather: Weather[];
// }

// interface WeatherData {
//   city: {
//     name: string;
//   };
//   list: ForecastHour[];
// }


// export default function Home() {

//   //using fetch
//   // const {isLoading,error,data}= useQuery("repoData",async()=>

//   //   fetch("https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=87d3217a0eb352f78de87d885f843408"
//   //   ).then((res)=>res.json())
//   // );

//   //using axios

//   const { isLoading, error, data} = useQuery<WeatherData>('repoData', async () => {
//     const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=ahmedabad&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}`);
//     return data;
//   });

//   const firstData = data?.weather[0];
  
// console.log("data",data)

//   if (isLoading) return (
//     <div className="flex items-center min-h-screen justify-center">
//       <p className="animate-bounce">Loading..</p>
//     </div>
//   )

//   return (
//     <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">

//       <Navbar />
//       <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9  w-full  pb-10 pt-4 ">

//         <section className="space-y-4">
//           <div className="space-y-2">
//             <h2 className="flex gap-1 text-2xl  items-end ">
//             <p>{format(new Date(data?.dt * 1000), 'EEEE')}</p>
//             <p className="text-lg">{format(new Date(data?.dt * 1000), "dd.MM.yyyy")}</p>
//             </h2>
//             <Container className="gap-10 px-6 items-center">
//               <div className="flex flex-col px-4">
//                 <span className="text-5xl">
//                 {convertKelvinToCelsius(data?.main.temp ?? 305.14)}°
//                 </span>
//                 <p className="text-xs spce-x-1 whitespace-nowrap">
//                   <span>Feels Like</span>
//                   <span>
//                   {convertKelvinToCelsius(data?.main.feels_like ?? 0)}°
//                   </span>
//                 </p>
//                 <p className="text-xs spce-x-2">
//                   <span>
//                   {convertKelvinToCelsius(data?.main.temp_min ?? 0)}°↓{" "}
//                   </span>
//                   <span>
//                     {" "}
//                   {convertKelvinToCelsius(data?.main.temp_max ?? 0)}°↑
//                   </span>
//                 </p>
//               </div>

//               <div className="flex gap-10 sm:gap-16 overflow-x-auto w-full justify-between pr-3">
//                 {data?.weather.map((d, index) => (
//                   <div key={index} className="flex flex-col justify-between gap-2 items-center text-xs font-semibold">
//                    <p className="whitespace-nowrap">{format(new Date(data.dt * 1000), "h:mm a")}</p>
//                    <WeatherIcon iconName={data.weather[0].icon}/>
//                    <p>
//                    {convertKelvinToCelsius(data?.main.temp?? 0)}°
//                    </p>
//                   </div>
//                 ))}
//               </div>


     
//             </Container>
//           </div>
//         </section>
//       </main>
//     </div>
//   )

// }

//=========


"use client"
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import WeatherIcon from "@/components/WeatherIcon";
import { convertKelvinToCelsius } from "@/utils/convertKelvinToCelsius";
import axios from "axios";
import { format,parseISO } from "date-fns";

import { useQuery } from "react-query";
export default function Home() {
  // Fetch weather data using react-query
  const { isLoading, error, data } = useQuery('weatherData', async () => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=ahmedabad&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}`);
    return data;
  });

  // Render loading state while fetching data
  if (isLoading) return (
    <div className="flex items-center min-h-screen justify-center">
      <p className="animate-bounce">Loading..</p>
    </div>
  );

  // Render error message if data fetching fails
  if (error) return (
    <div className="flex items-center min-h-screen justify-center">
      <p className="text-red-500">Error: {error.message}</p>
    </div>
  );

  // Render weather data
  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar />
      <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 pt-4 ">
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="flex gap-1 text-2xl items-end ">
              <p>{format(new Date(data.list[0].dt * 1000), 'EEEE')}</p>
              <p className="text-lg">{format(new Date(data.list[0].dt * 1000), "dd.MM.yyyy")}</p>
            </h2>
            <Container className="gap-10 px-6 items-center">
              <div className="flex flex-col px-4">
                <span className="text-5xl">
                  {data.list[0].main.temp}°
                </span>
                <p className="text-xs space-x-1 whitespace-nowrap">
                  <span>Feels Like</span>
                  <span>
                    {data.list[0].main.feels_like}°
                  </span>
                </p>
                <p className="text-xs space-x-2">
                  <span>
                    {data.list[0].main.temp_min}°↓{" "}
                  </span>
                  <span>
                    {data.list[0].main.temp_max}°↑
                  </span>
                </p>
              </div>
              <div className="flex gap-10 sm:gap-16 overflow-x-auto w-full justify-between pr-3">
                {data.list.map((hour, index) => (
                  <div key={index} className="flex flex-col justify-between gap-2 items-center text-xs font-semibold">
                    <p className="whitespace-nowrap">{format(new Date(hour.dt * 1000), "h:mm a")}</p>
                    <WeatherIcon iconName={hour.weather[0].icon} />
                    <p>{hour.main.temp}°</p>
                  </div>
                ))}
              </div>
            </Container>
          </div>
        </section>
      </main>
    </div>
  );
}