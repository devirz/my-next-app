'use client'
import Image from "next/image"
import Photo from "../../public/airpods.jpg"
import localFont from "next/font/local"
import { useState, Suspense } from "react"
import axios from "axios"

const newFont = localFont({ src: "../app/fonts/Kanit-Bold.ttf" })
interface IReqData {
  title: string
  artist: string
  plays: string
  likes: string
  size: string
  src: string
  date: string
}
export default function Card() {
  const [bannerIMG, setBannerIMG] = useState(Photo)
  const [inputValue, setInputValue] = useState('')
  const [inputDisable, setInputDisable] = useState(false)
  const [btnValue, setBtnValue] = useState('download')
  const [reqData, setReqData] = useState<IReqData | null>(null)
  const [showError, setShowError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setShowError(value.trim() === '');  // Show error if input is empty
  }

  async function handleSumbitBtn(){
    setInputValue('')
    setInputDisable(true)
    setBtnValue('please wait...')
    const data = await axios.post('http://localhost:3000/api',{
      url: inputValue
    })
    console.log(data.data);
    setReqData(data.data.result)
    setBannerIMG(data.data.result.photo)
    setBtnValue('download')
    setInputDisable(false)
  }

  return (
    <Suspense fallback={<p className="text-2xl text-white font-bold">Loading...</p>}>
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-[720px] mx-auto">
        <div className="relative flex flex-col text-gray-100 bg-zinc-700 shadow-md bg-clip-border rounded-xl w-96">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-100 bg-white bg-clip-border rounded-xl h-96">
            <Image
              src={bannerIMG}
              alt="card-image"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-center mb-2">
              <p className={`${newFont.className} block antialiased text-lg leading-relaxed text-gray-100`}>
                Enter Radio Javan URL
              </p>
            </div>

            <div className="flex">
              <span className="flex items-center px-3 text-sm text-gray-900 bg-zinc-800 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                <svg className="w-4 h-4 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </span>
              <input type="text" disabled={inputDisable} className="rounded-none rounded-e-lg bg-zinc-800 border text-gray-100 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" onChange={handleInputChange} placeholder="https://play.radiojavan.com/song..." />
            </div>
            {showError && 
              <p className="pt-3 text-red-400 text-sm">set url!</p>
            }
          </div>
          { reqData && 
            <div className={`font-bold text-center mb-4`}>
              <p>{reqData.title}</p>
              <p>Plays: {reqData.plays}</p>
              <p>Likes: {reqData.likes}</p>
              <p>Size: {reqData.size} MB</p>
              <p>Date: {reqData.date}</p>
              <a className="text-blue-500" href={reqData.src}>Download Music</a>
            </div>
          }
          <div className="p-6 pt-0">
            <button
              className={`align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none text-sm py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 \ active:opacity-[0.85] active:shadow-none block w-full bg-gray-500 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none disabled:cursor-not-allowed focus:scale-105 focus:shadow-none active:scale-100 ${inputValue.trim() ? "cursor-default bg-gray-500" : "cursor-not-allowed bg-gray-600 text-gray-300"}`}
              type="button"
              disabled={!inputValue.trim()}
              onClick={handleSumbitBtn}
              >
              {btnValue}
            </button>
          </div>
        </div>
      </div>
    </div>
    </Suspense>
  )
}